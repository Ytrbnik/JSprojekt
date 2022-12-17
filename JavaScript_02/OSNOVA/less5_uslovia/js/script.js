"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('error!');
}

const num = 50;

if (num < 49) {
    console.log('Мало');
} else if (num > 100) {
    console.log('много');
} else {
    console.log('Ok!');
}

//(num === 50) ? console.log('Ok!') : console.log('Error');

 const mun = 50;

 switch (mun) {
    case 49:
        console.log('wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 51:
        console.log('correct');
        break;
    default:
        console.log('try again');
        break;
 }