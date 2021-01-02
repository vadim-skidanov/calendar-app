import { months, shortMonths } from "./monthsList";

export const displayMonth = (currentMonth) => {
  const parentCurrent = document.querySelector(".month__current-name");
  const parentPrev = document.querySelector(".month__prev-name");
  const parentNext = document.querySelector(".month__next-name");

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
      displayCurrent();
    });
  };

  displayCurrent();
  changeMonthBack();
  changeMonthNext();
};
