import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const filePath = join(import.meta.dirname, '..', 'dist', 'index.html');

describe('Index page', () => {
  let html: string;

  beforeAll(() => {
    if (!existsSync(filePath)) {
      throw new Error(`Build output not found: ${filePath}. Run 'bun run build' first.`);
    }
    html = readFileSync(filePath, 'utf-8');
  });

  it('shows the season headings', () => {
    expect(html).toContain('시즌 1 · 킥오프와 인프라');
  });

  it('shows the last meeting and a break', () => {
    expect(html).toContain('21회');
    expect(html).toContain('설 연휴 휴식');
  });

  it('links to the orientation note', () => {
    expect(html).toContain('href="/notes/01-orientation"');
  });

  it('renders one row per meeting', () => {
    expect(html.match(/class="lecture-item meeting-item"/g)).toHaveLength(21);
  });
});
