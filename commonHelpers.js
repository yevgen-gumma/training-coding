import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".searchInput"),u="42324270-89622daef349524aeb531ebd1",l="https://pixabay.com/api/",m="image_type=photo&orientation=horizontal&safesearch=true";function f(){const s=a.value.trim(),o=`${l}?key=${u}&q=${s}&${m}`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Image error!");return r.json()}).then(r=>{if(r.hits.length===0){c.show({position:"topRight",timeout:3500,message:"Sorry, there are no images matching your search query. Please try again!",close:!1,messageColor:"white",backgroundColor:"green"});return}}).catch(r=>{alert("Error while fetching images")})}const d=document.querySelector(".submitForm"),h=document.querySelector(".searchInput");d.addEventListener("submit",s=>{if(s.preventDefault(),h.value.trim()===""){c.show({position:"topRight",timeout:2e3,message:"Please, enter the word!",close:!1,messageColor:"white",backgroundColor:"grey"});return}f()});
//# sourceMappingURL=commonHelpers.js.map