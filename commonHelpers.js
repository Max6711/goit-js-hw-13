import{a as L,S as w,I as n}from"./assets/vendor-4be47ea8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function g(a,e,s=15){const t=`https://pixabay.com/api/?key=42869495-3eaffa1d7f59c13a6a9af4ac7&q=${a}&orientation=horizontal&image_type=photo&safesearch=true&page=${e}&per_page=${s}`;return(await L.get(t)).data}function h(a){const e=document.querySelector(".gallery"),s=a.map(o=>`<li class="gallery-list-item">
        <a class="gallery-link" href="${o.largeImageURL}">
            <img class="gallery-list-item-img" src="${o.webformatURL}" alt="${o.tags}"/>        
        </a>
            <div class="text-wrapper">
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Likes</p>
                    <p class ="gallery-list-item-text">${o.likes}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Views</p>
                    <p class ="gallery-list-item-text">${o.views}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Comments</p>
                    <p class ="gallery-list-item-text">${o.comments}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Downloads </p>
                    <p class ="gallery-list-item-text">${o.downloads}</p>
                </div>
            </div>
            
      </li>`).join("");e.insertAdjacentHTML("beforeend",s)}const c=document.querySelector(".form"),y=document.querySelector(".loader"),f=document.querySelector(".loader-2"),x=document.querySelector(".search-input");let l="";const S=document.querySelector(".gallery"),u=document.querySelector(".more-btn");let i;const b=15,q=Math.ceil(500/b),v=new w(".gallery a",{}),$=()=>{y.classList.add("is-open")},m=()=>{y.classList.remove("is-open")},M=()=>{f.classList.add("is-open")},R=()=>{f.classList.remove("is-open")},I=()=>{u.classList.remove("hidden")},p=()=>{u.classList.add("hidden")};c.addEventListener("submit",async a=>{p(),S.innerHTML="",a.preventDefault(),i=1;try{if(l=x.value.trim(),!l)return n.error({position:"topRight",message:"Search word is empty"});$();const e=await g(l,i),{hits:s}=e;if(s.length===0)return m(),c.reset(),n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});i+=1,h(s),v.refresh(),m(),I(),c.reset()}catch(e){console.log(e)}});u.addEventListener("click",async a=>{if(a.preventDefault(),M(),i>q)return p(),n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{const e=await g(l,i);i+=1;const{hits:s}=e;if(h(s),R(),v.refresh(),s.length===0)return p(),c.reset(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(e){console.log(e)}O(),c.reset()});function O(){const e=document.querySelector(".gallery-list-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
