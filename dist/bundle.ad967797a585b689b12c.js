(()=>{"use strict";var e={54:(e,n,r)=>{var t=r(947),o=r(436);function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const a=function(){function e(){var n,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),r="hello-world-button",(n="buttonCssClass")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r}var n,r;return n=e,(r=[{key:"render",value:function(){var e=document.createElement("button"),n=document.querySelector("body");e.innerHTML="Hello world",e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world",e.classList.add("hello-world-text"),n.appendChild(e)},e.classList.add("hello-world-button"),n.appendChild(e)}}])&&l(n.prototype,r),e}();function i(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,(r=[{key:"render",value:function(e){var n=document.createElement("h1"),r=document.querySelector("body");n.innerHTML='Webpack is awesome. This is "'+e+'" page',r.appendChild(n)}}])&&i(n.prototype,r),e}();var c=r(486),s=r.n(c);t.vI.add(o.LM3),t.vz.watch(),(new u).render("hello world"),(new a).render(),console.log("Production mode"),console.log(s().upperFirst("index module"))}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.x=e=>{},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0},n=[[54,879]],t=e=>{},o=(o,l)=>{for(var a,i,[u,c,s,d]=l,f=0,h=[];f<u.length;f++)i=u[f],r.o(e,i)&&e[i]&&h.push(e[i][0]),e[i]=0;for(a in c)r.o(c,a)&&(r.m[a]=c[a]);for(s&&s(r),o&&o(l);h.length;)h.shift()();return d&&n.push.apply(n,d),t()},l=self.webpackChunktutorial=self.webpackChunktutorial||[];function a(){for(var t,o=0;o<n.length;o++){for(var l=n[o],a=!0,i=1;i<l.length;i++){var u=l[i];0!==e[u]&&(a=!1)}a&&(n.splice(o--,1),t=r(r.s=l[0]))}return 0===n.length&&(r.x(),r.x=e=>{}),t}l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l));var i=r.x;r.x=()=>(r.x=i||(e=>{}),(t=a)())})(),r.x()})();