import Sidebar from "./components/Sidebar";
import MobileLogoBar from "./components/MobileLogoBar";
import { BLOG_ARTICLES, dateFormat } from "./blog-articles";

export default function Blog() {
  const articles = [...BLOG_ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar page="blog" />

      <main className="flex-1 lg:ml-[280px]">
        <MobileLogoBar />

        {/* Empty bar on desktop - same height as the sidebar's logo block, so the line under the logo continues.
            The heading is only for screen readers. */}
        <header className="lg:h-[127px] lg:border-b lg:border-[rgba(0,0,0,0.1)]">
          <h1 className="sr-only">Blog</h1>
        </header>

        <section className="px-5 py-8 pb-20 md:px-8 lg:pb-[120px]">
          {/* Articles */}
          <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <li key={article.slug}>
                <a href={`/blog/${article.slug}`} className="group flex flex-col gap-4">
                  <img
                    alt=""
                    className="w-full aspect-video object-cover object-center bg-[#dfebff]"
                    src={article.thumbnail}
                  />
                  <div className="flex flex-col gap-2 font-['Rethink_Sans',sans-serif] leading-[1.2]">
                    <h2 className="font-semibold text-[22px] leading-[1.2] tracking-[-0.22px] text-[#070b16] text-balance transition-colors group-hover:text-[#155ee7]">
                      {article.title}
                    </h2>
                    <time dateTime={article.date} className="font-medium text-[13px] tracking-[-0.13px] text-[#575757]">
                      {dateFormat.format(new Date(article.date))}
                    </time>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
