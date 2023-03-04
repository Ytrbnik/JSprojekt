'use strict';
/*
console.log(1);

setTimeout(() => {
    console.log('timeOut');
}, 2000);

setTimeout(() => {
    console.log('timeOut_4000');
}, 4000);

console.log(2);
*/
let k = 0;

function count() {
    for(let i = 0; i < 1e9; i++) {
        k++;
    }
    alert('Done!');
}

count();