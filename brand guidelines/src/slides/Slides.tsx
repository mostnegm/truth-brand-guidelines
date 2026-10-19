import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;
const SLIDE_PADDING = 64;

// A fixed 1920x1080 page. Content that is taller than the slide is scaled
// down to fit; it never flows onto the next slide.
function Slide({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const fit = () => {
      const available = SLIDE_HEIGHT - SLIDE_PADDING * 2;
      setScale(Math.min(1, available / (el.scrollHeight || available)));
    };
    fit();
    document.fonts.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const innerWidth = SLIDE_WIDTH - SLIDE_PADDING * 2;

  return (
    <div
      className="relative overflow-hidden bg-white break-after-page"
      style={{ width: SLIDE_WIDTH, height: SLIDE_HEIGHT, padding: SLIDE_PADDING }}
    >
      <div
        ref={contentRef}
        style={{ width: innerWidth / scale, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {children}
      </div>
    </div>
  );
}

function TypographySlide() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-row gap-8 pb-10">
        <div className="flex-1">
          <h2 className="font-['Rethink_Sans',sans-serif] font-medium text-[60px] tracking-[-0.6px] leading-[1.1] text-[#070b16]">
            Typography
          </h2>
        </div>
        <div className="flex flex-col gap-10 flex-1">
          <div className="font-['Rethink_Sans',sans-serif] font-normal text-[15px] tracking-[-0.15px] text-[#575757] leading-[1.2] space-y-4">
            <p>
              Primary typeface <span className="text-[#155ee7]">(Alyamama)</span> carries the journalism and editorial voice. It is used for headlines, body text, pull quotes, and display numerals.
            </p>
            <p>
              Secondary typeface <span className="text-[#155ee7]">(Changa)</span> carries the system and the interface language. It is used for verdict tags, type cards, navigation labels, dates, and bylines.
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
          <p className="font-['Alyamama',sans-serif] font-bold text-[60px] tracking-[-1.2px] leading-[1.3] text-right" dir="auto">
            أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي
          </p>
          <p className="font-['Alyamama',sans-serif] font-bold text-[60px] tracking-[-1.2px] leading-[1.3] text-right" dir="auto">
            ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-['Rethink_Sans',sans-serif] font-medium text-[15px] tracking-[-0.3px]">
            Secondary Typeface
          </p>
          <p className="font-['Changa',sans-serif] text-[60px] tracking-[-1.2px] leading-[1.3] text-right" dir="auto">
            أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي
          </p>
          <p className="font-['Changa',sans-serif] text-[60px] tracking-[-1.2px] leading-[1.3] text-right" dir="auto">
            ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Slides() {
  return (
    <>
      <Slide>
        <TypographySlide />
      </Slide>
    </>
  );
}
