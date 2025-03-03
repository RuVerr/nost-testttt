// Функция анимации для элементов меню-бургера
export function lineAnimBurgerMenu(arr) {
    // Перебираем все элементы в массиве arr
    arr.forEach((line) => {
        // Проверяем, содержит ли элемент класс "burger-anim-start"
        if (!line.classList.contains("burger-anim-start")) {
            // Если нет, добавляем класс "burger-anim-start"
            line.classList.toggle("burger-anim-start");
        } else {
            // Если класс уже есть, добавляем класс "burger-anim-end"
            line.classList.toggle("burger-anim-end");
        }
    });

    // Возвращаем функцию lineAnimBurgerMenu (эта строка может быть лишней, так как она возвращает саму себя)
    return lineAnimBurgerMenu;
}