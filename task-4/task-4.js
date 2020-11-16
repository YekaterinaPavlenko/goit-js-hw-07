const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');
let counterValue = 0;
const increment = () => {
    counterValue = counterValue + 1;
    return counter.textContent = `${counterValue}`;
};

const decrement = () => {
    counterValue > 0 ? counterValue = counterValue - 1 : counterValue = 0;
    return counter.textContent = `${counterValue}`;
};
 incrementBtn.addEventListener('click', increment);
 decrementBtn.addEventListener('click', decrement);


// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
