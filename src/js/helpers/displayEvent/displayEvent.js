export const displayEvent = () => {
  const displayAndClosePopup = () => {
    const dateParent = document.querySelectorAll(".date__day");
    const popupParent = document.querySelector(".event-popup");
    const popupClose = document.querySelector(".close-popup");

    const monthOfEvent = document.querySelector(".month__current-name").id;
    const yearOfEvent = document.querySelector(".year__current").textContent;

    for (let i = 0; i < dateParent.length; i++) {
      dateParent[i].addEventListener("click", () => {
        const dateOfEvent = dateParent[i].textContent;
        console.log(monthOfEvent, dateOfEvent, yearOfEvent);

        popupParent.classList.add("event-popup--active");
        popupClose.addEventListener("click", () => {
          popupParent.classList.remove("event-popup--active");
        });
      });
    }
  };

  const addAndDisplayEvents = () => {
    const eventTime = document.querySelector("#time");
    const eventTitle = document.querySelector("#title");
    const eventContent = document.querySelector(".event");
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
          });
          localStorage.setItem("user", JSON.stringify(storage));
        } else {
          localStorage.setItem(
            "user",
            JSON.stringify([{ time: eTime, title: eTitle }])
          );
        }
        location.reload();
      }
    });

    const savedEvents = JSON.parse(localStorage.getItem("user"));
    if (savedEvents !== null) {
      let parentEvent = "";
      for (let event of savedEvents) {
        parentEvent += `<div class="event__time">${event.time}</div>
            <div class="event__title">${event.title}</div>`;
      }
      eventContent.innerHTML = parentEvent;
    }
  };

  displayAndClosePopup();
  addAndDisplayEvents();
};
