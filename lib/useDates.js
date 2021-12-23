export function useDates() {
  let now = new Date();

  let d = now.getDate();
  let m = now.getMonth() + 1;
  let y = now.getFullYear();

  let DoW = now.getDay();
  let weekday =
    DoW === 0
      ? 'sunday'
      : DoW === 1
      ? 'monday'
      : DoW === 2
      ? 'tuesday'
      : DoW === 3
      ? 'wednesday'
      : DoW === 4
      ? 'thursday'
      : DoW === 5
      ? 'friday'
      : DoW === 6
      ? 'saturday'
      : 'sunday';

  let mStr =
    m === 0
      ? 'jan'
      : m === 1
      ? 'feb'
      : m === 2
      ? 'mar'
      : m === 3
      ? 'apr'
      : m === 4
      ? 'may'
      : m === 5
      ? 'jun'
      : m === 6
      ? 'jul'
      : m === 7
      ? 'aug'
      : m === 8
      ? 'sep'
      : m === 9
      ? 'oct'
      : m === 10
      ? 'nov'
      : m === 11
      ? 'dec'
      : '-';

  return { y: y, m: m, d: d, weekday: weekday, mStr: mStr };
}
