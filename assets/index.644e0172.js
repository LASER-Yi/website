import{r as e,R as t,a as r}from"./vendor.b43ca5a5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const n=()=>{const[r]=e.exports.useState("/* World with only imagination */");return t.createElement("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-50"},t.createElement("div",{className:"text-center"},t.createElement("p",{className:"font-sans font-light text-2xl tracking-wider py-4"},"LIANG Yi"),t.createElement("p",{className:"text-gray-500 font-extralight tracking-widest"},r)))};r.render(t.createElement(t.StrictMode,null,t.createElement(n,null)),document.getElementById("root"));