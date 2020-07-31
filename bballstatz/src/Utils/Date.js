export const getUTCNoonDate = date => {
  date.setUTCFullYear(date.getFullYear());
  date.setUTCMonth(date.getMonth());
  date.setUTCDate(date.getDate());
  date.setUTCHours(12, 0, 0, 0);
  return date;
};

export function formatDate(d) {
  let month = "" + (d.getUTCMonth() + 1),
    day = "" + d.getUTCDate(),
    year = d.getUTCFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  const formattedDate = [year, month, day].join("-");
  console.log(`formatted date: ${formattedDate}`);
  return formattedDate;
}

export function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

export function UTCNoonDateFromFormat(dateString) {
  const [year, month, day] = dateString.split("-");
  const date = new Date(dateString);
  date.setUTCFullYear(year);
  date.setUTCMonth(month - 1);
  date.setUTCDate(day);
  date.setUTCHours(12, 0, 0, 0);
  return date;
}

export function isValidFormattedDate(d) {
  /* TODO */
}
