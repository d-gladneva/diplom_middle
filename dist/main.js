!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{let e=!1;document.querySelector(".open-popup");const t=document.getElementById("free_visit_form");document.addEventListener("click",n=>{let l=n.target;console.log(l),e?e&&(l.classList.contains("overlay")?(t.style.display="none",e=!1):(l=l.closest(".close-form"),l.classList.contains("close-form")&&(t.style.display="none",e=!1))):l&&l.classList.contains("open-popup")&&(t.style.display="block",e=!0)})};var o=()=>{let e=!1;const t=document.getElementById("callback_form");document.addEventListener("click",n=>{let l=n.target;console.log(l),e?e&&(l.classList.contains("overlay")||l.classList.contains("close-btn")?(t.style.display="none",e=!1):(l=l.closest(".close-form"),l.classList.contains("close-form")&&(t.style.display="none",e=!1))):l&&l.classList.contains("callback-btn")&&(t.style.display="block",e=!0)})};var s=()=>{let e=!1;const t=document.getElementById("gift"),n=document.querySelector(".fixed-gift");document.addEventListener("click",l=>{let o=l.target;console.log(o),e?e&&(o.classList.contains("overlay")||"ok"===o.id?(t.style.display="none",e=!1):(o=o.closest(".close-form"),o.classList.contains("close-form")&&(t.style.display="none",e=!1))):(o=o.closest(".fixed-gift"),o&&(t.style.display="block",console.log(n),n.style.display="none",e=!0))})};var c=()=>{const e=document.createElement("div");e.style.cssText="font-size: 1.5 rem; color: #fff";const t=e=>{e.nextElementSibling&&"Заполните поле!"===e.nextElementSibling.textContent&&e.nextElementSibling.remove()},n=e=>{console.log(e);const t=document.querySelectorAll('button[type="submit"]');console.log(t);const n=/^(\+7)?8?([-()]*\d){10}$/;if("phone"===e.name){if(e.value=e.value.replace(/^\++/g,"+"),e.value=e.value.replace(/[^+0-9]/g,""),n.test(e.value))"Ошибка в этом поле"===e.parentNode.lastElementChild.textContent&&e.parentNode.lastElementChild.remove(),t.forEach(e=>{e.removeAttribute("disabled")});else{const n=document.createElement("div");if(n.textContent="Ошибка в этом поле",e.nextElementSibling&&"Ошибка в этом поле"===e.nextElementSibling.textContent)return;e.insertAdjacentElement("afterend",n),t.forEach(e=>{e.setAttribute("disabled",!0)})}}"name"===e.name&&(e.value=e.value.replace(/[^а-яё\s]/gi,"")),"user_message"===e.name&&(e.value=e.value.replace(/[^а-яА-Я ,.?!"';:\-\%()\#]/g,""))},l=(n,l)=>{if(console.dir(n),"form"===n.localName){const s=n.querySelectorAll("input"),c=n.querySelector('input[name="phone"]'),r=n.querySelector('input[name="name"]'),i=n.querySelector("#check"),a=document.querySelector("#thanks").querySelector("p");if(console.log(a),""!==c.value&&""!==r.value){if(!i||i&&i.checked){console.log(i.checked),n.appendChild(e),a.textContent="Загрузка...";let t=l.target;console.log(t);const c=new FormData(n);let r={};c.forEach((e,t)=>{r[t]=e}),o(r).then(t=>{if(!0!==t.ok)throw new Error("status network not 200");a.textContent="Спасибо! Мы скоро с Вами свяжемся!",i&&(i.checked=!1);for(let e=0;e<s.length;e++)s[e].value="";setTimeout(()=>{e.remove()},5e3)}).catch(e=>{a.textContent="Что-то пошло не так...",console.log(e)})}else if(i&&!1===i.checked){console.log(i.checked);const e=document.createElement("div");if(e.textContent="Поставьте галочку!",e.style.cssText="color: red; line-height: 0px; height: 15px; font-size: 15px;",i.nextElementSibling&&"Поставьте галочку!"===i.nextElementSibling.textContent)return;!1===i.checked&&i.insertAdjacentElement("afterend",e)}}else for(let e=0;e<s.length;e++){const t=document.createElement("div");if(t.textContent="Заполните поле!",t.style.cssText="color: red; line-height: 0px; height: 15px; font-size: 15px;",s[e].nextElementSibling&&"Заполните поле!"===s[e].nextElementSibling.textContent)return;""===s[e].value&&s[e].insertAdjacentElement("afterend",t)}document.body.addEventListener("input",t)}},o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});document.body.addEventListener("input",e=>{e.preventDefault(),n(e.target),t(e.target),l(e.target)}),document.body.addEventListener("submit",e=>{e.preventDefault(),l(e.target)})};var r=()=>{window.addEventListener("resize",()=>{console.log(document.documentElement.clientWidth);const e=document.querySelector(".top-menu"),t=document.querySelector(".close-menu-btn").querySelector("img"),n=document.querySelector(".popup-menu");let l=!1;document.documentElement.clientWidth<768?e.style.position="fixed":e.style.position="relative",document.documentElement.clientWidth<768&&document.addEventListener("click",e=>{let o=e.target;l?l&&(o===t||o.classList.contains("test"))&&(n.style.display="none",l=!1):(o=o.closest(".menu-button"),o&&o.classList.contains("menu-button")&&(n.style.display="block",l=!0))})})};var i=()=>{const e=document.getElementById("totop");e.style.display="none";window.addEventListener("scroll",()=>{document.getElementById("clubs").getBoundingClientRect().y<=0?e.style.display="block":e.style.display="none"})};var a=()=>{(e=>{const t=document.querySelector("#card_leto_mozaika"),n=document.querySelector("#price-total"),l=document.querySelector("#card_leto_schelkovo"),o=document.querySelector('input[placeholder="Промокод"]');console.log(o),t.checked&&(console.log(o),o.value?n.textContent=3:n.textContent=3e3),l.checked&&(n.textContent=3005)})()};var d=()=>{const e=document.querySelector("#thanks");let t=!1;document.querySelector(".close-form");document.addEventListener("click",n=>{let l=n.target;console.log(l),t?t&&(l.classList.contains("overlay")||l.classList.contains("close-btn")?(e.style.display="none",t=!1):(l=l.closest(".close-form"),l.classList.contains("close-form")&&(e.style.display="none",t=!1))):l&&l.classList.contains("btn-send")&&(e.style.display="block",t=!0)})};var u=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{e[t].style.display="none",t++,t>=e.length&&(t=0),e[t].style.display="block"},2e3)};var y=()=>{const e=document.querySelector(".services-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{e[t].style.display="none",t++,t>=e.length&&(t=0),e[t].style.display="block"},2e3)};var m=()=>{const e=document.querySelector(".gallery-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{e[t].style.display="none",t++,t>=e.length&&(t=0),e[t].style.display="block"},2e3)};(()=>{let e=!1;const t=document.querySelector(".clubs-list"),n=t.querySelector("ul");t.addEventListener("click",()=>{e?(n.style.display="none",e=!1):(n.style.display="block",e=!0)})})(),l(),o(),s(),c(),r(),i(),a(),d(),u(),y(),m()}]);