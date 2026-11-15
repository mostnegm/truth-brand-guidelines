import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import { execFileSync } from 'child_process'
import type { IncomingMessage, ServerResponse } from 'http'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Dev-only endpoints for the article editor: saving an article back to
// src/app/blog-articles.json and uploading images into public/blog-images/.
function blogEditor(): Plugin {
  const dataFile = path.resolve(__dirname, 'src/app/blog-articles.json')
  const imageDir = path.resolve(__dirname, 'public/blog-images')

  const readBody = (req: IncomingMessage) =>
    new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = []
      req.on('data', (c) => chunks.push(c))
      req.on('end', () => resolve(Buffer.concat(chunks)))
      req.on('error', reject)
    })

  const send = (res: ServerResponse, status: number, body: object) => {
    res.statusCode = status
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(body))
  }

  return {
    name: 'blog-editor',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__blog/save', async (req, res) => {
        if (req.method !== 'POST') return send(res, 405, { error: 'POST only' })
        try {
          const { slug, article } = JSON.parse((await readBody(req)).toString('utf8'))
          const articles = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
          type Stored = { slug: string; oldSlugs?: string[] }
          const i = articles.findIndex((a: Stored) => a.slug === slug)
          if (i < 0) return send(res, 404, { error: `No article "${slug}"` })
          let oldSlugs: string[] = articles[i].oldSlugs ?? []
          // Renaming the address: check the new one, and remember the old one so its links keep working.
          if (article.slug !== slug) {
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug))
              return send(res, 400, { error: 'Use lowercase letters, numbers and hyphens only' })
            const taken = articles.some(
              (a: Stored, j: number) => j !== i && (a.slug === article.slug || a.oldSlugs?.includes(article.slug)),
            )
            if (taken) return send(res, 400, { error: `"${article.slug}" is already used by another article` })
            oldSlugs = [...oldSlugs, slug]
          }
          oldSlugs = [...new Set(oldSlugs)].filter((s) => s !== article.slug)
          articles[i] = { slug: article.slug, ...(oldSlugs.length ? { oldSlugs } : {}), ...article }
          fs.writeFileSync(dataFile, JSON.stringify(articles, null, 2) + '\n')
          send(res, 200, { ok: true })
        } catch (e) {
          send(res, 500, { error: String(e) })
        }
      })

      server.middlewares.use('/__blog/upload', async (req, res) => {
        if (req.method !== 'POST') return send(res, 405, { error: 'POST only' })
        try {
          const original = decodeURIComponent(String(req.headers['x-filename'] || 'image'))
          const ext = path.extname(original).toLowerCase()
          if (!['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif', '.webm', '.mp4'].includes(ext))
            return send(res, 400, { error: 'Not an image or video file' })
          const base = path.basename(original, path.extname(original)).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'image'
          const name = `${base}-${Date.now().toString(36)}${ext}`
          fs.mkdirSync(imageDir, { recursive: true })
          fs.writeFileSync(path.join(imageDir, name), await readBody(req))
          // WebM doesn't play on many iPhones, so convert it to MP4 (H.264), which plays everywhere.
          if (ext === '.webm') {
            const mp4 = name.replace(/\.webm$/, '.mp4')
            try {
              execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', path.join(imageDir, name),
                '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '23', '-movflags', '+faststart', '-an',
                '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2', path.join(imageDir, mp4)])
              fs.unlinkSync(path.join(imageDir, name))
              return send(res, 200, { src: `/blog-images/${mp4}` })
            } catch (e) {
              console.warn('[blog-editor] WebM to MP4 conversion failed, keeping the WebM:', e)
            }
          }
          send(res, 200, { src: `/blog-images/${name}` })
        } catch (e) {
          send(res, 500, { error: String(e) })
        }
      })
    },
    // The editor saves while you type; don't reload the page under it.
    handleHotUpdate({ file }) {
      if (path.resolve(file) === dataFile) return []
    },
  }
}

export default defineConfig({
  plugins: [
    blogEditor(),
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
