'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');
//можно так же const btns = document.getElementsByTagName('button')[1];
console.log(btns[0]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

//Coвременные меоды
const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');

console.log(oneHeart);