!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3);console.log("Works!")},function(e,t,n){},function(e,t){if(document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".expand-btn"),t=document.querySelector(".about-us__elem");e.addEventListener("click",(function(){t.classList.toggle("about-us__elem--full"),e.classList.toggle("expand-btn--hide"),t.classList.contains("about-us__elem--full")?e.textContent="Скрыть":e.textContent="Читать далее"}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".show-more__btn"),t=document.querySelector(".brands__details-items"),n=e.querySelector(".show-more__text--brands");e.addEventListener("click",(function(){t.classList.toggle("brands__details-items--show-more"),n.classList.toggle("show-more__text--hide"),t.classList.contains("brands__details-items--show-more")?n.textContent="Скрыть":n.textContent="Показать все"}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".lang__link");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("lang__link--active")})),t.classList.add("lang__link--active")}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".action-btn--call"),t=document.querySelector(".modal-call"),n=document.querySelector(".modal-form__close--call"),c=document.querySelector(".aside-menu"),o=document.querySelector(".overlay"),i=function(){t.classList.add("modal-call--active"),o.classList.add("overlay--active"),c.classList.contains("aside-menu--active")&&c.classList.remove("aside-menu--active")},a=function(){t.classList.remove("modal-call--active"),o.classList.remove("overlay--active")};e.forEach((function(e){e.addEventListener("click",i,!1)})),n.addEventListener("click",a,!1),o.addEventListener("click",a,!1)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".action-btn--chat"),t=document.querySelector(".modal-feedback"),n=document.querySelector(".modal-form__close--feedback"),c=document.querySelector(".aside-menu"),o=document.querySelector(".overlay"),i=function(){t.classList.add("modal-feedback--active"),o.classList.add("overlay--active"),c.classList.contains("aside-menu--active")&&c.classList.remove("aside-menu--active")},a=function(){t.classList.remove("modal-feedback--active"),o.classList.remove("overlay--active")};e.forEach((function(e){e.addEventListener("click",i,!1)})),n.addEventListener("click",a,!1),o.addEventListener("click",a,!1)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".menu-open"),t=document.querySelector(".aside-menu"),n=t.querySelector(".aside-btn__close"),c=document.querySelector(".modal-feedback"),o=document.querySelector(".modal-call"),i=document.querySelector(".overlay"),a=function(){t.classList.remove("aside-menu--active"),i.classList.remove("overlay--active")};e.addEventListener("click",(function(){t.classList.add("aside-menu--active"),i.classList.add("overlay--active"),c.classList.contains("modal-feedback--active")&&c.classList.remove("modal-feedback--active"),o.classList.contains("modal-call--active")&&o.classList.remove("modal-call--active")}),!1),n.addEventListener("click",a,!1),i.addEventListener("click",a,!1);var s=document.querySelectorAll(".aside-menu__nav-item");s.forEach((function(e){e.addEventListener("click",(function(){s.forEach((function(e){e.classList.remove("aside-menu__nav-item--active")})),e.classList.add("aside-menu__nav-item--active")}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".menu__item");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("menu__item--active")})),t.classList.add("menu__item--active")}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".show-more__btn--devices"),t=document.querySelector(".devices__list-items"),n=e.querySelector(".show-more__text--devices");e.addEventListener("click",(function(){t.classList.toggle("devices__list-items--show-more"),n.classList.toggle("show-more__text--hide"),t.classList.contains("devices__list-items--show-more")?n.textContent="Скрыть":n.textContent="Показать все"}))})),document.documentElement.clientWidth<=550)new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1,spaceBetween:-50,breakpoints:{480:{slidesPerView:1,spaceBetween:-150},600:{slidesPerView:2,spaceBetween:-50}}}),new Swiper(".swiper-second",{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1,spaceBetween:-30,breakpoints:{480:{slidesPerView:1,spaceBetween:-150},600:{slidesPerView:2,spaceBetween:0}}})}]);
//# sourceMappingURL=bundle.js.map