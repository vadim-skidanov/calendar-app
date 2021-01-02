import { Week } from "../../components/week";
import { daysOfWeek } from "./daysOfWeek";

export const displayWeek = () => {
  const parentWeek = document.querySelector(".day-of-week");
  for (let day of daysOfWeek) {
    parentWeek.innerHTML += Week(day);
  }
};
