(this.webpackJsonppetstore=this.webpackJsonppetstore||[]).push([[0],{98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),s=a(14),o=a.n(s),l=a(22),j=a(25),d=a(135),h=a(136),u=a(100),b=a(2);function p(){return Object(b.jsx)(h.a,{border:5,borderColor:"primary.main",padding:4,children:Object(b.jsx)(u.a,{variant:"h3",component:"h2",align:"center",color:"secondary",gutterBottom:!0,children:"Swagger Pet Store"})})}var g=a(56),O=a(126),x=a(128),m=a(132),v=a(131),f=a(133),y=a(129),k=a(130),S=a(127),w=a(138),N=a(137),C=a(55),P=a.n(C),A=a(125);function B(e){return Object(b.jsx)(A.a,{variant:"outlined",color:"secondary","data-id":e.id,onClick:e.markAsSold,children:Object(b.jsx)(P.a,{})})}var I=a(40),D=a.n(I),E=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://petstore.swagger.io/v2/pet/findByStatus?status=".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://petstore.swagger.io/v2/pet/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({method:"PUT",url:"https://petstore.swagger.io/v2/pet",data:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=Object(O.a)({table:{margin:"auto",minWidth:450,maxWidth:900},typography:{textAlign:"center",margin:25}});function W(e){return Object(b.jsx)(w.a,Object(g.a)({elevation:6,variant:"filled"},e))}function _(e){var t,a=T(),r=Object(n.useState)(!1),c=Object(j.a)(r,2),i=c[0],s=c[1],d=Object(n.useState)(""),h=Object(j.a)(d,2),p=h[0],g=h[1],O=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.currentTarget.dataset.id,e.next=4,J(a);case 4:return n=e.sent,console.log(n),n.status="sold",e.next=9,M(n);case 9:r=e.sent,console.log(r),g("".concat(r.name," has been sold!")),s(!0),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e,t){"clickaway"!==t&&s(!1)};switch(e.petStatus){case"available":t=Object(b.jsxs)(x.a,{className:a.table,"aria-label":"simple table",children:[Object(b.jsx)(y.a,{children:Object(b.jsxs)(k.a,{children:[Object(b.jsx)(v.a,{children:"ID#"}),Object(b.jsx)(v.a,{children:"Pet Name"}),Object(b.jsx)(v.a,{align:"right",children:"Photo"}),Object(b.jsx)(v.a,{align:"right",children:"Status"}),Object(b.jsx)(v.a,{align:"right",children:"Mark As Sold"})]})}),Object(b.jsx)(m.a,{children:e.pets.map((function(e,t){return Object(b.jsxs)(k.a,{children:[Object(b.jsx)(v.a,{component:"th",scope:"row","data-id":e.id,children:e.id}),Object(b.jsx)(v.a,{component:"th",scope:"row",children:e.name}),Object(b.jsx)(v.a,{align:"right",children:Object(b.jsx)("img",{src:"https://placedog.net/50/50?id=".concat(t+1),alt:"placeholder dog"})}),Object(b.jsx)(v.a,{align:"right",children:e.status}),Object(b.jsx)(v.a,{align:"right",children:Object(b.jsx)(B,{id:e.id,markAsSold:O})})]},t)}))})]});break;case"pending":t=0===e.pets.length?Object(b.jsx)(u.a,{className:a.typography,variant:"h4",component:"h2",gutterBottom:!0,children:"No pending pets at this time!"}):Object(b.jsxs)(x.a,{className:a.table,"aria-label":"simple table",children:[Object(b.jsx)(y.a,{children:Object(b.jsxs)(k.a,{children:[Object(b.jsx)(v.a,{children:"Pet Name"}),Object(b.jsx)(v.a,{align:"right",children:"Photo"}),Object(b.jsx)(v.a,{align:"right",children:"Status"}),Object(b.jsx)(v.a,{align:"right",children:"Category"})]})}),Object(b.jsx)(m.a,{children:e.pets.map((function(e,t){var a;return Object(b.jsxs)(k.a,{children:[Object(b.jsx)(v.a,{component:"th",scope:"row",children:null===e||void 0===e?void 0:e.name}),Object(b.jsx)(v.a,{align:"right",children:Object(b.jsx)("img",{src:"https://placedog.net/50/50?id=".concat(t+1),alt:"placeholder dog"})}),Object(b.jsx)(v.a,{align:"right",children:null===e||void 0===e?void 0:e.status}),Object(b.jsx)(v.a,{align:"right",children:null===e||void 0===e||null===(a=e.category)||void 0===a?void 0:a.name})]},t)}))})]});break;case"sold":t=Object(b.jsxs)(x.a,{className:a.table,"aria-label":"simple table",children:[Object(b.jsx)(y.a,{children:Object(b.jsxs)(k.a,{children:[Object(b.jsx)(v.a,{children:"Pet Name"}),Object(b.jsx)(v.a,{align:"right",children:"Photo"}),Object(b.jsx)(v.a,{align:"right",children:"Status"}),Object(b.jsx)(v.a,{align:"right",children:"Category"})]})}),Object(b.jsx)(m.a,{children:e.pets.map((function(e,t){var a;return Object(b.jsxs)(k.a,{children:[Object(b.jsx)(v.a,{component:"th",scope:"row",children:null===e||void 0===e?void 0:e.name}),Object(b.jsx)(v.a,{align:"right",children:Object(b.jsx)("img",{src:"https://placedog.net/50/50?id=".concat(t+1),alt:"placeholder dog"})}),Object(b.jsx)(v.a,{align:"right",children:null===e||void 0===e?void 0:e.status}),Object(b.jsx)(v.a,{align:"right",children:null===e||void 0===e||null===(a=e.category)||void 0===a?void 0:a.name})]},t)}))})]});break;default:b.Fragment}return Object(b.jsxs)(f.a,{component:S.a,children:[t,Object(b.jsx)(N.a,{open:i,autoHideDuration:6e3,onClose:w,children:Object(b.jsx)(W,{onClose:w,severity:"success",children:p})})]})}var F=Object(O.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},textAlign:"center"}}}));function H(e){var t=F();return Object(b.jsxs)("div",{className:t.root,children:[Object(b.jsx)(A.a,{variant:"contained",color:"secondary",onClick:function(){return e.handleSearch("available")},children:"Available"}),Object(b.jsx)(A.a,{variant:"contained",color:"primary",onClick:function(){return e.handleSearch("sold")},children:"Sold"}),Object(b.jsx)(A.a,{variant:"contained",color:"secondary",onClick:function(){return e.handleSearch("pending")},children:"Pending"})]})}var L=a(134),R=Object(O.a)({footer:{width:"100%",display:"flex",padding:1,justifyContent:"flex-center",alignItems:"center",bottom:0,margin:10},typography:{margin:"auto"},links:{marginRight:5,marginLeft:5}});function U(){var e=R();return Object(b.jsx)(h.a,{className:e.footer,children:Object(b.jsxs)(u.a,{variant:"h6",component:"h6",className:e.typography,gutterBottom:!0,children:["Created by",Object(b.jsx)(L.a,{className:e.links,href:"https://github.com/sammiefrog",target:"_blank",rel:"noopener",children:"Sammantha Sasenick"}),"using",Object(b.jsx)(L.a,{className:e.links,href:"https://petstore.swagger.io/",target:"_blank",rel:"noopener",children:"Swagger PetStore API"})]})})}var q=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(j.a)(c,2),s=i[0],h=i[1],u=Object(n.useState)([]),g=Object(j.a)(u,2),O=g[0],x=g[1];Object(n.useEffect)((function(){if(a!==[]){var e=a.slice(0,20);console.log(e),x(e)}}),[a]);var m=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(t),e.next=4,E(t);case 4:a=e.sent,r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(H,{handleSearch:m}),Object(b.jsx)(_,{pets:O,petStatus:s})]}),Object(b.jsx)(U,{})]})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.37a5ed81.chunk.js.map