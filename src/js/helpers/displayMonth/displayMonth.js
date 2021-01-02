import { months, shortMonths } from "./monthsList";
import { displayDate } from "../displayDate/displayDate";

export const displayMonth = (currentMonth, currentYear, date) => {
  const parentCurrent = document.querySelector(".month__current-name");
  const parentPrev = document.querySelector(".month__prev-name");
  const parentNext = document.querySelector(".month__next-name");

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
  };

  const changeMonthBack = () => {
    const goBack = document.querySelector(".month__prev");

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
    const goNext = document.querySelector(".month__next");

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

      const newDate = new Date(
        `${currentMonth + 1}/${date.getDate()}/${currentYear}`
      );

      displayCurrent();
      displayDate(currentMonth, currentYear, newDate);
    });
  };

  displayCurrent();
  changeMonthBack();
  changeMonthNext();
};
