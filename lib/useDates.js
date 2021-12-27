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
    m === 1
      ? 'january'
      : m === 2
      ? 'februari'
      : m === 3
      ? 'mars'
      : m === 4
      ? 'april'
      : m === 5
      ? 'may'
      : m === 6
      ? 'june'
      : m === 7
      ? 'july'
      : m === 8
      ? 'august'
      : m === 9
      ? 'september'
      : m === 10
      ? 'october'
      : m === 11
      ? 'november'
      : m === 12
      ? 'december'
      : '-';

  return { y: y, m: m, d: d, weekday: weekday, mStr: mStr };
}
