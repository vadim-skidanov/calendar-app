import { Date } from "./components/date";

const daysOfMonth = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const displayDate = () => {
  const classDate = document.querySelector(".date");
  for (let day of daysOfMonth) {
    classDate.innerHTML += Date(day);
  }
};

const displayDay = () => {
  const parrentWeek = document.querySelector(".day-of-week");
  for (let date of daysOfWeek) {
    parrentWeek.innerHTML += `
    <div>${date}</div>
    `;
  }
};

displayDay();
displayDate();
