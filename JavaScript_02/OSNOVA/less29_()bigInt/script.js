'use strict';

//const bigint = 12356454987513876541324789754546654n;

const sameBigint = BigInt(12356454987513876541324789754546654);

//console.log(typeof(bigint));

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);