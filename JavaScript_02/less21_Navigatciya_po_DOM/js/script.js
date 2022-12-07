//'use-strict';

//console.log(document.head);

//console.log(document.documentElement); Позволяет получить доступ к всему что есть на HTML странице

//console.log(document.body.childNodes); Позвоет все узли родителя

//console.log(document.body.firstChild); Позволяет получить первый узел
//console.log(document.body.firstElementChild); Позволяет получить первый елемент

//console.log(document.body.lastChild); Позволяет получить последний узел
//console.log(document.body.lastУдуьутеChild);Позволяет получить последний елемент

//.parentNode позволяет захватить узел родителя
//console.log(document.querySelector('#current').parentNode.parentNode);

//parentElement позволяет получить елемент родителя
//console.log(document.querySelector('#current')parentElement);

//console.log(document.querySelector('[data-current="3"]').nextElementSibling); Следующий елемент после data-current="3"

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}