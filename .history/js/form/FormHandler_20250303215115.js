export default class FormHandler {
  constructor() {
    this.body = document.body
    this.form = document.getElementById("telegram_formId");
    this.userTel = document.getElementById("userTel");
    this.uName = document.getElementById("uName");
    this.lastName = document.getElementById("lastName");
    this.headerPopUpForm = document.getElementById("headerPopUpFormID");
    this.submitHeaderButtonPopupID = document.getElementById(
      "submitHeaderButtonPopupID"
    );
    this.overlayHeaderPopup = document.getElementById("overlayHeaderPopup");

    this.armenianPhoneRegex = /^(\+374|0)\d{1,2}[- ]?\d{3}[- ]?\d{3}$/;

    this.initEventListeners();
  }

  // Инициализация обработчиков событий
  initEventListeners() {
    this.form?.addEventListener("submit", this.handleSubmit.bind(this));
    this.form?.addEventListener("keydown", this.handleEnterSubmit.bind(this));

    this.userTel?.addEventListener(
      "keypress",
      this.validatePhoneKeypress.bind(this)
    );
    this.userTel?.addEventListener("input", this.validatePhoneInput.bind(this));

    this.uName?.addEventListener(
      "keydown",
      this.validateLetterKeypress.bind(this)
    );
    this.uName?.addEventListener("input", this.validateLetterInput.bind(this));

    this.lastName?.addEventListener(
      "keydown",
      this.validateLetterKeypress.bind(this)
    );
    this.lastName?.addEventListener(
      "input",
      this.validateLetterInput.bind(this)
    );
  }

  // Обработчик отправки формы
  async handleSubmit(e) {
    e.preventDefault();

    const submitButton = this.submitHeaderButtonPopupID;
    const buttonText = submitButton.querySelector(".button_text");
    const spinner = submitButton.querySelector(".spinner");

    this.toggleButtonLoadingState(submitButton, buttonText, spinner);

    const formData = {
      uName: this.uName.value.trim(),
      lastName: this.lastName.value.trim(),
      userTel: this.userTel.value.trim(),
    };

    try {
      await this.sendFormData(formData);
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      alert("Ошибка при отправке!");
    } finally {
      this.resetFormState(submitButton, buttonText, spinner);
    }
  }

  // Отправка данных формы через fetch
  async sendFormData(formData) {
    await fetch(
      "https://script.google.com/macros/s/AKfycbw3OsjvQVe-vj-7qf7QPFzmNhhvWPZ9s34d_1FO5NM_z-xouUB7rKvRjvPU3x4RbmJ_dA/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(formData),
      }
    );
  }

  // Переключение состояния кнопки (спиннер, текст)
  toggleButtonLoadingState(submitButton, buttonText, spinner) {
    submitButton.classList.add("loading");
    submitButton.style.backgroundColor = "var(--shade-forest-text-button)";
    buttonText.textContent = "Отправка...";
    spinner.classList.remove("hidden");
  }

  // Сброс состояния кнопки и формы после отправки
  resetFormState(submitButton, buttonText, spinner) {
    submitButton.classList.remove("loading");
    submitButton.style.backgroundColor = "";
    buttonText.textContent = "Отправить";
    spinner.classList.add("hidden");
    this.form.reset();
    this.hidePopUp();
  }

  // Анимация скрытия попапа после отправки
  hidePopUp() {
    setTimeout(() => {
      this.headerPopUpForm.classList.add("popUpAnim-off");

      setTimeout(() => {
        this.overlayHeaderPopup.classList.add("overlay_off");
      }, 500);

      this.headerPopUpForm.addEventListener(
        "animationend",
        () => {
          this.overlayHeaderPopup.remove();
          this.headerPopUpForm.remove();
          this.body.style.overflow = ""
        },
        { once: true }
      );

      this.headerPopUpForm.classList.remove("popUpAnim-active");
    }, 1000);
  }

  // Валидация ввода телефона
  validatePhoneKeypress(e) {
    const value = e.target.value;
    if (e.key < "0" || e.key > "9") {
      if (e.key !== "+" || value.length > 0) {
        e.preventDefault();
      }
    }
  }

  // Обработчик нажатия клавиши Enter для отправки формы
  handleEnterSubmit(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  // Валидация букв в имени и фамилии
  validateLetterKeypress(e) {
    const value = e.target.value;
    if (e.key === "Backspace" || e.key === "Delete") return;

    if (e.target.value.length >= 13) {
      e.preventDefault();
      return;
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ]$/.test(e.key)) {
      e.preventDefault();
    }
  }

  // Удаление ненужных символов из имени и фамилии
  validateLetterInput(e) {
    e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
  }

  // Валидация номера телефона при изменении значения
  validatePhoneInput() {
    const value = this.userTel.value.trim();
    if (!this.armenianPhoneRegex.test(value)) {
      this.userTel.setCustomValidity("Մուտքագրեք կոռեկտ հայկական համար");
    } else {
      this.userTel.setCustomValidity("");
    }
    this.userTel.reportValidity();
  }
}
