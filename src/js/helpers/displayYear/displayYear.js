import { year } from "../../components/years";
import { displayDate } from "../displayDate/displayDate";

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

export const displayYear = (currentYear, currentMonth, date) => {
  const parentYear = document.querySelector(".year__content");
  const displayCurrent = () => {
    for (let className in years) {
      const y = currentYear + years[className];
      parentYear.innerHTML += year(y, className);
    }
  };

  const changeYear = () => {
    return new Date(`${currentMonth + 1}/${date.getDate()}/${currentYear}`);
  };

  const changeYearBack = () => {
    const goBack = document.querySelector(".year__arrow-up");
    goBack.addEventListener("click", () => {
      currentYear -= 1;
      parentYear.innerHTML = "";
      displayCurrent();
      displayDate(currentMonth, currentYear, changeYear());
    });
  };

  const changeYearNext = () => {
    const goNext = document.querySelector(".year__arrow-down");
    goNext.addEventListener("click", () => {
      currentYear += 1;
      parentYear.innerHTML = "";
      displayCurrent();
      displayDate(currentMonth, currentYear, changeYear());
    });
  };

  displayCurrent();
  changeYearBack();
  changeYearNext();
};
