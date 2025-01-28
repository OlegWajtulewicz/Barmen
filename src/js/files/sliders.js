/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import 'swiper/css';

import barba from '@barba/core';
import { HomePage } from './barba.js';

HomePage (); 
barba.hooks.after((data) => {
    // Проверяем, что переход завершен успешно
    if (data && data.current && data.current.container) {
        // Теперь ваш код для инициализации Swiper slider и других элементов страницы
        // Например:
        // Ініціалізація слайдерів
		initSliders();
    }
});
	
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.corpo-slider__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.corpo-slider__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoHeight: true,
			speed: 10000,

			touchRatio: 0,
			simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,

			
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
			

			// Пагінація
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			slideClass: 'corpo-slider__slide',
			// Брейкпоінти
			breakpoints: {
				300: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				1020: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				1382: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			},
			
			// Події
			on: {

			}
		});
	}
}
window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}



