import { year } from "../../components/year";
import { displayDate } from "../displayDate/displayDate";
import { years } from "./yearList";

export const displayCurrentYear = (currentYear) => {
  let parentYear = "";
  for (let className in years) {
    const y = currentYear + years[className];
    parentYear += year(y, className);
  }
  return parentYear;
};

export const displayYear = (currentYear, currentMonth, date) => {
  const parentYear = document.querySelector(".year__content");
  const changeYear = () => {
    return new Date(`${currentMonth + 1}/${date.getDate()}/${currentYear}`);
  };

  const changeYearBack = () => {
    const goBack = document.querySelector(".year__arrow-up");
    goBack.addEventListener("click", () => {
      currentYear -= 1;
      parentYear.innerHTML = displayCurrentYear(currentYear);
      displayDate(currentMonth, currentYear, changeYear());
    });
  };

  const changeYearNext = () => {
    const goNext = document.querySelector(".year__arrow-down");
    goNext.addEventListener("click", () => {
      currentYear += 1;
      parentYear.innerHTML = displayCurrentYear(currentYear);
      displayDate(currentMonth, currentYear, changeYear());
    });
  };

  parentYear.innerHTML = displayCurrentYear(currentYear);
  changeYearBack();
  changeYearNext();
};
