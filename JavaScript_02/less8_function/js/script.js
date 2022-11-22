"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello world!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(6, 10));

function ret() {
    let num =50;


    //

    return num;
}

let anotherNum = ret();
console.log(anotherNum);

//FUNCTION DECLARATION
foo();

function foo() {
    console.log('Hello');
}
//Создаеться до начала выполнения скрипта, можно вызвать перед оьявлением

//FONCTION EXPRESSION
let fooo = function() {
    console.log('Hello');
};

fooo();
//Создаєтьяс тільки тоді, коли до неї, дійшов поток коду. Можна визвати тільки після того яка вона була обьявленна


//Стрілочка функція
const calk = (c, d) => c + d;
//Не має свого коекста(This)
