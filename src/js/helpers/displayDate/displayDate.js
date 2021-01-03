import { dateOfMonth, daysInMonth, startOfMonth } from "../../components/date";

export const displayDate = (currentMonth, currentYear, date) => {
  const currMonthNrDays = daysInMonth(currentMonth + 1, currentYear);
  const parentDate = document.querySelector(".date");
  parentDate.innerHTML = "";
  for (let i = 1; i <= currMonthNrDays; i++) {
    parentDate.innerHTML += dateOfMonth(i);
  }

  const cDate = new Date();
  const cMonth = cDate.getMonth();
  const cYear = cDate.getFullYear();
  if (cMonth === currentMonth && cYear === currentYear) {
    const currentDate = document.querySelector(`.date__day-${date.getDate()}`);
    currentDate.classList.add("date__day-current");
  }

  const className = document.querySelector(".date__day-1");
  let day = startOfMonth(date).getDay();
  day = day === 0 ? 7 : day;
  className.classList.add(`date__day-start-${day}`);
};
