import type { UserConfig } from "vite";

export default {
    // server: {
    //     host: "0.0.0.0",
    //     port: 3000,
    // },

    build: {
        // target: "esnext",
        outDir: "dist",
        minify: false,
        lib: {
            entry: ["entry/entry-complete"],
            // name: "@adyen/sortable",
            // name: "Sortable",
            fileName: (format) => `sortable.${format}.js`,
            // formats: ["es", "umd", "cjs"],
            formats: ["es"],
        },
        emptyOutDir: true,
    },
} satisfies UserConfig;
