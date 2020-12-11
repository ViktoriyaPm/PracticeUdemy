'use strict';

/* Задание на урок #4:

1) Представьте, что перед вами стоит задача переписать код так, чтобы все функции стали методами объекта
personalMovieDB Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы */


const personalMovieDB = {
    count: 0,
    movies: { },
    actors: { },
    genres: [ ],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        }

        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
        return personalMovieDB.count;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
            const markLastFilm = +prompt('На сколько оцените его?', '10');
            if ((lastFilm && markLastFilm) && (lastFilm.length < 50)) {
                personalMovieDB.movies[lastFilm] = markLastFilm;
                console.log(personalMovieDB);
            } else {
                i--;
            }
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, '')
            if (favoriteGenre === null || favoriteGenre === "") {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = favoriteGenre;
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
                console.log(`Любимый жанр номер ${i + 1} - это ${personalMovieDB.genres[i]}`)
        })
    }
}

console.log(personalMovieDB.writeYourGenres());
console.log(personalMovieDB.genres)

    /*2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
    переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB. */

    /*3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
    Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
    при помощи метода forEach вывести в консоль сообщения в таком виде:
    "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



