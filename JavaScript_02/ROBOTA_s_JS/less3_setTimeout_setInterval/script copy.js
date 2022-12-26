
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', () => {
//    const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
});

//clearInterval(timerId);

//const timerId = setTimeout(function() {
//    console.log('Hello');
//}, 2000);



function logger () {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('Hello');
    i++;
}

let id = setTimeout(function log() {
    console.log("Hi");
    id = setTimeout(log, 500);
}, 500);