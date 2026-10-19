#!/bin/sh
# Renders slides.html (served by the Vite dev server) to a 1920x1080 PDF.
# Usage: pnpm dev (in another terminal), then sh scripts/export-slides.sh
set -e
cd "$(dirname "$0")/.."
URL="${SLIDES_URL:-http://localhost:5173/slides.html}"
OUT="${1:-exports/brand-guidelines-slides.pdf}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p "$(dirname "$OUT")"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=15000 \
  --print-to-pdf="$OUT" "$URL" 2>/dev/null
echo "Wrote $OUT"
