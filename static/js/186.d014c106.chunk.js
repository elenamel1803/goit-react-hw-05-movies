"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(r,e,t){t.r(e);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(258),o=t(791),i=t(689),p=t(818),f=t(184);e.default=function(){var r=(0,i.UO)().movieId,e=(0,o.useState)([]),t=(0,a.Z)(e,2),u=t[0],v=t[1],l=(0,o.useState)(!1),h=(0,a.Z)(l,2),d=h[0],m=h[1];(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,m(!0),r){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,(0,p.oc)(r);case 6:t=e.sent,console.log("data :>> ",t),v(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:return e.prev=14,m(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var x=u&&u.length>0?u.map((function(r){var e=r.author,t=r.content,n=r.id;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author: ",e]}),(0,f.jsx)("p",{children:t})]},n)})):"No reviews available";return(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(s.Z,{}),(0,f.jsx)("ul",{children:x})]})}},818:function(r,e,t){t.d(e,{PJ:function(){return p},VN:function(){return o},X1:function(){return f},g1:function(){return i},oc:function(){return v}});var n=t(861),a=t(757),u=t.n(a),c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"1a58fcece4729e6d5135f76aceb40c92",language:"en-US"}},o=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day",s);case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie?query=".concat(e),s);case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e),s);case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e,"/credits"),s);case 2:return t=r.sent,n=t.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e,"/reviews"),s);case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.d014c106.chunk.js.map