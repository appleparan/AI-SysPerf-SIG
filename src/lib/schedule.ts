import type { Break, Meeting } from '../data/schedule';

export type TimelineEntry =
  | { kind: 'meeting'; meeting: Meeting }
  | { kind: 'break'; break: Break };

/** Return the meeting held in `week`, or undefined when the schedule has none. */
export function meetingForWeek(week: number, meetings: readonly Meeting[]): Meeting | undefined {
  return meetings.find((m) => m.week === week);
}

/** Merge meetings and breaks into one list sorted by date. */
export function timeline(meetings: readonly Meeting[], breaks: readonly Break[]): TimelineEntry[] {
  const entries: TimelineEntry[] = [
    ...meetings.map((meeting) => ({ kind: 'meeting' as const, meeting })),
    ...breaks.map((b) => ({ kind: 'break' as const, break: b })),
  ];
  const dateOf = (e: TimelineEntry): string => (e.kind === 'meeting' ? e.meeting.date : e.break.date);
  return entries.sort((a, b) => dateOf(a).localeCompare(dateOf(b)));
}

/** Return true when the `YYYY-MM-DD` date falls on a Sunday. */
export function isSunday(date: string): boolean {
  return new Date(date + 'T00:00:00Z').getUTCDay() === 0;
}
