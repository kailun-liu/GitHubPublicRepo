(this.webpackJsonprbf=this.webpackJsonprbf||[]).push([[0],{12:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(4),r=t.n(n),i=t(2),l=(t(9),t(10),t(0)),o=1,j=("https://api.github.com/users/kailun-liu/repos?per_page=".concat(4,"&page=").concat(o),function(){var e=Object(s.useState)({list:[]}),c=Object(i.a)(e,2),t=c[0],a=c[1];Object(s.useEffect)((function(){1===o&&fetch("https://api.github.com/users/kailun-liu/repos?per_page=".concat(4,"&page=").concat(o)).then((function(e){return e.json()})).then((function(e){a({list:e}),o++})).catch(console.log)}),[]);var n=Object(s.useState)(1),r=Object(i.a)(n,2),j=r[0],p=r[1],u=Object(s.useState)(!0),h=Object(i.a)(u,2),b=h[0],m=h[1],d=Object(s.useRef)(null);Object(s.useEffect)((function(){var e=new IntersectionObserver(f,{root:null,rootMargin:"0px",threshold:1});d.current&&e.observe(d.current)}),[]),Object(s.useEffect)((function(){o>=2&&setTimeout((function(){fetch("https://api.github.com/users/kailun-liu/repos?per_page=".concat(4,"&page=").concat(o)).then((function(e){return e.json()})).then((function(e){if(0!==e.length){var c=t.list.concat(e);a({list:c}),o++}else m(!1)})).catch(console.log)}),500)}),[j]);var f=function(e){e[0].isIntersecting&&p((function(e){return e+1}))};return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"post-list",children:[t.list.map((function(e,c){return Object(l.jsxs)("div",{className:"post divStyle grow",children:[Object(l.jsxs)("div",{className:"flex flex-wrap",children:[Object(l.jsx)("p",{className:"w-20 pa2 mr2",children:"ID:"}),Object(l.jsxs)("h2",{className:"w-80 pa2 mr2",children:[" ",e.id," "]})]}),Object(l.jsxs)("div",{className:"flex flex-wrap",children:[Object(l.jsx)("p",{className:"w-20 pa2 mr2",children:"Name:"}),Object(l.jsxs)("h2",{className:"w-80 pa2 mr2",children:[" ",e.name," "]})]}),Object(l.jsxs)("div",{className:"flex flex-wrap",children:[Object(l.jsx)("p",{className:"w-20 pa2 mr2",children:"Description:"}),Object(l.jsxs)("h2",{className:"w-80 pa2 mr2",children:[" ",e.description," "]})]}),Object(l.jsxs)("div",{className:"flex flex-wrap",children:[Object(l.jsx)("p",{className:"w-20 pa2 mr2",children:"Homepage:"}),Object(l.jsxs)("a",{href:e.homepage,className:"w-80 pa2 mr2",children:[" ",e.homepage," "]})]}),Object(l.jsxs)("div",{className:"flex flex-wrap",children:[Object(l.jsx)("p",{className:"w-20 pa2 mr2",children:"GitHub URL:"}),Object(l.jsxs)("a",{href:e.html_url,className:"w-80 pa2 mr2",children:[" ",e.html_url," "]})]})]},c)})),function(e){if(e)return Object(l.jsxs)("div",{className:"loading show loader",ref:d,children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}(b)]})})});r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))},9:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.5b37bd4c.chunk.js.map