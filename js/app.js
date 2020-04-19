const menu = document.querySelector('#menu');
const linkContainer = document.querySelector('.lista-container');
const main = document.querySelector('main');
const sticky = menu.offsetTop;
const btnMenu = document.querySelector('.btn-menu');
let on_off = true;

window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        menu.classList.add('sticky');
        main.style.marginTop = '170px';
    } else {
        menu.classList.remove('sticky');
        main.style.marginTop = '100px';
    }

    /* GO TOP BUTTON */
}

btnMenu.addEventListener('click', () => {
    if (on_off) {
        linkContainer.style.left = '0';
        on_off = false;
    } else {
        on_off = false;
        linkContainer.style.left = '-100%';
        on_off = true;
    }
});