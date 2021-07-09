import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
      },
    ],
    plugins: [
      postcss({
        extensions: [".css"],
        plugins: [],
        minimize: true,
      }),
      json(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"]
      }),
      external(),
      resolve(),
      terser(),
    ]
  }
];
