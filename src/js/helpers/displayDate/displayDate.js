import { dateOfMonth, daysInMonth, startOfMonth } from "../../components/date";

export const displayDate = (currentMonth, currentYear, date) => {
  const currMonthNrDays = daysInMonth(currentMonth + 1, currentYear);
  const parentDate = document.querySelector(".date");

  for (let i = 1; i <= currMonthNrDays; i++) {
    parentDate.innerHTML += dateOfMonth(i);
  }

  const currentDate = document.querySelector(`.date__day-${date.getDate()}`);
  currentDate.classList.add("date__day-current");
  const className = document.querySelector(".date__day-1");
  className.classList.add(`date__day-start-${startOfMonth(date).getDay()}`);
};
