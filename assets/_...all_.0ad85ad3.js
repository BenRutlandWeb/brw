import{r as U,c as k,e as s,w as l,g as M,i as p,p as m,t as G,v as S,o as H,H as L,f as R,j as V,x as D}from"./index.ad11daf3.js";import{_ as K}from"./Button.500248e8.js";import{a as q,b as h,i as _,r as W,f as X}from"./isObject.b7e386f9.js";function z(e,t){for(var r=-1,a=e==null?0:e.length,i=Array(a);++r<a;)i[r]=t(e[r],r,e);return i}var J=Array.isArray,F=J,Q="[object AsyncFunction]",Y="[object Function]",Z="[object GeneratorFunction]",ee="[object Proxy]";function te(e){if(!q(e))return!1;var t=h(e);return t==Y||t==Z||t==Q||t==ee}var re=9007199254740991,ne=/^(?:0|[1-9]\d*)$/;function oe(e,t){var r=typeof e;return t=t==null?re:t,!!t&&(r=="number"||r!="symbol"&&ne.test(e))&&e>-1&&e%1==0&&e<t}var ae=9007199254740991;function P(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ae}function se(e){return e!=null&&P(e.length)&&!te(e)}var ie=Object.prototype;function ce(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ie;return e===r}function ue(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var pe="[object Arguments]";function j(e){return _(e)&&h(e)==pe}var O=Object.prototype,le=O.hasOwnProperty,fe=O.propertyIsEnumerable,ge=j(function(){return arguments}())?j:function(e){return _(e)&&le.call(e,"callee")&&!fe.call(e,"callee")},de=ge;function be(){return!1}var B=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x=B&&typeof module=="object"&&module&&!module.nodeType&&module,ye=x&&x.exports===B,A=ye?W.Buffer:void 0,me=A?A.isBuffer:void 0,Te=me||be,ve=Te,he="[object Arguments]",_e="[object Array]",je="[object Boolean]",xe="[object Date]",Ae="[object Error]",$e="[object Function]",we="[object Map]",Fe="[object Number]",Pe="[object Object]",Oe="[object RegExp]",Be="[object Set]",Ie="[object String]",Ee="[object WeakMap]",Ne="[object ArrayBuffer]",Ce="[object DataView]",Ue="[object Float32Array]",ke="[object Float64Array]",Me="[object Int8Array]",Ge="[object Int16Array]",Se="[object Int32Array]",He="[object Uint8Array]",Le="[object Uint8ClampedArray]",Re="[object Uint16Array]",Ve="[object Uint32Array]",n={};n[Ue]=n[ke]=n[Me]=n[Ge]=n[Se]=n[He]=n[Le]=n[Re]=n[Ve]=!0;n[he]=n[_e]=n[Ne]=n[je]=n[Ce]=n[xe]=n[Ae]=n[$e]=n[we]=n[Fe]=n[Pe]=n[Oe]=n[Be]=n[Ie]=n[Ee]=!1;function De(e){return _(e)&&P(e.length)&&!!n[h(e)]}function Ke(e){return function(t){return e(t)}}var I=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=I&&typeof module=="object"&&module&&!module.nodeType&&module,qe=f&&f.exports===I,v=qe&&X.process,We=function(){try{var e=f&&f.require&&f.require("util").types;return e||v&&v.binding&&v.binding("util")}catch{}}(),$=We,w=$&&$.isTypedArray,Xe=w?Ke(w):De,ze=Xe,Je=Object.prototype,Qe=Je.hasOwnProperty;function Ye(e,t){var r=F(e),a=!r&&de(e),i=!r&&!a&&ve(e),c=!r&&!a&&!i&&ze(e),g=r||a||i||c,u=g?ue(e.length,String):[],d=u.length;for(var o in e)(t||Qe.call(e,o))&&!(g&&(o=="length"||i&&(o=="offset"||o=="parent")||c&&(o=="buffer"||o=="byteLength"||o=="byteOffset")||oe(o,d)))&&u.push(o);return u}function Ze(e,t){return function(r){return e(t(r))}}var et=Ze(Object.keys,Object),tt=et,rt=Object.prototype,nt=rt.hasOwnProperty;function ot(e){if(!ce(e))return tt(e);var t=[];for(var r in Object(e))nt.call(e,r)&&r!="constructor"&&t.push(r);return t}function at(e){return se(e)?Ye(e):ot(e)}function st(e,t){return z(t,function(r){return e[r]})}function it(e){return e==null?[]:st(e,at(e))}var ct=Math.floor,ut=Math.random;function pt(e,t){return e+ct(ut()*(t-e+1))}function E(e){var t=e.length;return t?e[pt(0,t-1)]:void 0}function lt(e){return E(it(e))}function ft(e){var t=F(e)?E:lt;return t(e)}const gt={class:"content-screen container"},dt=p("title",null,"Page not found // Ben Rutland Web",-1),bt={class:"content-wide py-16"},yt={class:"max-w-prose mb-8"},mt=p("h1",{class:"text-4xl font-extrabold mb-8"},"404: Page not found.",-1),Tt=p("p",{class:"text-lead mb-4"}," The page you were looking for was not found. ",-1),vt={class:"flex justify-end gap-1 mb-2"},ht={class:"whitespace-pre-wrap rounded p-4 bg-gray-50"},At={__name:"[...all]",setup(e){const t=`HTTP/1.1 404 Not Found
Content-Type: text/plain; charset=UTF-8

# 404: Page Not Found.

The page you were looking for was not found.

[Go home](/)
`,r=`HTTP/1.1 404 Not Found
Content-Type: text/html; charset=UTF-8

<h1>404: Page Not Found.</h1>
<p>The page you were looking for was not found.</p>
<p>
    <a href="/">Go home</a>
</p>
`,a=`HTTP/1.1 404 Not Found
Content-Type: application/json; charset=UTF-8

{
  "error": {
    "status": 404,
    "message": "Not found"
  },
  "content": {
    "title": "404: Page Not Found.",
    "message": "The page you were looking for was not found.",
    "action": {
      "url": "/",
      "text": "Go home"
    }
  }
}
`,i=`HTTP/1.1 404 Not Found
Content-Type: application/javascript; charset=UTF-8

const content = {
  title: "404: Page Not Found.",
  message: "The page you were looking for was not found.",
  action: {
    url: "/",
    text: "Go home"
  }
};

const  { title, message, action } = content

const template = \`
<h1>\${title}</h1>
<p>\${message}</p>
<p>
    <a href="\${action.url}">\${action.text}</a>
</p>
\`;

document.body.innerHTML = template;
`,c=U(null),g=[t,r,a,i];c.value=ft(g);function u(d){c.value=d}return(d,o)=>{const N=V,C=K,b=D,y=S;return H(),k("div",gt,[s(M(L),null,{default:l(()=>[dt]),_:1}),p("div",bt,[p("div",yt,[mt,Tt,s(C,{is:"RouterLink",to:{name:"index"},class:"bg-brand-green ring-brand-green text-brand-blue"},{default:l(()=>[s(N),R(" Go home ")]),_:1})]),p("div",vt,[s(y,{onClick:o[0]||(o[0]=T=>u(r)),class:m(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":c.value===r}])},{default:l(()=>[s(b,{icon:"code"})]),_:1},8,["class"]),s(y,{onClick:o[1]||(o[1]=T=>u(t)),class:m(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":c.value===t}])},{default:l(()=>[s(b,{icon:"tag"})]),_:1},8,["class"]),s(y,{onClick:o[2]||(o[2]=T=>u(a)),class:m(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":c.value===a}])},{default:l(()=>[s(b,{icon:"data_object"})]),_:1},8,["class"]),s(y,{onClick:o[3]||(o[3]=T=>u(i)),class:m(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":c.value===i}])},{default:l(()=>[s(b,{icon:"data_array"})]),_:1},8,["class"])]),p("pre",ht,G(c.value),1)])])}}};export{At as default};
