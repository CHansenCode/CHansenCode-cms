export const monthToString = int => {
  switch (int) {
    case 0 || '00':
      return 'jan';
    case 1 || '01':
      return 'feb';
    case 2 || '02':
      return 'mar';
    case 3 || '03':
      return 'apr';
    case 4 || '04':
      return 'may';
    case 5 || '05':
      return 'jun';
    case 6 || '06':
      return 'jul';
    case 7 || '07':
      return 'aug';
    case 8 || '08':
      return 'sep';
    case 9 || '09':
      return 'oct';
    case 10:
      return 'nov';
    case 11:
      return 'dec';

    default:
      '-';
  }
};
