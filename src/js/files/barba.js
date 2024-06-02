// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, FLS } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import barba from '@barba/core';
import { gsap } from "gsap";

barba.init({
    views: [{
        namespace: 'home',
        afterEnter() {
          // refresh the parallax based on new page content
          HomePage();
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
            //duration: 3,
            //delay: 2,
            //repeat: 2,
            //repeatDelay: 1,
            //yoyo: true,
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

export function HomePage() {}; 