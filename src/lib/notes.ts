/** Sort notes by week, then `order`, then id. Returns a new array. */
export function sortNotes<T extends { id: string; data: { week: number; order: number } }>(
  notes: readonly T[],
): T[] {
  return [...notes].sort(
    (a, b) => a.data.week - b.data.week || a.data.order - b.data.order || a.id.localeCompare(b.id),
  );
}
