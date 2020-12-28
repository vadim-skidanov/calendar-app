export { dateOfMonth, daysInMonth, startOfMonth };

const dateOfMonth = (date) =>
  `<div class="date__day date__day-${date}">${date}</div>`;

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const startOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};
