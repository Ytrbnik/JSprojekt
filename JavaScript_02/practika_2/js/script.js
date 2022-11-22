"use strict";

let numerOfFilms = +prompt('Сколько фильмов вы уже посмотрелт?', '');

let personalMovieBD = {
    count: numerOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних посмотренных фильмов?', ''),
        b = +prompt('Нaсколько вы его оцениваете?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieBD.movies[a] = b;
        console.log('Done!');
    } else {
        console.log("error");
        i--;
    }
}

if (personalMovieBD.count < 10) {
    console.log('мало фильмов просмотренно');
} else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
    console.log('Вы классный зритель');
} else if (personalMovieBD.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieBD);