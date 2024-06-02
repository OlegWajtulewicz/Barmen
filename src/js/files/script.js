// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import barba from '@barba/core';
import { HomePage } from './barba.js';

HomePage (); 
barba.hooks.after((data) => {
    // Проверяем, что переход завершен успешно
    if (data && data.current && data.current.container) {
        // Теперь ваш код для инициализации Swiper slider и других элементов страницы
        // Например:
		initializeMobileMenu() 
    }
});

  //==============  menu - down ==================================================================================================================================================================================================================================================================================================
//let body = document.querySelector('body');

//if (isMobile.any()) {
	// body.classList.add('touch');
	// let arrow = document.querySelectorAll('.menu__arrow');
	
	// for (let i = 0; i < arrow.length; i++) {
	// 	let thisLink = arrow[i].previousElementSibling;
	// 	let subMenu = arrow[i].nextElementSibling;
	// 	let thisArrow = arrow[i];
	// 	let subSubMenu = subMenu.nextElementSibling;

	// 	thisLink.classList.add('parent');
	// arrow[i].addEventListener('click', function() {
	// 	subMenu.classList.toggle('open');
	// 	//subSubMenu.classList.toggle('open');
	// 	//document.documentElement.classList.add('sub-menu-open');
	// 	thisArrow.classList.toggle('active');
	// 	});
		
	// }
//} else {
//	body.classList.add('mouse');
//}
//========================================================================================================================================================
function initializeMobileMenu() {
    let body = document.querySelector('body');

    // if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.menu__arrow');

    for (let i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];
        let subSubMenu = subMenu.nextElementSibling;

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            // subSubMenu.classList.toggle('open');
            // document.documentElement.classList.add('sub-menu-open');
            thisArrow.classList.toggle('active');
        });
    }
	//} else {
//	body.classList.add('mouse');
//}
}

// Вызов функции
initializeMobileMenu();