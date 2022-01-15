export function daysInMonth(month, year) {
  return month === 2
    ? year & 3 || (!(year % 25) && year & 15)
      ? 28
      : 29
    : 30 + ((month + (month >> 3)) & 1);
}

export function arrayFromInteger(days) {
  let arr = [];

  for (let index = 0; index < days; index++) {
    arr.push(index + 1);
  }

  return arr;
}
