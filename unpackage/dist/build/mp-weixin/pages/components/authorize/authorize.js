(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/authorize/authorize"],{"0937":function(t,e,n){},"19f7":function(t,e,n){"use strict";n.r(e);var r=n("2e4c"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=o.a},"2e4c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),o=n("0fee"),u=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(f){return void n(f)}i.done?e(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var u=t.apply(e,n);function a(t){f(u,r,o,a,i,"next",t)}function i(t){f(u,r,o,a,i,"throw",t)}a(void 0)})}}var l={name:"Authorize",components:{},props:{},mixins:[o.miniProApi],data:function(){return{canIUse:this.getDeviceApi().canIUse("button.open-type.getUserInfo")}},onload:function(){var t=s(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("authorize--------onLoad-------");case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:i({},(0,u.mapGetters)(["authorizeState"]),{now:function(){return+new Date}}),watch:{},methods:{onComLoad:function(){console.log("authorize--------onComLoad-------")},getUserInfo_miniPro:function(){var t=s(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e&&(e.detail.userInfo?(console.log("用户按了允许授权按钮后获取的用户信息e.detail.userInfo------",e.detail.userInfo),this.$store.dispatch("setAuthorizeState",{authorizeState:!0,userInfo:e.detail.userInfo}),this.authorizeAfter_login().then(function(t){})):this.modal("不授权将无法正常使用小程序相关功能，请授权后使用"));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=l},"50f9":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=(t._self._c,n("f329"));t.$mp.data=Object.assign({},{$root:{m0:r}})},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"806b":function(t,e,n){"use strict";n.r(e);var r=n("50f9"),o=n("19f7");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("e669");var a=n("2877"),i=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"8b085e98",null);e["default"]=i.exports},e669:function(t,e,n){"use strict";var r=n("0937"),o=n.n(r);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/components/authorize/authorize-create-component',
    {
        'pages/components/authorize/authorize-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("806b"))
        })
    },
    [['pages/components/authorize/authorize-create-component']]
]);                
