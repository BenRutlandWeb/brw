import{_ as t}from"./PostCard.69ff828e.js";import{a as s}from"./tags.95970fa0.js";import{c as a,A as e,a as r,b as o,t as i,u as l,F as n,x as d,o as m,d as p}from"./vendor.6c96340a.js";import"./PostMeta.bf059ac5.js";import"./index.cad226ff.js";const c={class:"content-wide"},f={class:"markdown-body"},u={class:"grid sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8"},g={props:{tag:String},setup(g){const h=g,b=a((()=>s.find((t=>h.tag===t.path)))),j=e().getRoutes().filter((t=>0!==Object.keys(t.meta).length&&t.path.includes("posts"))).filter((t=>{var s;return null==(s=t.meta.tags)?void 0:s.includes(h.tag)})).sort(((t,s)=>new Date(s.meta.fileStats.birthtime)-new Date(t.meta.fileStats.birthtime)));return(s,a)=>{const e=t;return m(),r("div",c,[o("div",f,[o("h1",null,i(l(b).name),1)]),o("ul",u,[(m(!0),r(n,null,d(l(j),(t=>(m(),r("li",{key:t.path},[p(e,{post:t},null,8,["post"])])))),128))])])}}};export{g as default};