import{a as y,s as f,i as h}from"./assets/vendor-401f9a01.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function d(o,t=1,a=15){const e=`https://pixabay.com/api/?key=42869495-3eaffa1d7f59c13a6a9af4ac7&q=${o}&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`;try{if(!o)throw new Error("Search word is empty");return(await y.get(e)).data}catch(r){throw new Error(`Failed to fetch images: ${r.message}`)}}function m(o){const t=document.querySelector(".gallery"),a=o.map(s=>`<li class="gallery-list-item">
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
            
      </li>`).join("");t.insertAdjacentHTML("beforeend",a)}const l=document.querySelector(".form"),p=document.querySelector(".loader"),w=document.querySelector(".search-input");let c="";const v=document.querySelector(".gallery"),u=document.querySelector(".more-btn");let n=1;const x=15,g=new f(".gallery a",{});l.addEventListener("submit",async o=>{v.innerHTML="",o.preventDefault();try{c=w.value;const t=await d(c),{hits:a}=t;p.classList.add("is-open"),a.length===0&&h.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),m(a),n+=1,n>1&&u.classList.remove("hidden"),g.refresh(),p.classList.remove("is-open"),l.reset()}catch(t){console.log(t)}});u.addEventListener("click",async o=>{o.preventDefault();try{const t=await d(c,n,x),{hits:a}=t;m(a),g.refresh()}catch(t){console.log(t)}l.reset()});
//# sourceMappingURL=commonHelpers.js.map
