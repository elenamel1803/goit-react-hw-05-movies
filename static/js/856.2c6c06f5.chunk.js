"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[856],{672:function(n,t,e){e.d(t,{Z:function(){return b}});var r,a,i,o,u,c=e(689),s=e(870),p=e(168),f=e(87),x=e(924),d=x.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: center;\n  max-width: 1200px;\n  margin: 28px auto;\n"]))),l=x.ZP.li(a||(a=(0,p.Z)(["\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  height: 350px;\n  width: 200px;\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),h=(0,x.ZP)(f.rU)(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  justify-content: space-between;\n"]))),m=x.ZP.img(o||(o=(0,p.Z)(["\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  max-width: 200px;\n  min-height: 300px;\n  object-fit: cover;\n  object-position: center;\n"]))),v=x.ZP.p(u||(u=(0,p.Z)(["\n  padding: 4px;\n  font-size: 18px;\n  text-align: center;\n"]))),g=e(184),b=function(n){var t=n.movies,e=(0,c.TH)();return(0,g.jsx)(d,{children:t.map((function(n){var t,r,a=n.id,i=n.title,o=n.poster_path;return(0,g.jsx)(l,{children:(0,g.jsxs)(h,{to:"/movies/".concat(a),state:{from:e},children:[(0,g.jsx)(m,{src:o&&o.length>0?"https://image.tmdb.org/t/p/w500".concat(o):s.M,alt:i,width:"200"}),(0,g.jsx)(v,{children:(t=i,r=30,t.length>r?t.slice(0,r)+"...":t)})]})},a)}))})}},856:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,i,o=e(861),u=e(439),c=e(757),s=e.n(c),p=e(258),f=e(672),x=e(791),d=e(677),l=e(168),h=e(924),m=h.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  margin: 0 auto;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),v=h.ZP.button(a||(a=(0,l.Z)(["\n  display: inline-block;\n  padding: 4px;\n  width: 70px;\n  height: 50px;\n  font-size: 18px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),g=h.ZP.input(i||(i=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),b=e(184),w=function(n){var t=n.setSearchParams,e=(0,x.useState)(""),r=(0,u.Z)(e,2),a=r[0],i=r[1];return(0,b.jsxs)(m,{onSubmit:function(n){if(n.preventDefault(),!a)return(0,d.l)();t({query:a.trim()})},children:[(0,b.jsx)(g,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(n){var t=n.target;i(t.value.toLowerCase().split(" ").join(" "))}}),(0,b.jsx)(v,{type:"submit",children:"Search"})]})},Z=e(87),y=e(818),k=function(){var n,t=(0,x.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,x.useState)(!1),c=(0,u.Z)(i,2),l=c[0],h=c[1],m=(0,Z.lr)(),v=(0,u.Z)(m,2),g=v[0],k=v[1],j=null!==(n=g.get("query"))&&void 0!==n?n:"";return(0,x.useEffect)((function(){if(j){var n=function(){var n=(0,o.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,y.g1)(j);case 4:(t=n.sent).length||(0,d.N)(),a(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),(0,d.N)(n.t0);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[j]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{setSearchParams:k}),l&&(0,b.jsx)(p.Z,{})||(0,b.jsx)(f.Z,{movies:r})]})}},677:function(n,t,e){e.d(t,{N:function(){return u},l:function(){return o}});var r=e(694),a=e.n(r),i={position:"center-center",timeout:3e3,width:"400px",fontSize:"20px"};function o(){a().Notify.info("Enter your request, please!",i)}function u(){a().Notify.failure("Sorry, there are no images matching your search query. Please try again.",i)}},818:function(n,t,e){e.d(t,{PJ:function(){return p},VN:function(){return c},X1:function(){return f},g1:function(){return s},oc:function(){return x}});var r=e(861),a=e(757),i=e.n(a),o=e(294);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u={params:{api_key:"1a58fcece4729e6d5135f76aceb40c92",language:"en-US"}},c=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day",u);case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?query=".concat(t),u);case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t),u);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits"),u);case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews"),u);case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},870:function(n,t,e){e.d(t,{M:function(){return r}});var r="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}}]);
//# sourceMappingURL=856.2c6c06f5.chunk.js.map