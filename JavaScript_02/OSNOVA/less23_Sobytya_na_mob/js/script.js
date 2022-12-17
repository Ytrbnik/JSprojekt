"use strict";

// touchstart (при косании выполняеться событие)
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
     const box = document.querySelector('.box');

     box.addEventListener('touchstart', (e) => {
     e.preventDefault();

     console.log("Start");
     console.log(e.targetTouches);
     });

     box.addEventListener('touchmove', (e) => {
          e.preventDefault();

          console.log(e.targetTouches[0].pageX );
          });

         // box.addEventListener('touchend', (e) => {
         //      e.preventDefault();

         //      console.log("End");
         //      });
});

//touches (Выдаюет список всех пальцев которые взаимодействуют с экраном)
//targetTouches (Выдает список всех пальце которые взаимодействуют с конкретним елементом )
// changedTouches (Список пальцев учавствующих в эом событии)