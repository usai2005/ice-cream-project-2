var e;(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=document.querySelectorAll(".mobile-menu__link"),n=document.querySelector(".mobile-menu__button"),r=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};c.forEach((e=>e.addEventListener("click",r))),n.addEventListener("click",r),t.addEventListener("click",r),o.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close"),c=document.querySelector("body");const n=document.querySelectorAll("iframe");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active"),c.classList.add("modal-open")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),document.querySelector("body").classList.remove("modal-open"),n.forEach((e=>{const t=e.src;e.src="",e.src=t}))}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),t.classList.remove("active"),document.querySelector("body").classList.remove("modal-open"),n.forEach((e=>{const t=e.src;e.src="",e.src=t})))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),document.querySelector("body").classList.remove("modal-open"),this.classList.remove("active"),n.forEach((e=>{const t=e.src;e.src="",e.src=t}))}))})),console.log("document",document),document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector(".ufive_uptop"),t=document.documentElement;window.addEventListener("scroll",(function(){scrollY>=500&&e.classList.add("ufive_upview"),scrollY<500&&e.classList.remove("ufive_upview")})),e.onclick=function(){!function(e){let t=performance.now();requestAnimationFrame((function o(c){let n=(c-t)/e.duration;n>1&&(n=1);let r=e.timing(n);e.draw(r),n<1&&requestAnimationFrame(o)}))}({duration:700,timing:o,draw:e=>t.scrollTop=t.scrollTop*(1-e/7)})};let o=(c=e=>1-Math.sin(Math.acos(e>1?e=1:e)),e=>1-c(1-e));var c}));const t=document.querySelectorAll('a[href^="#"]');for(let e of t)e.addEventListener("click",(function(t){t.preventDefault();const o=e.hasAttribute("href")?e.getAttribute("href"):"body";document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}));
//# sourceMappingURL=index.abefa41e.js.map
