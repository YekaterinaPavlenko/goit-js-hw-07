const renderBtnRef = document.querySelector('button[data-action ="render"]');
const userInputRef = document.querySelector('div#controls > input');
const boxRef = document.querySelector('#boxes');
console.log(renderBtnRef);
console.dir(userInputRef);
console.log(userInputRef);
console.log(boxRef);

//  renderBtnRef.addEventListener('clic', createBoxes);
let amount = userInputRef.addEventListener('input', event => {
    amount = event.target.value;
    console.log(amount);
    return amount;
});
 console.dir(amount);
renderBtnRef.addEventListener('clic', event => {
    let createDiv = document.createElement('div');
//     const allIngredients = ingredients.map(ingredient => createIngredientItem(ingredient));
// parentRef.append(...allIngredients);
    console.dir(createDiv);
    boxRef.appendChild(createDiv);
});

 

// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>