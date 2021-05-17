(()=>{"use strict";var e,r,t,n,o,a,i={359:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof HelloWorldApp)return e();t.l("http://localhost:9001/remoteEntry.js",(t=>{if("undefined"!=typeof HelloWorldApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"HelloWorldApp")})).then((()=>HelloWorldApp))},642:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof KiwiApp)return e();t.l("http://localhost:9002/remoteEntry.js",(t=>{if("undefined"!=typeof KiwiApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"KiwiApp")})).then((()=>KiwiApp))}},l={};function u(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={exports:{}};return i[e](t,t.exports,u),t.exports}u.m=i,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);u.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,u.d(o,a),o},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>e+"."+{615:"b3a710ba55764f2a3c86",811:"0ea2a287c37510d8a58d"}[e]+".js",u.miniCssF=e=>{},u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="dashboard:",u.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),p=0;p<d.length;p++){var s=d[p];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+o){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={615:[615],811:[811]},a={615:["default","./KiwiPage",642],811:["default","./HelloWorldPage",359]},u.f.remotes=(e,r)=>{u.o(o,e)&&o[e].forEach((e=>{var t=u.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),i[e]=()=>{throw r},n.p=0},l=(e,t,a,i,l,u)=>{try{var d=e(t,a);if(!d||!d.then)return l(d,i,u);var p=d.then((e=>l(e,i)),o);if(!u)return p;r.push(n.p=p)}catch(e){o(e)}},d=(e,r,o)=>l(r.get,n[1],t,0,p,o),p=r=>{n.p=1,i[e]=e=>{e.exports=r()}};l(u,n[2],0,0,((e,r,t)=>e?l(u.I,n[0],0,e,d,t):o()),1)}}))},(()=>{u.S={};var e={},r={};u.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];u.o(u.S,t)||(u.S[t]={}),u.S[t];var a=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var o=u(e);if(!o)return;var a=e=>e&&e.init&&e.init(u.S[t],n);if(o.then)return i.push(o.then(a,r));var l=a(o);if(l&&l.then)return i.push(l.catch(r))}catch(e){r(e)}},i=[];switch(t){case"default":a(359),a(642)}return i.length?e[t]=Promise.all(i).then((()=>e[t]=1)):e[t]=1}}})(),u.p="http://localhost:9000",(()=>{var e={179:0};u.f.j=(r,t)=>{var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(179==r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=u.p+u.u(r),i=new Error;u.l(a,(t=>{if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,l]=t,d=0;for(n in i)u.o(i,n)&&(u.m[n]=i[n]);for(l&&l(u),r&&r(t);d<a.length;d++)o=a[d],u.o(e,o)&&e[o]&&e[o][0](),e[a[d]]=0},t=self.webpackChunkdashboard=self.webpackChunkdashboard||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),(()=>{function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(new(function(){function r(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r)}var t,n;return t=r,(n=[{key:"render",value:function(e){var r=e.map((function(e){return'\n        <li>\n          <a href="'.concat(e.url,'">').concat(e.title,"</a>\n        </li>\n      ")})),t=document.createElement("ul");t.innerHTML=r.join(""),t.classList.add("navigation-bar"),document.querySelector("body").appendChild(t)}}])&&e(t.prototype,n),r}())).render([{url:"/hello-world-page",title:"Hello World Page"},{url:"/kiwi-page",title:"Kiwi Page"}]);var r=window.location.pathname;"/hello-world-page"===r?u.e(811).then(u.t.bind(u,811,23)).then((function(e){(new(0,e.default)).render()})):"/kiwi-page"===r&&u.e(615).then(u.t.bind(u,615,23)).then((function(e){(new(0,e.default)).render()})),console.log("dashboard")})()})();