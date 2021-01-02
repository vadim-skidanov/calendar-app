import { dateOfMonth, daysInMonth, startOfMonth } from "./components/date";
import { Week } from "./components/week";
import { year } from "./components/years";
import { displayMonths } from "./helpers/displayMonths/displayMonths";

const date = new Date();
const currentYear = date.getFullYear();
let currentMonth = date.getMonth();

////////////////////  ! Year

const years = {
  "year__past-4": -4,
  "year__past-3": -3,
  "year__past-2": -2,
  "year__past-1": -1,
  year__current: 0,
  "year__next-1": 1,
  "year__next-2": 2,
  "year__next-3": 3,
  "year__next-4": 4,
};

const displayYear = () => {
  for (let className in years) {
    const parentYear = document.querySelector(".year__content");
    const y = currentYear + years[className];
    parentYear.innerHTML += year(y, className);
  }
};

////////////////////  ! Week

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const displayWeek = () => {
  const parentWeek = document.querySelector(".day-of-week");
  for (let day of daysOfWeek) {
    parentWeek.innerHTML += Week(day);
  }
};

////////////////////  ! Month

////////////////////  ! Date

const displayDate = () => {
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

displayWeek();
displayDate();
displayYear();
displayMonths(currentMonth);
