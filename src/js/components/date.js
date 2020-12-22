export const dateOfMonth = (date) =>
  `<div class="date__day date__day-${date}">${date}</div>`;

export const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};
