const parentRef = document.querySelector('ul.ingredients');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Первый вариант.
// let itemRef;
// ingredients.forEach((ingredient, i, ingredients) => {
//     itemRef = document.createElement('li');
//     itemRef.textContent = ingredients[i];
//     parentRef.appendChild(itemRef)
//     console.log(itemRef);
// });


// Второй вариант.
let ingredientItemRef;
const createIngredientItem = ingredient => {
  ingredientItemRef = document.createElement('li');
  ingredientItemRef.textContent = ingredient;
  console.log(ingredientItemRef);
  return ingredientItemRef;
};
const allIngredients = ingredients.map(ingredient => createIngredientItem(ingredient));
parentRef.append(...allIngredients);


// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().