webpackJsonp([5],{"1cHr":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("vLgD"),r={data:function(){return{user:{phone:"",nickname:"",password:""}}},methods:{onSubmit:function(){var e=this;Object(s.i)(this.user).then(function(t){e.$toast.success(t.data.msg),e.$router.push("/login")})}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{attrs:{"right-text":"登录",title:"欢迎注册"},on:{"click-right":function(t){return e.$router.push("/login")}}}),e._v(" "),n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),e._v(" "),n("van-field",{attrs:{label:"昵称",placeholder:"请输入昵称",rules:[{required:!0,message:"请填写昵称"}]},model:{value:e.user.nickname,callback:function(t){e.$set(e.user,"nickname",t)},expression:"user.nickname"}}),e._v(" "),n("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("注册")])],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(r,a,!1,function(e){n("dff+")},null,null);t.default=u.exports},"dff+":function(e,t){}});
//# sourceMappingURL=5.a347b56cc883f653d0bf.js.map