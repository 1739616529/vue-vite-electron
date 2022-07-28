import { join } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import config from "../config";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    root: join(__dirname, ".."),
    mode: process.env.NODE_ENV,
    resolve: {
        alias: {
            src: join(__dirname, "../src"),
        },
    },
    base: "./",
    build: {
        outDir: join(__dirname, "../dist"),
        emptyOutDir: true,
        target: "esnext",
        minify: "esbuild",
    },
    server: {
        host: config.HOST,
        port: config.PROT,
    },
});
