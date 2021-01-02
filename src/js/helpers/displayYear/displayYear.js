import { year } from "../../components/years";

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

export const displayYear = (currentYear) => {
  for (let className in years) {
    const parentYear = document.querySelector(".year__content");
    const y = currentYear + years[className];
    parentYear.innerHTML += year(y, className);
  }
};
