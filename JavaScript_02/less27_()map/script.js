'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/11/2000',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user));
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);


const shops = [
    {rice: 500},
    {oil: 150},
    {bread: 50}
];

const buget = [5000, 15000, 20000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shops, i) => {
    map.set(shops,buget[i]);
});

//map.set(shops[0], 5000)
//    .set(shops[1], 15000)
//    .set(shops[2], 20000);

console.log(map);
//console.log(map.get(shops[0]));
//console.log(map.has(shops[0]));
//map.delete(key);
//map.clear();
//map.size;
//map.keys();

// const goods = [];

// for (let shops of map.keys()) {
//     goods.push(Object.keys(shops)[0]);
// }

// console.log(goods);

//for (let price of map.values()) {
//         console.log(price);
//}

//for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
//}

map.forEach((value, key, map) => {
    console.log(key, value);
});