"use strict";

const usdCurr = 36.57;
const discount = 0.05;

function convert (amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(604, usdCurr);

promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {return;}
    }
    console.log('Done');
}

test();

function doNothing() {}
console.log(doNothing() === undefined);

