'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecoder => {
    console.log(mutationRecoder);
});

observer.observe(box, {
    childList: true
});

observer.disconnect();