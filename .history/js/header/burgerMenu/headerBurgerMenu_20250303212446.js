import { lineAnimBurgerMenu } from "../../function/globalFunction.js";

export default class HeaderBurgerMenu {
  constructor() {
    this.body = document.body;
    this.nav = document.getElementById("navID");
    this.burger = document.getElementById("burgerID");
    this.burgerLine = document.querySelectorAll(".burger_line");
    this.slideContent = document.getElementById("slideContentID");
    this.overlayBurgerMenu = document.getElementById("overlayBurgerMenuID");

    // Сохраняем оригинальные элементы для управления их состоянием
    this.originalSlideContent = this.slideContent;
    this.originalOverlay = this.overlayBurgerMenu;

    // Удаляем slideContent изначально, чтобы он не показывался на десктопе
    this.originalSlideContent.remove();

    let animationProcessing = false;

    this.burger.addEventListener("click", () => {
      if (animationProcessing) return; // Предотвращаем несколько кликов во время анимации
      animationProcessing = true; // Устанавливаем флаг, чтобы заблокировать повторные клики

      // Анимация линий бургера
      lineAnimBurgerMenu(this.burgerLine);

      if (!this.burger.contains(this.originalSlideContent)) {
        this.addSlideContent(); // Добавляем slideContent и overlay
      } else {
        this.removeSlideContent(); // Убираем slideContent и overlay
      }

      this.originalSlideContent.addEventListener(
        "animationend",
        () => {
          animationProcessing = false; // Сбрасываем флаг анимации после завершения
        },
        { once: true }
      );
    });
  }

  addSlideContent() {
    // Добавляем slideContent и overlay, если их еще нет
    if (!this.burger.contains(this.originalSlideContent)) {
      this.burger.append(this.originalSlideContent);
    }
    if (!this.burger.contains(this.originalOverlay)) {
      this.burger.append(this.originalOverlay);
    }

    // Активируем slideContent и overlay с анимацией
    this.originalSlideContent.classList.add("slide_content_active");
    this.originalSlideContent.classList.remove("slide_content_off");
    this.originalOverlay.classList.add("overlay_active");

    // Блокируем прокрутку страницы
    this.body.style.overflow = "hidden";
  }

  removeSlideContent() {
    // Анимируем закрытие slideContent и деактивируем overlay
    this.originalSlideContent.classList.add("slide_content_off");
    this.originalOverlay.classList.toggle("overlay_active");

    // Удаляем slideContent и overlay после завершения анимации
    this.originalSlideContent.addEventListener(
      "animationend",
      () => {
        this.body.style.overflow = ""; // Включаем прокрутку страницы
        this.originalSlideContent.remove();
        this.originalOverlay.remove();
      },
      { once: true }
    );
  }
}
