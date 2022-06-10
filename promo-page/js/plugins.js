
     const btns = document.getElementsByClassName("item-link");
     for (let i = 0; i < btns.length; i++) {

          btns[i].addEventListener("click", function() {

               let current = document.getElementsByClassName("activeIndicator");
               if (current.length > 0) {
                    current[0].className = current[0].className.replace("activeIndicator", "");
               }
               this.className += " activeIndicator";
          });
     }



(function () {
          let burger = document.querySelector('.burger-menu');
          let mobileMenu = document.querySelector('.mobile-navigation');
          let  close = document.querySelector('.menu--close');
          let k = 0;
          burger.addEventListener('click', function () {
               k++;
               if (k === 1) {
                    anime({
                         targets: mobileMenu,
                         translateX:  ['-100%','0'],
                         duration: 500,
                         easing: 'easeInQuad'
                    });
                    setTimeout(function () {
                         anime({
                              targets: '.menu__item',
                              opacity:1,
                              easing:'easeOutExpo',
                              delay: anime.stagger(150),
                         });
                    },190);

               } else if (k === 2) {
                    setTimeout(function () {
                         anime({
                              targets: mobileMenu,
                              translateX:  ['0','-100%'],
                              duration: 500,
                              easing: 'easeInQuad'
                         });
                    },10);
                    anime({
                         targets: '.menu__item',
                         opacity:0,
                         easing:'easeOutExpo',
                    });
                    k=0;
               }
          });

     })();

     let pr = document.querySelector('.burger-menu');
     pr.addEventListener('click', function () {
          setTimeout(function () {
               pr.classList.toggle("menu--open");
               pr.classList.toggle("menu--close");
          },300);

     });

     document.querySelector('.burger-menu').onclick = function(){
          document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
     };

     function main() {
          let mainSection = document.querySelector('.main');
          setTimeout(function () {
               mainSection.style.visibility = 'visible';
               mainSection.style.removeProperty('height');
          },10);
     }
     window.addEventListener("load", main);
