import { dateOfMonth, daysInMonth, startOfMonth } from "./components/date";
import { Week } from "./components/week";
import { year } from "./components/years";

const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

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

const displayMonth = () => {
  const parentCurrent = document.querySelector(".month__current-name");
  const parentPrev = document.querySelector(".month__prev-name");
  const parentNext = document.querySelector(".month__next-name");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const prevMonth = currentMonth - 1;
  const nextMonth = currentMonth + 1;

  parentCurrent.textContent = months[currentMonth];

  if (prevMonth < 0) {
    parentPrev.textContent = months[prevMonth + 12];
  } else {
    parentPrev.textContent = months[prevMonth];
  }

  if (nextMonth > 11) {
    parentNext.textContent = months[nextMonth - 12];
  } else {
    parentNext.textContent = months[nextMonth];
  }
};

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

displayMonth();
displayWeek();
displayDate();
displayYear();
