'use strict';

const box = document.querySelector('.box');

const newHeight = 0;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
}

changeParams(box);

let userName;

console.log(userName ?? 'User');