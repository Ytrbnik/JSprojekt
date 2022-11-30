"use strict";

const arr = [1, 12, 32, 6, 38];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
//arr[99] = 0;
//console.log(arr.length);
//console.log(arr);

//arr.forEach(function(item, i, arr) {
//    console.log(`${i}: ${item} Внутри массива ${arr}`);
//});

//arr.pop();
//arr.push(10);

//console.log(arr);

//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//for (let velue of arr) {
//    console.log(velue);
//}


const str = prompt("", "");
const products = str.split(', ');
products.sort();
console.log(products.join('; '));