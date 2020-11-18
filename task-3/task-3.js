const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.getElementById('gallery');
console.log(galleryRef);
const galleryItemsSet = images.map(image => 
  `<li class = 'gallery-item'><img class = 'gallery-img' src = '${image.url}' alt = '${image.alt}' width = '300'></li>`);
 galleryRef.insertAdjacentHTML('afterbegin', galleryItemsSet.join(" "));
 galleryRef.classList.add('gallery-box'); 

//2метод. рабочий, но добавляет при каждой итерации мэп.
// const galleryRef = document.getElementById('gallery');
// // console.log(galleryRef);

// images.map(image => {
//     galleryRef.insertAdjacentHTML('afterbegin', `<li class = 'gallery-item'><img  class = 'gallery-img' src = '${image.url}' alt = '${image.alt}' width = '300'></li>`);
// });
// galleryRef.classList.add('gallery-box');

// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];