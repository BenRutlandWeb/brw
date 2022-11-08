import{a as e,_ as t,b as n}from"./index.62ffb78f.js";import{_ as o}from"./Button.9ee7fe21.js";import{q as r,c as a,g as c,w as u,u as s,H as i,b as l,n as f,t as p,o as b,v as d}from"./vendor.fa991b00.js";import{a as y,b as g,i as j,r as m,f as v}from"./isObject.b7e386f9.js";var h=Array.isArray;var x=/^(?:0|[1-9]\d*)$/;function T(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&x.test(e))&&e>-1&&e%1==0&&e<t}function w(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function A(e){return null!=e&&w(e.length)&&!function(e){if(!y(e))return!1;var t=g(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}(e)}var F=Object.prototype;function P(e){return j(e)&&"[object Arguments]"==g(e)}var O=Object.prototype,k=O.hasOwnProperty,N=O.propertyIsEnumerable,_=P(function(){return arguments}())?P:function(e){return j(e)&&k.call(e,"callee")&&!N.call(e,"callee")};var C="object"==typeof exports&&exports&&!exports.nodeType&&exports,U=C&&"object"==typeof module&&module&&!module.nodeType&&module,B=U&&U.exports===C?m.Buffer:void 0,G=(B?B.isBuffer:void 0)||function(){return!1},H={};H["[object Float32Array]"]=H["[object Float64Array]"]=H["[object Int8Array]"]=H["[object Int16Array]"]=H["[object Int32Array]"]=H["[object Uint8Array]"]=H["[object Uint8ClampedArray]"]=H["[object Uint16Array]"]=H["[object Uint32Array]"]=!0,H["[object Arguments]"]=H["[object Array]"]=H["[object ArrayBuffer]"]=H["[object Boolean]"]=H["[object DataView]"]=H["[object Date]"]=H["[object Error]"]=H["[object Function]"]=H["[object Map]"]=H["[object Number]"]=H["[object Object]"]=H["[object RegExp]"]=H["[object Set]"]=H["[object String]"]=H["[object WeakMap]"]=!1;var M,$="object"==typeof exports&&exports&&!exports.nodeType&&exports,I=$&&"object"==typeof module&&module&&!module.nodeType&&module,q=I&&I.exports===$&&v.process,E=function(){try{var e=I&&I.require&&I.require("util").types;return e||q&&q.binding&&q.binding("util")}catch(t){}}(),L=E&&E.isTypedArray,R=L?(M=L,function(e){return M(e)}):function(e){return j(e)&&w(e.length)&&!!H[g(e)]},S=Object.prototype.hasOwnProperty;function D(e,t){var n=h(e),o=!n&&_(e),r=!n&&!o&&G(e),a=!n&&!o&&!r&&R(e),c=n||o||r||a,u=c?function(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}(e.length,String):[],s=u.length;for(var i in e)!t&&!S.call(e,i)||c&&("length"==i||r&&("offset"==i||"parent"==i)||a&&("buffer"==i||"byteLength"==i||"byteOffset"==i)||T(i,s))||u.push(i);return u}var W=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),V=Object.prototype.hasOwnProperty;function z(e){if(n=(t=e)&&t.constructor,t!==("function"==typeof n&&n.prototype||F))return W(e);var t,n,o=[];for(var r in Object(e))V.call(e,r)&&"constructor"!=r&&o.push(r);return o}function J(e,t){return function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}(t,(function(t){return e[t]}))}function K(e){return null==e?[]:J(e,function(e){return A(e)?D(e):z(e)}(e))}var Q=Math.floor,X=Math.random;function Y(e){var t,n,o=e.length;return o?e[(t=0,n=o-1,t+Q(X()*(n-t+1)))]:void 0}function Z(e){return Y(K(e))}const ee={class:"content-screen container"},te=l("title",null,"Page not found // Ben Rutland Web",-1),ne={class:"content-wide py-16"},oe={class:"max-w-prose mb-8"},re=l("h1",{class:"text-4xl font-extrabold mb-8"},"404: Page not found.",-1),ae=l("p",{class:"text-lead mb-4"}," The page you were looking for was not found. ",-1),ce=d(" Go home "),ue={class:"flex justify-end gap-1 mb-2"},se={class:"whitespace-pre-wrap rounded p-4 bg-gray-50"},ie={setup(d){const y="HTTP/1.1 404 Not Found\nContent-Type: text/plain; charset=UTF-8\n\n# 404: Page Not Found.\n\nThe page you were looking for was not found.\n\n[Go home](/)\n",g='HTTP/1.1 404 Not Found\nContent-Type: text/html; charset=UTF-8\n\n<h1>404: Page Not Found.</h1>\n<p>The page you were looking for was not found.</p>\n<p>\n    <a href="/">Go home</a>\n</p>\n',j='HTTP/1.1 404 Not Found\nContent-Type: application/json; charset=UTF-8\n\n{"error":{"status":404,"message":"Not found"},"content":{"title":"404: Page Not Found.","message":"The page you were looking for was not found.","action":{"url":"/","text":"Go home"}}}\n',m='HTTP/1.1 404 Not Found\nContent-Type: application/javascript; charset=UTF-8\n\nconst content = {\n  title: "404: Page Not Found.",\n  message: "The page you were looking for was not found.",\n  action: {\n    url: "/",\n    text: "Go home"\n  }\n};\n\nconst  { title, message, action } = content\n\nconst template = `\n<h1>${title}</h1>\n<p>${message}</p>\n<p>\n    <a href="${action.url}">${action.text}</a>\n</p>\n`;\n\ndocument.body.innerHTML = template;\n',v=r(null),x=[y,g,j,m];var T;function w(e){v.value=e}return v.value=(h(T=x)?Y:Z)(T),(r,d)=>{const h=t,x=o,T=n,A=e;return b(),a("div",ee,[c(s(i),null,{default:u((()=>[te])),_:1}),l("div",ne,[l("div",oe,[re,ae,c(x,{is:"RouterLink",to:{name:"index"},class:"bg-brand-green ring-brand-green text-brand-blue"},{default:u((()=>[c(h),ce])),_:1})]),l("div",ue,[c(A,{onClick:d[0]||(d[0]=e=>w(g)),class:f(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":v.value===g}])},{default:u((()=>[c(T,{icon:"code"})])),_:1},8,["class"]),c(A,{onClick:d[1]||(d[1]=e=>w(y)),class:f(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":v.value===y}])},{default:u((()=>[c(T,{icon:"tag"})])),_:1},8,["class"]),c(A,{onClick:d[2]||(d[2]=e=>w(j)),class:f(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":v.value===j}])},{default:u((()=>[c(T,{icon:"data_object"})])),_:1},8,["class"]),c(A,{onClick:d[3]||(d[3]=e=>w(m)),class:f(["text-gray-500 focus-visible:ring-2 ring-gray-500 p-1",{"text-brand-green":v.value===m}])},{default:u((()=>[c(T,{icon:"data_array"})])),_:1},8,["class"])]),l("pre",se,p(v.value),1)])])}}};export{ie as default};