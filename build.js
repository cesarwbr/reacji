#!/usr/bin/env node

const { build } = require("esbuild");
const { peerDependencies } = require("./package.json");
const { style } = require("@hyrious/esbuild-plugin-style");

const entryFile = "src/index.tsx";

function buildESMAndCJS (watch = false) {
  const shared = {
    bundle: true,
    entryPoints: [entryFile],
    // Treat all dependencies in package.json as externals to keep bundle size to a minimum
    external: Object.keys(peerDependencies),
    logLevel: "info",
    minify: true,
    sourcemap: true,
    target: ["esnext", "node12.22.0"],
    loader: {
      ".png": "dataurl",
    },
    watch,
    plugins: [style()],
  };

  build({
    ...shared,
    format: "esm",
    outfile: "./dist/index.esm.js",
  });
  
  build({
    ...shared,
    format: "cjs",
    outfile: "./dist/index.cjs.js",
  });
}


exports.buildESMAndCJS = buildESMAndCJS;

buildESMAndCJS();
