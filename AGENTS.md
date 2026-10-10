# AGENTS.md

Korean study notes for the book "AI Systems Performance Engineering", run by PyTorchKR.
The site is built with Astro 7, MDX, and Tailwind CSS v4. The study schedule lives in
`src/data/schedule.ts`. Presentation notes are MDX files in `src/content/notes/NN-*.mdx`.
Members live in `src/data/members.ts`.

## Commands

Use bun, not npm.

```bash
bun install
bun run dev
bun run build
bun run test   # build first; the ToC test reads dist/
```

## Writing notes

- Write prose in Korean. Keep English technical terms as they are.
- State facts first. Add context after.
- A note belongs to a meeting by `week`. Several notes can share one week.
- Frontmatter fields:
  - `title`: string
  - `week`: number, the meeting number in `src/data/schedule.ts`
  - `presenters`: array of GitHub ids, default `[]`
  - `order`: number, optional, default `0`; sorts notes within a week
- The meeting date and chapters come from `src/data/schedule.ts`. To change the plan, edit that file only.
- Use `##` and `###` headings. The table of contents shows only these two levels.

## Adding a member

Add an entry to `src/data/members.ts` with `name` and `github`.
Presented weeks are derived from each note's `presenters` field. Do not list them by hand.

## MDX gotchas

- Escape `{` and `}` in prose as `\{` and `\}`; MDX reads them as JSX.
- Use self-closing tags: `<br />`, `<img ... />`.
- Leave a blank line between an HTML tag such as `<div>` and Markdown inside it.
- Math uses `$...$` and `$$...$$` (remark-math + KaTeX).
- Article prose rules in `src/styles/global.css` live in `@layer base`, so Tailwind classes written in MDX override them. Keep new rules for MDX content inside a layer; an unlayered rule silently beats every utility.
- In an Astro component, a dark-mode rule must be written `:global([data-theme='dark']) .x`. A plain `[data-theme='dark'] .x` gets scoped and never matches.
