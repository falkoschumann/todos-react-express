export const Filter = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

export function pluralize(count, word) {
  return count > 1 ? `${word}s` : word;
}
