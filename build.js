#!/usr/bin/env node

const { build } = require("esbuild");
const { dependencies } = require("./package.json");

const entryFile = "src/index.tsx";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(dependencies),
  logLevel: "info",
  minify: true,
  sourcemap: true,
};

function buildESMAndCJS (watch = false) {
  build({
    ...shared,
    format: "esm",
    outfile: "./dist/index.esm.js",
    target: ["esnext", "node12.22.0"],
    watch,
  });
  
  build({
    ...shared,
    format: "cjs",
    outfile: "./dist/index.cjs.js",
    target: ["esnext", "node12.22.0"],
    watch,
  });
}


exports.buildESMAndCJS = buildESMAndCJS;

buildESMAndCJS();
