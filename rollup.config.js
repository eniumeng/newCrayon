import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { eslint } from "rollup-plugin-eslint";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

const packages = require("./package.json");

const ENV = process.env.NODE_ENV;

const paths = {
  input: {
    root: ENV === "example" ? "example/index.js" : "src/index.js",
  },
  output: {
    root: ENV === "example" ? "example/dist/" : "dist/",
  },
};

const fileNames = {
  development: `${packages.name}.js`,
  example: `example.js`,
  production: `${packages.name}.min.js`,
};

const fileName = fileNames[ENV];

export default {
  input: `${paths.input.root}`,
  output: {
    file: `${paths.output.root}${fileName}`,
    format: "umd",
    name: `${packages.name}`,
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    eslint({
      include: ["src/**"],
      exclude: ["node_modules/**"],
    }),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
    replace({
      exclude: "node_modules/**",
      ENV: JSON.stringify(process.env.NODE_ENV),
      isBrowser: !!process.env.BROWSER,
    }),
    ENV === "production" && terser()
  ],
};
