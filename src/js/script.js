import { displayMonth } from "./helpers/displayMonth/displayMonth";
import { displayYear } from "./helpers/displayYear/displayYear";
import { displayWeek } from "./helpers/displayWeek/displayWeek";
import { displayDate } from "./helpers/displayDate/displayDate";
import { displayEvent } from "./helpers/displayEvent/displayEvent";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();

displayWeek();
displayDate(currentMonth, currentYear, date);
displayYear(currentYear, currentMonth, date);
displayMonth(currentMonth, currentYear, date);
displayEvent(currentMonth, currentYear);
