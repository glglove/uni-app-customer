(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/find/find"],{"0110":function(t,n,e){"use strict";e.r(n);var o=e("d379"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"27ad":function(t,n,e){"use strict";var o=e("7412"),a=e.n(o);a.a},7412:function(t,n,e){},d379:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(e("a34a")),a=c(e("8404")),i=(c(e("04cd")),e("0fee")),r=e("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function s(t,n,e,o,a,i,r){try{var c=t[i](r),s=c.value}catch(u){return void e(u)}c.done?n(s):Promise.resolve(s).then(o,a)}function u(t){return function(){var n=this,e=arguments;return new Promise(function(o,a){var i=t.apply(n,e);function r(t){s(i,o,a,r,c,"next",t)}function c(t){s(i,o,a,r,c,"throw",t)}r(void 0)})}}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){l(t,n,e[n])})}return t}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var d=function(){return e.e("pages/components/footerExplain/footerExplain").then(e.bind(null,"507f"))},g={mixins:[i.miniProApi],components:{FooterExplain:d},data:function(){return{contentData:[],version:this.$configs.miniproConfings.version,shairePic_clickable:!1,type:1,bg:{find_bg:""},loadingMoreIsShow:!1,authorzeIsShow:"",signData:{signDay:"0",rankNo:"0",totalDay:"0"},loadingMore:{}}},computed:f({},(0,r.mapGetters)(["userToken","forcedLogin","hasLogin","userName"])),watch:{userToken:{handler:function(t,n){t&&this.refreshPage()},immediate:!0}},onLoad:function(){var t=u(o.default.mark(function t(){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$bus.$on("emitRefreshPage",function(){}),console.log("find页面------------onload"),t.t0=console,t.next=5,this.getLoginStatus();case 5:return t.t1=t.sent,t.t0.log.call(t.t0,"-------find首页检查是否登陆成功----",t.t1),t.t2=console,t.next=10,this.getAuthorizeStatus("scope.userInfo");case 10:return t.t3=t.sent,t.t2.log.call(t.t2,"----------------find首页检查是否用户授权了userInfo--------",t.t3),t.t4=console,t.next=15,this.getAuthorizeStatus("scope.userLocation");case 15:t.t5=t.sent,t.t4.log.call(t.t4,"----------------find首页检查是否用户授权了userLocation--------",t.t5);case 17:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),onShow:function(){console.log("find页面-----------------onShow")},onReady:function(){console.log("find页面-----------------onReady")},onHide:function(){this.$bus.$off("emitRefreshPage")},onTabItemTap:function(){console.log("find页面-----------onTabItemTap----")},methods:{onComLoad:function(){var n=u(o.default.mark(function n(){var e,a=this;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return console.log("find --------onComLoad"),n.next=3,this.getAuthorizeStatus("scope.userInfo");case 3:e=n.sent,console.log("find --------onComLoad--获取到的用户信息授权状态----",e),this.$store.dispatch("setAuthorizeState",{authorizeState:e}),this.bg.find_bg?console.log("find首页背景图片已经下载过了"):t.downloadFile({url:"".concat(this.$configs.baseImgsUrl+this.$configs.baseUrlConfigs.imgs_bg.find_bg),success:function(t){200===t.statusCode&&t.tempFilePath&&(console.log("99999999999",t),a.bg.find_bg=t.tempFilePath)},fail:function(t){}});case 7:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),refreshPage:function(){this._getRankDayData()},_getRankDayData:function(){var t=this;this.containerLoading=!0;var n={params:{},page:{pageSize:10,pageNum:1}};a.default.getRankDayData(n).then(function(n){if(t.containerLoading=!1,console.log(n),n&&1===n.data.code){t.contentData=n.data.data;var e=n.data.data,o=e.days,a=e.rank,i=e.total;t.signData.signDay=o,t.signData.rankNo=a,t.signData.totalDay=i}else t.getDeviceApi().showToast({title:"数据获取失败",icon:"error",mask:!0,duration:2e3})}).catch(function(n){t.containerLoading=!1,t.getDeviceApi().showToast({title:"数据获取失败,请重试",icon:"error",mask:!0,duration:2e3})})},clickRank:function(){var t=u(o.default.mark(function t(){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.navigatePage("../packageA/find/ranklist/index");case 1:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),clicKRankList:function(){this.navigatePage("../packageA/find/signUpRecord/index")},immediateSignUp:function(){this.navigatePage("../webSocket/testWebSocket")},invitateFriends:function(){var t=u(o.default.mark(function t(n){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("点击了 邀请好友的 button"),this.shairePic_clickable=!0,this.navigatePage("../packageA/find/invitation/index"),this.shairePic_clickable=!1;case 5:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}()}};n.default=g}).call(this,e("543d")["default"])},de43:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,o=(t._self._c,e("d6cf")),a=e("836b"),i=e("c3e3"),r=e("c546");t.$mp.data=Object.assign({},{$root:{m0:o,m1:a,m2:i,m3:r}})},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},ff7f:function(t,n,e){"use strict";e.r(n);var o=e("de43"),a=e("0110");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("27ad");var r=e("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"78a66793",null);n["default"]=c.exports}},[["0153","common/runtime","common/vendor"]]]);