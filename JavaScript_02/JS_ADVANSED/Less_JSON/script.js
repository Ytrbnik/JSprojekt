'use strict';

const persone = {
    name: 'Alex',
    tel: '+38085695202',
    perent: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

//console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));
clone.perent.mom = 'Ann';
console.log(persone);
console.log(clone);