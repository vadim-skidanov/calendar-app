import { months, shortMonths } from "./monthsList";

export const displayMonths = (currentMonth) => {
  const parentCurrent = document.querySelector(".month__current-name");
  const parentPrev = document.querySelector(".month__prev-name");
  const parentNext = document.querySelector(".month__next-name");

  const switchSideMonthName = (next, prev) => {
    parentNext.textContent = shortMonths[currentMonth + next];
    parentPrev.textContent = shortMonths[currentMonth + prev];
  };

  const displayCurrent = () => {
    parentCurrent.textContent = months[currentMonth];

    if (currentMonth === 11) {
      switchSideMonthName(-11, -1);
    } else if (currentMonth === 0) {
      switchSideMonthName(1, 11);
    } else {
      switchSideMonthName(1, -1);
    }
  };

  const changeCurrentMonth = (next = false) => {
    const firstMonth = next ? 0 : 1;
    const symbol = next ? 1 : -1;

    const switchCurrentMonthName = (value) => {
      currentMonth += value;
      parentCurrent.textContent = months[currentMonth];
    };

    if (currentMonth < firstMonth) {
      switchCurrentMonthName(11);
    } else if (currentMonth > 10 && next) {
      switchCurrentMonthName(-11);
    } else {
      const value = 1 * symbol;
      switchCurrentMonthName(value);
    }
  };

  const changeMonthBack = () => {
    const goBack = document.querySelector(".month__prev");

    goBack.addEventListener("click", () => {
      changeCurrentMonth();
      displayCurrent();
    });
  };

  const changeMonthNext = () => {
    const goNext = document.querySelector(".month__next");

    goNext.addEventListener("click", () => {
      const next = true;

      changeCurrentMonth(next);
      displayCurrent();
    });
  };

  displayCurrent();
  changeMonthBack();
  changeMonthNext();
};
