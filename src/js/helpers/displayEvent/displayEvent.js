import { events } from "../../components/events";

export const displayEvent = (currentMonth, currentYear, date) => {
  const dateParent = document.querySelectorAll(".date__day");
  const popupParent = document.querySelector(".event-popup");

  const monthOfEvent = document.querySelector(".month__current-name").id;
  const yearOfEvent = document.querySelector(".year__current").textContent;
  const eventContent = document.querySelector(".event");

  const newEventPopup = document.querySelector(".new-event");

  const currentDate = `${currentMonth + 1}/${date.getDate()}/${currentYear}`;
  const eventDate = document.querySelector(".event__date");

  let dateOfEvent = "";
  const storedEvents = JSON.parse(localStorage.getItem("user"));

  const showEvents = (date) => {
    if (storedEvents !== null) {
      const filteredEvents = storedEvents.filter((n) => n.date === date);
      let parentEvent = "";
      for (let event of filteredEvents) {
        parentEvent += events(event.time, event.title);
      }
      eventContent.innerHTML = parentEvent;
    }
  };

  showEvents(currentDate);
  eventDate.textContent = currentDate;

  const openCloseNewEventsPopup = () => {
    const openNewEventPopup = document.querySelector(".add-event__link");
    const closeNewEventPopup = document.querySelector(".new-event__close");
    openNewEventPopup.addEventListener("click", () => {
      newEventPopup.classList.add("new-event--active");
    });

    closeNewEventPopup.addEventListener("click", () => {
      newEventPopup.classList.remove("new-event--active");
    });
  };

  for (let i = 0; i < dateParent.length; i++) {
    const monthOfEventFromOne = parseInt(monthOfEvent) + 1;
    const classDate = `${monthOfEventFromOne}/${dateParent[i].textContent}/${yearOfEvent}`;
    dateParent[i].id = classDate;

    dateParent[i].addEventListener("click", () => {
      dateOfEvent = `${monthOfEventFromOne}/${dateParent[i].textContent}/${yearOfEvent}`;
      eventDate.textContent = dateOfEvent;
      popupParent.classList.add("event-popup--active");
      showEvents(dateOfEvent);
    });
  }

  //////////////////////////// !
  const highlightDate = () => {
    for (let event of storedEvents) {
      for (let i = 0; i < dateParent.length; i++) {
        const dayDate = `${currentMonth + 1}/${
          dateParent[i].innerHTML
        }/${currentYear}`;

        if (dayDate === event.date) {
          const eventParent = document.getElementById(event.date);
          eventParent.classList.add("date__day--event");
        }
      }
    }
  };

  //////////////////////////// !

  const addAndDisplayEvents = () => {
    const eventTime = document.querySelector("#time");
    const eventTitle = document.querySelector("#title");
    const btnInsert = document.querySelector("#btnInsert");

    btnInsert.addEventListener("click", () => {
      const eTime = eventTime.value;
      const eTitle = eventTitle.value;
      if (eTime && eTitle) {
        if (storedEvents !== null && storedEvents.length > 0) {
          storedEvents.push({
            time: eTime,
            title: eTitle,
            date: dateOfEvent,
          });
          localStorage.setItem("user", JSON.stringify(storedEvents));
          newEventPopup.classList.remove("new-event--active");
        } else {
          localStorage.setItem(
            "user",
            JSON.stringify([{ time: eTime, title: eTitle, date: dateOfEvent }])
          );
        }
        location.reload();
      }
    });
  };
  openCloseNewEventsPopup();
  addAndDisplayEvents();
  if (storedEvents) highlightDate();
};
