mkdir -p docs
cp -r src/* docs
npx svgo@4.0.0 src/map.svg -o docs/map.svg
drop-inline-css -r src -o docs
minify -r docs -o .
deno bundle src/index.js -o docs/index.js
