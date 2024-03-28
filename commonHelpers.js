import{a as w,s as v,i as n}from"./assets/vendor-401f9a01.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function m(o,e,a=15){const t=`https://pixabay.com/api/?key=42869495-3eaffa1d7f59c13a6a9af4ac7&q=${o}&orientation=horizontal&safesearch=true&page=${e}&per_page=${a}`;try{if(!o)throw new Error("Search word is empty");return(await w.get(t)).data}catch(r){throw new Error(`Failed to fetch images: ${r.message}`)}}function u(o){const e=document.querySelector(".gallery"),a=o.map(s=>`<li class="gallery-list-item">
        <a class="gallery-link" href="${s.largeImageURL}">
            <img class="gallery-list-item-img" src="${s.webformatURL}" alt="${s.tags}"/>        
        </a>
            <div class="text-wrapper">
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Likes</p>
                    <p class ="gallery-list-item-text">${s.likes}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Views</p>
                    <p class ="gallery-list-item-text">${s.views}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Comments</p>
                    <p class ="gallery-list-item-text">${s.comments}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Downloads </p>
                    <p class ="gallery-list-item-text">${s.downloads}</p>
                </div>
            </div>
            
      </li>`).join("");e.insertAdjacentHTML("beforeend",a)}const d=document.querySelector(".form"),g=document.querySelector(".loader"),y=document.querySelector(".loader-2"),L=document.querySelector(".search-input");let c="";const x=document.querySelector(".gallery"),p=document.querySelector(".more-btn"),S=()=>{g.classList.add("is-open")},b=()=>{g.classList.remove("is-open")},$=()=>{y.classList.add("is-open")},q=()=>{y.classList.remove("is-open")},M=()=>{p.classList.remove("hidden")};let i;const h=15,O=Math.ceil(500/h),f=new v(".gallery a",{});d.addEventListener("submit",async o=>{x.innerHTML="",o.preventDefault(),i=1;try{if(c=L.value,!c)return n.error({position:"topRight",message:"Search word is empty"});S();const e=await m(c),{hits:a}=e;i+=1,a.length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),M(),u(a),f.refresh(),b(),d.reset()}catch(e){console.log(e)}});p.addEventListener("click",async o=>{if(o.preventDefault(),$(),i>O)return p.classList.add("hidden"),n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{const e=await m(c,i,h);i+=1;const{hits:a}=e;u(a),q(),f.refresh()}catch(e){console.log(e)}P(),d.reset()});function P(){const e=document.querySelector(".gallery-list-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
