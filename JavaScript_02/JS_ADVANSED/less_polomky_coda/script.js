'use strict';

try {
    console.log('Normal');
    console.log(a);
    console.log('Result');
} catch(erorr) {
    console.log(erorr.name);
    console.log(erorr.message);
    console.log(erorr.stack);
}

console.log('Still normal');