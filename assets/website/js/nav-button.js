export default class NavButton {
    static load() {
        let button = document.querySelector('.nav__button');
        button?.addEventListener('click', (event) => {
            event.preventDefault();
            event.target.classList.toggle('nav__button--opened');

            let nav = document.querySelector('.nav__list');
            nav.classList.toggle('nav__list--opened');

            let html = document.querySelector('html');
            let body = document.querySelector('body');
            html.classList.toggle('disable-scroll');
            body.classList.toggle('disable-scroll');
        });
    }
}