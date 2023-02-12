"use strict";

/*
new RegExp('pattern', 'flags');
/pattern/flags
*/
/*
const ans = prompt('Введтите свое число');

const reg = /\d/g;
console.log(ans.match(reg));
*/

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

// \D мы ищем не числа
// \W мы ищем не буквы


// \d это значит что мы ищием цифры
// \w мы ищем все буквы
// \s мы ищем все пробелы

// i если мо хотим найти что то в независимости от регистра
// g пытаемся найти сразу енсколько вхождений
// m многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));
/*
const pass = prompt('Password');
console.log(pass.replace(/\./g, "*"));
*/

// console.log('12-25-50'.replace(/-/g, ':'));