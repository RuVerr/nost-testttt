export default class HeaderPopUpForm {
  constructor() {
    this.body = document.body
    this.nav = document.getElementById("navID");
    this.headerButtonForm = document.getElementById("headerButtonFormID");
    this.closeHeaderFormPopUp = document.getElementById(
      "closeHeaderFormPopUpId"
    );
    this.headerPopUpForm = document.getElementById("headerPopUpFormID");
    this.overlayHeaderPopup = document.getElementById("overlayHeaderPopup");

    // Ссылки для оригинальных элементов
    this.originalHeaderPopUpForm = this.headerPopUpForm;
    this.originalOverlayHeaderPopUp = this.overlayHeaderPopup;

    // Изначально удаляем элементы из DOM
    this.removePopUpFromDOM();

    // Событие при клике на headerButtonForm
    this.headerButtonForm.addEventListener("click", () => this.showPopUp());

    // Событие при клике на closeHeaderFormPopUp
    this.closeHeaderFormPopUp.addEventListener("click", () =>
      this.closePopUp()
    );

    // Событие при нажатии клавиши Esc для закрытия pop-up
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closePopUp();
      }
    });
  }

  // Метод для добавления pop-up и overlay в DOM
  addPopUpToDOM() {
    if (!this.nav.contains(this.originalHeaderPopUpForm)) {
      this.nav.append(this.originalHeaderPopUpForm);
      this.body
    }
    if (!this.nav.contains(this.originalOverlayHeaderPopUp)) {
      this.nav.append(this.originalOverlayHeaderPopUp);
    }
  }

  // Метод для активации pop-up с анимацией
  activatePopUp() {
    setTimeout(() => {
      this.originalOverlayHeaderPopUp.classList.add("overlay_active");
      this.originalOverlayHeaderPopUp.classList.remove("overlay_off");
    }, 500);

    this.originalHeaderPopUpForm.classList.add("popUpAnim-active");
    this.originalHeaderPopUpForm.classList.remove("popUpAnim-off");
  }

  // Метод для скрытия pop-up с анимацией
  deactivatePopUp() {
    this.originalHeaderPopUpForm.classList.add("popUpAnim-off");
    setTimeout(() => {
      this.originalOverlayHeaderPopUp.classList.add("overlay_off");
    }, 500);
  }

  // Метод для удаления pop-up и overlay из DOM
  removePopUpFromDOM() {
    this.originalHeaderPopUpForm.remove();
    this.originalOverlayHeaderPopUp.remove();
  }

  // Метод для показа pop-up
  showPopUp() {
    this.addPopUpToDOM();
    this.activatePopUp();
  }

  // Метод для закрытия pop-up
  closePopUp() {
    this.deactivatePopUp();

    this.originalHeaderPopUpForm.addEventListener(
      "animationend",
      () => {
        this.removePopUpFromDOM();
      },
      { once: true }
    );

    this.originalHeaderPopUpForm.classList.remove("popUpAnim-active");
  }
}
