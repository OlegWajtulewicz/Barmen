// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import { gsap } from "gsap";
import barba from '@barba/core';
import { HomePage } from './barba.js';
import autoAnimate from '@formkit/auto-animate'


HomePage (); 
barba.hooks.after((data) => {
    // Проверяем, что переход завершен успешно
    if (data && data.current && data.current.container) {
        // Теперь ваш код для инициализации Swiper slider и других элементов страницы
        // Например:
		initializeMobileMenu();
    formSubmit();  
    
        const asideServicesList = document.querySelector('.aside-services-list');
        const contentServices = document.querySelector('.content-services__body');
        if (asideServicesList) {
            autoAnimate(asideServicesList);
        }
        if (contentServices) {
            autoAnimate(contentServices);
        }


        function hideBanner() {
            document.getElementById('cookie-consent-banner').style.display = 'none';
          }
          
          if(localStorage.getItem('consentMode') === null) {
            
            document.getElementById('btn-accept-all').addEventListener('click', function() {
              setConsent({
                necessary: true,
                analytics: true,
                preferences: true,
                marketing: true
              });
              hideBanner();
            });
            document.getElementById('btn-accept-some').addEventListener('click', function() {
              setConsent({
                necessary: true,
                analytics: document.getElementById('consent-analytics').checked,
                preferences: document.getElementById('consent-preferences').checked,
                marketing: document.getElementById('consent-marketing').checked
              });
              hideBanner();
            });
            document.getElementById('btn-reject-all').addEventListener('click', function() {
              setConsent({
                necessary: false,
                analytics: false,
                preferences: false,
                marketing: false
              });
              hideBanner();
            });
            document.getElementById('cookie-consent-banner').style.display = 'block';
          }
          
          function setConsent(consent) {
            const consentMode = {
              'functionality_storage': consent.necessary ? 'granted' : 'denied',
              'security_storage': consent.necessary ? 'granted' : 'denied',
              'ad_storage': consent.marketing ? 'granted' : 'denied',
              'analytics_storage': consent.analytics ? 'granted' : 'denied',
              'personalization': consent.preferences ? 'granted' : 'denied',
            };
            gtag('consent', 'update', consentMode);  
            localStorage.setItem('consentMode', JSON.stringify(consentMode));
          }

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


