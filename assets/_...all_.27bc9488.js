import{r as M,c as G,f as i,w as p,i as u,n as y,a as l,t as S,d as H,x as L,o as R,g as V,j as D,p as K}from"./index.d408542a.js";import{_ as q}from"./Button.d4b00f17.js";import{a as W,b as A,i as $,r as X,f as z}from"./isObject.b7e386f9.js";function J(e,t){for(var r=-1,o=e==null?0:e.length,c=Array(o);++r<o;)c[r]=t(e[r],r,e);return c}var Q=Array.isArray,I=Q,Y="[object AsyncFunction]",Z="[object Function]",ee="[object GeneratorFunction]",te="[object Proxy]";function re(e){if(!W(e))return!1;var t=A(e);return t==Z||t==ee||t==Y||t==te}var ne=9007199254740991,oe=/^(?:0|[1-9]\d*)$/;function ae(e,t){var r=typeof e;return t=t==null?ne:t,!!t&&(r=="number"||r!="symbol"&&oe.test(e))&&e>-1&&e%1==0&&e<t}var se=9007199254740991;function E(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=se}function ie(e){return e!=null&&E(e.length)&&!re(e)}var ce=Object.prototype;function ue(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ce;return e===r}function pe(e,t){for(var r=-1,o=Array(e);++r<e;)o[r]=t(r);return o}var fe="[object Arguments]";function w(e){return $(e)&&A(e)==fe}var N=Object.prototype,le=N.hasOwnProperty,ge=N.propertyIsEnumerable,de=w(function(){return arguments}())?w:function(e){return $(e)&&le.call(e,"callee")&&!ge.call(e,"callee")},be=de;function ye(){return!1}var C=typeof exports=="object"&&exports&&!exports.nodeType&&exports,F=C&&typeof module=="object"&&module&&!module.nodeType&&module,me=F&&F.exports===C,P=me?X.Buffer:void 0,Te=P?P.isBuffer:void 0,ve=Te||ye,_e=ve,he="[object Arguments]",je="[object Array]",xe="[object Boolean]",Ae="[object Date]",$e="[object Error]",we="[object Function]",Fe="[object Map]",Pe="[object Number]",Oe="[object Object]",Be="[object RegExp]",Ie="[object Set]",Ee="[object String]",Ne="[object WeakMap]",Ce="[object ArrayBuffer]",Ue="[object DataView]",ke="[object Float32Array]",Me="[object Float64Array]",Ge="[object Int8Array]",Se="[object Int16Array]",He="[object Int32Array]",Le="[object Uint8Array]",Re="[object Uint8ClampedArray]",Ve="[object Uint16Array]",De="[object Uint32Array]",n={};n[ke]=n[Me]=n[Ge]=n[Se]=n[He]=n[Le]=n[Re]=n[Ve]=n[De]=!0;n[he]=n[je]=n[Ce]=n[xe]=n[Ue]=n[Ae]=n[$e]=n[we]=n[Fe]=n[Pe]=n[Oe]=n[Be]=n[Ie]=n[Ee]=n[Ne]=!1;function Ke(e){return $(e)&&E(e.length)&&!!n[A(e)]}function qe(e){return function(t){return e(t)}}var U=typeof exports=="object"&&exports&&!exports.nodeType&&exports,g=U&&typeof module=="object"&&module&&!module.nodeType&&module,We=g&&g.exports===U,v=We&&z.process,Xe=function(){try{var e=g&&g.require&&g.require("util").types;return e||v&&v.binding&&v.binding("util")}catch{}}(),O=Xe,B=O&&O.isTypedArray,ze=B?qe(B):Ke,Je=ze,Qe=Object.prototype,Ye=Qe.hasOwnProperty;function Ze(e,t){var r=I(e),o=!r&&be(e),c=!r&&!o&&_e(e),s=!r&&!o&&!c&&Je(e),d=r||o||c||s,f=d?pe(e.length,String):[],m=f.length;for(var a in e)(t||Ye.call(e,a))&&!(d&&(a=="length"||c&&(a=="offset"||a=="parent")||s&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||ae(a,m)))&&f.push(a);return f}function et(e,t){return function(r){return e(t(r))}}var tt=et(Object.keys,Object),rt=tt,nt=Object.prototype,ot=nt.hasOwnProperty;function at(e){if(!ue(e))return rt(e);var t=[];for(var r in Object(e))ot.call(e,r)&&r!="constructor"&&t.push(r);return t}function st(e){return ie(e)?Ze(e):at(e)}function it(e,t){return J(t,function(r){return e[r]})}function ct(e){return e==null?[]:it(e,st(e))}var ut=Math.floor,pt=Math.random;function ft(e,t){return e+ut(pt()*(t-e+1))}function k(e){var t=e.length;return t?e[ft(0,t-1)]:void 0}function lt(e){return k(ct(e))}function gt(e){var t=I(e)?k:lt;return t(e)}const dt={class:"content-screen container"},bt=u("title",null,"Page not found // Ben Rutland Web",-1),yt={class:"content-wide py-16"},mt={class:"max-w-prose mb-8"},Tt=u("h1",{class:"text-4xl font-extrabold mb-8"},"404: Page not found.",-1),vt=u("p",{class:"text-lead mb-4"}," The page you were looking for was not found. ",-1),_t={class:"flex justify-end gap-1 mb-2"},ht={class:"whitespace-pre-wrap rounded p-4 bg-gray-50"},_=`HTTP/1.1 404 Not Found
Content-Type: text/plain; charset=UTF-8

# 404: Page Not Found.

The page you were looking for was not found.

[Go home](/)
`,h=`HTTP/1.1 404 Not Found
Content-Type: text/html; charset=UTF-8

<h1>404: Page Not Found.</h1>
<p>The page you were looking for was not found.</p>
<p>
    <a href="/">Go home</a>
</p>
`,j=`HTTP/1.1 404 Not Found
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
`,x=`HTTP/1.1 404 Not Found
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
`,$t={__name:"[...all]",setup(e){const t=M(null),r=[_,h,j,x];t.value=gt(r);function o(c){t.value=c}return(c,s)=>{const d=H("Head"),f=D,m=q,a=K,b=L;return R(),G("div",dt,[i(d,null,{default:p(()=>[bt]),_:1}),u("div",yt,[u("div",mt,[Tt,vt,i(m,{is:"RouterLink",to:{name:"index"},class:"bg-brand-green ring-brand-green text-brand-blue"},{default:p(()=>[i(f),V(" Go home ")]),_:1})]),u("div",_t,[i(b,{onClick:s[0]||(s[0]=T=>o(h)),class:y(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":l(t)===h}])},{default:p(()=>[i(a,{icon:"code"})]),_:1},8,["class"]),i(b,{onClick:s[1]||(s[1]=T=>o(_)),class:y(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":l(t)===_}])},{default:p(()=>[i(a,{icon:"tag"})]),_:1},8,["class"]),i(b,{onClick:s[2]||(s[2]=T=>o(j)),class:y(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":l(t)===j}])},{default:p(()=>[i(a,{icon:"data_object"})]),_:1},8,["class"]),i(b,{onClick:s[3]||(s[3]=T=>o(x)),class:y(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":l(t)===x}])},{default:p(()=>[i(a,{icon:"data_array"})]),_:1},8,["class"])]),u("pre",ht,S(l(t)),1)])])}}};export{$t as default};
