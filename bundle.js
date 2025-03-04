import { bundle } from "jsr:@deno/emit";
import { minify } from "npm:@swc/core";

// const url = new URL(import.meta.resolve(Deno.args[0]));
// const { code } = await bundle(url);
// console.log(code);
const url = new URL(import.meta.resolve(Deno.args[0]));
const { code } = await bundle(url);
const minified = await minify(code, {
  module: true,
  compress: true,
  mangle: true,
  sourceMap: false,
});
console.log(minified.code);
