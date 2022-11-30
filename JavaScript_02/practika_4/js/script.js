"use strict";


let personalMovieBD = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function(){
        personalMovieBD.count = +prompt('Сколько фильмов вы уже посмотрелт?', '');
        while (personalMovieBD.count == '' || personalMovieBD.count == null || isNaN(personalMovieBD.count)) {
            personalMovieBD.count = +prompt('Сколько фильмов вы уже посмотрелт?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних посмотренных фильмов?', '').trim(),
                b = +prompt('Нaсколько вы его оцениваете?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieBD.movies[a] = b;
                console.log('Done!');
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPrsonalLevel: function() {
        if (personalMovieBD.count < 10) {
            console.log('мало фильмов просмотренно');
        } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
            console.log('Вы классный зритель');
        } else if (personalMovieBD.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieBD);
        }
    },
    toggleVisibleMyBD: function() {
        if (personalMovieBD.privat) {
            personalMovieBD.privat = false;
        } else {
            personalMovieBD.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i} `, );

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieBD.geners[i -1] = genre;
            }
        }

        personalMovieBD.geners.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - Это ${item}`);
        });
    },

};


