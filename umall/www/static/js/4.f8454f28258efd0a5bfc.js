webpackJsonp([4],{IKHE:function(t,e){},"TA+J":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("vLgD"),i={data:function(){return{activeKey:0,firstCate:[],secondCate:[]}},methods:{requestCate:function(){var t=this;Object(a.e)().then(function(e){t.firstCate=e.data.list,t.changeCate(0)})},changeCate:function(t){this.secondCate=this.firstCate[t].children}},mounted:function(){this.requestCate()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"分类","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),t._v(" "),n("van-sidebar",{model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.firstCate,function(e,a){return n("van-sidebar-item",{key:e.id,attrs:{title:e.catename},on:{click:function(e){return t.changeCate(a)}}})}),1),t._v(" "),n("van-grid",{attrs:{border:!1,"column-num":2}},t._l(t.secondCate,function(e){return n("van-grid-item",{key:e.id,attrs:{to:"/goodsList?fid="+e.id,title:e.catename}},[n("van-image",{attrs:{src:t.$preImg+e.img}}),t._v(" "),n("p",[t._v(t._s(e.catename))])],1)}),1)],1)},staticRenderFns:[]};var c=n("VU/8")(i,r,!1,function(t){n("IKHE")},"data-v-9bc362a0",null);e.default=c.exports}});
//# sourceMappingURL=4.f8454f28258efd0a5bfc.js.map