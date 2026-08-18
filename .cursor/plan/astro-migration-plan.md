# Astro migration plan (content parity first)

## Goal

Migrate the site from Vite + Vue + `vite-plugin-md` to Astro while keeping all existing content, URLs, metadata, and post listing behavior working as it does now.

## Current behavior to preserve

- Markdown posts under `src/posts/*.md` become routable pages at `/posts/<slug>`.
- Frontmatter is used for:
  - page title and description (`title`, `description`)
  - listing cards (`name`, `thumbnail`)
  - tag filtering (`tags`)
  - sorting (`createdAt`)
- Read-time metadata is shown in cards/post meta (`reading-time`).
- Markdown rendering customizations:
  - heading anchors with `#` permalink
  - syntax highlighting (Prism-like output/classes)
  - external links with target/rel
  - custom containers (`::: lead`, `::: note`)
- Content index pages:
  - home page shows latest 3 posts
  - `/posts` shows all posts sorted descending by `createdAt`
  - `/tags/[tag]` filters posts by frontmatter tags

## Why content appears missing now

Most likely cause: the markdown toolchain (`vite-plugin-md` + related plugin assumptions) is no longer aligned with the current Vite stack, so markdown pages are not being registered/routes not generated as expected.

The Astro migration removes this fragile runtime route-generation path and replaces it with static content collections and explicit routing.

## Migration strategy

### Phase 1: Scaffold Astro without changing content source

1. Add Astro and integrations (`@astrojs/vue`, `@astrojs/tailwind`) and create `astro.config.mjs`.
2. Keep existing markdown files in place initially (`src/posts/*.md`) to minimize churn.
3. Bring over global styles from `src/index.css` and Tailwind config.
4. Verify a simple Astro page renders with existing layout styles.

### Phase 2: Move markdown pipeline to Astro-native content collections

1. Define `src/content.config.ts` with a `posts` collection schema matching current frontmatter:
   - required: `name`, `title`, `description`, `tags`, `createdAt`
   - optional: `thumbnail`, `layout`
2. Use `astro:content` (`getCollection('posts')`) instead of route metadata scraping from Vue Router.
3. Build static routes:
   - `src/pages/posts/[slug].astro` for individual posts
   - `src/pages/posts.astro` for list
   - `src/pages/index.astro` for latest posts
   - `src/pages/tags/[tag].astro` for tag archives

### Phase 3: Recreate markdown rendering features

1. Configure remark/rehype plugins equivalent to current markdown-it setup:
   - anchors/permalinks for headings
   - external link attributes
   - custom containers for `lead` and `note`
2. Configure syntax highlighting theme to match current look.
3. Ensure generated HTML continues to work with existing CSS classes (`.markdown-body`, `.text-lead`, etc).

### Phase 4: Keep existing Vue UI where needed

1. Reuse existing Vue components via Astro islands or direct component usage where practical (cards/buttons/header/footer).
2. Replace Vue Router-specific links with Astro links where needed.
3. Keep tag display semantics consistent with `src/api/tags.json`.

### Phase 5: SEO, 404, and build parity

1. Implement Astro `404.astro` that mirrors the current 404 content.
2. Ensure per-page `<title>`/description parity from frontmatter.
3. Confirm static build output and deployment behavior equivalent to current setup.

### Phase 6: Verification and rollout

1. Build parity checklist:
   - all current post URLs resolve
   - post counts match old site
   - tag pages return same post sets
   - read-time appears for every post
   - anchor links and code blocks render correctly
2. Run side-by-side link check (old vs Astro output) before removing old Vue/Vite pipeline.
3. After parity is confirmed, remove obsolete dependencies (`vite-plugin-md`, `vite-plugin-pages`, `vite-plugin-vue-layouts`, Vue Router path generation hooks).

## Compatibility risks / possible non-identical behavior

1. Exact HTML output from markdown may differ
   - Astro uses remark/rehype/markdown pipeline, not markdown-it by default.
   - Result: minor DOM/class differences can affect CSS selectors.
   - Mitigation: pin plugin stack and adjust CSS for output parity.

2. Prism class/output differences
   - Code block markup may differ from `markdown-it-prism`.
   - Result: small styling differences for syntax highlighting.
   - Mitigation: choose Prism-compatible highlighter/theme or add CSS compatibility layer.

3. Route name differences from Vue Router
   - Current components sometimes rely on named routes (`tags-tag`, `index`).
   - Result: link helpers need adaptation to path-based links in Astro.
   - Mitigation: replace named-route usage with explicit URL helpers.

4. Relative “Posted X ago” timing behavior
   - Current Vue computes on client render.
   - Astro can pre-render text at build time unless hydrated.
   - Mitigation: either keep client-side calculation (via small island/script) or switch to absolute date text if acceptable.

5. Custom container syntax support
   - `::: lead` / `::: note` needs explicit plugin support in Astro markdown config.
   - Mitigation: add remark container plugin and map to current classes.

## Points likely not possible to keep 100% identical

- Byte-for-byte identical rendered markdown HTML across all posts is unlikely because parser stacks differ.
- Syntax-highlight token wrapping may not be identical even when visual output matches.
- If we remove client hydration for date-relative text, “X ago” values may not update live after build.

## Definition of done

- All existing markdown content renders and is reachable at expected URLs.
- Metadata-driven listing/filtering works exactly as before from a user perspective.
- Major visual/styling parity for post pages, cards, tags, anchors, and code blocks.
- Old markdown dependency chain is removed from runtime path and no longer a single point of failure.
