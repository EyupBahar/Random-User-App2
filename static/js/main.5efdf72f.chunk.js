(this["webpackJsonprandom-user-app2"]=this["webpackJsonprandom-user-app2"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),c=n(15),a=n.n(c),l=(n(22),n(23),n(17)),o=n(4),d=(n(24),n(16)),r=n.n(d),j=n.p+"static/media/cw.22310668.svg",u=n.p+"static/media/design.9f215bce.svg",m=n.p+"static/media/growing-up-man.5024153b.svg",v=n.p+"static/media/mail.42e0750e.svg",b=n.p+"static/media/man.4b684e29.svg",O=n.p+"static/media/map.8e5a2a58.svg",h=n.p+"static/media/padlock.8d2c33d2.svg",g=n.p+"static/media/phone.d017e1ae.svg",p=n(0),x=function(){var e,t=Object(i.useState)([]),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(i.useState)(!1),d=Object(o.a)(a,2),x=d[0],f=d[1],N=Object(i.useState)([]),w=Object(o.a)(N,2),y=w[0],M=w[1],S=Object(i.useState)({}),k=Object(o.a)(S,2),C=k[0],E=k[1],_=function(){r.a.get("https://randomuser.me/api/").then((function(e){c(e.data.results[0]),E({title:"name",info:e.data.results[0].name.first+" "+e.data.results[0].name.last})}))};return Object(i.useEffect)((function(){_()}),[]),console.log(y),Object(p.jsxs)("div",{className:"main_container",children:[Object(p.jsx)("div",{className:"cw",children:Object(p.jsx)("img",{src:j,alt:"cw",className:"cw-logo"})}),Object(p.jsxs)("div",{className:"Card_box",children:[Object(p.jsxs)("div",{className:"profile_box",children:[Object(p.jsx)("img",{src:null===s||void 0===s||null===(e=s.picture)||void 0===e?void 0:e.large,alt:"pic",className:"profile_photo"}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("p",{children:["My ",C.title," is"]}),Object(p.jsx)("h2",{children:C.info})]}),Object(p.jsxs)("div",{className:"logo-container",children:[Object(p.jsx)("img",{onMouseOver:function(){var e,t;return E({title:"name",info:(null===s||void 0===s||null===(e=s.name)||void 0===e?void 0:e.first)+" "+(null===s||void 0===s||null===(t=s.name)||void 0===t?void 0:t.last)})},src:b,alt:"man",className:"logo"}),Object(p.jsx)("img",{onMouseOver:function(){return E({title:"email",info:null===s||void 0===s?void 0:s.email})},src:v,alt:"mail",className:"logo"}),Object(p.jsx)("img",{onMouseOver:function(){var e;return E({title:"age",info:null===s||void 0===s||null===(e=s.dob)||void 0===e?void 0:e.age})},src:m,alt:"growing",className:"logo"}),Object(p.jsx)("img",{onMouseOver:function(){var e,t;return E({title:"adress",info:(null===s||void 0===s||null===(e=s.location)||void 0===e?void 0:e.state)+" "+(null===s||void 0===s||null===(t=s.location)||void 0===t?void 0:t.country)})},src:O,alt:"map",className:"logo"}),Object(p.jsx)("img",{onMouseOver:function(){return E({title:"phone number",info:null===s||void 0===s?void 0:s.phone})},src:g,alt:"phone",className:"logo"}),Object(p.jsx)("img",{onMouseOver:function(){var e;return E({title:"password",info:null===s||void 0===s||null===(e=s.login)||void 0===e?void 0:e.password})},src:h,alt:"padlock",className:"logo"})]}),Object(p.jsxs)("div",{className:"btn-container",children:[Object(p.jsx)("button",{onClick:_,children:"NEW USER"}),Object(p.jsx)("button",{onClick:function(){var e,t;y.filter((function(e){return e.email===s.email})).length>0?alert("You have already added..."):M([].concat(Object(l.a)(y),[{name:null===s||void 0===s||null===(e=s.name)||void 0===e?void 0:e.first,email:null===s||void 0===s?void 0:s.email,phone:null===s||void 0===s?void 0:s.phone,age:null===s||void 0===s||null===(t=s.dob)||void 0===t?void 0:t.age}]));f(!0)},children:"ADD USER"})]}),x?Object(p.jsx)("div",{className:"table_container",children:Object(p.jsxs)("table",{children:[Object(p.jsxs)("colgroup",{children:[Object(p.jsx)("col",{span:"1",style:{width:"25%"}}),Object(p.jsx)("col",{span:"1",style:{width:"25%"}}),Object(p.jsx)("col",{span:"1",style:{width:"25%"}}),Object(p.jsx)("col",{span:"1",style:{width:"25%"}})]}),Object(p.jsxs)("tr",{className:"tableHeader",children:[Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Email"}),Object(p.jsx)("th",{children:"Phone"}),Object(p.jsx)("th",{children:"Age"})]}),null===y||void 0===y?void 0:y.map((function(e,t){return Object(p.jsxs)("tr",{className:"tableInfo",children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.email}),Object(p.jsx)("td",{children:e.phone}),Object(p.jsx)("td",{children:e.age})]},t)}))]})}):null]}),Object(p.jsx)("div",{className:"footer_design",children:Object(p.jsx)("img",{src:u,alt:"design",className:"design"})})]})]})};var f=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(x,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),N()}},[[44,1,2]]]);
//# sourceMappingURL=main.5efdf72f.chunk.js.map