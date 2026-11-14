#!/usr/bin/env bash
# 경력기술서 PDF 빌드 — index.html -> junha-youn-career.pdf
# 사용법: ./build.sh
set -euo pipefail
cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="junha-youn-career.pdf"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

"$CHROME" \
  --headless=new --disable-gpu --no-first-run --no-default-browser-check \
  --user-data-dir="$PROFILE" \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$OUT" \
  "file://$PWD/index.html" 2>/dev/null

echo "생성 완료: $PWD/$OUT ($(mdls -raw -name kMDItemNumberOfPages "$OUT")페이지)"
