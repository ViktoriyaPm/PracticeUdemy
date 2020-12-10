'use strict';

    let numberOfFilms;

    function start () {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
        }

        if (numberOfFilms < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
            alert("Вы классический зритель");
        } else if (numberOfFilms >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
        return numberOfFilms;
    }

    start();

    /*) Создать объект personalMovieDB и в него поместить такие свойства:
        - count - сюда передается ответ на первый вопрос
        - movies - в это свойство поместить пустой объект
        - actors - тоже поместить пустой объект
        - genres - сюда поместить пустой массив
        - privat - в это свойство поместить boolean(логическое) значение false */

    const personalMovieDB = {
        count: numberOfFilms,
        movies: { },
        actors: { },
        genres: [ ],
        privat: false
    }

    /*) Задайте пользователю по два раза вопросы:
        - 'Один из последних просмотренных фильмов?'
        - 'На сколько оцените его?'
    Ответы стоит поместить в отдельные переменные
    Записать ответы в объект movies в формате:
        movies: {
            'logan': '8.1'
        } */



    function rememberMyFilms () {
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
    }

    rememberMyFilms();

    /* Задание на урок #3:

    1) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
    false - выводит в консоль главный объект программы */

    function showMyDB () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        }
    }


    /*2) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
    "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
    genres

    P.S. Функции вызывать не обязательно*/

    function writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
            const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, '')
            personalMovieDB.genres.push(favoriteGenre);
            console.log(personalMovieDB)
        }
    }

    writeYourGenres();
