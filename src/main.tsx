  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import Blog from "./app/Blog.tsx";
  import BlogArticle from "./app/BlogArticle.tsx";
  import { findArticle, findMovedArticle } from "./app/blog-articles.ts";
  import "./styles/index.css";

  // Pages, picked by URL: /blog is the blog, /blog/<slug> an article,
  // anything else the guidelines. vercel.json rewrites these to index.html
  // so the links work when deployed.
  const path = window.location.pathname.replace(/\/+$/, "");
  const slug = path.match(/^\/blog\/([^/]+)$/)?.[1];
  const article = slug ? findArticle(slug) : undefined;
  // An article that was renamed: send old links on to its current address.
  const moved = slug && !article ? findMovedArticle(slug) : undefined;
  if (moved) window.location.replace(`/blog/${moved.slug}`);

  let page = <App />;
  if (article) {
    document.title = `${article.title} - Truth Blog`;
    page = <BlogArticle article={article} />;
  } else if (path === "/blog" || slug) {
    // An unknown article falls back to the blog list.
    document.title = "Truth - Blog";
    page = <Blog />;
  }

  createRoot(document.getElementById("root")!).render(page);
