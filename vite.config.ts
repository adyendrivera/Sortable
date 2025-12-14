import type { UserConfig } from "vite";

export default {
    server: {
        host: "0.0.0.0",
        port: 3000,
    },

    build: {
        target: "esnext",
        outDir: "dist",
        lib: {
            entry: ["src/Sortable.js"],
            name: "@adyen/sortable",
            fileName: (format) => `sortable.${format}.js`,
            formats: ["es", "umd"],
        },
        emptyOutDir: true,
    },
} satisfies UserConfig;
