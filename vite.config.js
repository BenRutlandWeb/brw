import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";
import Markdown from "vite-plugin-md";
import matter from "gray-matter";
import anchor from "markdown-it-anchor";
import Prism from "markdown-it-prism";
import Layouts from "vite-plugin-vue-layouts";
import { readFileSync } from "fs-extra";
import readingTime from "reading-time";
import container from "markdown-it-container";
import externalLinks from "markdown-it-external-links";

export default defineConfig({
    base: "/",
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, "./src"),
            },
        ],
    },
    server: {
        fs: {
            allow: ["."],
        },
    },
    plugins: [
        Markdown({
            markdownItSetup(md) {
                md.use(externalLinks, {
                    externalTarget: "_blank",
                    externalRel: "nofollow noopener noreferrer external",
                });
                md.use(anchor, {
                    permalink: anchor.permalink.linkInsideHeader({
                        symbol: `
<span class="sr-only">Jump to heading</span>
<span aria-hidden="true">#</span>
    `,
                        placement: "after",
                    }),
                });
                md.use(Prism);
                md.use(container, "lead", {
                    render: (tokens, idx) => {
                        const token = tokens[idx];
                        if (token.nesting === 1) {
                            return `<div class="text-lead">\n`;
                        } else {
                            return `</div>\n`;
                        }
                    },
                });
                md.use(container, "note", {
                    render: (tokens, idx) => {
                        const token = tokens[idx];
                        if (token.nesting === 1) {
                            return `<div class="rounded p-4 bg-blue-400 [&>p]:m-0">\n`;
                        } else {
                            return `</div>\n`;
                        }
                    },
                });
            },
            headEnabled: true,
        }),
        Vue({
            pagesDir: "src/pages",
            include: [/\.vue$/, /\.md$/],
        }),
        Components({
            dirs: ["src/components"],
            include: [/\.vue$/, /\.md$/],
        }),
        Pages({
            pagesDir: [
                {
                    dir: "src/pages",
                    baseRoute: "",
                },
                {
                    dir: "src/posts",
                    baseRoute: "posts",
                },
            ],
            extensions: ["vue", "md"],
            import: "async",
            extendRoute(route) {
                const path = resolve(__dirname, route.component.slice(1));

                if (path.endsWith(".md")) {
                    const md = readFileSync(path, "utf-8");
                    const { data, content } = matter(md);

                    route.meta = Object.assign(route.meta || {}, data);
                    route.meta.stats = readingTime(content);
                }

                return route;
            },
        }),
        Layouts(),
    ],
});
