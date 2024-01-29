import{c as s,f as o,w as l,i as e,F as i,e as u,a as f,l as h,q as b,d as g,o as n,g as w,j as x}from"./index.9e6845b0.js";import{_ as k}from"./Button.4ed135a1.js";import{_ as v}from"./PostCard.529a91ef.js";import"./PostMeta.0a066962.js";const y=e("title",null,"Ben Rutland Web",-1),B=h('<div class="content-wide py-16"><div class="max-w-prose mb-8"><h1 class="text-4xl font-extrabold mb-8">Welcome to Ben Rutland Web</h1><p class="text-lead mb-4"> I&#39;m a web developer for <a href="https://www.10degrees.uk/" class="external-link" target="_blank" rel="nofollow noopener noreferrer external">10 Degrees</a>, creator of the <a href="https://radiate-framework.github.io/" class="external-link" target="_blank" rel="nofollow noopener noreferrer external">Radiate</a> framework, and I <i>try</i> to write interesting things about web technologies, ideologies and more. </p><p class=""> In addition to web development I do other stuff like drawing and making music, some of which I will showcase on this site. Some of it I won&#39;t. </p></div></div>',1),I={class:"content-screen container py-16 mb-32 gap-y-8"},R={class:"border-b container content-screen"},S={class:"content-wide flex flex-wrap gap-4 justify-between items-center pb-4"},V=e("h2",{class:"text-4xl"},"Posts",-1),D={class:"content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8"},P={__name:"index",setup(N){const c=b().getRoutes().filter(t=>Object.keys(t.meta).length!==0&&t.path.includes("posts")).sort((t,a)=>new Date(a.meta.fileStats.birthtime)-new Date(t.meta.fileStats.birthtime)).slice(0,3);return(t,a)=>{const d=g("Head"),_=x,m=k,p=v;return n(),s(i,null,[o(d,null,{default:l(()=>[y]),_:1}),B,e("div",I,[e("div",R,[e("div",S,[V,o(m,{is:"RouterLink",to:{name:"posts"},class:"bg-brand-green ring-brand-green text-brand-blue"},{default:l(()=>[o(_),w(" View all posts ")]),_:1})])]),e("ul",D,[(n(!0),s(i,null,u(f(c),r=>(n(),s("li",{key:r.path},[o(p,{post:r},null,8,["post"])]))),128))])])],64)}}};export{P as default};