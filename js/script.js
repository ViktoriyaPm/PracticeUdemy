/* Задания на урок #6:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
    "Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

    document.addEventListener('DOMContentLoaded', () => {

        const movieDB = {
            movies: [
                "Логан",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость",
                "Скотт Пилигрим против..."
            ]
        };

        const advertisement = document.querySelectorAll('.promo__adv img');
        const watchedMoves = document.querySelector('.promo__interactive-list');
        const addForm = document.querySelector('form.add')
        const addInput = document.querySelector('.adding__input');
        const checkbox = document.querySelector("[type = 'checkbox']");

        const advertisementCleaner = (arr) => {
            arr.forEach( item => {
                item.remove();
            });
        };

        const sortArr = (arr) => {
            arr.sort();
        }

        const newMovieList = function (films, parent) {
            parent.innerHTML = "";

            films.forEach(function (film, index) {
                parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1}  ${film}
                                <div class="delete"></div>
                            </li>
             `
            })
        }

        advertisementCleaner(advertisement);
        sortArr(movieDB.movies);
        newMovieList(movieDB.movies, watchedMoves);

        addForm.addEventListener('submit', (event) => {
            event.preventDefault();

            let newFilm = addInput.value;

            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 21) + '...'
            }

            movieDB.movies.push(newFilm);

            sortArr(movieDB.movies);
            newMovieList(movieDB.movies, watchedMoves);

            const favourite = checkbox.checked;
            if (favourite === true) {
                console.log("Добавляем любимый фильм")
            }
        })

        watchedMoves.addEventListener('click', (event) => {
            if (event.target.className == 'delete') {
                let indexOfDeletingElem = event.target.parentElement.textContent[0] - 1;
                movieDB.movies.splice(indexOfDeletingElem, 1);
                newMovieList(movieDB.movies, watchedMoves);
            }
        })

    } )

