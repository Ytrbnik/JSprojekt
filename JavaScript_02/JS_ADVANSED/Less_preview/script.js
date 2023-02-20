'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'fff',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];
try {

data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

    if (!blockObj.id) throw new SyntaxError(`В данних під номером ${i + 1} немає id`);

    block.setAttribute('id', blockObj.id);
    document.body.append(block);
});
} catch(e) {
//    console.error(e.name);
    if (e.name === "SyntaxError") {
        console.log(e.message);
    } else throw e;

//    console.log(e.stack);
}

const err = new SyntaxError('asdasda');

console.log(err.name, err.message, err.stack);
