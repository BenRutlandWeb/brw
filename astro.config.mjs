import { defineConfig, fontProviders } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import remarkDirective from "remark-directive";
import { remarkContainers } from "./src/lib/remark-containers.mjs";

export default defineConfig({
  site: "https://benrutlandweb.co.uk",
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.google(),
      weights: [300, 400, 500, 700, 800],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Roboto Mono",
      cssVariable: "--font-roboto-mono",
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "tokyo-night",
    },
    processor: unified({
      remarkPlugins: [remarkDirective, remarkContainers],
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: "_blank",
            rel: ["nofollow", "noopener", "noreferrer", "external"],
          },
        ],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            properties: {
              className: ["header-anchor"],
              "aria-label": "Jump to heading",
            },
            content: [
              { type: "text", value: " " },
              {
                type: "element",
                tagName: "span",
                properties: { className: ["sr-only"] },
                children: [{ type: "text", value: "Jump to heading" }],
              },
              {
                type: "element",
                tagName: "span",
                properties: { "aria-hidden": "true" },
                children: [{ type: "text", value: "#" }],
              },
            ],
          },
        ],
      ],
    }),
  },
});
