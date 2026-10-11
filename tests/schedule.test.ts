import { describe, it, expect } from 'vitest';
import { breaks, meetings, seasons } from '../src/data/schedule';
import { isSunday, meetingForWeek, timeline } from '../src/lib/schedule';

describe('schedule data', () => {
  it('has 21 meetings numbered 1..21 in order', () => {
    expect(meetings).toHaveLength(21);
    expect(meetings.map((m) => m.week)).toEqual(Array.from({ length: 21 }, (_, i) => i + 1));
  });

  it('has strictly increasing dates', () => {
    for (let i = 1; i < meetings.length; i++) {
      expect(meetings[i].date > meetings[i - 1].date).toBe(true);
    }
  });

  it('holds every meeting and break on a Sunday', () => {
    for (const m of meetings) expect(isSunday(m.date), m.date).toBe(true);
    for (const b of breaks) expect(isSunday(b.date), b.date).toBe(true);
  });

  it('never schedules a meeting on a break date', () => {
    const breakDates = new Set(breaks.map((b) => b.date));
    expect(meetings.filter((m) => breakDates.has(m.date))).toEqual([]);
  });

  it('assigns a presenter to every meeting from week 2 on', () => {
    const assigned = meetings.filter((m) => m.week >= 2);
    expect(assigned).toHaveLength(20);
    for (const m of assigned) expect(m.presenter, `week ${m.week}`).toBeTruthy();
  });

  it('refers only to known seasons', () => {
    const ids = new Set(seasons.map((s) => s.id));
    expect(meetings.every((m) => ids.has(m.season))).toBe(true);
  });
});

describe('timeline', () => {
  const entries = timeline(meetings, breaks);
  const dateOf = (e: (typeof entries)[number]) => (e.kind === 'meeting' ? e.meeting.date : e.break.date);

  it('merges meetings and breaks into 24 entries sorted by date', () => {
    expect(entries).toHaveLength(24);
    const dates = entries.map(dateOf);
    expect(dates).toEqual([...dates].sort());
  });
});

describe('meetingForWeek', () => {
  it('returns the meeting for a known week', () => {
    expect(meetingForWeek(1, meetings)?.chapters).toBe('Ch. 1–2');
  });

  it('returns undefined for an unknown week', () => {
    expect(meetingForWeek(99, meetings)).toBeUndefined();
  });
});
