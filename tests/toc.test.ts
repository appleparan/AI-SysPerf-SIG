import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const distDir = join(import.meta.dirname, "..", "dist");

function readBuildOutput(pagePath: string): string {
  const filePath = join(distDir, pagePath, "index.html");
  if (!existsSync(filePath)) {
    throw new Error(`Build output not found: ${filePath}. Run 'bun run build' first.`);
  }
  return readFileSync(filePath, "utf-8");
}

describe("Table of Contents", () => {
  let sessionHtml: string;
  let indexHtml: string;

  beforeAll(() => {
    sessionHtml = readBuildOutput("sessions/01-orientation");
    indexHtml = readBuildOutput("");
  });

  it("renders ToC sidebar on session pages", () => {
    expect(sessionHtml).toContain('class="toc-sidebar"');
    expect(sessionHtml).toContain('class="toc-list"');
  });

  it("does not render ToC on index page", () => {
    expect(indexHtml).not.toContain("toc-sidebar");
    expect(indexHtml).not.toContain("lecture-grid");
  });

  it("renders lecture-grid wrapper on session pages", () => {
    expect(sessionHtml).toContain('class="lecture-grid"');
  });

  it("contains h2 ToC items for session headings", () => {
    const h2Items = sessionHtml.match(/toc-item toc-h2/g);
    expect(h2Items).not.toBeNull();
    expect(h2Items!.length).toBeGreaterThan(0);
  });

  it("contains h3 ToC items for subsections", () => {
    const h3Items = sessionHtml.match(/toc-item toc-h3/g);
    expect(h3Items).not.toBeNull();
    expect(h3Items!.length).toBeGreaterThan(0);
  });

  it("ToC links point to heading IDs with # prefix", () => {
    const tocLinkPattern = /class="toc-item toc-h\d">\s*<a href="#[^"]+"/g;
    const matches = sessionHtml.match(tocLinkPattern);
    expect(matches).not.toBeNull();
    expect(matches!.length).toBeGreaterThan(0);
  });

  it("has accessible ToC title with aria-labelledby", () => {
    expect(sessionHtml).toContain('id="toc-heading"');
    expect(sessionHtml).toContain('aria-labelledby="toc-heading"');
  });

  it("heading elements have id attributes for ToC anchoring", () => {
    const headingWithId = sessionHtml.match(/<h2 id="[^"]+"/g);
    expect(headingWithId).not.toBeNull();
    expect(headingWithId!.length).toBeGreaterThan(0);
  });
});

describe("ToC across all session pages", () => {
  const sessionPages = ["sessions/01-orientation"];

  it.each(sessionPages)("%s has ToC sidebar", (page) => {
    const html = readBuildOutput(page);
    expect(html).toContain('class="toc-sidebar"');
    expect(html).toContain('class="lecture-grid"');
  });
});

describe("Mobile ToC", () => {
  let sessionHtml: string;
  let indexHtml: string;

  beforeAll(() => {
    sessionHtml = readBuildOutput("sessions/01-orientation");
    indexHtml = readBuildOutput("");
  });

  it("renders a toc-toggle button with correct aria attributes", () => {
    expect(sessionHtml).toContain('class="toc-toggle"');
    expect(sessionHtml).toContain('aria-expanded="false"');
    expect(sessionHtml).toContain('aria-controls="toc-sidebar"');
  });

  it("renders a toc-backdrop element", () => {
    expect(sessionHtml).toContain('class="toc-backdrop"');
  });

  it("gives the ToC nav an id of toc-sidebar", () => {
    expect(sessionHtml).toContain('id="toc-sidebar"');
  });

  it("does not render mobile ToC markup on the index page", () => {
    expect(indexHtml).not.toContain("toc-toggle");
    expect(indexHtml).not.toContain("toc-backdrop");
  });
});
