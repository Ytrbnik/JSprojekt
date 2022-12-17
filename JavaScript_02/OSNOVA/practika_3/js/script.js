"use strict";

let numerOfFilms;

function start(){
    numerOfFilms = +prompt('Сколько фильмов вы уже посмотрелт?', '');
    while (numerOfFilms == '' || numerOfFilms == null || isNaN(numerOfFilms)) {
        numerOfFilms = +prompt('Сколько фильмов вы уже посмотрелт?', '');
    }
}

start();

let personalMovieBD = {
    count: numerOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
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
}

//rememberMyFilms();

function detectPrsonalLevel() {
    if (personalMovieBD.count < 10) {
        console.log('мало фильмов просмотренно');
    } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
        console.log('Вы классный зритель');
    } else if (personalMovieBD.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

//detectPrsonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieBD);
    }
}

showMyDB(personalMovieBD.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieBD.geners[i -1] = prompt(`Ваш любимый жанр под номером ${i} `, );
    }
}

writeYourGenres();