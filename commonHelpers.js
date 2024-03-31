import{a as x,S,I as c}from"./assets/vendor-4be47ea8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function y(a,e,o){const t=`https://pixabay.com/api/?key=42869495-3eaffa1d7f59c13a6a9af4ac7&q=${a}&orientation=horizontal&image_type=photo&safesearch=true&page=${e}&per_page=${o}`;return(await x.get(t)).data}function f(a){const e=document.querySelector(".gallery"),o=a.map(r=>`<li class="gallery-list-item">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-list-item-img" src="${r.webformatURL}" alt="${r.tags}"/>        
        </a>
            <div class="text-wrapper">
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Likes</p>
                    <p class ="gallery-list-item-text">${r.likes}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Views</p>
                    <p class ="gallery-list-item-text">${r.views}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Comments</p>
                    <p class ="gallery-list-item-text">${r.comments}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Downloads </p>
                    <p class ="gallery-list-item-text">${r.downloads}</p>
                </div>
            </div>
            
      </li>`).join("");e.insertAdjacentHTML("beforeend",o)}const l=document.querySelector(".form"),v=document.querySelector(".loader"),L=document.querySelector(".loader-2"),b=document.querySelector(".search-input");let d="";const q=document.querySelector(".gallery"),g=document.querySelector(".more-btn");let i=1,n;const p=15,w=new S(".gallery a",{}),$=()=>{v.classList.add("is-open")},h=()=>{v.classList.remove("is-open")},M=()=>{L.classList.add("is-open")},R=()=>{L.classList.remove("is-open")},I=()=>{g.classList.remove("hidden")},u=()=>{g.classList.add("hidden")};l.addEventListener("submit",async a=>{i=1,u(),q.innerHTML="",a.preventDefault();try{if(d=b.value.trim(),!d)return l.reset(),c.error({position:"topRight",message:"Search word is empty"});$();const e=await y(d,i,p),{hits:o,totalHits:r}=e;if(n=Math.ceil(r/p),o.length===0)return h(),l.reset(),c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});if(i+=1,f(o),w.refresh(),h(),I(),l.reset(),i>n)return u(),l.reset(),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(e){console.log(e)}});g.addEventListener("click",async a=>{if(a.preventDefault(),M(),i>n)return u(),c.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{const e=await y(d,i,p);i+=1;const{hits:o,totalHits:r}=e;if(n=Math.ceil(r/p),f(o),R(),w.refresh(),i>n)return u(),l.reset(),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(e){console.log(e)}O(),l.reset()});function O(){const e=document.querySelector(".gallery-list-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
