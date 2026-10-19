import { useRef, useEffect, useState } from "react";
import imgHeroAnimation from "../imports/hero-animation.gif";
import imgLogo from "../imports/logo.png";
import svgPaths from "../imports/Desktop/svg-zu55n1rr92";
import imgImg from "../imports/Desktop/8bf3bf08c81e69de97e14bc2f02da3f49d07177d.png";
import imgImage1 from "../imports/Desktop/5b5894cc32643b9135aefbb77817117174c69bac.png";
import imgImage2 from "../imports/Desktop/869fe559c7ca2d58d17aac5d43beeefe9dea87c8.png";
import imgImage3 from "../imports/Desktop/52148539d95e27c315e4049bab7e73ee3e8ff33a.png";
import imgImage4 from "../imports/Desktop/df0aea08b0be93546606f6cddf194c4bdac76ce8.png";
import imgImage5 from "../imports/Desktop/41d58d5457ef271003d933020b8c5dbe05f66fc3.png";
import imgImage6 from "../imports/Desktop/5b7b2b0f1035fdb2e2eb52074d79850214f4aec8.png";
import imgImage7 from "../imports/Desktop/d1cb64319fcaa2019811287862fbb275617182f7.png";
import imgImage8 from "../imports/Desktop/c4f5b8835ef888af539d9a8a165ede41a9b7a105.png";

// Temporarily shown as "[to be updated]". Remove an id to bring its section back.
const HIDDEN_SECTIONS = new Set(["brand-strategy", "the-module", "the-grid", "imagery", "illustrations"]);

function PlaceholderSection({ id, num, title }: { id: string; num: string; title: string }) {
  return (
    <section id={id} className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8 lg:pb-[120px]">
      <div className="flex flex-col gap-3 md:flex-row md:gap-8">
        <div className="md:flex-1">
          <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
            <span className="text-[#155ee7]">{num}</span>
            <span className="text-[#070b16]">  {title}</span>
          </h2>
        </div>
        <div className="md:flex-1">
          <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
            [to be updated]
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const gridVizRef = useRef<HTMLDivElement>(null);
  const [gridVizWidth, setGridVizWidth] = useState(0);

  useEffect(() => {
    const el = gridVizRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setGridVizWidth(el.offsetWidth));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - only visible on desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-[280px] lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:border-r lg:border-[rgba(0,0,0,0.1)]">
        {/* Logo */}
        <div className="border-b border-[rgba(0,0,0,0.1)] px-8 py-[30px]">
          <img alt="Saheeh logo" className="w-[69px] h-[66px] object-contain" src={imgLogo} />
        </div>

        {/* Contents Navigation */}
        <nav className="border-b border-[rgba(0,0,0,0.1)] pb-[30px] pt-[30px]">
          <ol className="flex flex-col gap-[10px] px-8">
            {[
              { label: "Brand Strategy", num: "01", id: "brand-strategy" },
              { label: "Logo", num: "02", id: "logo" },
              { label: "Typography", num: "03", id: "typography" },
              { label: "Color", num: "04", id: "color" },
              { label: "The Module", num: "05", id: "the-module" },
              { label: "The Grid", num: "06", id: "the-grid" },
              { label: "Imagery", num: "07", id: "imagery" },
              { label: "Illustrations", num: "08", id: "illustrations" },
            ].map((item) => (
              <li key={item.num}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-2 font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.3px] text-left hover:text-[#155ee7] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="leading-[1.2]">{item.label}</span>
                  <span className="text-[#575757] text-[10px] leading-[1.2]">{item.num}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-[280px]">
        {/* Hero */}
        <section className="bg-white h-[262px] md:h-[540px] w-full flex items-center justify-center">
          <img alt="Hero animation" className="max-w-[205px] max-h-[207px]" src={imgHeroAnimation} />
        </section>

        {/* Table of Contents */}
        <section className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:px-8 lg:py-8">
          <div className="flex flex-col gap-8 md:flex-row md:gap-8">
            <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[30px] tracking-[-0.6px] leading-[1.2] md:flex-1">
              Contents
            </h2>
            <ol className="flex flex-col gap-[10px] md:flex-1">
              {[
                { label: "Brand Strategy", num: "01" },
                { label: "Logo", num: "02" },
                { label: "Typography", num: "03" },
                { label: "Color", num: "04" },
                { label: "The Module", num: "05" },
                { label: "The Grid", num: "06" },
                { label: "Imagery", num: "07" },
                { label: "Illustrations", num: "08" },
              ].map((item) => (
                <li key={item.num} className="flex items-start gap-2 font-['Rethink_Sans',sans-serif] font-medium text-[30px] tracking-[-0.6px]">
                  <span className="text-[#575757] leading-[1.2]">{item.num}</span>
                  <span className="text-[#070b16] leading-[1.2]">{item.label}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Brand Strategy */}
        {HIDDEN_SECTIONS.has("brand-strategy") ? (
          <PlaceholderSection id="brand-strategy" num="01" title="Brand Strategy" />
        ) : (
        <section id="brand-strategy" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-[88px] lg:border-l lg:px-8 lg:py-8 lg:pb-[120px]">
          <div className="flex flex-col gap-3 md:flex-row md:gap-8">
            <div className="md:flex-1">
              <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1] whitespace-pre-wrap">
                <span className="text-[#155ee7]">01</span>
                <span className="text-[#070b16]">  Brand Strategy</span>
              </h2>
            </div>
            <div className="flex flex-col gap-8 md:flex-1">
              <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                Saheeh operates in a landscape where information is infinite and attention is fragmented. The visual identity does one thing: move people through complexity — fast, without confusion, without noise.
              </p>
              <div className="bg-[rgba(0,0,0,0.1)] w-full aspect-[860/888]" />
              <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                To navigate without noise, function is a design discipline. No ornament without purpose. The system orients the reader, not impresses them — and gains power through constraint. That means no decoration that signals urgency without earning it, no multiple signals fighting for the same attention, and no imagery used as emotion management.
              </p>
            </div>
          </div>
        </section>
        )}

        {/* Logo */}
        <section id="logo" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8 lg:pb-[120px]">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#155ee7]">02</span>
                  <span className="text-[#070b16]">  Logo</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                  [to be updated]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section id="typography" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8 lg:pb-[120px]">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="pb-10">
              <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                <span className="text-[#155ee7]">03</span>
                <span className="text-[#070b16]">  Typography</span>
              </h2>
            </div>

            {/* Typefaces */}
            <div className="grid grid-cols-1 gap-16 2xl:grid-cols-2">
              {[
                {
                  role: "Primary Typeface",
                  name: "Alyamama",
                  desc: "Alyamama carries the journalism and editorial voice. It is used for titles, headlines, quotes, body text and excerpts.",
                  specimen: "font-['Alyamama',sans-serif] font-normal text-[40px] md:text-[60px] 2xl:text-[40px] min-[118.75rem]:text-[54px] gap-6",
                },
                {
                  role: "Secondary Typeface",
                  name: "Alexandria",
                  desc: "Alexandria carries the interface and the metadata. It is used for navigation, tags, buttons, dates, bylines and credits.",
                  specimen: "font-['Alexandria',sans-serif] font-light text-[37px] md:text-[55px] 2xl:text-[37px] min-[118.75rem]:text-[50px] gap-[34px]",
                },
              ].map((face) => (
                <div key={face.name} className="flex flex-col gap-12 min-w-0">
                  <div className="flex flex-col gap-6 font-['Rethink_Sans',sans-serif] text-[15px] leading-[1.2]">
                    <p className="font-medium tracking-[-0.3px] text-[#070b16]">
                      {face.role} (
                      <a
                        href={`https://fonts.google.com/specimen/${face.name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#155ee7] underline"
                      >
                        {face.name}
                      </a>
                      )
                    </p>
                    <p className="font-normal tracking-[-0.15px] text-[#575757]">{face.desc}</p>
                  </div>
                  <div className={`flex flex-col ${face.specimen} tracking-[-1.2px] leading-[1.3] text-right text-[#070b16]`}>
                    <p dir="auto">أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي</p>
                    <p dir="auto">0 1 2 3 4 5 6 7 8 9</p>
                    <p dir="auto">{`. , : ; ! ? ' " ( ) [ ] / - * & @ # % + = $ €`}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Text Styles */}
            {[
              {
                name: "Alyamama",
                font: "font-['Alyamama',sans-serif]",
                desc: "Alyamama sets everything a reader reads as journalism, through six text styles. Medium carries every title, headline and quote; Regular carries long-form reading; Light carries the excerpts under headlines.",
                styles: [
                  {
                    name: "Primary/Heading 1",
                    spec: "36 px / 120% / Medium",
                    uses: ["Desktop only: page titles, featured and hero headlines, the Statement article quote, the Article pull quote and the special announcements."],
                    sample: "من صمم لوجو القاهرة المشبوه؟",
                    sampleClass: "font-medium text-[36px] leading-[1.2] text-[#070b16]",
                  },
                  {
                    name: "Primary/Heading 2",
                    spec: "22 px / 130% / Medium",
                    uses: [
                      "Desktop: default story headlines, statement cards, video cards, and in-article subheadings.",
                      "Mobile: page titles, article headlines and quotes.",
                    ],
                    sample: "من صمم لوجو القاهرة المشبوه؟",
                    sampleClass: "font-medium text-[22px] leading-[1.3] text-[#070b16]",
                  },
                  {
                    name: "Primary/Body 1",
                    spec: "20 px / 140% / Regular",
                    uses: [
                      "Desktop: all articles body text, About paragraphs and team bios.",
                      "Mobile: all in-article subheadings.",
                    ],
                    sample: "ويُفسّر مسؤوليْن بوزارة الزراعة على صلة بملف الثروة الحيوانية، أحدهما مسؤول سابق، إن انتشار مرض الحُمى القلاعية كان له دور في انخفاض أعداد رؤوس الماشية خلال تلك الفترة.",
                    sampleClass: "font-normal text-[20px] leading-[1.4] text-[#070b16]",
                  },
                  {
                    name: "Primary/Body 2",
                    spec: "16 px / 140% / Regular",
                    uses: [
                      "Desktop: video descriptions.",
                      "Mobile: all articles body text, About paragraphs and team bios, video descriptions.",
                    ],
                    sample: "ويُفسّر مسؤوليْن بوزارة الزراعة على صلة بملف الثروة الحيوانية، أحدهما مسؤول سابق، إن انتشار مرض الحُمى القلاعية كان له دور في انخفاض أعداد رؤوس الماشية خلال تلك الفترة.",
                    sampleClass: "font-normal text-[16px] leading-[1.4] text-[#070b16]",
                  },
                  {
                    name: "Primary/Subtitle 1",
                    spec: "16 px / 140% / Light",
                    uses: ["Desktop only: descriptions under featured headlines."],
                    sample: "لم تنص أي من اتفاقيتي القرضين على منح حق الانتفاع أو إدارة المتحف المصري الكبير لليابان",
                    sampleClass: "font-light text-[16px] leading-[1.4] text-[#565a63]",
                  },
                  {
                    name: "Primary/Subtitle 2",
                    spec: "14 px / 140% / Light",
                    uses: ["Desktop and Mobile: descriptions under default headlines."],
                    sample: "لم تنص أي من اتفاقيتي القرضين على منح حق الانتفاع أو إدارة المتحف المصري الكبير لليابان",
                    sampleClass: "font-light text-[14px] leading-[1.4] text-[#565a63]",
                  },
                ],
              },
              {
                name: "Alexandria",
                font: "font-['Alexandria',sans-serif]",
                desc: "Alexandria sets the interface around the content, through four text styles organized by size. Each style has a default weight; where text at the same size uses another weight, it is listed under that style.",
                styles: [
                  {
                    name: "Secondary/Subheader",
                    spec: "18 px / 140% / Regular",
                    uses: ["Desktop: section headers.", "Desktop and Mobile: team role titles and large buttons."],
                    sample: "رئيس التحرير",
                    sampleClass: "font-normal text-[18px] leading-[1.4] text-[#070b16]",
                  },
                  {
                    name: "Secondary/Label",
                    spec: "14 px / 140% / Regular",
                    uses: [
                      "Desktop: Topics, verdict tags, the speaker name and title on Statement cards, and footer links.",
                      "Mobile: Sidebar links and section headers.",
                    ],
                    sample: "حقوق إنسان · تصريح · مضلل",
                    sampleClass: "font-normal text-[14px] leading-[1.4] text-[#070b16]",
                  },
                  {
                    name: "Secondary/Label · Medium",
                    spec: "14 px / 140% / Medium",
                    uses: ["Desktop and Mobile: article authors and speaker names."],
                    sample: "مصطفى بكري",
                    sampleClass: "font-medium text-[14px] leading-[1.4] text-[#070b16]",
                    variant: true,
                  },
                  {
                    name: "Secondary/Label · Light",
                    spec: "14 px / 140% / Light",
                    uses: ["Desktop only: speaker title in a Statement article."],
                    sample: "عضو مجلس النواب",
                    sampleClass: "font-light text-[14px] leading-[1.4] text-[#070b16]",
                    variant: true,
                  },
                  {
                    name: "Secondary/Button",
                    spec: "12 px / 140% / Regular",
                    uses: ["The second navbar, filter dropdowns, the header and mobile submit-a-claim buttons, the search placeholder and the mobile Sources accordion title."],
                    sample: "الوظيفة · الموضوع",
                    sampleClass: "font-normal text-[12px] leading-[1.4] text-[#070b16]",
                  },
                  {
                    name: "Secondary/Credits",
                    spec: "12 px / 140% / Light",
                    uses: [
                      "Desktop and Mobile: Dates, mobile footer links, copyrights, image credits and small section labels.",
                      "Mobile: speaker title in a Statement article.",
                    ],
                    sample: "مايو 2025",
                    sampleClass: "font-light text-[12px] leading-[1.4] text-[#070b16]",
                  },
                ],
              },
            ].map((group) => (
              <div key={group.name} className="flex flex-col gap-10 pt-10">
                <div className="flex flex-col gap-5 md:w-1/2">
                  <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                    {group.name}
                  </h3>
                  <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                    {group.desc}
                  </p>
                </div>
                <div className="flex flex-col">
                  {group.styles.map((style) => (
                    <div
                      key={style.name}
                      className={`flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8 ${
                        style.variant ? "pt-[10px] pb-5" : "py-5 border-t border-[#e6e6e8]"
                      }`}
                    >
                      <div className="flex flex-col gap-[6px] font-['Rethink_Sans',sans-serif] font-medium leading-[1.2] lg:w-[220px] lg:shrink-0 2xl:w-[260px]">
                        <p className="text-[15px] tracking-[-0.3px] text-[#070b16]">{style.name}</p>
                        <p className="text-[13px] tracking-[-0.13px] text-[#575757]">{style.spec}</p>
                      </div>
                      <div className="flex-1 min-w-0 font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                        {style.uses.map((use) => (
                          <p key={use}>{use}</p>
                        ))}
                      </div>
                      <p dir="rtl" className={`${group.font} ${style.sampleClass} text-right lg:w-2/5 lg:max-w-[520px] lg:shrink-0`}>
                        {style.sample}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color */}
        <section id="color" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#155ee7]">04</span>
                  <span className="text-[#070b16]">  Color</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                  Saheeh runs on one blue, one near-black ink, a cool-white page color and one orange reserved for fact-check verdicts. Light blue tints carry surfaces, tags and grid lines; neutrals carry secondary text and type tags. One token carries its own 10% opacity: apply it as defined.
                </p>
              </div>
            </div>

            {/* Color Palettes */}
            <div className="grid grid-cols-1 gap-12 pt-10 md:grid-cols-2 min-[112.5rem]:grid-cols-[1fr_auto_1fr] min-[112.5rem]:gap-16">
              {[
                {
                  title: "Primary",
                  colors: [
                    { token: "primary/blue", hex: "#155EE7", bg: "bg-[#155ee7]", use: "Brand color: accent text, buttons, footer and dividers." },
                    { token: "primary/cool-white", hex: "#F5F9FF", bg: "bg-[#f5f9ff] border border-[#9bbbf5]", use: "Page and navbar background; text and icons on blue." },
                    { token: "primary/ink", hex: "#070B16", bg: "bg-[#070b16]", use: "Headlines, body text, navigation and section titles; the video player background." },
                    { token: "primary/orange-emphasis", hex: "#F03423", bg: "bg-[#f03423]", use: "Verdict text, the verdict tag border." },
                    { token: "primary/orange-emphasis-fill", hex: "#B32116 at 10%", bg: "bg-[#f5f9ff] bg-[linear-gradient(rgba(179,33,22,0.1),rgba(179,33,22,0.1))]", use: "Background for the verdict tag and the Statement page quote block." },
                  ],
                },
                {
                  title: "Neutrals",
                  colors: [
                    { token: "neutrals/white", hex: "#FFFFFF", bg: "bg-white border border-[#9bbbf5]", use: "Background for special cards like statements and infographics." },
                    { token: "neutrals/300", hex: "#565A63", bg: "bg-[#565a63]", use: "Subtitle text, type tag text and type tag borders." },
                    { token: "neutrals/600", hex: "#A6AAB1", bg: "bg-[#a6aab1]", use: "Utility icons (e.g. search, language)." },
                    { token: "neutrals/800", hex: "#E0E4E9", bg: "bg-[#e0e4e9]", use: "Type tag background." },
                  ],
                },
              ].map((palette, i) => (
                <div key={palette.title} className={`flex flex-col gap-6 min-w-0 ${i === 1 ? "min-[112.5rem]:order-3" : ""}`}>
                  <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                    {palette.title}
                  </h3>
                  {palette.colors.map((color) => (
                    <div key={color.token} className="flex items-start gap-4">
                      <div className={`${color.bg} size-16 shrink-0 rounded-full`} />
                      <div className="flex flex-col gap-[6px] min-w-0 font-['Rethink_Sans',sans-serif] leading-[1.2]">
                        <p className="font-medium text-[13px] tracking-[-0.13px] text-[#070b16]">
                          {color.token} · {color.hex}
                        </p>
                        <p className="font-normal text-[15px] tracking-[-0.15px] text-[#575757]">{color.use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Tints and Shadows */}
              <div className="flex flex-col gap-6 min-w-0 md:col-span-2 min-[112.5rem]:col-span-1 min-[112.5rem]:order-2 min-[112.5rem]:max-w-[584px]">
                <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                  Tints and Shadows
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[
                    [
                      { token: "tints/900", hex: "#DFEBFF", bg: "bg-[#dfebff]" },
                      { token: "tints/800", hex: "#C8DAFA", bg: "bg-[#c8dafa]" },
                      { token: "tints/700", hex: "#9BBBF5", bg: "bg-[#9bbbf5]" },
                      { token: "tints/600", hex: "#6F9CF1", bg: "bg-[#6f9cf1]" },
                    ],
                    [
                      { token: "shadows/400", hex: "#124DBD", bg: "bg-[#124dbd]" },
                      { token: "shadows/300", hex: "#0F3D93", bg: "bg-[#0f3d93]" },
                      { token: "shadows/200", hex: "#0D2C6A", bg: "bg-[#0d2c6a]" },
                      { token: "shadows/100", hex: "#0A1C40", bg: "bg-[#0a1c40]" },
                    ],
                  ].map((column, i) => (
                    <div key={i} className="flex flex-col gap-6">
                      {column.map((color) => (
                        <div key={color.token} className="flex items-center gap-4">
                          <div className={`${color.bg} size-16 shrink-0 rounded-full`} />
                          <p className="font-['Rethink_Sans',sans-serif] font-medium text-[13px] tracking-[-0.13px] leading-[1.2] text-[#070b16]">
                            {color.token} · {color.hex}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <p className="pt-3 font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                  *Tints and shadows are a complete scale of lighter and darker steps of our primary blue. They hold up the structure around the content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Module */}
        {HIDDEN_SECTIONS.has("the-module") ? (
          <PlaceholderSection id="the-module" num="05" title="The Module" />
        ) : (
        <section id="the-module" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8 lg:pb-[120px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 pb-8 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#155ee7]">05</span>
                  <span className="text-[#070b16]">  The Module</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2] whitespace-pre-wrap">
                  Every piece of content — a statement, a fake news verdict, a news story — is called a module. A unit of information with a fixed structure, always assembled from the same components. Only the content changes.
                  <br />
                  A module carries two pieces of information: what kind of content it is, and what the verdict is. These are represented by two cards.
                  <br /><br />
                  The type card identifies the content: Statement, Fake News, or News Story. It is always the same color. It does not change.
                  <br /><br />
                  The verdict card carries the judgment. Its background color is the verdict. Nothing else changes — not the typography, not the size, not the position.
                </p>
              </div>
            </div>
            <img alt="Module system example" className="w-full object-cover" src={imgImg} />
          </div>
        </section>
        )}

        {/* The Grid */}
        {HIDDEN_SECTIONS.has("the-grid") ? (
          <PlaceholderSection id="the-grid" num="06" title="The Grid" />
        ) : (
        <section id="the-grid" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8 lg:pb-[120px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 pb-8 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#155ee7]">06</span>
                  <span className="text-[#070b16]">  The Grid</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                  The grid is the structural foundation of every Saheeh layout. All elements — margins, spacing, type size, and component placement — are bound to a single base unit of 32px.
                </p>
              </div>
            </div>

            {/* CSS dot grid visualization */}
            {(() => {
              const rowCount = gridVizWidth >= 768 ? 4 : 6;
              const colCount = Math.floor(gridVizWidth / 32) + 1;
              return (
                <div ref={gridVizRef} className="w-full" style={{ height: rowCount * 32 }}>
                  <svg width="100%" height="100%">
                    {Array.from({ length: rowCount }, (_, row) =>
                      Array.from({ length: colCount }, (_, col) => (
                        <rect key={`${row}-${col}`} x={col * 32} y={row * 32} width={3} height={3} fill="#155ee7" />
                      ))
                    )}
                  </svg>
                </div>
              );
            })()}

            <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2] md:w-1/2">
              Margins are always 6.2% of the document width on each side. Column count is calculated, not fixed: subtract both margins from the document width and divide by 32. Round to the nearest whole number. The result will always approximate 29 columns at the reference size of 1080px.
              <br /><br />
              Leading values must always be multiples of 32pt, maintaining the baseline grid increment across all formats. The visible dot grid inherits the 32px spacing directly — one dot per grid intersection. Dot size scales between 2px and 4px depending on document size. The spacing interval never changes.
            </p>
          </div>
        </section>
        )}

        {/* Imagery */}
        {HIDDEN_SECTIONS.has("imagery") ? (
          <PlaceholderSection id="imagery" num="07" title="Imagery" />
        ) : (
        <section id="imagery" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#155ee7]">07</span>
                  <span className="text-[#070b16]">  Imagery</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                  Saheeh uses documentary-style photography — real situations, real people in context. Images are always in color, high resolution, and directly relevant to the content they accompany. Preferred images are high contrast, neither too bright nor too dark. Do not use stock imagery, staged photography, or black and white photography.
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 pt-8">
              {[
                { img: imgImage1, title: "Lorem ipsum dolor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { img: imgImage2, title: "Consectetur adipiscing", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { img: imgImage3, title: "Sed do eiusmod", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
                { img: imgImage4, title: "Tempor incididunt", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-[10px]">
                  <img alt={item.title} className="w-full aspect-[1600/1066] object-cover object-center" src={item.img} />
                  <div className="flex flex-col gap-2 font-['Rethink_Sans',sans-serif] font-medium text-[13px] tracking-[-0.13px] leading-[1.2]">
                    <p className="text-[#070b16]">{item.title}</p>
                    <p className="text-[#575757]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Illustrations */}
        {HIDDEN_SECTIONS.has("illustrations") ? (
          <PlaceholderSection id="illustrations" num="08" title="Illustrations" />
        ) : (
        <section id="illustrations" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 pb-20 md:px-8 md:py-8 md:pb-20 lg:border-l lg:px-8 lg:pb-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#155ee7]">08</span>
                  <span className="text-[#070b16]">  Illustrations</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                  Illustrations are used sparingly and purposefully to explain complex concepts or add visual interest where photography would not be appropriate. The style is clean, modern, and directly supportive of the content.
                </p>
              </div>
            </div>

            {/* Illustrations Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 pt-8">
              {[imgImage5, imgImage6, imgImage7, imgImage8].map((img, i) => (
                <img key={i} alt={`Illustration ${i + 1}`} className="w-full object-cover" src={img} />
              ))}
            </div>
          </div>
        </section>
        )}
      </main>
    </div>
  );
}
