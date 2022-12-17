"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

//const copy =obj; //Ссылка на обьект

//copy.a = 10;

//console.log(copy);
//console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 6,
    c: {
        X: 12,
        y: 15
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 22,
    e: 23
};

const clone = (Object.assign({}, add));

clone.d = 33;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdasdasdq';
console.log(newArray);
console.log(oldArray);


const video =['youtube', 'vimeo'],
      blogs = ['wordpress', 'twitter'],
      internet = [...video, ...blogs, 'facebook', 'google'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 5, 6];
log(...num);

const array = ["a", "B"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};