let fontSizeControlRef = document.getElementById('font-size-control');
let textRef = document.getElementById('text');

fontSizeControlRef.addEventListener('input', event => {
    textRef.style.fontSize = `${fontSizeControlRef.value}px`;
});

// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}