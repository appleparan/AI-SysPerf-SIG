import { describe, it, expect } from 'vitest';
import { memberName, presentedWeeks } from '../src/lib/members';

const sessions = [
  { week: 3, presenters: ['AppleParan'] },
  { week: 1, presenters: ['appleparan', 'other'] },
  { week: 2, presenters: ['other'] },
];

describe('presentedWeeks', () => {
  it('returns weeks sorted ascending', () => {
    expect(presentedWeeks('other', sessions)).toEqual([1, 2]);
  });

  it('matches ids case-insensitively', () => {
    expect(presentedWeeks('appleparan', sessions)).toEqual([1, 3]);
  });

  it('returns an empty array when the member never presented', () => {
    expect(presentedWeeks('nobody', sessions)).toEqual([]);
  });
});

describe('memberName', () => {
  const members = [{ name: '김종수', github: 'appleparan' }];

  it('returns the display name for a known id', () => {
    expect(memberName('appleparan', members)).toBe('김종수');
  });

  it('returns the raw id for an unknown id', () => {
    expect(memberName('stranger', members)).toBe('stranger');
  });
});
