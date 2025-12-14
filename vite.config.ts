import type { UserConfig } from "vite";

export default {
    server: {
        host: "0.0.0.0",
        port: 3000,
    },
    publicDir: false,
    build: {
        outDir: "dist",
        minify: false,
        lib: {
            entry: ["entry/entry-complete"],
            name: "Sortable",
            fileName: (format) => `sortable.${format}.js`,
            formats: ["es", "umd", "cjs"],
        },
        emptyOutDir: true,
    },
} satisfies UserConfig;
