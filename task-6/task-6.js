const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event =>
{ const inputDataLength = event.target.value.length;
  const userInputLength = Number(inputRef.dataset.length);
  const borderColorAdd = inputDataLength === userInputLength ? inputRef.classList.add('valid') || inputRef.classList.remove('invalid') : inputRef.classList.add('invalid');
    
  inputDataLength === 0 ? inputRef.classList.remove('invalid') || inputRef.classList.remove('valid') : borderColorAdd;   
});
 
// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }