"use strict";

//let user = {name: 'Mykyta'};

//let map = new WeakMap();
//map.set(user, 'data');

//user = null;

// console.log(map.has(user));

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));

// WeakSet
// add, has, delete

let mesagges = [
    {Text: 'Hello', from: 'John'},
    {Text: 'Hi', from: 'Alex'},
    {Text: '.....', from: 'M'}
];

let readMesages = new WeakSet();

readMesages.add(mesagges[0]);
//readMesages.add(mesagges[1]);

mesagges.shift();

console.log(readMesages.has(mesagges[0]));