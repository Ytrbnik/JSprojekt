"use strict";

//const humburger = 5;
//const fries = 1;

//if (humburger && fries) {
//    console.log('наелся');
//}


//let humburger;
//const fries =NaN;
//const cola = 0;
//const nugets = 2;

//if (humburger === 3 && cola || fries ===3 && nugets) {
//    console.log('all good');
//} else {
//    console.log('go away');
//}


let humburger = 3;
const fries = 3;
const cola = 0;
const nugets = 2;

if (humburger === 3 && cola === 2 || fries ===3 && nugets) {
    console.log('all good');
} else {
    console.log('go away');
}



let jhonReport, alexReport, samReport, mariaReport = 'done';
console.log(jhonReport || alexReport || samReport || mariaReport);