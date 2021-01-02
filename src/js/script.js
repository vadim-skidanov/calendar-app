import { displayMonth } from "./helpers/displayMonth/displayMonth";
import { displayYear } from "./helpers/displayYear/displayYear";
import { displayWeek } from "./helpers/displayWeek/displayWeek";
import { displayDate } from "./helpers/displayDate/displayDate";

const date = new Date();
console.log(date.getDay());
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();

displayWeek();
displayDate(currentMonth, currentYear, date);
displayYear(currentYear);
displayMonth(currentMonth, currentYear, date);
