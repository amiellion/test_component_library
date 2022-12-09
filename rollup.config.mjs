import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };
// NEW
import postcss from "rollup-plugin-postcss";

export default [
    {

        input: "src/index.ts",
        output: [

            {
                preserveModules: true,
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                preserveModules: true,
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),

            // NEW
            postcss(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],

        // NEW
        external: [/\.css$/],
    },
];