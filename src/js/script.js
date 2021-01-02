import { dateOfMonth, daysInMonth, startOfMonth } from "./components/date";
import { Week } from "./components/week";
import { year } from "./components/years";

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

  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const displayCurrent = () => {
    parentCurrent.textContent = months[currentMonth];
    if (currentMonth === 11) {
      parentNext.textContent = shortMonths[currentMonth - 11];
      parentPrev.textContent = shortMonths[currentMonth - 1];
    } else if (currentMonth === 0) {
      parentNext.textContent = shortMonths[currentMonth + 1];
      parentPrev.textContent = shortMonths[currentMonth + 11];
    } else {
      parentNext.textContent = shortMonths[currentMonth + 1];
      parentPrev.textContent = shortMonths[currentMonth - 1];
    }
  };

  const changeMonthBack = () => {
    goBack.addEventListener("click", () => {
      if (currentMonth < 1) {
        currentMonth += 11;
        parentCurrent.textContent = months[currentMonth];
      } else {
        currentMonth -= 1;
        parentCurrent.textContent = months[currentMonth];
      }
      displayCurrent();
    });
  };

  const changeMonthNext = () => {
    goNext.addEventListener("click", () => {
      if (currentMonth < 0) {
        currentMonth += 11;
        parentCurrent.textContent = months[currentMonth];
      } else if (currentMonth > 10) {
        currentMonth -= 11;
      } else {
        currentMonth += 1;
        parentCurrent.textContent = months[currentMonth];
      }
      displayCurrent();
    });
  };

  const goBack = document.querySelector(".month__prev");
  const goNext = document.querySelector(".month__next");

  // parentCurrent.textContent = months[currentMonth];

  // changeMonth();
  displayCurrent();
  changeMonthBack();
  changeMonthNext();
  // goBack.addEventListener("click", () => changeMonthBack("back"));
  // goNext.addEventListener("click", () => changeMonth("next"));
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
