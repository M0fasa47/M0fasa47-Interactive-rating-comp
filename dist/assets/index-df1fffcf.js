(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=document.querySelector(".main-container"),u=document.querySelector(".thank-you"),l=document.getElementById("Submit"),d=document.getElementById("rating"),a=document.querySelectorAll(".num"),f=document.querySelector(".attribution");l.addEventListener("click",()=>{u.classList.remove("hidden"),s.style.display="none",f.style.display="none"});a.forEach(n=>{n.addEventListener("click",()=>{d.innerHTML=n.innerHTML})});
