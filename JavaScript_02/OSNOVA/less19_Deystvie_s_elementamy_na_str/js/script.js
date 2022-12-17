'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px;';

btns[1].style.borderRadius = '100%';

//for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'black';
//}

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);

//document.body.append(div);

//wrapper.prepend(div);
//wrapper.appendChild(div);//Устаревший вариант

//hearts[0].before(div);
//hearts[0].after(div);

//wrapper.insertBefore(div, hearts[1]);//Устаревший вариант

//circles[0].remove();
//wrapper.removeChild(hearts[1]);//Устаревший вариант

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);//Устаревший вариант

div.innerHTML = "<h1>Hello World!</h1>";

//div.textContent = "<h1>Hello</h1>";

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');
//div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
//div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
//div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');