"use strict";

const usdCurr = 36.57;
const eurCurr = 35.57;

function convert (amount, curr) {
    console.log(curr * amount);
}

convert(604, usdCurr);
convert(604, eurCurr);