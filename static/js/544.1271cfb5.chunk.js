"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{544:function(r,e,t){t.r(e);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(258),i=t(791),o=t(87),f=t(94),p=t(818),v=t(184);e.default=function(){var r=(0,i.useState)(!1),e=(0,a.Z)(r,2),t=e[0],u=e[1],h=(0,i.useState)([]),d=(0,a.Z)(h,2),l=d[0],m=d[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u(!0),r.next=4,(0,p.VN)();case 4:e=r.sent,console.log("data :>> ",e),m(e),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),f.Am.error("An error occurred while fetching reviews.");case 12:return r.prev=12,u(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,v.jsxs)(v.Fragment,{children:[t&&(0,v.jsx)(s.Z,{}),(0,v.jsx)("h2",{children:"Trending today"}),(0,v.jsx)("ul",{children:l.map((function(r){var e=r.id,t=r.title;return(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"/movies/".concat(e),children:t})},e)}))})]})}},818:function(r,e,t){t.d(e,{PJ:function(){return f},VN:function(){return i},X1:function(){return p},g1:function(){return o},oc:function(){return v}});var n=t(861),a=t(757),u=t.n(a),c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"1a58fcece4729e6d5135f76aceb40c92",language:"en-US"}},i=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day",s);case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie?query=".concat(e),s);case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e),s);case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e,"/credits"),s);case 2:return t=r.sent,n=t.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e,"/reviews"),s);case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.1271cfb5.chunk.js.map