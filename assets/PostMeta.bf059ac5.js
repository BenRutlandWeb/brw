import{h as t,_ as s}from"./index.cad226ff.js";import{o as a,a as o,b as e,t as p,u as r,d as n}from"./vendor.6c96340a.js";const m={class:"flex flex-wrap gap-x-4 gap-y-1 text-sm font-mono text-gray-400"},c={class:""},i={props:["post"],setup(i){const f=t(new Date(i.post.meta.fileStats.birthtime));return(t,l)=>{const x=s;return a(),o("div",m,[e("time",c,"Posted "+p(r(f))+" ago",1),n(x,{class:"opacity-40"}),e("span",null,p(i.post.meta.stats.text),1)])}}};export{i as _};