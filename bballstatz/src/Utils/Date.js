export const getUTCNoonDate = date => {
  date.setUTCFullYear(date.getFullYear());
  date.setUTCMonth(date.getMonth());
  date.setUTCDate(date.getDate());
  date.setUTCHours(12, 0, 0, 0);
  return date;
};

export const formatDate = date => {
  let month = "" + (date.getMonth() + 1),
    day = "" + date.getDate(),
    year = date.getFullYear();

  return `${month}-${day}-${year}`;
};

export function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
