import { months, shortMonths } from "./monthsList";
import { displayDate } from "../displayDate/displayDate";
import { displayCurrentYear, displayYear } from "../displayYear/displayYear";
import { displayEvent } from "../displayEvent/displayEvent";

export const displayMonth = (currentMonth, currentYear, date) => {
  const parentCurrent = document.querySelector(".month__current-name");
  const parentPrev = document.querySelector(".month__prev-name");
  const parentNext = document.querySelector(".month__next-name");
  const parentYear = document.querySelector(".year__content");

  const switchBetweenMonths = (next, prev) => {
    parentNext.textContent = shortMonths[currentMonth - next];
    parentPrev.textContent = shortMonths[currentMonth - prev];
  };

  const displayCurrent = () => {
    parentCurrent.textContent = months[currentMonth];
    if (currentMonth === 11) {
      switchBetweenMonths(11, 1);
    } else if (currentMonth === 0) {
      switchBetweenMonths(-1, -11);
    } else {
      switchBetweenMonths(-1, 1);
    }
    parentCurrent.id = currentMonth;
  };

  const changeMonth = () => {
    return new Date(`${currentMonth + 1}/${date.getDate()}/${currentYear}`);
  };

  const changeMonthBack = () => {
    const goBack = document.querySelector(".month__prev");

    goBack.addEventListener("click", () => {
      if (currentMonth < 1) {
        currentMonth += 11;
        currentYear -= 1;
        parentYear.innerHTML = displayCurrentYear(currentYear);
      } else {
        currentMonth -= 1;
      }
      displayCurrent();
      displayDate(currentMonth, currentYear, changeMonth());
      displayYear(currentYear, currentMonth, date);
      displayEvent(currentMonth, currentYear);
    });
  };

  const changeMonthNext = () => {
    const goNext = document.querySelector(".month__next");

    goNext.addEventListener("click", () => {
      if (currentMonth > 10) {
        currentMonth -= 11;
        currentYear += 1;
        parentYear.innerHTML = displayCurrentYear(currentYear);
      } else {
        currentMonth += 1;
      }

      displayCurrent();
      displayDate(currentMonth, currentYear, changeMonth());
      displayYear(currentYear, currentMonth, date);
      displayEvent(currentMonth, currentYear);
    });
  };

  displayCurrent();
  changeMonthBack();
  changeMonthNext();
};
