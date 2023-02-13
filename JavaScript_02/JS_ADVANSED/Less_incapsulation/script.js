'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Kholoshenko';

    say = () => {
        console.log(`Имя ппользлвателья: ${this.name} ${this.#surname}. Возраст:${this._age}`);
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }

    get age() {
        return this._age;
    }


    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const mykyta = new User('Mykyta', 25);
console.log(mykyta.surname = 'Sychevsky');
console.log(mykyta.surname);

mykyta.say();