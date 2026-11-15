// wordmark_table.svg is generated from wordmark_variations.svg (Jordan removed, a standalone
// "صحيح" added at the start of each row).
import wordmarks from "../../assets/wordmark_table.svg";

// The three wordmark groups from wordmark_variations.svg, one per row.
// Each row crops its band out of the whole drawing (764 x 640.5).
const ROWS = [
  { font: "Alyamama", y: 119.5 },
  { font: "Alexandria", y: 282.5 },
  { font: "Quest", y: 429.5 },
];
const X = 60;
const WIDTH = 645;
const HEIGHT = 90;

export default function WordmarkTable() {
  return (
    <figure>
      {/* 1px lines in the sidebar's border color, around and between the rows */}
      <ol className="border-l border-t border-[rgba(0,0,0,0.1)]">
        {ROWS.map(({ font, y }) => (
          <li key={font} className="relative flex items-center justify-center border-b border-r border-[rgba(0,0,0,0.1)] px-4 pb-8 pt-12 md:px-8 md:pb-12 md:pt-14">
            <span className="absolute left-2 top-2 font-['Rethink_Sans',sans-serif] font-normal text-[12px] md:text-[14px] leading-[1.2] text-[#737373] md:left-3 md:top-3">
              {font}
            </span>
            <svg viewBox={`${X} ${y} ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label={`Wordmarks set in ${font}`}>
              <image href={wordmarks} x="0" y="0" width="764" height="640.5" />
            </svg>
          </li>
        ))}
      </ol>
    </figure>
  );
}
