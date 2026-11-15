import { createElement, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import MobileLogoBar from "./components/MobileLogoBar";
import SymbolTable from "./components/SymbolTable";
import WordmarkTable from "./components/WordmarkTable";
import { dateFormat, type ArticleBlock, type BlogArticle as Article } from "./blog-articles";

// On the dev server (pnpm dev) every text and image on this page is editable and
// changes are saved to blog-articles.json. The deployed site is read-only.
const EDITABLE = import.meta.env.DEV;

// Blocks get a temporary id while editing so React can track them when they move.
type DraftBlock = ArticleBlock & { id: string };
let nextId = 0;
const withId = (block: ArticleBlock): DraftBlock => ({ ...block, id: `b${nextId++}` });
// Blocks the "+" menu can add (the symbol table is placed in the JSON by hand).
type AddableType = "paragraph" | "heading" | "image" | "video" | "separator";

const font = "font-['Rethink_Sans',sans-serif]";
const styles = {
  title: `${font} font-medium text-[22px] leading-[1.3] tracking-[-0.22px] md:text-[36px] md:leading-[1.2] md:tracking-[-0.36px] text-[#070b16] text-balance`,
  heading: `${font} mt-5 font-semibold text-[22px] tracking-[-0.22px] leading-[1.2] text-[#070b16]`,
  paragraph: `${font} font-normal text-[17px] tracking-[-0.17px] leading-[1.5] text-[#070b16] whitespace-pre-line`,
  // Same text style as the sidebar's footer links, without the underline
  date: `${font} font-normal text-[12px] md:text-[14px] leading-[1.2] text-[#737373]`,
};

export default function BlogArticle({ article }: { article: Article }) {
  const [title, setTitle] = useState(article.title);
  const [date, setDate] = useState(article.date);
  const [thumbnail, setThumbnail] = useState(article.thumbnail);
  const [blocks, setBlocks] = useState<DraftBlock[]>(() => article.body.map(withId));
  const [focusId, setFocusId] = useState<string | null>(null);
  const status = useAutosave(article.slug, { slug: article.slug, title, date, thumbnail, body: blocks });

  const updateBlock = (id: string, patch: Partial<ArticleBlock>) =>
    setBlocks((bs) => bs.map((b) => (b.id === id ? ({ ...b, ...patch } as DraftBlock) : b)));
  const removeBlock = (id: string) => setBlocks((bs) => bs.filter((b) => b.id !== id));
  const moveBlock = (id: string, by: -1 | 1) =>
    setBlocks((bs) => {
      const i = bs.findIndex((b) => b.id === id);
      const j = i + by;
      if (j < 0 || j >= bs.length) return bs;
      const next = [...bs];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  const insertBlock = (index: number, type: AddableType) => {
    const block = withId(
      type === "image" || type === "video" ? { type, src: "" } : type === "separator" ? { type } : { type, text: "" },
    );
    setBlocks((bs) => [...bs.slice(0, index), block, ...bs.slice(index)]);
    setFocusId(block.id);
  };

  // The deployed page leaves out blocks that were added but never filled in.
  const visibleBlocks = EDITABLE
    ? blocks
    : blocks.filter((b) => ("src" in b ? b.src : "text" in b ? b.text.trim() : true));

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar page="blog" />

      <main className="flex-1 lg:ml-[280px]">
        <MobileLogoBar />

        {/* Top bar - same height as the sidebar's logo block, so its bottom line continues the logo's */}
        <div className="flex items-center justify-between gap-4 border-b border-[rgba(0,0,0,0.1)] px-5 py-5 md:px-8 lg:h-[127px] lg:border-l lg:py-0">
          {/* Breadcrumb: Blog > article title */}
          <nav aria-label="Breadcrumb" className="min-w-0">
            <ol className={`flex items-center gap-2 ${font} font-medium text-[15px] tracking-[-0.3px] leading-[1.2]`}>
              <li className="shrink-0">
                <a href="/blog" className="font-normal text-[#070b16] hover:text-[#155ee7] transition-colors">
                  Blog
                </a>
              </li>
              <li aria-hidden="true" className="shrink-0 text-[#575757]">
                &gt;
              </li>
              <li aria-current="page" className="min-w-0 truncate text-[#070b16]">
                {title}
              </li>
            </ol>
          </nav>
        </div>

        <article className="px-5 py-8 pb-20 md:px-8 lg:border-l lg:pt-[60px] lg:pb-[120px]">
          {/* Title and text share a centered reading column; the photo is wider, also centered */}
          <Text as="h1" value={title} onChange={setTitle} placeholder="Article title"
            className={`mx-auto max-w-[680px] text-center ${styles.title}`} />

          <div className="mt-3 text-center">
            {EDITABLE ? (
              <DateField value={date} onChange={setDate} />
            ) : (
              <time dateTime={date} className={styles.date}>{dateFormat.format(new Date(date))}</time>
            )}
          </div>

          <EditableImage
            src={thumbnail}
            onChange={setThumbnail}
            label="Replace main image (also the blog thumbnail)"
            // Tablet/desktop: 12vw margin each side, measured from the content area's edge
            // (the section's 32px padding is part of it, hence + 64px).
            className="mx-auto mt-8 w-full md:w-[calc(100%_-_24vw_+_64px)] lg:mt-[60px]"
            imgClassName="w-full aspect-video object-cover object-center bg-[#dfebff]"
          />

          <div className="mx-auto mt-10 flex max-w-[680px] flex-col gap-5 lg:mt-[60px]">
            {visibleBlocks.map((block, i) => (
              <BlockFrame
                key={block.id}
                first={i === 0}
                last={i === visibleBlocks.length - 1}
                onMove={(by) => moveBlock(block.id, by)}
                onRemove={() => removeBlock(block.id)}
                onInsertBefore={i === 0 ? (type) => insertBlock(0, type) : undefined}
                onInsertAfter={(type) => insertBlock(i + 1, type)}
              >
                {block.type === "heading" || block.type === "paragraph" ? (
                  <Text
                    as={block.type === "heading" ? "h2" : "p"}
                    value={block.text}
                    onChange={(text) => updateBlock(block.id, { text })}
                    multiline={block.type === "paragraph"}
                    autoFocus={block.id === focusId}
                    placeholder={block.type === "heading" ? "Subheading" : "Write a paragraph…"}
                    className={styles[block.type]}
                  />
                ) : block.type === "image" ? (
                  <EditableImage
                    src={block.src}
                    onChange={(src) => updateBlock(block.id, { src })}
                    label="Replace image"
                    imgClassName="w-full bg-[#dfebff]"
                  />
                ) : block.type === "video" ? (
                  <EditableImage
                    kind="video"
                    src={block.src}
                    onChange={(src) => updateBlock(block.id, { src })}
                    label="Replace video"
                    imgClassName="w-full bg-[#dfebff]"
                  />
                ) : block.type === "symbolTable" ? (
                  <SymbolTable />
                ) : block.type === "wordmarkTable" ? (
                  <WordmarkTable />
                ) : (
                  <hr className="my-5 border-0 border-t border-[rgba(0,0,0,0.1)]" />
                )}
              </BlockFrame>
            ))}
            {EDITABLE && <AddBlockMenu onInsert={(type) => insertBlock(blocks.length, type)} />}
          </div>
        </article>
      </main>

      {EDITABLE && (
        <div className={`fixed bottom-4 right-4 z-50 rounded-full border border-[rgba(0,0,0,0.1)] bg-white px-3 py-1.5 ${font} text-[12px] leading-[1.2] shadow-sm ${status === "error" ? "text-[#c2410c]" : "text-[#737373]"}`}>
          Editing (dev only) · {status === "saving" ? "Saving…" : status === "error" ? "Couldn't save, see console" : "Saved"}
        </div>
      )}
    </div>
  );
}

// Saves the article half a second after the last change.
function useAutosave(slug: string, article: Omit<Article, "body"> & { body: DraftBlock[] }) {
  const [status, setStatus] = useState<"saved" | "saving" | "error">("saved");
  const json = JSON.stringify({ ...article, body: article.body.map(({ id: _id, ...b }) => b) });
  const lastSaved = useRef(json);

  useEffect(() => {
    if (!EDITABLE || json === lastSaved.current) return;
    setStatus("saving");
    const timer = setTimeout(async () => {
      try {
        const res = await fetch("/__blog/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, article: JSON.parse(json) }),
        });
        if (!res.ok) throw new Error(await res.text());
        lastSaved.current = json;
        setStatus("saved");
      } catch (e) {
        console.error("Article save failed:", e);
        setStatus("error");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [slug, json]);

  return status;
}

// Text that becomes editable in place on the dev server.
function Text({ as, value, onChange, className, placeholder, multiline = false, autoFocus = false }: {
  as: "h1" | "h2" | "p";
  value: string;
  onChange: (value: string) => void;
  className: string;
  placeholder: string;
  multiline?: boolean;
  autoFocus?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  // The element owns its text while you type; only sync from outside when it isn't focused.
  useLayoutEffect(() => {
    const el = ref.current;
    if (el && document.activeElement !== el && el.innerText !== value) el.innerText = value;
  }, [value]);

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, [autoFocus]);

  if (!EDITABLE) return createElement(as, { className }, value);

  return createElement(as, {
    ref,
    className: `${className} cursor-text rounded-[2px] outline-none transition-colors hover:bg-[#155ee7]/[0.06] focus:bg-[#155ee7]/[0.06] empty:before:text-[#a3a3a3] empty:before:content-[attr(data-placeholder)]`,
    contentEditable: "plaintext-only",
    suppressContentEditableWarning: true,
    spellCheck: true,
    "data-placeholder": placeholder,
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
      if ((e.key === "Enter" && !multiline) || e.key === "Escape") {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    onInput: (e: React.FormEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const text = el.innerText.replace(/\n$/, "");
      // Leave the element truly empty so the placeholder shows again.
      if (!text && el.innerHTML) el.innerHTML = "";
      onChange(text);
    },
  });
}

// The date, with the browser's date picker on click.
function DateField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className={`relative inline-block cursor-pointer rounded-[2px] px-1 transition-colors hover:bg-[#155ee7]/[0.06] ${styles.date}`}>
      <time dateTime={value}>{dateFormat.format(new Date(value))}</time>
      <input
        type="date"
        aria-label="Publish date"
        value={value}
        onChange={(e) => e.target.value && onChange(e.target.value)}
        onClick={(e) => e.currentTarget.showPicker?.()}
        className="absolute inset-0 cursor-pointer opacity-0"
      />
    </label>
  );
}

// Shows a file as a video (webm, mp4) or an image (anything else, including gif).
// Videos play like a gif: muted, looping, no controls.
const isVideoFile = (src: string) => /\.(webm|mp4|mov)$/i.test(src);
function Media({ src, className }: { src: string; className: string }) {
  return isVideoFile(src) ? <LoopingVideo src={src} className={className} /> : <img alt="" className={className} src={src} />;
}

// iPhones only autoplay a video that is muted in the page itself, but React never writes the
// `muted` attribute into the page. So set it by hand and start playback; if the phone still
// refuses (e.g. Low Power Mode), show the play controls instead of an empty box.
function LoopingVideo({ src, className }: { src: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.play().catch(() => setBlocked(true));
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={blocked}
    />
  );
}

// An image or video that can be replaced by uploading a file on the dev server.
function EditableImage({ kind = "image", src, onChange, label, className = "", imgClassName }: {
  kind?: "image" | "video";
  src: string;
  onChange: (src: string) => void;
  label: string;
  className?: string;
  imgClassName: string;
}) {
  const input = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  if (!EDITABLE) return <Media className={`${className} ${imgClassName}`} src={src} />;

  const upload = async (file: File) => {
    setUploading(true);
    try {
      const res = await fetch("/__blog/upload", {
        method: "POST",
        headers: { "X-Filename": encodeURIComponent(file.name) },
        body: file,
      });
      if (!res.ok) throw new Error(await res.text());
      onChange((await res.json()).src);
    } catch (e) {
      console.error("Upload failed:", e);
      alert("Upload failed. See the console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={`group/image relative ${className}`}>
      {src ? (
        <Media className={imgClassName} src={src} />
      ) : (
        <button
          type="button"
          onClick={() => input.current?.click()}
          className={`flex aspect-video w-full items-center justify-center bg-[#dfebff] ${font} text-[14px] text-[#155ee7]`}
        >
          {uploading ? "Uploading…" : kind === "video" ? "Choose a video (webm, mp4 or gif)" : "Choose an image"}
        </button>
      )}
      {src && (
        <button
          type="button"
          onClick={() => input.current?.click()}
          className={`absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 ${font} text-[12px] leading-[1.2] text-[#070b16] opacity-0 shadow-sm transition-opacity hover:text-[#155ee7] group-hover/image:opacity-100 focus:opacity-100`}
        >
          {uploading ? "Uploading…" : label}
        </button>
      )}
      <input
        ref={input}
        type="file"
        accept={kind === "video" ? "video/webm,video/mp4,image/gif,.webm,.mp4,.gif" : "image/*"}
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) upload(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}

const BLOCK_TYPES: { type: AddableType; label: string }[] = [
  { type: "paragraph", label: "Paragraph" },
  { type: "heading", label: "Subheading" },
  { type: "image", label: "Image" },
  { type: "video", label: "Video" },
  { type: "separator", label: "Line" },
];

// The "+" menu for adding a block.
function AddBlockMenu({ onInsert, subtle = false }: { onInsert: (type: AddableType) => void; subtle?: boolean }) {
  const [open, setOpen] = useState(false);
  const button = `rounded-full border border-[rgba(0,0,0,0.1)] bg-white px-2.5 py-1 ${font} text-[12px] leading-[1.2] text-[#575757] transition-colors hover:border-[#155ee7] hover:text-[#155ee7]`;

  return (
    <div className={`flex items-center justify-center gap-1.5 transition-opacity ${subtle && !open ? "opacity-0 hover:opacity-100 focus-within:opacity-100" : ""}`}>
      {open ? (
        <>
          {BLOCK_TYPES.map(({ type, label }) => (
            <button key={type} type="button" className={button} onClick={() => { onInsert(type); setOpen(false); }}>
              {label}
            </button>
          ))}
          <button type="button" aria-label="Cancel" className={button} onClick={() => setOpen(false)}>×</button>
        </>
      ) : (
        <button type="button" aria-label="Add a block" title="Add a block" className={`${button} w-7 px-0`} onClick={() => setOpen(true)}>
          +
        </button>
      )}
    </div>
  );
}

// Wraps a block with its move/delete controls and the "+" menus in the gaps around it.
function BlockFrame({ children, first, last, onMove, onRemove, onInsertBefore, onInsertAfter }: {
  children: ReactNode;
  first: boolean;
  last: boolean;
  onMove: (by: -1 | 1) => void;
  onRemove: () => void;
  onInsertBefore?: (type: AddableType) => void;
  onInsertAfter: (type: AddableType) => void;
}) {
  if (!EDITABLE) return <>{children}</>;

  const control = `flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] bg-white ${font} text-[12px] leading-none text-[#575757] transition-colors hover:border-[#155ee7] hover:text-[#155ee7] disabled:opacity-30 disabled:hover:border-[rgba(0,0,0,0.1)] disabled:hover:text-[#575757]`;

  return (
    <div className="group/block relative">
      {children}
      {/* Move and delete, beside the block on hover */}
      <div className="absolute -right-9 top-0 flex flex-col gap-1 opacity-0 transition-opacity group-hover/block:opacity-100 focus-within:opacity-100">
        <button type="button" aria-label="Move up" title="Move up" className={control} disabled={first} onClick={() => onMove(-1)}>↑</button>
        <button type="button" aria-label="Move down" title="Move down" className={control} disabled={last} onClick={() => onMove(1)}>↓</button>
        <button type="button" aria-label="Delete" title="Delete" className={control} onClick={onRemove}>×</button>
      </div>
      {/* "+" in the gap above the first block and below every block */}
      {onInsertBefore && (
        <div className="absolute inset-x-0 bottom-full z-10 flex h-5 items-center justify-center">
          <AddBlockMenu subtle onInsert={onInsertBefore} />
        </div>
      )}
      {!last && (
        <div className="absolute inset-x-0 top-full z-10 flex h-5 items-center justify-center">
          <AddBlockMenu subtle onInsert={onInsertAfter} />
        </div>
      )}
    </div>
  );
}
