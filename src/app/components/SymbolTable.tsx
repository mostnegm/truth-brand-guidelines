// The nine symbol variations (from symbol_variations.svg), shown as a numbered 3x3 table.
// The whole drawing is kept once below; each cell crops it with its own viewBox.

const black = { fill: "none", stroke: "#000", strokeMiterlimit: 10 } as const;
const s13 = { ...black, strokeWidth: 13 };
const s12 = { ...black, strokeWidth: 12 };
const s13Round = { ...s13, strokeLinecap: "round" } as const;
const white30 = { fill: "none", stroke: "#fff", strokeWidth: 30, strokeMiterlimit: 10 };
const white5 = { fill: "none", stroke: "#fff", strokeWidth: 5, strokeMiterlimit: 10 };
const solid = { stroke: "none" };
const whiteFill = { fill: "#fff", stroke: "none" };

function Drawing() {
  return (
    <>
      {/* 7: corner brackets around a ring */}
      <polyline style={s13} points="89.5 395.5 124.5 395.5 124.5 430.5" />
      <polyline style={s13} points="41.5 395.5 6.5 395.5 6.5 430.5" />
      <polyline style={s13} points="89.5 512.5 124.5 512.5 124.5 477.5" />
      <polyline style={s13} points="41.5 512.5 6.5 512.5 6.5 477.5" />
      <circle style={s13} cx="65.5" cy="454" r="33.5" />
      <circle style={solid} cx="65.5" cy="454" r="15.96" />
      <path style={white5} d="m56.72,454c0-4.85,3.93-8.78,8.78-8.78" />

      {/* 8: corner brackets around a solid circle */}
      <polyline style={s13} points="320.81 395.5 355.81 395.5 355.81 430.5" />
      <polyline style={s13} points="272.81 395.5 237.81 395.5 237.81 430.5" />
      <polyline style={s13} points="320.81 512.5 355.81 512.5 355.81 477.5" />
      <polyline style={s13} points="272.81 512.5 237.81 512.5 237.81 477.5" />
      <circle style={solid} cx="297.17" cy="453.79" r="33.02" />
      <path style={whiteFill} d="m283.04,453.79h-8.06c0-12.24,9.96-22.19,22.19-22.19v8.06c-7.79,0-14.13,6.34-14.13,14.13Z" />

      {/* 9: squares */}
      <rect style={solid} x="474.71" y="401.17" width="11.66" height="11.66" />
      <rect style={solid} x="515.19" y="389.5" width="23.33" height="23.33" />
      <rect style={solid} x="568.71" y="401.17" width="11.66" height="11.66" />
      <rect style={solid} x="474.71" y="495.17" width="11.66" height="11.66" />
      <rect style={solid} x="463.04" y="441.65" width="23.33" height="23.33" />
      <rect style={solid} x="515.19" y="495.17" width="23.33" height="23.33" />
      <rect style={solid} x="568.71" y="495.17" width="11.66" height="11.66" />
      <rect style={solid} x="568.71" y="441.65" width="23.33" height="23.33" />
      <circle style={solid} cx="527.65" cy="453.96" r="20.48" />
      <path style={white5} d="m516.39,453.96c0-6.22,5.04-11.26,11.26-11.26" />

      {/* 5: ring with four inward arrows */}
      <circle style={s13} cx="64.62" cy="81.86" r="57.09" />
      <polygon style={solid} points="121.29 89.86 96.29 81.86 121.29 73.86 121.29 89.86" />
      <polygon style={solid} points="7.29 73.63 32.29 81.63 7.29 89.63 7.29 73.63" />
      <polygon style={solid} points="56.17 138.75 64.17 113.75 72.17 138.75 56.17 138.75" />
      <polygon style={solid} points="72.41 24.75 64.41 49.75 56.41 24.75 72.41 24.75" />
      <circle style={solid} cx="64.44" cy="81.74" r="16.85" />
      <path style={white5} d="m55.18,81.74c0-5.12,4.15-9.27,9.27-9.27" />

      {/* 2: ring cut into quarters */}
      <circle style={s13} cx="294.62" cy="81.7" r="57.09" />
      <line style={white30} x1="294.62" y1="0" x2="294.62" y2="163.41" />
      <line style={white30} x1="376.33" y1="81.7" x2="212.92" y2="81.7" />
      <circle style={solid} cx="294.14" cy="81.99" r="27.02" />
      <path style={whiteFill} d="m283.29,81.99h-8.02c0-10.41,8.47-18.87,18.87-18.87v8.02c-5.98,0-10.85,4.87-10.85,10.85Z" />

      {/* 3: four arcs */}
      <path style={s13} d="m471.56,97.51c5.49,19.09,20.67,34.06,39.88,39.28" />
      <path style={s13} d="m541.43,136.79c19.21-5.22,34.4-20.21,39.89-39.32" />
      <path style={s13} d="m581.43,66.31c-5.39-19.28-20.65-34.44-39.99-39.7" />
      <path style={s13} d="m511.43,26.61c-19.34,5.25-34.61,20.41-39.99,39.7" />
      <circle style={solid} cx="525.95" cy="81.99" r="27.02" />
      <path style={whiteFill} d="m515.1,81.99h-8.02c0-10.41,8.47-18.87,18.87-18.87v8.02c-5.98,0-10.85,4.87-10.85,10.85Z" />

      {/* 4: ring with tick marks */}
      <circle style={s12} cx="63.62" cy="267.86" r="57.09" />
      <line style={s12} x1="120.29" y1="267.86" x2="102.29" y2="267.86" />
      <line style={s12} x1="24.29" y1="267.63" x2="6.29" y2="267.63" />
      <line style={s12} x1="63.17" y1="324.75" x2="63.17" y2="306.75" />
      <line style={s12} x1="63.41" y1="228.75" x2="63.41" y2="210.75" />
      <circle style={solid} cx="63.44" cy="267.74" r="16.85" />
      <path style={white5} d="m54.18,267.74c0-5.12,4.15-9.27,9.27-9.27" />

      {/* 6: ring with inward triangles */}
      <circle style={s13} cx="524.33" cy="267.85" r="57.09" />
      <circle style={solid} cx="524.33" cy="267.85" r="16.85" />
      <path style={white5} d="m515.06,267.85c0-5.12,4.15-9.27,9.27-9.27" />
      <polygon style={solid} points="532.32 231.39 524.33 242.97 516.34 231.39 532.32 231.39" />
      <polygon style={solid} points="516.34 304.32 524.33 292.73 532.32 304.32 516.34 304.32" />
      <polygon style={solid} points="560.8 275.84 549.21 267.85 560.8 259.86 560.8 275.84" />
      <polygon style={solid} points="487.86 259.86 499.45 267.85 487.86 275.84 487.86 259.86" />

      {/* 1: two outer arcs around a ring */}
      <path style={solid} d="m241.83,262.29c2.72-26.34,25.04-46.96,52.09-46.96s49.37,20.61,52.09,46.96h13.04c-2.76-33.52-30.91-59.96-65.13-59.96s-62.37,26.44-65.13,59.96h13.04Z" />
      <path style={solid} d="m345.99,273.29c-2.8,26.26-25.08,46.79-52.07,46.79s-49.27-20.52-52.07-46.79h-13.05c2.85,33.44,30.95,59.79,65.12,59.79s62.27-26.35,65.12-59.79h-13.05Z" />
      <circle style={s13Round} cx="293.92" cy="267.7" r="33.5" />
      <circle style={solid} cx="293.92" cy="267.7" r="15.96" />
      <path style={white5} d="m285.14,267.7c0-4.85,3.93-8.78,8.78-8.78" />
    </>
  );
}

// Center of each symbol in the drawing, in table order (1 and 5 swapped from the drawing's layout).
const CENTERS: [number, number][] = [
  [293.9, 267.7], [294.6, 81.7], [526.4, 81.7],
  [63.4, 267.8], [64.6, 81.8], [524.3, 267.9],
  [65.5, 454], [296.8, 454], [527.5, 454],
];
const HALF = 66; // each crop is 132 x 132 drawing units

export default function SymbolTable() {
  return (
    <figure>
      {/* 1px lines in the sidebar's border color, around and between the cells */}
      <ol className="grid grid-cols-3 border-l border-t border-[rgba(0,0,0,0.1)]">
        {CENTERS.map(([x, y], i) => (
          <li key={i} className="relative flex aspect-square items-center justify-center border-b border-r border-[rgba(0,0,0,0.1)]">
            <span className="absolute left-2 top-2 font-['Rethink_Sans',sans-serif] font-normal text-[12px] md:text-[14px] leading-[1.2] text-[#737373] md:left-3 md:top-3">
              {i + 1}
            </span>
            <svg
              viewBox={`${x - HALF} ${y - HALF} ${HALF * 2} ${HALF * 2}`}
              className="w-[46%]"
              role="img"
              aria-label={`Symbol variation ${i + 1}`}
            >
              <Drawing />
            </svg>
          </li>
        ))}
      </ol>
    </figure>
  );
}
