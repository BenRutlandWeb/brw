import{b as m,o as e,n as r,w as i,c as s,e as o,i as a,t as p,j as _}from"./index.ad11daf3.js";import{_ as d}from"./PostMeta.6617d230.js";const u=["src","alt"],h={key:1,class:"grid place-items-center aspect-w-3 aspect-h-2 text-8xl rounded bg-gray-100 text-gray-300"},g={class:"mb-8"},b={class:"text-2xl mt-2"},y={__name:"PostCard",props:["post"],setup(t){return(k,x)=>{const c=_,n=d,l=m("RouterLink");return e(),r(l,{to:t.post,class:"grid gap-4"},{default:i(()=>[t.post.meta.thumbnail?(e(),s("img",{key:0,src:t.post.meta.thumbnail,alt:t.post.meta.name,class:"w-full aspect-w-3 aspect-h-2 block object-cover rounded"},null,8,u)):(e(),s("div",h,[o(c)])),a("div",g,[o(n,{post:t.post},null,8,["post"]),a("h3",b,p(t.post.meta.name),1)])]),_:1},8,["to"])}}};export{y as _};
