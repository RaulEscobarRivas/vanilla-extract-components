const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const cleanup = require("rollup-plugin-cleanup");
const typescript = require("@rollup/plugin-typescript");
const renameNodeModules = require("rollup-plugin-rename-node-modules");
import pkg from "./package.json";

module.exports = [
  {
    external: [
      "@vanilla-extract/css",
      "react",
      "react-dom",
      ...Object.keys(pkg.dependencies),
    ],
    input: {
      index: "src/index.ts",
    },
    output: [
      {
        dir: "dist",
        format: "cjs",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      renameNodeModules("modules"),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        plugins: ["@vanilla-extract/babel-plugin"]
      }),
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        preferBuiltins: false,
      }),
      commonjs(),
      typescript(),
      cleanup({
        comments: "istanbul",
      }),
    ],
  },
];
