"use strict";

let numerOfFilms = +prompt('Сколько фильмов вы уже посмотрелт?', '');

let personalMovieBD = {
    count: numerOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};
let a = prompt('Один из последних посмотренных фильмов?', ''),
    b = +prompt('Нвсколько вы его оцениваете?', ''),
    c = prompt('Один из последних посмотренных фильмов?', ''),
    d = +prompt('Нвсколько вы его оцениваете?', '');

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD);