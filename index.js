import{S as g,a as p,i as n}from"./assets/vendor-DUq1hUTs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=new g(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),u=document.querySelector(".loader");function h(i){const r=i.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:s,comments:m,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${a}" alt="${e}" />
          </a>
          <ul class="image-stats">
            <li><b>Likes:</b> ${t}</li>
            <li><b>Views:</b> ${s}</li>
            <li><b>Comments:</b> ${m}</li>
            <li><b>Downloads:</b> ${f}</li>
          </ul>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function L(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}const w="https://pixabay.com/api/",P="50306313-7dd778a7e5a97bb6309a7d780";function q(i){return p.get(w,{params:{key:P,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const d=document.querySelector(".form"),l=d.elements["search-text"];d.addEventListener("submit",i=>{i.preventDefault();const r=l.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),L(),q(r).then(a=>{const o=a.hits;if(o.length===0){n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o)}).catch(a=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S(),l.value=""})});
//# sourceMappingURL=index.js.map
