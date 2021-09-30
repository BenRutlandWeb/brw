import{_ as t}from"./index.4a6f8c51.js";import{p as e,e as s,o as a,h as o,w as l,r as n,b as r,n as i,i as d,j as u,d as c,t as p,a as m,u as b,H as g,F as f,g as v}from"./vendor.6c96340a.js";import{_ as w}from"./PostMeta.d98a38a3.js";import{_ as x}from"./PostCard.d499188d.js";e("data-v-4e8b660c");const h={class:"leading-6"};s();const y={props:{is:{default:"button"},color:{type:String}},setup(t){const e=t,s=["green"===e.color?"text-brand-blue bg-brand-green ring-brand-green":"","pink"===e.color?"text-brand-blue bg-brand-pink ring-brand-pink":""];return(e,u)=>(a(),o(d(t.is),{class:i(["button inline-flex gap-4 items-center justify-center rounded leading-3 px-4 py-2 border-2 border-transparent font-medium font-mono focus:outline-none focus-visible:ring transition ring-opacity-40 focus:z-10 disabled:opacity-30 disabled:cursor-default",s])},{default:l((()=>[n(e.$slots,"before",{},void 0,!0),r("span",h,[n(e.$slots,"default",{},void 0,!0)]),n(e.$slots,"after",{},void 0,!0)])),_:3}))},__scopeId:"data-v-4e8b660c"},k=["src","alt"],j={class:"mb-8"},q={class:"text-4xl mt-2"},$={class:"text-xl mt-2"},_={props:{post:Object,dir:{type:String,default:"ltr"}},setup:t=>(e,s)=>{const n=w,d=u("RouterLink");return a(),o(d,{to:t.post,class:"grid grid-flow-row-dense items-center md:grid-cols-2 gap-8"},{default:l((()=>[r("img",{src:t.post.meta.thumbnail,alt:t.post.meta.name,class:i(["w-full block object-cover rounded-lg aspect-w-3 aspect-h-2","ltr"!==t.dir?"md:col-start-2":""])},null,10,k),r("div",j,[c(n,{post:t.post},null,8,["post"]),r("h3",q,p(t.post.meta.name),1),r("p",$,p(t.post.meta.description),1)])])),_:1},8,["to"])}},P=r("title",null,"Ben Rutland Web",-1),R=r("div",{class:"content-wide my-16"},[r("h1",{class:"text-4xl font-medium mb-4"},"Welcome to Ben Rutland Web"),r("div",{class:"max-w-prose"},[r("p",null," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nihil natus, veritatis quisquam dignissimos ex itaque inventore veniam quae voluptatibus nulla. Eum quae et aliquam quos voluptatibus at, quas quisquam! ")])],-1),H={class:"content-screen container bg-gray-100 py-16 mb-32 gap-y-8"},L={class:"border-b container content-screen"},W={class:"content-wide flex flex-wrap gap-4 justify-between items-center pb-4"},O=r("h2",{class:"text-4xl"},"Featured posts",-1),B=v(" View all posts "),F={class:"content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8"},I={class:"content-wide mb-8"},S=r("h2",{class:"text-4xl mb-2"},"Radiate framework",-1),V={class:"max-w-prose"},z=r("p",null," Here is a selection of posts about Radiate, a PHP framework I created to make WordPress themes and plugins development a joy. Heavily inspired by Laravel, it uses WordPress core functionality underneath elegant OOP classes. ",-1),C=v(" View all "),E={class:"mb-32 content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8"},M={setup:e=>(e,s)=>{const o=t,n=y,i=_,d=x;return a(),m(f,null,[c(b(g),null,{default:l((()=>[P])),_:1}),R,r("div",H,[r("div",L,[r("div",W,[O,c(n,{is:"RouterLink",to:{name:"posts"},class:"bg-brand-green ring-brand-green text-brand-blue"},{default:l((()=>[c(o),B])),_:1})])]),c(i,{post:e.$router.resolve({name:"posts-autism-awareness-day"}),class:"content-wide"},null,8,["post"]),r("ul",F,[r("li",null,[c(d,{post:e.$router.resolve({name:"posts-autocomplete-attribute"})},null,8,["post"])]),r("li",null,[c(d,{post:e.$router.resolve({name:"posts-how-i-built-this-blog"})},null,8,["post"])]),r("li",null,[c(d,{post:e.$router.resolve({name:"posts-hello-world"})},null,8,["post"])])])]),r("div",I,[S,r("div",V,[z,c(n,{is:"RouterLink",to:{name:"tags-tag",params:{tag:"radiate"}},class:"!no-underline bg-radiate-black ring-radiate-black text-radiate-yellow mt-4"},{default:l((()=>[c(o),C])),_:1})])]),r("ul",E,[r("li",null,[c(d,{post:e.$router.resolve({name:"posts-getting-started-with-radiate"})},null,8,["post"])]),r("li",null,[c(d,{post:e.$router.resolve({name:"posts-the-radiate-http-client"})},null,8,["post"])]),r("li",null,[c(d,{post:e.$router.resolve({name:"posts-ajax-routes-with-radiate"})},null,8,["post"])])])],64)}};export{M as default};