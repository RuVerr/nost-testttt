export default class IntroCarousel {
  constructor() {
    // Инициализация элементов DOM
    this.carouselBox = document.getElementById("carouselBoxID");
    this.carouselBtnNext = document.getElementById("carouselBtnNextID");
    this.carouselBtnBack = document.getElementById("carouselBtnBackID");
    this.carouselBoxFig = document.querySelectorAll(".carousel_box_fig");

    // Запуск автопрокрутки с интервалом 4 секунды
    this.startAutoSlide();

    // Событие для приостановки автопрокрутки при наведении
    this.carouselBox.addEventListener("mouseenter", () => this.stopAutoSlide());

    // Событие для возобновления автопрокрутки при выходе мыши
    this.carouselBox.addEventListener("mouseleave", () =>
      this.startAutoSlide()
    );

    // Событие на кнопку Next
    this.carouselBtnNext.addEventListener("click", () => this.moveNext());

    // Событие на кнопку Back
    this.carouselBtnBack.addEventListener("click", () => this.moveBack());

    // Обработчик завершения анимации
    this.carouselBox.addEventListener("animationend", (e) =>
      this.handleAnimationEnd(e)
    );
  }

  // Метод для начала автопрокрутки
  startAutoSlide() {
    this.autoSlide = setInterval(() => {
      this.moveNext();
    }, 2000);
  }

  // Метод для остановки автопрокрутки
  stopAutoSlide() {
    clearInterval(this.autoSlide);
  }

  // Метод для перемещения слайдера вперед (следующий слайд)
  moveNext() {
    this.carouselBox.classList.add("carouselNext");
  }

  // Метод для перемещения слайдера назад (предыдущий слайд)
  moveBack() {
    this.carouselBox.classList.add("carouselBack");
  }

  // Обработка завершения анимации
  handleAnimationEnd(e) {
    if (e.animationName === "carouselNext") {
      this.carouselBox.appendChild(this.carouselBox.firstElementChild);
      this.resetCarouselBox();
    }
  
    if (e.animationName === "carouselBack") {
      this.carouselBox.prepend(this.carouselBox.lastElementChild);
      this.resetCarouselBox();
    }
  }
  
  resetCarouselBox() {
    this.carouselBox.classList.remove("carouselNext", "carouselBack");
  
    // Обнуляем transform плавно
    this.carouselBox.style.transition = "none";
    this.carouselBox.style.transform = "translateX(0)";
  
    // Возвращаем transition для следующих анимаций
    setTimeout(() => {
      this.carouselBox.style.transition = "";
    });
  }
}