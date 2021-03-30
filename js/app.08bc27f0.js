(function(e){function t(t){for(var a,r,i=t[0],s=t[1],b=t[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,b||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},c=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/portfolio/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1570:function(e,t,n){"use strict";n("e0db")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=Object(a["j"])("data-v-22eb1944"),c=o((function(e,t,n,o,c,r){var i=Object(a["h"])("Header"),s=Object(a["h"])("Main"),b=Object(a["h"])("Footer");return Object(a["f"])(),Object(a["c"])(a["a"],null,[Object(a["e"])(i),Object(a["e"])(s),Object(a["e"])(b)],64)})),r=(n("9911"),n("b0c0"),{class:"header"}),i={id:"nav-bar",class:"nav"},s={class:"nav__list"};function b(e,t,n,o,c,b){return Object(a["f"])(),Object(a["c"])("header",r,[Object(a["e"])("div",i,[Object(a["e"])("ul",s,[(Object(a["f"])(!0),Object(a["c"])(a["a"],null,Object(a["g"])(c.navs,(function(e,t){return Object(a["f"])(),Object(a["c"])("li",{class:"nav__item",key:t},[Object(a["e"])("a",{href:"".concat(e.link),class:"nav__link"},Object(a["i"])(e.name),9,["href"])])})),128))])])])}var l={data:function(){return{navs:[{name:"About",link:"#welcome-section"},{name:"Work",link:"#projects"},{name:"Contact",link:"#contact"}]}}};l.render=b;var u=l;function f(e,t,n,o,c,r){var i=Object(a["h"])("Welcome"),s=Object(a["h"])("Projects"),b=Object(a["h"])("Contacts");return Object(a["f"])(),Object(a["c"])(a["a"],null,[Object(a["e"])(i),Object(a["e"])(s),Object(a["e"])(b)],64)}var p={id:"welcome-section",class:"welcome-section"},h=Object(a["e"])("h1",null,"Hey I am Anton",-1),d=Object(a["e"])("p",null,"a web developer",-1);function j(e,t){return Object(a["f"])(),Object(a["c"])("section",p,[h,d])}const m={};m.render=j;var O=m,v={id:"projects",class:"project-section"},g=Object(a["e"])("h2",{class:"project-section-header"},"These are some of my projects",-1),y={class:"project-grid"},k={class:"product-title"},w=Object(a["e"])("span",{class:"code"},"<",-1),_=Object(a["e"])("span",{class:"code"},"⁄>",-1);function x(e,t,n,o,c,r){return Object(a["f"])(),Object(a["c"])("section",v,[g,Object(a["e"])("div",y,[(Object(a["f"])(!0),Object(a["c"])(a["a"],null,Object(a["g"])(c.projects,(function(e,t){return Object(a["f"])(),Object(a["c"])("a",{class:"project",key:t,href:e.link,target:"_blank"},[Object(a["e"])("img",{class:"project-image",src:e.image,alt:e.name},null,8,["src","alt"]),Object(a["e"])("p",k,[w,Object(a["d"])(" "+Object(a["i"])(e.name)+" ",1),_])],8,["href"])})),128))])])}var M={data:function(){return{projects:[{name:"Tech Documentation",link:"https://toni-ardyshev-basket.github.io/tech-documentation.github.io/",image:"https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"},{name:"Original Trombones",link:"https://toni-ardyshev-basket.github.io/landing-product-page.github.io/",image:"https://media.istockphoto.com/photos/detail-of-a-trombone-picture-id519118942?b=1&k=6&m=519118942&s=170667a&w=0&h=6aBnINtxERO1IcdlQi8vv0r6ZkCMFizBWLvE4djKRAc="},{name:"Yoga Travel",link:"https://toni-ardyshev-basket.github.io/yoga.github.io/",image:"https://toni-ardyshev-basket.github.io/yoga.github.io/src/img/slider_3.jpg"},{name:"Survey Form",link:"https://toni-ardyshev-basket.github.io/survey-form.github.io/",image:"https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"},{name:"Dr. Norman Borlaug",link:"https://toni-ardyshev-basket.github.io/doctor.github.io",image:"https://toni-ardyshev-basket.github.io/doctor.github.io/images/background.jpeg"},{name:"Money Keeper",link:"https://toni-ardyshev-basket.github.io/money-keeper/",image:"https://toni-ardyshev-basket.github.io/money-keeper/money-keeper.jpeg"},{name:"Real estate services",link:"https://toni-ardyshev-basket.github.io/rieltor-kirov-old/",image:"https://toni-ardyshev-basket.github.io/rieltor-kirov-old/images/body-image-480.jpg"},{name:"Salary in company",link:"https://toni-ardyshev-basket.github.io/salary-in-company/",image:"https://toni-ardyshev-basket.github.io/salary-in-company/img/salary.jpg"}]}}};M.render=x;var C=M,H={id:"contact",class:"contact-section"},I=Object(a["e"])("div",{class:"contact-section-header"},[Object(a["e"])("h2",null,"Let's work together..."),Object(a["e"])("p",null,"How do you take your coffee?")],-1),P={class:"contact-links"};function D(e,t,n,o,c,r){return Object(a["f"])(),Object(a["c"])("section",H,[I,Object(a["e"])("div",P,[(Object(a["f"])(!0),Object(a["c"])(a["a"],null,Object(a["g"])(c.contacts,(function(e,t){return Object(a["f"])(),Object(a["c"])("a",{key:t,href:e.linkContact,class:"btn contact-details",target:"_blank"},[Object(a["e"])("i",{class:e.favIcon},null,2),Object(a["d"])(" "+Object(a["i"])(e.name),1)],8,["href"])})),128))])])}var B={data:function(){return{contacts:[{name:"Telegram",linkContact:"https://t.me/toni_ardyshev",favIcon:"fab fa-telegram"},{name:"GitHub",linkContact:"https://github.com/toniardyshev?tab=repositories",favIcon:"fab fa-github"},{name:"VK",linkContact:"https://vk.com/toni.ardyshev",favIcon:"fab fa-vk"},{name:"Email",linkContact:"mailto:toni.ardyshev@mail.ru",favIcon:"fas fa-envelope"}]}}};B.render=D;var S=B,T={components:{Welcome:O,Projects:C,Contacts:S}};T.render=f;var W=T,A=Object(a["e"])("p",null,[Object(a["d"])(" © Created for "),Object(a["e"])("a",{href:"https://www.freecodecamp.com/",target:"_blank"},[Object(a["d"])("freeCodeCamp "),Object(a["e"])("i",{class:"fab fa-free-code-camp"})])],-1);function G(e,t){return Object(a["f"])(),Object(a["c"])("footer",null,[A])}const F={};F.render=G;var E=F,K={components:{Header:u,Main:W,Footer:E}};n("1570");K.render=c,K.__scopeId="data-v-22eb1944";var R=K;Object(a["b"])(R).mount("#app")},e0db:function(e,t,n){}});
//# sourceMappingURL=app.08bc27f0.js.map