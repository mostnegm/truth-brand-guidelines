import logos from "../../assets/logo_editions.svg";

// The three logos from logo_editions.svg (2814 x 1170), in the same order as the drawing:
// Iraq, Egypt, then the master brand on the right. Each cell crops a box centred on its
// logo; all crops share one vertical band so the symbols line up across the row.
const CENTERS = [583, 1400, 2217];
const WIDTH = 720;
const Y = 400;
const HEIGHT = 350;

export default function LogoEditionsTable() {
  return (
    <figure>
      {/* 1px lines in the sidebar's border color, around and between the cells */}
      <ol className="grid grid-cols-3 border-l border-t border-[rgba(0,0,0,0.1)]">
        {CENTERS.map((cx) => (
          <li key={cx} className="flex items-center justify-center border-b border-r border-[rgba(0,0,0,0.1)] px-2 py-6 md:px-6 md:py-10">
            <svg viewBox={`${cx - WIDTH / 2} ${Y} ${WIDTH} ${HEIGHT}`} className="w-full" aria-hidden="true">
              <image href={logos} x="0" y="0" width="2814" height="1170" />
            </svg>
          </li>
        ))}
      </ol>
      <figcaption className="sr-only">Saheeh Iraq, Saheeh Masr and the Saheeh master logo</figcaption>
    </figure>
  );
}
