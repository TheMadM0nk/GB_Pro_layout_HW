'use strict';

let banner_dark = document.querySelector('.banner-dark');
let menu_btn = document.querySelector('.menu-btn');
let menu_close = document.querySelector('.menu_close');

//код для arrow_box
//-----------------------------------
let arrow_hide = document.querySelector('.arrow_box')
//---------------------------------------


function toggleMenu() {
    banner_dark.classList.toggle('hidden');

    //код для arrow_box
    //-----------------------------------    
    arrow_hide.classList.toggle('hidden');
    //---------------------------------------

}

menu_btn.addEventListener('click', toggleMenu);
menu_close.addEventListener('click', toggleMenu);

//Код проверил в отладчике, скрип работает без ошибок