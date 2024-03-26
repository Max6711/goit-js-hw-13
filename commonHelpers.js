import{a as w,s as L,i as n}from"./assets/vendor-401f9a01.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function m(a,t,o=15){const e=`https://pixabay.com/api/?key=42869495-3eaffa1d7f59c13a6a9af4ac7&q=${a}&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;try{if(!a)throw new Error("Search word is empty");return(await w.get(e)).data}catch(r){throw new Error(`Failed to fetch images: ${r.message}`)}}function u(a){const t=document.querySelector(".gallery"),o=a.map(s=>`<li class="gallery-list-item">
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
            
      </li>`).join("");t.insertAdjacentHTML("beforeend",o)}const d=document.querySelector(".form"),g=document.querySelector(".loader"),y=document.querySelector(".loader-2"),v=document.querySelector(".search-input");let l="";const x=document.querySelector(".gallery"),p=document.querySelector(".more-btn"),S=()=>{g.classList.add("is-open")},$=()=>{g.classList.remove("is-open")},b=()=>{y.classList.remove("hidden")},q=()=>{y.classList.add("hidden")};let i=1;const f=15,O=Math.ceil(500/f),h=new L(".gallery a",{});d.addEventListener("submit",async a=>{x.innerHTML="",a.preventDefault(),S();try{if(l=v.value,!l)return n.error({position:"topRight",message:"Search word is empty"});const t=await m(l),{hits:o}=t;i+=1,o.length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),u(o),i>=2&&p.classList.remove("hidden"),h.refresh(),$(),d.reset()}catch(t){console.log(t)}});p.addEventListener("click",async a=>{if(a.preventDefault(),b(),i>O)return p.classList.add("hidden"),n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{const t=await m(l,i,f);q(),i+=1;const{hits:o}=t;u(o),h.refresh()}catch(t){console.log(t)}d.reset()});
//# sourceMappingURL=commonHelpers.js.map
