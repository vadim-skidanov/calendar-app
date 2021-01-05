export const displayEvent = () => {
  const displayAndClosePopup = () => {
    const dateParent = document.querySelectorAll(".date__day");
    const popupParent = document.querySelector(".event-popup");
    const popupClose = document.querySelector(".close-popup");

    for (let i = 0; i < dateParent.length; i++) {
      dateParent[i].addEventListener("click", () => {
        let hello = popupParent;
        hello.classList.add("event-popup--active");

        popupClose.addEventListener("click", () => {
          hello.classList.remove("event-popup--active");
        });
      });
    }
  };

  displayAndClosePopup();
};
