!function(){var e,t,o,n;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),console.log("document",document),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".ufive_uptop"),t=document.documentElement;window.addEventListener("scroll",(function(){scrollY>=500&&e.classList.add("ufive_upview"),scrollY<500&&e.classList.remove("ufive_upview")})),e.onclick=function(){var e,o;e={duration:700,timing:n,draw:function(e){return t.scrollTop=t.scrollTop*(1-e/7)}},o=performance.now(),requestAnimationFrame((function t(n){var r=(n-o)/e.duration;r>1&&(r=1);var c=e.timing(r);e.draw(c),r<1&&requestAnimationFrame(t)}))};var o,n=(o=function(e){return 1-Math.sin(Math.acos(e>1?e=1:e))},function(e){return 1-o(1-e)})}));var r=document.querySelectorAll('a[href^="#"]'),c=!0,a=!1,d=void 0;try{for(var l,i=function(e,t){var o=t.value;o.addEventListener("click",(function(e){e.preventDefault();var t=o.hasAttribute("href")?o.getAttribute("href"):"body";document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))},u=r[Symbol.iterator]();!(c=(l=u.next()).done);c=!0)i(0,l)}catch(e){a=!0,d=e}finally{try{c||null==u.return||u.return()}finally{if(a)throw d}}}();
//# sourceMappingURL=index.177f341b.js.map
