(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/packageA/find/invitation/index"],{"31fd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=(t._self._c,n("d29c")),r=n("1c80");t.$mp.data=Object.assign({},{$root:{m0:a,m1:r}})},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"60bf":function(t,e,n){"use strict";n.r(e);var a=n("e969"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},"720d":function(t,e,n){"use strict";n.r(e);var a=n("31fd"),r=n("60bf");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("c442");var i=n("2877"),c=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"fc4d51a8",null);e["default"]=c.exports},c442:function(t,e,n){"use strict";var a=n("dc67"),r=n.n(a);r.a},dc67:function(t,e,n){},e969:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a")),r=i(n("8404")),o=n("0fee");function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,a,r,o,i){try{var c=t[o](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var o=t.apply(e,n);function i(t){c(o,a,r,i,u,"next",t)}function u(t){c(o,a,r,i,u,"throw",t)}i(void 0)})}}var s={mixins:[o.miniProApi],components:{},data:function(){return{token:"",userInfo:""}},onLoad:function(t){console.log(data)},onShow:function(){},computed:{},watch:{},methods:{_getPicData:function(){var t=u(a.default.mark(function t(){var e,n,o,i,c;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getStorage("token");case 2:return this.token=t.sent,t.next=5,this.getStorage("userInfo");case 5:return this.userInfo=t.sent,console.log("用户id----",this.userInfo.id),e={userId:this.userInfo.id},t.next=10,r.default.getShareData(e,!1);case 10:n=t.sent,o={},n&&1===n.code?(n.data&&(o.headImg=n.data.headImg,o.realName=n.data.realName,o.time=n.data.time,o.title=n.data.title,o.days=n.data.days,o.qrcode=n.data.qrcode),{picUrl_bg:this.$configs.baseUrl+this.$configs.baseImgsUrl.sharePic_bg02,avertor_bg:"@/assets/imgs/icon/logo_1.png",headImg:o.headImg,title:o.title,name:o.realName,dayNum:o.days,time:o.time,codePic:o.qrcode},i=getCurrentPages(),c=i[i.length-1],c,c.options,c.route):this.toast("网络走神了~~",1e3);case 13:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}},[["cf8c","common/runtime","common/vendor"]]]);