import type { Member } from '../data/members';

/** Return the sorted, unique weeks in which `github` is a presenter (case-insensitive). */
export function presentedWeeks(
  github: string,
  sessions: ReadonlyArray<{ week: number; presenters: readonly string[] }>,
): number[] {
  const id = github.toLowerCase();
  const weeks = sessions
    .filter((s) => s.presenters.some((p) => p.toLowerCase() === id))
    .map((s) => s.week);
  return [...new Set(weeks)].sort((a, b) => a - b);
}

/** Return the display name for a GitHub id, or the id itself when unknown. */
export function memberName(github: string, members: readonly Member[]): string {
  const id = github.toLowerCase();
  return members.find((m) => m.github.toLowerCase() === id)?.name ?? github;
}
