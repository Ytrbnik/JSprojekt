'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

//btn.onclick =function() {
//    alert('Click');
//};

//btn.onclick =function() {
//    alert('Second click');
//};

//НЕ ПРИЕМЛЕМО

let i = 0;
const deletEvent = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    //i++;
    //if (i == 1) {
    //    btn.removeEventListener('click', deletEvent);
    //}
};

//btn.addEventListener('click', deletEvent);
//overlay.addEventListener('click', deletEvent);
btns.forEach(btn => {
    btn.addEventListener('click', deletEvent, {once: true});
});


//btn.addEventListener('mouseenter', (event) => {
//    console.log(event);
    //event.target.remove();
    //console.log('hover');
//});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});