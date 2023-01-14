"use strict";
//контекст вызова функций

//Функция может вызываться 4 спсобами и в каждом контекст вызова отличается

//Просто вызов функции
/* 1)
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5);
*/

/* 2)
const obj = {
    a: 20,
    b: 50,
    sum: function() {
        console.log(this);
    }
};
obj.sum();
*/

/* 3)
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Привет' + this.name);
    };
}

let mykyta = new User('Mykyta', 25);
*/

function sayName(surename) {
    console.log(this);
    console.log(this.name + surename);
}

const user = {
    name: 'Jhon'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1) Обычная функция: this = window, но если use strick -undefind
// 2) Контекст у методов обьектов - сам обьект
// 3) this в конструктора и классах - это новый екзампляр обьекта
// 4) Ручная привязка this: call, apply, bind

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

// стрелочная функция не имеет своего контекста вызова

// сокращение стрелочной функции

const doubleN = a => a * 2;

console.log(doubleN(4));