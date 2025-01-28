// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, FLS } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import barba from '@barba/core';
import { gsap } from "gsap";

function showContent(target) {
    const blocks = document.querySelectorAll('[data-content]');
    const items = document.querySelectorAll('.aside-services__item');
    blocks.forEach(block => {
        if (block.getAttribute('data-content') === target) {
            gsap.to(block, { opacity: 1, display: 'block', duration: 0.5 });
        } else {
            gsap.to(block, { opacity: 0, display: 'none', duration: 0.5 });
        }
    });

    items.forEach(item => {
        const link = item.querySelector('.aside-services__link');
        if (link && link.getAttribute('data-target') === target) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    window.scrollTo(0, 0);
}

function initializeContentSwitching() {
    const links = document.querySelectorAll('.aside-services__link, ._link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');
            showContent(target);
            localStorage.setItem('currentContent', target);
        });
    });

    // Показать блок по умолчанию или блок из localStorage
    const storedContent = localStorage.getItem('currentContent');
    const urlHash = window.location.hash.substring(1);
    if (urlHash) {
        showContent(urlHash);
    } else if (storedContent) {
        showContent(storedContent);
    } else {
        showContent('00');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeContentSwitching();
});

barba.init({
    views: [{
        namespace: 'home',
        afterEnter() {
            // refresh the parallax based on new page content
           // HomePage();
        }
    },
    {
        namespace: 'AboutUs',
        afterEnter(data) {
            initializeContentSwitching();
            const urlHash = window.location.hash.substring(1);
            if (urlHash) {
                showContent(urlHash);
            } else {
                const storedContent = localStorage.getItem('currentContent');
                if (storedContent) {
                    showContent(storedContent);
                } else {
                    showContent('00');
                }
            }
        }
    }],
    transitions: [{
        name: 'opacity-transition',
        sing: true,
        leave(data) {
            return gsap.timeline().to(data.current.container, {
                opacity: 0
            })
            .fromTo('.box', {
                x: '100%', 
            }, {
                x: '-100%',
            }, 0)
        },
        enter(data) {
            return gsap.from(data.next.container, {
                opacity: 0
            });
        }
    }]
});

barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
});

export function HomePage() {};