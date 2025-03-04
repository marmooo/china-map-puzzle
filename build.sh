mkdir -p docs
cp -r src/* docs
npx svgo@3.3.2 src/map.svg -o docs/map.svg
deno run -A bundle.js ./src/index.js > docs/index.js
drop-inline-css -r src -o docs
minify -r docs -o .
