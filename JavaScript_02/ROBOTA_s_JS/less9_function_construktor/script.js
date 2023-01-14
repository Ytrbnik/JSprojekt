"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};

const mykyta = new User('Mykyta', '25');
const serhey = new User('Serhey', '21');

mykyta.exit();

mykyta.hello();
serhey.hello();

console.log(mykyta);
console.log(serhey);