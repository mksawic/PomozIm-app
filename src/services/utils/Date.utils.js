export const twoDigits = date => (date < 10 ? '0' + date : '' + date);

export const dateDayMonth = createdAt => {
  const date = new Date(createdAt);
  let day = twoDigits(date.getDate());
  const month = [
    'STY',
    'LUT',
    'MAR',
    'KWI',
    'MAJ',
    'CZE',
    'LIP',
    'SIE',
    'WRZ',
    'PAŹ',
    'LIS',
    'GRU'
  ][date.getMonth()];
  return `${day}\n${month}`;
};

export const fullDate = date =>
  `${twoDigits(date.getDate())}-${twoDigits(
    date.getMonth() + 1
  )}-${date.getFullYear()}`;

export const eventDate = date =>
  `${date.getFullYear()}-${twoDigits(date.getMonth() + 1)}-${twoDigits(
    date.getDate()
  )}`;
