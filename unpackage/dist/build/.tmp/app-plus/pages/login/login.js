(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"473f":function(n,e,i){},"4a08":function(n,e,i){"use strict";var t=i("473f"),o=i.n(t);o.a},"8f0a":function(n,e,i){"use strict";i.r(e);var t=i("b3d9"),o=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,function(){return t[n]})}(r);e["default"]=o.a},b3d9:function(n,e,i){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;u(i("be11"));var o=u(i("e57f")),r=i("14dd"),a=i("2f62");function u(n){return n&&n.__esModule?n:{default:n}}function s(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),t.forEach(function(e){c(n,e,i[e])})}return n}function c(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}var f=function(){return i.e("pages/components/m-input/m-input").then(i.bind(null,"10fc"))},l={components:{mInput:f},mixins:[r.miniProApi],data:function(){return{providerList:[],hasProvider:!1,name:"",password:"",positionTop:0}},computed:s({},(0,a.mapGetters)(["forcedLogin","userToken"])),watch:{userToken:{handler:function(n,e){n&&this.switchPage("../find/find")},immediate:!0}},onReady:function(){this.initPosition(),this.initProvider()},methods:{initProvider:function(){var e=this,i=["weixin","qq","sinaweibo"];n.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var t=0;t<n.provider.length;t++)~i.indexOf(n.provider[t])&&e.providerList.push({value:n.provider[t],image:"../../static/"+n.provider[t]+".png"});e.hasProvider=!0}},fail:function(n){console.error(t("获取服务供应商失败："+JSON.stringify(n)," at pages\\login\\login.vue:227"))}})},initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},bindLogin:function(){var n={name:this.name,password:this.password};console.log(t("手机号码、密码注册登录时的 data",n," at pages\\login\\login.vue:338")),this.$store.dispatch("login",n)},oauth:function(e){var i=this;this.getDeviceApi().login({provider:e,success:function(o){console.log(t("[${value}]授权后 通过uni.login()获取到的返回结果res",JSON.stringify(o)," at pages\\login\\login.vue:367")),n.getUserInfo({provider:e,success:function(n){console.log(t("[".concat(e,"]授权登录后 通过uni.getUserInfo获取到的返回结果infoRes"),JSON.stringify(n)," at pages\\login\\login.vue:375")),i.getLoginToken(n)}})},fail:function(n){console.error(t("授权登录失败："+JSON.stringify(n)," at pages\\login\\login.vue:381"))}})},getLoginToken:function(n){var e={params:{}};o.default.getOpenId(e,!0).then(function(n){})},toWelecome:function(e){this.forcedLogin?n.reLaunch({url:"../main/main"}):n.navigateBack()}}};e.default=l}).call(this,i("6e42")["default"],i("0de9")["default"])},ff15:function(n,e,i){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},o=[];i.d(e,"a",function(){return t}),i.d(e,"b",function(){return o})},ff8b:function(n,e,i){"use strict";i.r(e);var t=i("ff15"),o=i("8f0a");for(var r in o)"default"!==r&&function(n){i.d(e,n,function(){return o[n]})}(r);i("4a08");var a=i("2877"),u=Object(a["a"])(o["default"],t["a"],t["b"],!1,null,"11db9900",null);e["default"]=u.exports}},[["3683","common/runtime","common/vendor"]]]);