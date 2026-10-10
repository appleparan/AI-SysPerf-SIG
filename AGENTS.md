# AGENTS.md

Korean study notes for the book "AI Systems Performance Engineering", run by PyTorchKR.
The site is built with Astro 7, MDX, and Tailwind CSS v4. One session is one file:
`src/content/sessions/NN-*.mdx`. Members live in `src/data/members.ts`.

## Commands

Use bun, not npm.

```bash
bun install
bun run dev
bun run build
bun run test   # build first; the ToC test reads dist/
```

## Writing session notes

- Write prose in Korean. Keep English technical terms as they are.
- State facts first. Add context after.
- Frontmatter fields:
  - `title`: string
  - `date`: string, `YYYY-MM-DD`
  - `week`: number
  - `chapters`: string, for example `Ch. 1–2`
  - `presenters`: array of GitHub ids, default `[]`
- Use `##` and `###` headings. The table of contents shows only these two levels.

## Adding a member

Add an entry to `src/data/members.ts` with `name` and `github`.
Presented weeks are derived from each session's `presenters` field. Do not list them by hand.

## MDX gotchas

- Escape `{` and `}` in prose as `\{` and `\}`; MDX reads them as JSX.
- Use self-closing tags: `<br />`, `<img ... />`.
- Leave a blank line between an HTML tag such as `<div>` and Markdown inside it.
- Math uses `$...$` and `$$...$$` (remark-math + KaTeX).
- Article prose rules in `src/styles/global.css` live in `@layer base`, so Tailwind classes written in MDX override them. Keep new rules for MDX content inside a layer; an unlayered rule silently beats every utility.
- In an Astro component, a dark-mode rule must be written `:global([data-theme='dark']) .x`. A plain `[data-theme='dark'] .x` gets scoped and never matches.
