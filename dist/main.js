!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{let e=!1;const t=document.querySelector(".clubs-list"),n=t.querySelector("ul");t.addEventListener("click",()=>{e?(n.style.display="none",e=!1):(n.style.display="block",e=!0)})};var l=()=>{let e=!1;document.querySelector(".open-popup");const t=document.getElementById("free_visit_form");document.addEventListener("click",n=>{let o=n.target;console.log(o),e?e&&(o.classList.contains("overlay")?(t.style.display="none",e=!1):(o=o.closest(".close-form"),o.classList.contains("close-form")&&(t.style.display="none",e=!1))):o&&o.classList.contains("open-popup")&&(t.style.display="block",e=!0)})};var s=()=>{let e=!1;const t=document.getElementById("callback_form");document.addEventListener("click",n=>{let o=n.target;console.log(o),e?e&&(o.classList.contains("overlay")||o.classList.contains("close-btn")?(t.style.display="none",e=!1):(o=o.closest(".close-form"),o.classList.contains("close-form")&&(t.style.display="none",e=!1))):o&&o.classList.contains("callback-btn")&&(t.style.display="block",e=!0)})};console.log(document.documentElement.clientWidth);var c=()=>{let e=!1;const t=document.getElementById("gift"),n=document.querySelector(".fixed-gift");document.addEventListener("click",o=>{let l=o.target;console.log(l),e?e&&(l.classList.contains("overlay")||"ok"===l.id?(n.style.zIndex="5555",t.style.display="none",e=!1):(l=l.closest(".close-form"),l.classList.contains("close-form")&&(n.style.zIndex="5555",t.style.display="none",e=!1))):(l=l.closest(".fixed-gift"),l&&(t.style.display="block",console.log(n),n.style.zIndex="auto",e=!0))})};o(),l(),s(),c()}]);