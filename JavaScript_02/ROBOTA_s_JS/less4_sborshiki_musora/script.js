

//const someRes = getData();
//const node = document.querySelector('.class');

//setInterval(function() {
//    if (node) {
//        node.innerHTML = someRes;
//    }
//}, 1000);

function outer() {
    const potantiallyHugeArray = [];
    return function inner() {
        potantiallyHugeArray.push('hello');
        console.log('Done');
    };
}

const sayHello = outer();