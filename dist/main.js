!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{let e=!1;document.querySelector(".open-popup");const t=document.getElementById("free_visit_form");document.addEventListener("click",n=>{let o=n.target;console.log(o),e?e&&(o.classList.contains("overlay")?(t.style.display="none",e=!1):(o=o.closest(".close-form"),o.classList.contains("close-form")&&(t.style.display="none",e=!1))):o&&o.classList.contains("open-popup")&&(t.style.display="block",e=!0)})};var l=()=>{let e=!1;const t=document.getElementById("callback_form");document.addEventListener("click",n=>{let o=n.target;console.log(o),e?e&&(o.classList.contains("overlay")||o.classList.contains("close-btn")?(t.style.display="none",e=!1):(o=o.closest(".close-form"),o.classList.contains("close-form")&&(t.style.display="none",e=!1))):o&&o.classList.contains("callback-btn")&&(t.style.display="block",e=!0)})};var c=()=>{let e=!1;const t=document.getElementById("gift"),n=document.querySelector(".fixed-gift");document.addEventListener("click",o=>{let l=o.target;console.log(l),e?e&&(l.classList.contains("overlay")||"ok"===l.id?(t.style.display="none",e=!1):(l=l.closest(".close-form"),l.classList.contains("close-form")&&(t.style.display="none",e=!1))):(l=l.closest(".fixed-gift"),l&&(t.style.display="block",console.log(n),n.style.display="none",e=!0))})};var r=()=>{const e=document.createElement("div");e.style.cssText="font-size: 1.5 rem; color: #fff";const t=e=>{e.nextElementSibling&&"Заполните поле!"===e.nextElementSibling.textContent&&e.nextElementSibling.remove()},n=e=>{const t=document.querySelectorAll('button[type="submit"]');console.log(t);const n=/^(\+7)?8?([-()]*\d){10}$/;if("phone"===e.name){if(e.value=e.value.replace(/^\++/g,"+"),e.value=e.value.replace(/[^+0-9]/g,""),n.test(e.value))"Ошибка в этом поле"===e.parentNode.lastElementChild.textContent&&e.parentNode.lastElementChild.remove(),t.forEach(e=>{e.removeAttribute("disabled")});else{const n=document.createElement("div");if(n.textContent="Ошибка в этом поле",e.nextElementSibling&&"Ошибка в этом поле"===e.nextElementSibling.textContent)return;e.insertAdjacentElement("afterend",n),t.forEach(e=>{e.setAttribute("disabled",!0)})}}"name"===e.name&&(e.value=e.value.replace(/[^а-яё\s]/gi,"")),"user_message"===e.name&&(e.value=e.value.replace(/[^а-яА-Я ,.?!"';:\-\%()\#]/g,""))},o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});document.body.addEventListener("input",e=>{e.preventDefault(),n(e.target),t(e.target)}),document.body.addEventListener("submit",n=>{n.preventDefault(),(n=>{if(console.dir(n),"form"===n.localName){const l=n.querySelectorAll("input"),c=n.querySelector('input[name="phone"]'),r=n.querySelector('input[name="name"]'),s=n.querySelector("textarea");if(""!==c.value&&""!==r.value){if(!s||s&&""!==s.value){n.appendChild(e),e.textContent="Загрузка...";const t=new FormData(n);let c={};t.forEach((e,t)=>{c[t]=e}),o(c).then(t=>{if(!0!==t.ok)throw new Error("status network not 200");e.textContent="Спасибо! Мы скоро с Вами свяжемся!",s&&(s.value="");for(let e=0;e<l.length;e++)l[e].value="";setTimeout(()=>{e.remove()},5e3)}).catch(t=>{e.textContent="Что-то пошло не так...",console.log(t)})}else if(s&&""===s.value){const e=document.createElement("div");if(e.textContent="Заполните поле!",e.style.cssText="color: red; line-height: 0px; height: 15px; font-size: 15px;",s.nextElementSibling&&"Заполните поле!"===s.nextElementSibling.textContent)return;""===s.value&&s.insertAdjacentElement("afterend",e)}}else for(let e=0;e<l.length;e++){const t=document.createElement("div");if(t.textContent="Заполните поле!",t.style.cssText="color: red; line-height: 0px; height: 15px; font-size: 15px;",l[e].nextElementSibling&&"Заполните поле!"===l[e].nextElementSibling.textContent)return;""===l[e].value&&l[e].insertAdjacentElement("afterend",t)}document.body.addEventListener("input",t)}})(n.target)})};var s=()=>{document.querySelector(".menu-button"),document.querySelector(".scroll").querySelector("a");const e=document.querySelector(".top-menu"),t=document.querySelector(".close-menu-btn").querySelector("img"),n=document.querySelector(".popup-menu");let o=!1;document.documentElement.clientWidth<768&&(e.style.position="fixed",document.addEventListener("click",e=>{let l=e.target;o?o&&(l===t||l.classList.contains("test"))&&(n.style.display="none",o=!1):(l=l.closest(".menu-button"),l&&(n.style.display="block",o=!0))}))};var i=()=>{window.addEventListener("scroll",()=>{const e=document.getElementById("totop");document.getElementById("clubs").getBoundingClientRect().y<=0?e.style.opacity="1":e.style.opacity="0"})};var a=()=>{(e=>{const t=document.querySelector("#card_leto_mozaika"),n=document.querySelector("#price-total"),o=document.querySelector("#card_leto_schelkovo"),l=document.querySelector('input[placeholder="Промокод"]');console.log(l),t.checked&&(console.log(l),l.value?n.textContent=3:n.textContent=3e3),o.checked&&(n.textContent=3005)})()};(()=>{let e=!1;const t=document.querySelector(".clubs-list"),n=t.querySelector("ul");t.addEventListener("click",()=>{e?(n.style.display="none",e=!1):(n.style.display="block",e=!0)})})(),o(),l(),c(),r(),s(),i(),a()}]);