/* Задания на урок #5: */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


/*1) Удалить все рекламные блоки со страницы (правая часть сайта) */

    const advertisement = document.querySelectorAll('.promo__adv img');

    advertisement.forEach( item => { item.remove() });

/*2) Изменить жанр фильма, поменять "комедия" на "драма" */

    const genre = document.querySelector('.promo__genre');

    genre.textContent = 'драма';

/* 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
 Реализовать только при помощи JS */

    const backGround = document.querySelector('.promo__bg');
    backGround.style.backgroundImage = "url('img/bg.jpg')";

/* 4) Список фильмов на странице сформировать на основании данных const movieDB.
 Отсортировать фильмы по алфавиту
 5) Добавить нумерацию выведенных фильмов */

    const watchedMoves = document.querySelector('.promo__interactive-list');
    watchedMoves.innerHTML = "";

    movieDB.movies.sort();

    movieDB.movies.forEach(function (film, index) {
        watchedMoves.innerHTML += `
        <li class="promo__interactive-item"> ${index + 1}  ${film}
                            <div class="delete"></div>
                        </li>
         `
    })
