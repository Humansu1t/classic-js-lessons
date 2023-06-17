let initialWeight = 6000;
let targetWeight = 5000;
let weight = initialWeight;
let days = 0;

while (weight > targetWeight) { // Пока вес больше желаемого
  weight *= 0.95; // Уменьшаем вес на 5%
  days++; // Увеличиваем счетчик дней
}

console.log(days); // Выводим результат
