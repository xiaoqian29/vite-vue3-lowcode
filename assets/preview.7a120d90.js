import"./index.124f267a.js";import{f as e,o as r,c as t,b as n,a as o,D as s,ai as a,aj as i,R as l}from"./json.worker.facf0d2f.js";var d={name:"App"};let p;d.render=function(a,i,l,d,p,u){const c=e("router-view");return r(),t("div",null,[n(c,null,{default:o((({Component:e})=>[(r(),t(s(e)))])),_:1})])};const u={},c=[{path:"/:pathMatch(.*)*",component:()=>function(e,r){if(!r)return e();if(void 0===p){const e=document.createElement("link").relList;p=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(r.map((e=>{if(e in u)return;u[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=r?"stylesheet":p,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r?new Promise(((e,r)=>{n.addEventListener("load",e),n.addEventListener("error",r)})):void 0}))).then((()=>e()))}((()=>__import__("./preview.bd11a8ae.js")),["/vite-vue3-lowcode/assets/preview.bd11a8ae.js","/vite-vue3-lowcode/assets/preview.25b46bb2.css","/vite-vue3-lowcode/assets/visual.config.453702f9.js","/vite-vue3-lowcode/assets/visual.config.947336ba.css","/vite-vue3-lowcode/assets/json.worker.facf0d2f.js","/vite-vue3-lowcode/assets/json.worker.136d1bb7.css"])}],f=a({history:i(),routes:c}),m=l(d);m.config.globalProperties.$$refs={},window.$$refs=m.config.globalProperties.$$refs,m.use(f).mount("#app");