
import wepy from 'wepy'
import base from '../api/base.js'
import commApi from '../api/comm.js'
// import { debug } from 'utils';


export default class twMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  // methods = {
  //   tap () {
  //     this.mixin = 'mixin data was changed'
  //     console.log('mixin method tap')
  //   }
  // }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }

  /**
   * [isXXX 基础方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  isUndefined(item) {
    return typeof item === 'undefined';
  }
  isDefined(item) {
    return !this.isUndefined(item);
  }
  isString(item) {
    return typeof item === 'string';
  }
  isNumber(item) {
    return typeof item === 'number';
  }
  isArray(item) {
    return Object.prototype.toString.apply(item) === '[object Array]';
  }
  isObject(item) {
    return typeof item === 'object' && !this.isArray(item);
  }
  isFunction(item) {
    return typeof item === 'function';
  }  

  /**
   * [getXXX 增强方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  getString(item, defaultStr) {
    if (this.isString(item)) return item.trim();
    if (this.isNumber(item)) return `${item}`.trim();
    return defaultStr || '';
  }
  getNumber(item, defaultNum) {
    var matches = this.getString(item).match(/\d+/);
    return this.isNumber(matches && +matches[0]) ? +matches[0] : defaultNum;
  }
  getArray(item, defaultArr) {
    return this.isArray(item) ? item : (defaultArr || []);
  }
  getObject(item, defaultObj) {
    return this.isObject(item) ? item : (defaultObj || {});
  }
  getFunction(item) {
    return this.isFunction(item) ? item : noop;
  }
  // 页面跳转

  navigatePage ( url ) {
    wepy.navigateTo({
      url: url
    })
  }

  swichPage ( url ) {
    wepy.switchTab({
      url:url
    })
  }

  redirectPage ( url ) {
    wepy.redirectTo({
      url:url
    })
  }

  reLaunchPage ( url ) {
    wepy.reLaunch({
      url:url
    })
  }

  // 筛选数据
  getCorrectData ( idx , data ) {
    let correntData
    if( data && this.isArray( data ) ){
      data.forEach((item,i) => {
        if( idx == i ){
          correntData = item;
        } 
      })
    } 
    return correntData;
  }


	//小程序官方所有接口写在这里
	getDeviceApi = () => {
		return {
			showNavigationBarLoading: wx.showNavigationBarLoading,
			hideNavigationBarLoading: wx.hideNavigationBarLoading,
			stopPullDownRefresh: wx.stopPullDownRefresh,
			chooseImage: wx.chooseImage,
			getStorage: wx.getStorage,
      getStorageSync: wx.getStorageSync,
      getImageInfo: wx.getImageInfo,
			setStorageSync: wx.setStorageSync,
			clearStorage: wx.clearStorage,
			removeStorageSync: wx.removeStorageSync,
			navigateTo: wx.navigateTo,
			switchTab: wx.switchTab,
			reLaunch: wx.reLaunch,
			navigateBack: wx.navigateBack,
			showToast: wx.showToast,
			showModal: wx.showModal,
			showActionSheet: wx.showActionSheet,
			getSetting: wx.getSetting,
			authorize: wx.authorize,
			openSetting: wx.openSetting,
			getSystemInfo: wepy.getSystemInfo,
			getLocation: wx.getLocation,
			openLocation: wx.openLocation,
			redirectTo: wx.redirectTo,
			showShareMenu: wx.showShareMenu,
			onShareAppMessage: wx.onShareAppMessage,
			getSystemInfoSync: wx.getSystemInfoSync,
			makePhoneCall: wx.makePhoneCall,
			pageScrollTo: wx.pageScrollTo,
      requestPayment: wx.requestPayment,
      setNavigationBarTitle:wx.setNavigationBarTitle
		};
  };
  

	/**
	 * 弹出提示框
	 */
	success(title, duration = 2000, mask) {
		this.getDeviceApi().showToast({
			title: title,
			icon: 'success',
			mask: mask ? false : true,
			duration: duration
		});
		if (duration > 0) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve();
				}, duration);
			});
		}
	}

	/**
	 * 弹出确认窗口
	 */
	modal(text, title = '提示') {
		return new Promise((resolve, reject) => {
			this.getDeviceApi().showModal({
				title: title,
				content: text,
				showCancel: false,
				success: res => {
					resolve(res);
				},
				fail: res => {
					reject(res);
				}
			});
		});
	}

	confirm(text, payload = {}, title = '提示', confirmText = '确定', cancelText = '取消') {
		return new Promise((resolve, reject) => {
			let params = {
				title: title,
				content: text,
				showCancel: true,
				cancelText: cancelText,
				confirmText: confirmText,
				success: res => {
					if (res.confirm) {
						resolve(0, payload);
					} else if (res.cancel) {
						reject(1, payload);
					}
				},
				fail: res => {
					reject(-1, payload);
				}
			};
			this.getDeviceApi().showModal(params);
		});
	}

	toast(title, duration = 2000, onHide, icon = 'none') {
		this.getDeviceApi().showToast({
			title: title,
			mask: false,
			duration: duration,
			icon: icon
		});
		// 隐藏结束回调
		if (onHide) {
			setTimeout( () => {
				onHide();
			}, duration );
		}
	}

	alert(title, duration = 2000) {
		let _this = this;
		this.getDeviceApi().showToast({
			title: title,
			image: '/assets/imgs/icon/alert.png',
			mask: false,
			duration: duration
		});
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, duration);
		});
	}

	error(title, duration = 2000, onHide) {
		let _this = this;
		this.getDeviceApi().showToast({
			title: title,
			image: '/assets/imgs/icon/error.png',
			mask: true,
			duration: duration
		});
		// 隐藏结束回调
		if (onHide) {
			setTimeout(() => {
				onHide();
			}, duration);
		}
  }  


  // 检查是否有版本更新
  checkNewVersion () {
    // 用户版本更新
    // debugger
    if (wx.canIUse("getUpdateManager")) {
      let updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate((res) => {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate);
      })
      updateManager.onUpdateReady(() => {
        // debugger;
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: (res) => {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            } else if (res.cancel) {
              return false;
            }
          }
        })
      })
      updateManager.onUpdateFailed(() => {
        // 新的版本下载失败
        wx.hideLoading();
        wx.showModal({
          title: '升级失败',
          content: '新版本下载失败，请检查网络！',
          showCancel: false
        });
      });
    }  
  }
  
  // 修改 globalData globalData 值 
  changeGlobalData ( key,val ) {
    // this.globalData.globalData = !this.globalData.globalData;
    this.$parent.globalData[key] = val;
  }
  
  // 设置localstorage ——userInfo 和 token
  async setStorage ( param , val ) {
    if( param ) {
      // 成功返回 customer
      wx.setStorage({
        key: param,
        data: val ,
        success: function(res){
          // success
          console.log(`---localStorage已成功存入 ${param}---值为：`,val)          
        },
        fail: function() {
          // fail
          console.log("localStorage存入用户userInfo失败！")          
        },
        complete: function() {
          // complete
        }
      })
    } 
  } 
  
  // 提取localstorage
  async getStorage( key ) {
    return new Promise((resolve,reject)=>{
      // setTimeout(()=>{
      //   // 用延时主要是为了能确保在已保存loalstorage后再取
      //   resolve(  wx.getStorageSync(key) );
      // },1000)
      let res = wx.getStorageSync(key);
      resolve( res )
    })
  }

  // 删除localstorage 
  async removeStorage( key ) {
    wx.setStorage({
      key: key,
      data: null,
      success: function(res){
        // success
        console.log("localStorage已成功删除 用户userInfo的值")          
      },
      fail: function() {
        // fail
        console.log("localStorage删除用户userInfo失败！")          
      },
      complete: function() {
        // complete
      }
    })    
  }



  /**
	 * 授权成功后，进行登陆注册获取 token，并缓存 AuthorizeStatus ,token 等
  */
  async authorizeAfter_login(){
    let that = this;
    // debugger;
    // 登陆之前，首先将全局的授权状态notAuthrize改为 已授权(true)，并存入 localstorage中，后续判断是否授权都是看localstorage里面的这个字段
    this.$parent.globalData.notAuthorize = true;
    await that.setStorage( "AuthorizeStatus", true );    
    return new Promise(async (resolve,reject)=>{
      try {
        console.log('---调用login方法---')
        let token = wepy.getStorageSync('token') || '';    
  
        let userInfo = wepy.getStorageSync( 'userInfo' ) || '';
        if( token )   await that.removeStorage("token" );
        if( userInfo )  await that.removeStorage("userInfo" );      
  
        // 先登陆 wx.login();
        let {code:code} = await wepy.login();  //通过调用login获取code 判断是否开始登录
  
        console.log("获取到的code：", code)
  
        if(code){
          let userInfo= await wepy.getUserInfo({
            lang: "zh_CN"
          });  
          console.log("-----授权后通过wepy.getUserInfo()获取用户信息返回的结果-----：",userInfo)
  
          this.$parent.globalData.ret = userInfo;  // 将返回的数据赋值給  globalData中   
         
          console.log('---获取信息,发送网络请求，将获取到的code 传给后台获取 用户信息（openid、token等信息）---');
  
          let ret = this.$parent.globalData.ret;
  
          let type = "";
  
          console.log("----打印global中的 optionObj对象信息---：", this.$parent.globalData.optionObj );
          if ( this.$parent.globalData.optionObj.scene ){
            // 场景值
            type = await that.getEnterType(this.$parent.globalData.optionObj.scene );
          }
  
          let params = {
            params: {
              code: code,
              encryptedData: ret.encryptedData,
              iv: ret.iv,
              type: type,       //0是扫码，1是点击分享图，2.微信上搜索的
              userId: that.$parent.globalData.optionObj.query.scene ? that.$parent.globalData.optionObj.query.scene : "",    // 用户scene唯一标识 用于邀请人数的统计
            }
          }
  
          // 调用 后台注册用户信息的login接口 getOenId 方法
          // console.log(commApi)
          await commApi.getOpenId( params, true ).then(async (res)=>{
            if ( res && res.code == 1 ) {
              console.log('---网络请求返回成功---')
              console.log("-----调取后台login接口注册用户信息成功后获取openid成功------：", res);            
              //返回成功 则 存入缓存
              // wx.setStorageSync(res);
              await that.setStorage( "token", res.data.token );
              // 缓存 用户信息 userInfo
              await that.setStorage( "userInfo", res.data.customer ); 
              //触发授权组件关闭弹框
              // debugger;
              // this.reLaunchPage("../blacklist/index");              
              resolve(true);  
            }
            // else if( res && res.code ==1018 ){
            //   // 发现是黑名单用户，调转至黑名单页面
            //   this.reLaunchPage("../blacklist/index");
            //   console.log("---------调用后台login接口后返回的状态有问题-------")
            // }
            else {
              // 登陆后后台返回错误
              this.toast("登陆失败");
              console.log("---------调用后台login接口后返回的状态有问题-------")
            }
          }).then(async ()=>{
              // let token = wx.getStorageSync('token');
              // let userInfo = wx.getStorageSync( 'userInfo' );
              let token = await that.getStorage( "token" ) || "";
              let userInfo = await that.getStorage( "userInfo" ) || "";
              console.log('--------缓存token成功----------')
              console.log( "缓存成功后读取缓存中的token：", token )
              console.log('----------缓存userInfo成功--------')
              console.log( "缓存成功后读取缓存中的userInfo：", userInfo ) 
          });
        }else{
          reject("---登陆微信后台 wx.login() 接口返回异常---");
          console.log('---登陆微信后台 wx.login() 接口返回异常---')
        }
      } catch (error) {
        reject(error);
        console.log(error) 
      }   
    }) 
  }


  /**
   * 检查是否登陆成功
   *
  */  
  async getLoginStatus () {
    let loginStatus = await this.getStorage("token");
    if( loginStatus ) {
      // 登陆成功
      return true;
    }else {
      // 未登陆成功
      return false;
    }
  }


  /**
   * 
   * 检查是否登陆授权成功
   * 
  */
  async getAuthorizeStatus( ) {
    return new Promise((resolve,reject)=>{
      wx.getSetting({
        success: (res) => {
          if ( res ) {
            if( res.authSetting && res.authSetting["scope.userInfo"] ){
              // 用户已授权
              resolve( true ) ;
            }else {
              resolve( false )
            }
          }else {
            resolve( false )
          }
        },
        fail:( res ) => {

          // 先判断是否是网络问题造成了请求失败
          try {
            wx.getNetworkType({
              success: function (res) {
                let  networkType = res.networkType;
                if( networkType != "none" ) {
                  // 有网络，检查 缓存中的授权字段
                  let AuthorizeStatus = wx.getStorageSync("AuthorizeStatus");
                  if( AuthorizeStatus ) {
                    resolve( true ) ;
                  }else {
                    resolve( false ) ;
                  }                    
                }else {
                  // 无网络 返回true, 弹出 提示
                  this.error("网络异常")
                  resolve( true ) ;
                }
              }
            })
          } catch (error) {
            
          }
        }
      })
    })





    // try {
      //调用getSetting Api
    //   let auth = await wepy.getSetting();    
     //获取authSetting用来判断是否授权
    //   let authSetting = auth.authSetting;   
    //   console.log('---开始判断---');    
    //   console.log("comm.js中判断的authSetting的值:",authSetting)
    //   if( authSetting['scope.userInfo'] ){
    //     console.log('---已经授权过---');     
    //     return true;         
    //     if( this.getDeviceApi().getStorageSync("token") ){
    //       // 已授权并且已经登陆
    //       console.log("-----已经授权过并且登陆成功------")
    //     }else {
    //       // 已经授权但是没有登陆成功
    //       console.log("-----已经授权过但是没有登陆成功------")
    //     }          
    //   }else if(){
    //     return false;
    //   }
    // } catch (error) {
    //   console.log("common.js中getAuthorizeStatus方法中判断是否已经授权出错",error)
    //   // 出错后， 通过 缓存中的AuthorizeStatus 字段来判断是否授权过
    //   let AuthorizeStatus = await this.getStorage("AuthorizeStatus");
    //   if( AuthorizeStatus ) {
    //     return true;
    //   }else {
    //     return false;
    //   }
    // }
    
    // 方法二直接通过 缓存中的 AuthorizeStatus 字段来判断
    // 通过 缓存中的AuthorizeStatus 字段来判断是否授权过（有个问题，授权过就会一直是授权的，因为只要登陆过缓存中一直有此值），因为直接通过wepy.getSetting()频繁的调用会出现本已经是授权但是此方法放回的数据报错问题
    // let auth = await this.getStorage("AuthorizeStatus");
    // if( auth ) {
    //   return true;
    // }else {
    //   return false;
    // }
  }

	/**
	 * 转换场景值 typeNum 为场景值
	*/
  getEnterType ( typeNum ) {
    // 判断场景值
    switch ( typeNum ) {
      case 1001:          //发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表）
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

      case 1005:          //顶部搜索框的搜索结果页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

      case 1006:          //发现栏小程序主入口搜索框的搜索结果页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;     
      
      case 1007:          //单人聊天会话中的小程序消息卡片
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;    
      
      case 1008:          //群聊会话中的小程序消息卡片
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;    
      
      
      case 1011:          //扫描二维码
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;    
      
      case 1012:          //长按图片识别二维码
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;    
      
      case 1013:          //手机相册选取二维码
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;    
      
      case 1014:          //小程序模板消息
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;    
      
      case 1017:          //前往体验版的入口页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;    
      
      case 1019:          //微信钱包
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;    
      
      case 1020:          //公众号 profile 页相关小程序列表
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;     
      
      case 1022:          //聊天顶部置顶小程序入口
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1023:          //安卓系统桌面图标
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1024:          //小程序 profile 页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1025:          //扫描一维码
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1026:          //附近小程序列表
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1027:          //顶部搜索框搜索结果页「使用过的小程序」列表
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1028:          //我的卡包
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1029:          //卡券详情页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1030:          //自动化测试下打开小程序
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1031:          //长按图片识别一维码
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;
      
      case 1032:          //手机相册选取一维码
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;   
      
      case 1034:          //微信支付完成页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1035:          //公众号自定义菜单
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1036:          //App 分享消息卡片
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1037:          //小程序打开小程序
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1038:          //从另一个小程序返回
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1039:          //摇电视
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1042:          //添加好友搜索框的搜索结果页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1043:          //公众号模板消息
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1044:          //带 shareTicket 的小程序消息卡片
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1045:          //朋友圈广告
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1046:          //朋友圈广告详情页
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1047:          //扫描小程序码
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1048:          //长按图片识别小程序码
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1049:          //手机相册选取小程序码
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1052:          //卡券的适用门店列表
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1053:          //搜一搜的结果页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1054:          //顶部搜索框小程序快捷入口
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1056:          //音乐播放器菜单
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1057:          //钱包中的银行卡详情页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1058:          //公众号文章
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1059:          //体验版小程序绑定邀请页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1064:          //微信连Wi-Fi状态栏
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1067:          //公众号文章广告
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      
      case 1068:          //附近小程序列表广告
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1069:          //移动应用
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1071:          //钱包中的银行卡列表页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 

      case 1072:          //二维码收款页面
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1073:          //客服消息列表下发的小程序消息卡片
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1074:          //公众号会话下发的小程序消息卡片
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1077:          //摇周边
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1078:          //连Wi-Fi成功页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break; 
      
      case 1079:          //微信游戏中心
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1081:          //客服消息下发的文字链
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1082:          //公众号会话下发的文字链
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1084:          //朋友圈广告原生页
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1089:          //微信聊天主界面下拉，「最近使用」栏（基础库2.2.4版本起包含「我的小程序」栏）
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1090:          //长按小程序右上角菜单唤出最近使用历史
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1091:          //公众号文章商品卡片
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1092:          //城市服务入口
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1095:          //小程序广告组件
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1096:          //聊天记录
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1097:          //微信支付签约页
      return 1;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1099:          //页面内嵌插件
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;  
      
      case 1102:          //公众号 profile 页服务预览
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;   
      
      case 1103:          //发现栏小程序主入口，「我的小程序」列表（基础库2.2.4版本起废弃）
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;   
      
      case 1102:          //微信聊天主界面下拉，「我的小程序」栏（基础库2.2.4版本起废弃）
      return 2;           // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;         
    }
  }


	/**
	 * 选择图片 在前端显示出来 params:{count,sizeType,sourceType}
	 */
  async chooseImg ( param ) {
    let data = {
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    }

    param = Object.assign(data, param);
    // debugger;
    let tempFilePaths = [];
    let that = this;

    return new Promise( (resolve , reject)=>{
      that.getDeviceApi().chooseImage({
        count: param.count, // 默认9
        sizeType: param.sizeType, // 可以指定是原图还是压缩图，默认二者都有
        sourceType: param.sourceType, // 可以指定来源是相册还是相机，默认二者都有
        success: res => {
          that.getDeviceApi().showToast({
            title: '正在上传...',
            icon: 'loading',
            mask: true,
            duration: 2000
          });
          // that.toast("正在上传...",2000,false,'loading');
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          console.log("777----------",res.tempFilePaths)
          // 返回选择的图片的临时地址
          resolve( res.tempFilePaths );
        },
        fail: res => {
          // debugger; 
          that.getDeviceApi().showToast({
            title: '取消选择',
            // icon: 'loading',
            image: '/assets/imgs/icon/error.png',
            mask: true,
            duration: 2000
          });
          reject( res )
        }
      });
    })
  }


  /**
   * 选择图片 预览 传入 urls ,index 的对象集合
   * 
   */
  async previewImage (  param  ) {
    let data = {
      index: 0,  // 默认显示第一张开始
      urls: [],  // 预览的图片地址的数组集合
    }
    // debugger;
    param = Object.assign(data, param);
    // let index = e.target.dataset.index;//预览图片的编号
    let that = this;
    let urls = param.urls;
    let current = param.urls[param.index];
    wx.previewImage({
      current: current,//预览图片链接
      urls: urls,//图片预览list列表
      success: function (res) {
        //console.log(res);
        console.log(32444444444)
      },
      fail: function () {
        //console.log('fail')
      }
    })
  }

  /**
   * 
   *  给图片加一个水印
   * 
   */
  async creatWatermark( myCanvasId , imageUrl="" , text="" ) {
    // debugger;
    var that = this;
    // 画布的宽高
    var width = "";
    var height = "";
    // 绘制完成后到处的图片临时地址集合
    var res_imageUrl = "";
    // 屏幕的宽 、 高
    let screenWidth = "";
    let screenHeight = "";    

    // 屏幕的像素密度
    let ratio = "";

    // 获取系统的信息，设备信息等\
    ratio = wx.getSystemInfoSync().pixelRatio;

    if( myCanvasId  ) {
      var ctx = wx.createCanvasContext( myCanvasId );
    }

    // return new Promise(async ( resolve , reject )=>{
      // if( imageUrlArr && imageUrlArr.length ) {
      //   for( var i = 0; i<imageUrlArr.length; i++  ) {   
          return new Promise( async ( resolve , reject ) =>{
            debugger;         
            this.getDeviceApi().getImageInfo({
              src: imageUrl,
              success: async ( res )=>{
                debugger;
                width = res.width;
                height = res.height;
                //获取屏幕的宽度
                screenWidth = this.getDeviceApi().getSystemInfoSync().windowWidth;
                screenHeight = this.getDeviceApi().getSystemInfoSync().windowHeight;
                //处理一下图片的宽高的比例
                if( width >= height ) {
                  // 宽图
                  if( width > screenWidth ) {
                    width = screenWidth;
                  }
                  height = res.height / res.width * width;
                }else if( width < height ){
                  // 长图
                  if( width > screenWidth ) {
                    width = screenWidth;
                    if( height > 400 ) {
                      height = 400;
                      width = res.width/res.height * height;
                    }else {
                      height = res.height/res.width * screenWidth;
                    }
                  }else if ( width < screenWidth ) {
                    width = res.width;
                    height = res.height;
                  }
                }
  
                // 开始绘制
                debugger;
                ctx.drawImage( imageUrl, 0, 0, width, height);
                // 逆时针旋转 30度
                ctx.rotate( -30 * Math.PI / 180);

                // 随机生成 x,y 的坐标（在画布内）

                // function creatNum( min , max ){
                //   max = max - 20;
                //   min = min + 20;
                //   return parseInt(Math.random()*(max-min+1)+min,10);
                // }
              
                for ( let j = 1; j < 5; j++ ) {
                  ctx.beginPath()
                  ctx.setFontSize(14)
                  ctx.setFillStyle('red')
                  ctx.fillText('21天打卡', 0 ,  height/4 * j )
                }  
  
                // 绘制成功后 一定要在 绘制成功后的 回调中 将其导出为图片
                debugger;

                //画布顺时针旋转20度
                ctx.rotate( 20 * Math.PI / 180);

                for ( let j = 1; j < 5; j++ ) {
                  ctx.beginPath()
                  ctx.setFontSize(14)
                  ctx.setFillStyle('red')
                  ctx.fillText('21天打卡', width-width/4*j ,  height/4 * j )
                }                 

                debugger;
                return ctx.draw( false, async ( )=>{
                //   debugger;

                  await  saveCanvasTempFilePath().then(res=>{
                    return (res);
                  });
                    // if( res && res.length == imageUrlArr.length ) {
                      // debugger;
                      // console.log("res_imageUrlArr的length--",res.length)
                      // resolve( res_imageUrl )  
                    // }
                  });

                // });/


                // ctx.draw( false, saveCanvasTempFilePath );
                  

              },
              fail: ( err )=> {
                debugger;
                console.log(err);
              }
            })
          })
      //   }      
      // }
    // });


    function saveCanvasTempFilePath ( ){
      debugger;
      console.log("绘制成功后 准备导出绘制的图片存在临时路径中...")
      let that = this;
      // var unit = screenWidth / 375;
      // var ratio = that.ratio;

      return new Promise(( resolve , reject )=>{
        debugger;
        var count = 0;
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: screenWidth,
          height: screenHeight,
          destWidth: ratio * width,
          destHeight: ratio * height,        
          canvasId: myCanvasId,
          quality: 1,
          success: (res) => {
            // wx.previewImage({
            //   urls: [res.tempFilePath],
            // })
            debugger;

            res_imageUrl =  res.tempFilePath;

            console.log('绘制的图片已成功导出为临时路径',res.tempFilePath)

            console.log("导出临时地址的数组集合======》:", res_imageUrl)
            // resolve( res_imageUrl )
            return (  res_imageUrl );
          },
          fail: ( error )=>{
            reject("绘制的图片保存为临时地址失败！")
            console.log( error );
            const { errMsg } = error;
            // 可能会有其他报错 还是拦截一下吧
  
            if ( errMsg === "canvasToTempFilePath:fail no image" ) {
              // 一次不行再试一遍 两次都不过就放弃吧
              count += 1;
              if ( count < 25) {
                  saveCanvasTempFilePath( );
                  console.log(`第${count}次重新将canvas绘制的图保存为临时地址`)
              }
              else {
                  // 错了这么多遍基本没救了
                  that.alert("生成海报图片失败！请重新生成",2000);
              }
            }
          }
        })
      })      
    }
    
  }  


  /**
   * 分享給好友/群,返回一个分享的对象
   * 
   */
  async sharePic ( shareObj ) {
    let that = this;
    // debugger;
    console.log(  shareObj.title);
    return new Promise((resolve,reject)=>{
      let shareObj_res = {
        title: shareObj.title,
        path: shareObj.path,
        imageUrl: shareObj.imageUrl,
        success: (res)=>{
          console.log(res)
          // debugger;

					that.getDeviceApi().showShareMenu({
						withShareTicket: true
					});          

          if( res && res.errMsg == 'showShareMenu:ok' ) {
            this.success("分享成功",1000,true);
          }  
          // 获取分享者信息
          wx.getShareInfo({
            shareTicket: res.shareTickets[0]||"",
            success: (res)=>{ console.log(res) },
            fail:  (res) => { console.log(res) },
            complete: (res)=> { console.log(res) }
          })    
          // resolve( res );          
        },
        fail: (res)=>{
          console.log(res)
          // resolve( res );
          // debugger;
          if( res.errMsg == 'showShareMenu:cancel' ) {
            // 取消
            this.getDeviceApi().showToast({
              title: "转发取消",
              image: '/assets/imgs/icon/alert.png',
              mask: false,
              duration: duration
            });

          }else if ( res.errMsg == 'shareAppMessage:fail' ) {
            // 转发失败，其中 detail message为详细失败信息
            this.alert("转发失败",1000)
          }
        },
        complete: (res)=>{
          // debugger;
          // resolve( res );
        }
      };
      
      // if( opt.from == 'button' ) {
      //   let eData = opt.target.dataset;
      //   console.log( eData.name )
      //   shareObj.path = `/pages/find/index?btn_name=${eData.name}`
      // }
      resolve ( shareObj_res );
    })
  }  


  // 转换时间
  switchTimeForMart( value ) {
    if( value ) {
     let theTime = parseInt(value); 
     let middle = 0; // 分
     let hour = 0; //小时
     middle= parseInt(theTime/60);
     theTime = parseInt(theTime%60);
     if( theTime<10 ) {
         theTime = "0"+ theTime ;
     }

     if(middle> 60) {
         hour= parseInt(middle/60);
         middle= parseInt(middle%60);
     }

     if( middle<10 ) {
         middle = "0"+middle + ":";
     }

     if( hour<10 ){
         if( hour ==0 ) {
             hour = "";
         }else {
             hour = "0"+hour + ":";
         }
     }
     var result = ""+hour + middle  + theTime;
     return result;           
     } 
 }   


   /**
   * 判断是否授权了 录音的权限
   * 
   */
  async getAuthorize_recorder () {
    let that = this;
    return new Promise( async ( resolve , reject  )=>{
      wepy.getSetting().then((res)=>{
        // 小程序 已经授权了获取用户信息
        console.log(res)   // res.userInfo 为true  res.errMsg == "authorize:ok"
        console.log(res.authSetting)
        if( res.authSetting['scope.record'] ) {
          // 已经授权了 录音设置
          resolve(true);
          return true;
        }else if ( !res.authSetting['scope.record'] ){
          if( wx.openSetting ) {
            wx.showModal({
              title: "提示",
              content: "使用该功能需要授权开启录音设置的权限，请点击'确定'先开启设置",
              showCancel: false,
              confirmTex: "录音授权",
              confirmColor: "#52a2d8",
              success: res =>{
        
                wx.authorize({
                  scope: 'scope.record',
                  success(){
            
                    // 授权成功
                    resolve(true)
                  },
                  fail(){
     
                    // 第一次授权失败
                    wx.showModal ({
                      title: "提示",
                      content: "您未开启录音授权,请开启设置",
                      showCancel: true,
                      confirmTex: "录音授权",
                      confirmColor: "#52a2d8",
                      success: function(res){
        
                        if( res.confirm ) {
                          wx.openSetting({
                            success: (res)=>{
    
                              console.log(res.authSetting);
                              if( res.authSetting['scope.record'] ){
                                // 授权成功
                                resolve(true);
                              }else {
                                // 未授权开启提示授权

                                wx.showModal({
                                  title: "提示",
                                  content: "未开启授权将无法使用录音功能,请开启设置",
                                  showCancel: true,
                                  confirmTex: "开启授权",
                                  confirmColor: "#52a2d8",       
                                  success: function(res){
                                    if( res.confirm ) {
                                      wx.openSetting({
                                        success: (res)=>{
                                          console.log(res.authSetting);

                                          if( res.authSetting['scope.record'] ){
                                            // 第二次授权才成功
                                            resolve( true );
                                          }else {
                                            // 第二次授权没有成功

                                            wx.showToast({
                                              title: '授权失败',
                                              // icon: 'loading',
                                              image: '/assets/imgs/icon/error.png',
                                              mask: true,
                                              duration: 1000
                                            });    
                                            
                                            resolve(false)                                            
                                          }
                                        }
                                      })
                                    }
                                  }                           
                                })
                              }
                            }
                          })
                        }
                      }
                    })
                  }
                })                
              }
            })
          }          
        }
      })
    })
  }


   /**
   * 判断是否授权了地理位置的权限
   * 
   */  

  async getAuthorize_location () {
    let that = this;
    return new Promise( async ( resolve , reject  )=>{
      wepy.getSetting().then((res)=>{
        // 小程序 已经授权了获取用户信息
        console.log(res)   // res.userInfo 为true  res.errMsg == "authorize:ok"
        console.log(res.authSetting)
        if( res.authSetting['scope.userLocation'] ) {
          // 已经授权了 地理位置设置
          resolve(true);
          return true;
        }else if ( !res.authSetting['scope.userLocation'] ){
          if( wx.openSetting ) {
            wx.showModal({
              title: "提示",
              content: "申请获取您的地理位置",
              showCancel: false,
              confirmTex: "地理位置授权",
              confirmColor: "#52a2d8",
              success: res =>{
        
                wx.authorize({
                  scope: 'scope.userLocation',
                  success(){
            
                    // 授权成功
                    resolve(true)
                  },
                  fail(){
     
                    // 第一次授权失败
                    wx.showModal ({
                      title: "提示",
                      content: "您未开启地理位置授权,请开启设置",
                      showCancel: true,
                      confirmTex: "地理位置授权",
                      confirmColor: "#52a2d8",
                      success: function(res){
        
                        if( res.confirm ) {
                          wx.openSetting({
                            success: (res)=>{
    
                              console.log(res.authSetting);
                              if( res.authSetting['scope.userLocation'] ){
                                // 授权成功
                                resolve(true);
                              }else {
                                // 未授权开启提示授权

                                wx.showModal({
                                  title: "提示",
                                  content: "未开启授权将无法使用位置天气功能,请开启设置",
                                  showCancel: true,
                                  confirmTex: "开启授权",
                                  confirmColor: "#52a2d8",       
                                  success: function(res){
                                    if( res.confirm ) {
                                      wx.openSetting({
                                        success: (res)=>{
                                          console.log(res.authSetting);

                                          if( res.authSetting['scope.userLocation'] ){
                                            // 第二次授权才成功
                                            resolve( true );
                                          }else {
                                            // 第二次授权没有成功

                                            wx.showToast({
                                              title: '授权失败',
                                              // icon: 'loading',
                                              image: '/assets/imgs/icon/error.png',
                                              mask: true,
                                              duration: 1000
                                            });    
                                            
                                            resolve(false)                                            
                                          }
                                        }
                                      })
                                    }
                                  }                           
                                })
                              }
                            }
                          })
                        }
                      }
                    })
                  }
                })                
              }
            })
          }          
        }
      })
    })
  }   
}

