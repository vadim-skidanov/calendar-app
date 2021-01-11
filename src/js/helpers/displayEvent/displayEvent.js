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

  // const eventDay = document.querySelector('.date')
  // const highlightEventDate = `${event__date}`
  let dateOfEvent = "";

  const showEvents = (date) => {
    const savedEvents = JSON.parse(localStorage.getItem("user"));
    if (savedEvents !== null) {
      const filteredEvents = savedEvents.filter((n) => n.date === date);
      let parentEvent = "";
      for (let event of filteredEvents) {
        // console.log(event.date[0] + 1);
        // console.log(event.date);
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
    dateParent[i].addEventListener("click", () => {
      const monthOfEventFromOne = parseInt(monthOfEvent) + 1;
      dateOfEvent = `${monthOfEventFromOne}/${dateParent[i].textContent}/${yearOfEvent}`;
      eventDate.textContent = dateOfEvent;
      popupParent.classList.add("event-popup--active");
      showEvents(dateOfEvent);
    });
  }

  const addAndDisplayEvents = () => {
    const eventTime = document.querySelector("#time");
    const eventTitle = document.querySelector("#title");
    const btnInsert = document.querySelector("#btnInsert");

    btnInsert.addEventListener("click", () => {
      const eTime = eventTime.value;
      const eTitle = eventTitle.value;
      if (eTime && eTitle) {
        const storage = JSON.parse(localStorage.getItem("user"));
        if (storage !== null && storage.length > 0) {
          storage.push({
            time: eTime,
            title: eTitle,
            date: dateOfEvent,
          });
          localStorage.setItem("user", JSON.stringify(storage));
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
};
