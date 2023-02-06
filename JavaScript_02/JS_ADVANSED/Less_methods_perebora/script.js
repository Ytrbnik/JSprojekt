'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Valdemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);


// map
/*
const answers = ['MykytA', 'AnnA', 'Hello'];

const results = answers.map(item => item.toLowerCase());

console.log(results);

*/
   //  Плохая практика
let answers = ['MykytA', 'AnnA', 'Hello'];

answers = answers.map(item => item.toLowerCase());

console.log(answers);


// every/some

const some = [4, 'sada', 'zcxczsa'];

console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));


// reduce

const arr = [4, 5, 1, 3, 2, 6];
/*                      3    4
                        4    5
                        9    1
                        10   3
                        13   2
                        15   6*/
const res = arr.reduce((sum, current) => sum + current, 3);

console.log(res);


/*
const arr = ['apple', 'pear', 'plam'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);

console.log(res);
*/

const obj = {
    ivan: 'persone',
    ann: 'persone',
    cat: 'animal',
    dog: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);