webpackJsonp([7],{Luci:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Dd8w"),n=s.n(r),a=s("vLgD"),u=s("NYxO"),i={data:function(){return{user:{phone:"admin",password:"admin"}}},methods:n()({},Object(u.b)({requestUser:"userActions"}),{onSubmit:function(){var e=this;Object(a.h)(this.user).then(function(t){e.requestUser(t.data.list),e.$toast.success(t.data.msg),e.$router.push("/mine")})}})},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("van-nav-bar",{attrs:{"right-text":"注册",title:"欢迎登录"},on:{"click-right":function(t){return e.$router.push("/register")}}}),e._v(" "),s("van-form",{on:{submit:e.onSubmit}},[s("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),e._v(" "),s("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("登录")])],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(i,o,!1,function(e){s("kb9U")},null,null);t.default=l.exports},kb9U:function(e,t){}});
//# sourceMappingURL=7.840fd47e14dc68c8f61a.js.map