import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
    build: {
	lib: {
            entry: "./src/index.ts", // Specifies the entry point for building the library.
            name: "vite-react-ts-button", // Sets the name of the generated library.
            fileName: (format:string) => `index.${format}.js`, // Generates the output file name based on the format.
            formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
	},
	rollupOptions: {
            external: ["react", "react-dom", 'react/jsx-runtime'],
            //globals : { react : 'React', 'react-dom': 'react-dom'},
	},
	sourcemap: true, // Generates source maps for debugging.
	emptyOutDir: true, // Clears the output directory before building.
	minify: false,
    },
    plugins: [react(), dts()],
})
