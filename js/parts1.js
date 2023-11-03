// Оголошуємо масив для збереження 13 чисел
let numbers = [];

// Використовуємо цикл, щоб отримати 13 чисел через prompt і додати їх до масиву
for (let i = 1; i <= 16; i++) {
    let number = prompt("Введіть  " + i + ":");
    numbers.push(number);
}

// Вставка чисел у відповідні теги на сторінці
for (let i = 0; i < 16; i++) {
    let elementId = "number" + (i + 1);
    let element = document.getElementById(elementId);
    if (element) {
        element.textContent = "Число " + (i + 1) + ": " + numbers[i];
    }
}
