'use strict';

let banner_dark = document.querySelector('.banner-dark');
let menu_btn = document.querySelector('.menu-btn');
let menu_close = document.querySelector('.menu_close');

function toggleMenu() {
    banner_dark.classList.toggle('hidden');
}

menu_btn.addEventListener('click', toggleMenu);
menu_close.addEventListener('click', toggleMenu);