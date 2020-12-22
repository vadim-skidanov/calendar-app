import { dateOfMonth, daysInMonth } from "./components/date";
import { Week } from "./components/week";

const date = new Date();

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
    parentYear.innerHTML += `
       <div class="${className}">${date.getFullYear() + years[className]}</div>
    `;
  }
};

// const currentYear = new Date().getFullYear();

////////////////////  ! Date

// const dates = [];
// for (let i = 1; i <= 31; i++) {
//   dates.push(i);
// }

// const displayDate = () => {
//   const parentDate = document.querySelector(".date");
//   for (let day of dates) {
//     parentDate.innerHTML += dateOfMonth(day);
//   }
// };

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

  // const currentMonth = new Date();
  const prevMonth = date.getMonth() - 1;
  const nextMonth = date.getMonth() + 1;

  parentCurrent.textContent = months[date.getMonth()];

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
  const currMonth = daysInMonth(date.getMonth() + 1, date.getFullYear());
  const parentDate = document.querySelector(".date");

  for (let i = 1; i <= currMonth; i++) {
    parentDate.innerHTML += dateOfMonth(i);
  }

  const current = document.querySelector(`.date__day-${date.getDate()}`);
  current.classList.add("date__day-current");
};

displayMonth();
displayWeek();
displayDate();
displayYear();
