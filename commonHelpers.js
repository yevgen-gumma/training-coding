import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(n){const s=document.querySelector(".gallery");function o(r){const e=r.webformatURL,t=r.largeImageURL,i=r.tags,a=r.likes,l=r.views,u=r.comments,m=r.downloads;return`<div class="card">
            <a href="${t}" class="large-image-link">
              <img class="image" src="${e} alt="${i}">
              <div class="info">
                <p class="info-item">"Likes ${a}"</p>
                <p class="info-item">"Views ${l}"</p>
                <p class="info-item">"Comments ${u}"</p>
                <p class="info-item">"Downloads ${m}"</p>
              </div>
            </a>
          </div>`}s.innerHTML="",n.forEach(r=>{const e=o(r);s.insertAdjacentHTML("beforeend",e)})}const d=document.querySelector(".searchInput"),p="42324270-89622daef349524aeb531ebd1",h="https://pixabay.com/api/",g="image_type=photo&orientation=horizontal&safesearch=true";function y(){const n=d.value.trim(),s=`${h}?key=${p}&q=${n}&${g}`;return fetch(s).then(o=>{if(!o.ok)throw new Error("Image error!");return o.json()}).then(o=>{o.hits.length===0?c.show({position:"topRight",timeout:3500,message:"Sorry, there are no images matching your search query. Please try again!",close:!1,messageColor:"white",backgroundColor:"green"}):f(o.hits)}).catch(o=>{alert("Error while rendering images")})}const w=document.querySelector(".submitForm"),L=document.querySelector(".searchInput");w.addEventListener("submit",n=>{if(n.preventDefault(),L.value.trim()===""){c.show({position:"topRight",timeout:2e3,message:"Please, enter the word!",close:!1,messageColor:"white",backgroundColor:"grey"});return}y()});
//# sourceMappingURL=commonHelpers.js.map
