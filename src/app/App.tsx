import imgHeroAnimation from "../imports/hero-animation.gif";
import imgLogo from "../imports/logo.png";
import svgPaths from "../imports/Desktop/svg-zu55n1rr92";
import imgImg from "../imports/Desktop/8bf3bf08c81e69de97e14bc2f02da3f49d07177d.png";
import imgImg1 from "../imports/Desktop/32d57331ab8465ef01084482ba1cddd074f5abdb.png";
import imgImage1 from "../imports/Desktop/5b5894cc32643b9135aefbb77817117174c69bac.png";
import imgImage2 from "../imports/Desktop/869fe559c7ca2d58d17aac5d43beeefe9dea87c8.png";
import imgImage3 from "../imports/Desktop/52148539d95e27c315e4049bab7e73ee3e8ff33a.png";
import imgImage4 from "../imports/Desktop/df0aea08b0be93546606f6cddf194c4bdac76ce8.png";
import imgImage5 from "../imports/Desktop/41d58d5457ef271003d933020b8c5dbe05f66fc3.png";
import imgImage6 from "../imports/Desktop/5b7b2b0f1035fdb2e2eb52074d79850214f4aec8.png";
import imgImage7 from "../imports/Desktop/d1cb64319fcaa2019811287862fbb275617182f7.png";
import imgImage8 from "../imports/Desktop/c4f5b8835ef888af539d9a8a165ede41a9b7a105.png";

export default function App() {
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
                  className="flex items-start gap-2 font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.3px] text-left hover:text-[#152ae8] transition-colors"
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
                  <span className="text-black leading-[1.2]">{item.label}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Brand Strategy */}
        <section id="brand-strategy" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-[88px] lg:border-l lg:px-8 lg:py-8 lg:pb-[120px]">
          <div className="flex flex-col gap-3 md:flex-row md:gap-8">
            <div className="md:flex-1">
              <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1] whitespace-pre-wrap">
                <span className="text-[#152ae8]">01</span>
                <span className="text-black">  Brand Strategy</span>
              </h2>
            </div>
            <div className="flex flex-col gap-8 md:flex-1">
              <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                Saheeh operates in a landscape where information is infinite and attention is fragmented. The visual identity does one thing: move people through complexity — fast, without confusion, without noise.
              </p>
              <div className="bg-[rgba(0,0,0,0.1)] w-full aspect-[860/888]" />
              <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                To navigate without noise, function is a design discipline. No ornament without purpose. The system orients the reader, not impresses them — and gains power through constraint. That means no decoration that signals urgency without earning it, no multiple signals fighting for the same attention, and no imagery used as emotion management.
              </p>
            </div>
          </div>
        </section>

        {/* Logo */}
        <section id="logo" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8 lg:pb-[120px]">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#152ae8]">02</span>
                  <span className="text-black">  Logo</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                  [to be defined]
                </p>
              </div>
            </div>

            {/* Logo Diagrams */}
            <div className="flex flex-col gap-16 pt-10">
              {/* Primary Lockup */}
              <div className="flex flex-col gap-[10px]">
                <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                  Primary Lockup
                </h3>
                <div className="bg-[rgba(0,0,0,0.1)] w-full aspect-[966/500]" />
              </div>

              {/* Clearspace */}
              <div className="flex flex-col gap-[10px]">
                <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                  Clearspace
                </h3>
                <div className="bg-[rgba(0,0,0,0.1)] w-full aspect-[464/240]" />
              </div>

              {/* Secondary Lockups */}
              <div className="flex flex-col gap-[10px]">
                <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                  Secondary Lockups
                </h3>
                <div className="bg-[rgba(0,0,0,0.1)] w-full aspect-[966/500]" />
              </div>

              {/* Incorrect Usage */}
              <div className="flex flex-col gap-[10px]">
                <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                  Incorrect Usage
                </h3>
                <div className="flex flex-col gap-[30px]">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                      "Do not resize the mark",
                      "Do not rotate the logo",
                      "Do not change the color of the mark alone",
                    ].map((label) => (
                      <div key={label} className="flex flex-col gap-[10px]">
                        <div className="bg-[rgba(0,0,0,0.1)] w-full aspect-[464/240]" />
                        <div className="flex gap-[5px] items-center">
                          <svg className="shrink-0 size-4" fill="none" viewBox="0 0 16 16">
                            <path d={svgPaths.p36ca9a00} fill="#F20909" />
                            <path d="M5 4.79688L11.4 11.1969" stroke="white" strokeWidth="2" />
                            <path d={svgPaths.p94a600} stroke="white" strokeWidth="2" />
                          </svg>
                          <p className="font-['Rethink_Sans',sans-serif] font-medium text-[13px] tracking-[-0.13px] leading-[1.2]">
                            {label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Row 2 */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                      "Do not outline the logo",
                      "Do not reverse the lockup",
                      "Do not add gradients the logo",
                    ].map((label) => (
                      <div key={label} className="flex flex-col gap-[10px]">
                        <div className="bg-[rgba(0,0,0,0.1)] w-full aspect-[464/240]" />
                        <div className="flex gap-[5px] items-center">
                          <svg className="shrink-0 size-4" fill="none" viewBox="0 0 16 16">
                            <path d={svgPaths.p36ca9a00} fill="#F20909" />
                            <path d="M5 4.79688L11.4 11.1969" stroke="white" strokeWidth="2" />
                            <path d={svgPaths.p94a600} stroke="white" strokeWidth="2" />
                          </svg>
                          <p className="font-['Rethink_Sans',sans-serif] font-medium text-[13px] tracking-[-0.13px] leading-[1.2]">
                            {label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section id="typography" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8 lg:pb-[120px]">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-8 pb-10 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#152ae8]">03</span>
                  <span className="text-black">  Typography</span>
                </h2>
              </div>
              <div className="flex flex-col gap-10 md:flex-1">
                <div className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2] space-y-4">
                  <p>
                    Primary typeface <span className="text-[#152ae8]">(Alyamama)</span> carries the journalism and editorial voice. It is used for headlines, body text, pull quotes, and display numerals.
                  </p>
                  <p>
                    Secondary typeface <span className="text-[#152ae8]">(Changa)</span> carries the system and the interface language. It is used for verdict tags, type cards, navigation labels, dates, and bylines.
                  </p>
                </div>
              </div>
            </div>

            {/* Typeface Samples */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.3px]">
                  Primary Typeface
                </p>
                <p className="font-['Alyamama',sans-serif] font-bold text-[40px] md:text-[60px] tracking-[-1.2px] leading-[1.3] text-right" dir="auto">
                  أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي
                </p>
                <p className="font-['Alyamama',sans-serif] font-bold text-[40px] md:text-[60px] tracking-[-1.2px] leading-[1.3] text-right" dir="auto">
                  ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.3px]">
                  Secondary Typeface
                </p>
                <p className="font-['Changa',sans-serif] text-[40px] md:text-[60px] tracking-[-1.2px] leading-[1.3] text-right" dir="auto">
                  أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي
                </p>
                <p className="font-['Changa',sans-serif] text-[40px] md:text-[60px] tracking-[-1.2px] leading-[1.3] text-right" dir="auto">
                  ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color */}
        <section id="color" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#152ae8]">04</span>
                  <span className="text-black">  Color</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                  Saheeh's primary palette is built on three colors. Black is the default surface for all editorial content. White is the default surface for web. Blue is the color of truth — used for the grid, navigation, report and investigation type cards, and the logo.
                  <br /><br />
                  An accent palette of high-contrast backgrounds is permitted exclusively for social media snippets, when the content calls for breaking the rigidness of the primary palette. Logo and typography rules remain fixed on these backgrounds.
                  <br /><br />
                  The verdict scale runs warm-to-purple, borrowed from systems designed to measure rather than alarm.
                </p>
              </div>
            </div>

            {/* Color Palettes */}
            <div className="flex flex-col gap-10 pt-10">
              {/* Primary Palette */}
              <div className="flex flex-col gap-10">
                <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                  Primary Palette
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {[
                    { name: "Blue", hex: "#152AE8", bg: "bg-[#152ae8]" },
                    { name: "Black", hex: "#000000", bg: "bg-[#040404]" },
                    { name: "White", hex: "#FFFFFF", bg: "bg-white border border-black" },
                  ].map((color) => (
                    <div key={color.hex} className="flex flex-col gap-[10px] items-center">
                      <div className={`${color.bg} w-full aspect-square max-w-[240px] rounded-full`} />
                      <div className="flex flex-col gap-1 font-['Rethink_Sans',sans-serif] font-medium text-[13px] tracking-[-0.13px] leading-[1.2]">
                        <p>{color.name}</p>
                        <p>Hex: {color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accent Palette */}
              <div className="flex flex-col gap-5">
                <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                  Accent Palette
                </h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    { name: "Red", hex: "#F5423D", bg: "bg-[#f5423d]" },
                    { name: "Lime Green", hex: "#24E285", bg: "bg-[#24e285]" },
                    { name: "Pink", hex: "#FEA8CD", bg: "bg-[#fea8cd]" },
                    { name: "Yellow", hex: "#FBD769", bg: "bg-[#fbd769]" },
                  ].map((color) => (
                    <div key={color.hex} className="flex flex-col gap-[10px] items-center">
                      <div className={`${color.bg} w-full aspect-square max-w-[240px] rounded-full`} />
                      <div className="flex flex-col gap-1 font-['Rethink_Sans',sans-serif] font-medium text-[13px] tracking-[-0.13px] leading-[1.2]">
                        <p>{color.name}</p>
                        <p>Hex: {color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verdict Palette */}
              <div className="flex flex-col gap-5">
                <h3 className="font-['Rethink_Sans',sans-serif] font-semibold text-[22px] tracking-[-0.22px] leading-[1.2]">
                  Verdict Palette
                </h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    { name: "Fabricated Purple", hex: "#940278", bg: "bg-[#940278]" },
                    { name: "Inaccurate Maroon", hex: "#B00035", bg: "bg-[#b00035]" },
                    { name: "Misleading Orange", hex: "#FF6524", bg: "bg-[#ff6524]" },
                    { name: "Accurate Yellow", hex: "#FFA024", bg: "bg-[#ffa024]" },
                  ].map((color) => (
                    <div key={color.hex} className="flex flex-col gap-[10px] items-center">
                      <div className={`${color.bg} w-full aspect-square max-w-[240px] rounded-full`} />
                      <div className="flex flex-col gap-1 font-['Rethink_Sans',sans-serif] font-medium text-[13px] tracking-[-0.13px] leading-[1.2]">
                        <p>{color.name}</p>
                        <p>Hex: {color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Module */}
        <section id="the-module" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8 lg:pb-[120px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 pb-8 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#152ae8]">05</span>
                  <span className="text-black">  The Module</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2] whitespace-pre-wrap">
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

        {/* The Grid */}
        <section id="the-grid" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8 lg:pb-[120px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 pb-8 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#152ae8]">06</span>
                  <span className="text-black">  The Grid</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
                  The grid is the structural foundation of every Saheeh layout. All elements — margins, spacing, type size, and component placement — are bound to a single base unit of 32px.
                </p>
              </div>
            </div>
            <img alt="Grid system example" className="w-full object-cover" src={imgImg1} />
            <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2] md:w-1/2">
              Margins are always 6.2% of the document width on each side. Column count is calculated, not fixed: subtract both margins from the document width and divide by 32. Round to the nearest whole number. The result will always approximate 29 columns at the reference size of 1080px.
              <br /><br />
              Leading values must always be multiples of 32pt, maintaining the baseline grid increment across all formats. The visible dot grid inherits the 32px spacing directly — one dot per grid intersection. Dot size scales between 2px and 4px depending on document size. The spacing interval never changes.
            </p>
          </div>
        </section>

        {/* Imagery */}
        <section id="imagery" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 md:px-8 md:py-8 lg:border-l lg:px-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#152ae8]">07</span>
                  <span className="text-black">  Imagery</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
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
                    <p className="text-black">{item.title}</p>
                    <p className="text-[#575757]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Illustrations */}
        <section id="illustrations" className="border-t border-[rgba(0,0,0,0.1)] px-5 py-8 pb-20 md:px-8 md:py-8 md:pb-20 lg:border-l lg:px-8 lg:pb-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 md:flex-row md:gap-8">
              <div className="md:flex-1">
                <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1]">
                  <span className="text-[#152ae8]">08</span>
                  <span className="text-black">  Illustrations</span>
                </h2>
              </div>
              <div className="md:flex-1">
                <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2]">
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
      </main>
    </div>
  );
}
