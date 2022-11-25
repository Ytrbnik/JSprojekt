"use strict";

const str = 'teSt';
const arr = [1, 2, 4];

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);


const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));


const logg = 'Hello World';

console.log(logg.slice(0, 5));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(0, 5));

console.log(logg.substr(6, 5));



const num = 12.2;
console.log(Math.round(num));


const test = '12.2';
console.log(parseInt(test) === 12);
console.log(parseFloat(test));