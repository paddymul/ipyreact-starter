/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";


import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
/*
export default {
	input: './threejs-fiber.js',
	output: [
		{
			file: 'threejs-fiber.bundle.js',
			inlineDynamicImports: true,
			format: 'es'
		}
	],
	external: ["react", "react-dom", "react-reconciler", "react-reconciler/constant"],
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		nodeResolve({
			browser: true,
		}),
		commonjs({
			namedExports: {
				scheduler: [
					'unstable_runWithPriority',
					'unstable_IdlePriority',
					'unstable_now',
					'unstable_scheduleCallback',
					'unstable_cancelCallback',
				],
			}
		})
	],
};
*/

export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.ts", // Specifies the entry point for building the library.
            name: "vite-react-ts-button", // Sets the name of the generated library.
            fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
            formats: ["cjs", "es", "esm"], // Specifies the output formats (CommonJS and ES modules).
        },
        rollupOptions: {
            //external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
            external: ["react", "react-dom", 'react/jsx-runtime',  "react-reconciler", "react-reconciler/constant"],
            globals : { react : 'React', 'react-dom': 'react-dom'},
	    output: [
		{
			//file: 'ipyreact-tsxlib.rollup.bundle.js',
			inlineDynamicImports: true,
			format: 'es'
		}
	    ],
	    plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		nodeResolve({
			browser: true,
		}),
		commonjs({
			namedExports: {
				scheduler: [
					'unstable_runWithPriority',
					'unstable_IdlePriority',
					'unstable_now',
					'unstable_scheduleCallback',
					'unstable_cancelCallback',
				],
			}
		})
	],

        },
        sourcemap: true, // Generates source maps for debugging.
        emptyOutDir: true, // Clears the output directory before building.
        minify: false
    },
    plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./setupTests.ts",
    },
});
