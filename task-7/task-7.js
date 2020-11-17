let fontSizeControl = document.getElementById('font-size-control');


fontSizeControl.addEventListener('input', event => {
    document.getElementById('text').style.fontSize = `${fontSizeControl.value}px`;
});

// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}