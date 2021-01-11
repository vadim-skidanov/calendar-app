import { year } from "../../components/year";
import { displayDate } from "../displayDate/displayDate";
import { years } from "./yearList";
import { displayEvent } from "../displayEvent/displayEvent";
import { displayMonth } from "../displayMonth/displayMonth";

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

  const amendYear = (arrow, num) => {
    const change = document.querySelector(".year__arrow-" + arrow);
    change.addEventListener("click", () => {
      currentYear -= num;
      parentYear.innerHTML = displayCurrentYear(currentYear);
      displayDate(currentMonth, currentYear, changeYear());
      displayMonth(currentMonth, currentYear, date);
      displayEvent(currentMonth, currentYear, date);
    });
  };

  amendYear("back", 1);
  amendYear("next", -1);

  parentYear.innerHTML = displayCurrentYear(currentYear);
};
