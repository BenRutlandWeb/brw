import{o as S,c as d,i as m,t as p,g as h,e as E,j as y}from"./index.ad11daf3.js";function O(t,n,s){return s===1?t:n}const u=1e3,l=60*u,N=60*l,a=24*N,x=7*a,g=30*a,w=365*a;function e(t,n=Date.now(),s=u){return Math.floor(Math.abs(t-n)/s)}function o(t,n,s){return`${t} ${O(n,s,t)}`}function C(t,n=Date.now()){const s=e(t,n,w);if(s)return o(s,"year","years");const c=e(t,n,g);if(c)return o(c,"month","months");const i=e(t,n,x);if(i)return o(i,"week","weeks");const r=e(t,n,a);if(r)return o(r,"day","days");const _=e(t,n,N);if(_)return o(_,"hour","hours");const f=e(t,n,l);if(f)return o(f,"minute","minutes");const D=e(t,n,u);return o(D,"second","seconds")}const I={class:"flex flex-wrap gap-x-4 gap-y-1 text-sm font-mono text-gray-400"},k={class:""},B={__name:"PostMeta",props:["post"],setup(t){const n=t,s=C(new Date(n.post.meta.fileStats.birthtime));return(c,i)=>{const r=y;return S(),d("div",I,[m("time",k,"Posted "+p(h(s))+" ago",1),E(r,{class:"opacity-40"}),m("span",null,p(t.post.meta.stats.text),1)])}}};export{B as _};
