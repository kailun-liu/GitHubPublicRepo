(this.webpackJsonprbf=this.webpackJsonprbf||[]).push([[0],{12:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(4),a=c.n(r),i=c(2),o=(c(9),c(10),c(0)),l=1,j=("https://api.github.com/users/kailun-liu/repos?per_page=".concat(4,"&page=").concat(l),function(){var e=Object(s.useState)({list:[]}),t=Object(i.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){1===l&&fetch("https://api.github.com/users/kailun-liu/repos?per_page=".concat(4,"&page=").concat(l)).then((function(e){return e.json()})).then((function(e){n({list:e}),l++})).catch(console.log)}),[]);var r=Object(s.useState)(1),a=Object(i.a)(r,2),j=a[0],h=a[1],u=Object(s.useState)(!0),p=Object(i.a)(u,2),b=p[0],d=p[1],m=Object(s.useRef)(null);Object(s.useEffect)((function(){var e=new IntersectionObserver(O,{root:null,rootMargin:"0px",threshold:1});m.current&&e.observe(m.current)}),[]),Object(s.useEffect)((function(){l>=2&&setTimeout((function(){fetch("https://api.github.com/users/kailun-liu/repos?per_page=".concat(4,"&page=").concat(l)).then((function(e){return e.json()})).then((function(e){if(0!==e.length){var t=c.list.concat(e);n({list:t}),l++}else d(!1)})).catch(console.log)}),500)}),[j]);var O=function(e){e[0].isIntersecting&&h((function(e){return e+1}))};return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"post-list",children:[c.list.map((function(e,t){return Object(o.jsxs)("div",{className:"post divStyle grow",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"w-50 pa2 mr2",children:"ID:"}),Object(o.jsxs)("h2",{className:"w-50 pa2 mr2",children:[" ",e.id," "]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"w-50 pa2 mr2",children:"Name:"}),Object(o.jsxs)("h2",{className:"w-50 pa2 mr2",children:[" ",e.name," "]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"w-50 pa2 mr2",children:"Description:"}),Object(o.jsxs)("h2",{className:"w-50 pa2 mr2",children:[" ",e.description," "]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"w-50 pa2 mr2",children:"Homepage:"}),Object(o.jsxs)("a",{href:e.homepage,className:"w-50 pa2 mr2",children:[" ",e.homepage," "]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"w-50 pa2 mr2",children:"GitHub URL:"}),Object(o.jsxs)("a",{href:e.html_url,className:"w-50 pa2 mr2",children:[" ",e.html_url," "]})]}),Object(o.jsx)("img",{src:"https://robohash.org/".concat(t)})]},t)})),function(e){if(e)return Object(o.jsxs)("div",{className:"loading show loader",ref:m,children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})}(b)]})})});a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.518aa9ee.chunk.js.map