import data from "./blog-articles.json";

// Article content lives in blog-articles.json. On the dev server, article pages
// are editable and write their changes back to that file (see vite.config.ts);
// uploaded images go to public/blog-images/.

// An article body is a list of blocks, rendered in order.
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string }
  | { type: "video"; src: string } // webm/mp4 play muted on loop; a gif shows as an image
  | { type: "separator" }
  | { type: "symbolTable" } // the nine symbol variations, components/SymbolTable.tsx
  | { type: "wordmarkTable" }; // the three wordmark groups, components/WordmarkTable.tsx

export type BlogArticle = {
  slug: string; // the URL: /blog/<slug>
  oldSlugs?: string[]; // earlier addresses, sent on to the current one (filled in by the editor)
  title: string;
  date: string; // ISO date, YYYY-MM-DD
  thumbnail: string; // also the article's main image
  body: ArticleBlock[];
};

export const BLOG_ARTICLES = data as BlogArticle[];

export const findArticle = (slug: string) => BLOG_ARTICLES.find((a) => a.slug === slug);

// The article that used to live at this address, if it has since been renamed.
export const findMovedArticle = (slug: string) => BLOG_ARTICLES.find((a) => a.oldSlugs?.includes(slug));

// Turns typed text into an address: lowercase letters and numbers, separated by single hyphens.
export const toSlug = (text: string) =>
  text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
