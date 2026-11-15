import imgLogo from "../../imports/logo.png";

const CONTENTS = [
  { label: "Brand Strategy", num: "01", id: "brand-strategy" },
  { label: "Logo", num: "02", id: "logo" },
  { label: "Typography", num: "03", id: "typography" },
  { label: "Color", num: "04", id: "color" },
  { label: "The Module", num: "05", id: "the-module" },
  { label: "The Grid", num: "06", id: "the-grid" },
  { label: "Imagery", num: "07", id: "imagery" },
  { label: "Illustrations", num: "08", id: "illustrations" },
];

const RELATED_LINKS = [
  { label: "Brand", href: "/", page: "guidelines" },
  { label: "Blog", href: "/blog", page: "blog" },
];

// The contents list only appears on the guidelines page, where its links scroll in place.
export default function Sidebar({ page }: { page: "guidelines" | "blog" }) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-[280px] lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:border-r lg:border-[rgba(0,0,0,0.1)]">
      {/* Logo */}
      <div className="border-b border-[rgba(0,0,0,0.1)] px-8 py-[30px]">
        <a href="/" aria-label="Saheeh brand guidelines">
          <img alt="Saheeh logo" className="w-[69px] h-[66px] object-contain" src={imgLogo} />
        </a>
      </div>

      {/* Contents Navigation */}
      {page === "guidelines" && (
        <nav className="border-b border-[rgba(0,0,0,0.1)] pb-[30px] pt-[30px]">
          <ol className="flex flex-col gap-[10px] px-8">
            {CONTENTS.map((item) => (
              <li key={item.num}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-2 font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.3px] text-left hover:text-[#155ee7] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="leading-[1.2]">{item.label}</span>
                  <span className="text-[#575757] text-[10px] leading-[1.2]">{item.num}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Related links */}
      <div className="flex gap-4 px-8 pt-[30px]">
        {RELATED_LINKS.map((link) => {
          const current = link.page === page;
          return (
            <a
              key={link.label}
              href={link.href}
              aria-current={current ? "page" : undefined}
              className={`font-['Rethink_Sans',sans-serif] font-normal text-[12px] md:text-[14px] leading-[1.2] underline underline-offset-2 hover:text-[#155ee7] transition-colors ${
                current ? "text-[#070b16]" : "text-[#737373]"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
