import { displayMonth } from "./helpers/displayMonth/displayMonth";
import { displayYear } from "./helpers/displayYear/displayYear";
import { displayWeek } from "./helpers/displayWeek/displayWeek";
import { displayDate } from "./helpers/displayDate/displayDate";
import { displayToDo } from "./helpers/displayToDo/displayToDo";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();

displayWeek();
displayDate(currentMonth, currentYear, date);
displayYear(currentYear, currentMonth, date);
displayMonth(currentMonth, currentYear, date);
displayToDo();
