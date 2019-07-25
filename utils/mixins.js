
import base from '../api/base.js'
import commApi from '../api/comm.js'
// import { debug } from 'utils';

// 小程序页面跳转
export const miniProApi = {
	components:{
		
	},
	data () {
		return {

		}
	},
	computed: {

	},
	watch:{
	  
	},
	onLoad() {
		console.log('mixin onLoad')
	},	
	onShow() {
		console.log('mixin onShow')
	},
	// 页面初次渲染完成
	onReady(){
		console.log('mixin onReady')
	},
	onHide(){
		console.log('mixin onHide')
	},
	onUnload (){
		console.log('mixin onUnload')
	},
	onPullDownRefresh(){
		console.log('mixin onPullDownRefresh')
	},
	onReachBottom (){
		console.log('mixin onReachBottom')
	},
	onShareAppMessage(){
		console.log('mixin onShareAppMessage')
	},
	onPageScroll(){
		console.log('mixin onPageScroll')
	},
	onTabItemTap(){
		console.log('mixin onTabItemTap')
	},
	created () {

	},
	methods: {
		// 检查是否登录
		getLoginStatus () {
			return new Promise((resolve, reject) => {
				// 从store 中获取 用户
				let loginStatus = this.getStorage("token");
				if( loginStatus ) {
				  // 登陆成功
				  resolve(true);
				}else {
				  // 未登陆成功
				  resolve(false);
				}				
			})
		},		
		// 页面跳转
		navigatePage ( url ) {
			uni.navigateTo({
			  url: url
			})
		},
		swichPage ( url ) {
			uni.switchTab({
			  url:url
			})
		},
		redirectPage ( url ) {
			uni.redirectTo({
			  url:url
			})
		},
		reLaunchPage ( url ) {
			uni.reLaunch({
			  url:url
			})
		},
		//小程序官方所有接口写在这里
		getDeviceApi: () => {
			return {
				showNavigationBarLoading: uni.showNavigationBarLoading,
				hideNavigationBarLoading: uni.hideNavigationBarLoading,
				stopPullDownRefresh: uni.stopPullDownRefresh,
				chooseImage: uni.chooseImage,
				getStorage: uni.getStorage,
				getStorageSync: uni.getStorageSync,
				getImageInfo: uni.getImageInfo,
				setStorageSync: uni.setStorageSync,
				clearStorage: uni.clearStorage,
				removeStorageSync: uni.removeStorageSync,
				navigateTo: uni.navigateTo,
				switchTab: uni.switchTab,
				reLaunch: uni.reLaunch,
				navigateBack: uni.navigateBack,
				showToast: uni.showToast,
				showModal: uni.showModal,
				showActionSheet: uni.showActionSheet,
				getSetting: uni.getSetting,
				authorize: uni.authorize,
				openSetting: uni.openSetting,
				getSystemInfo: wepy.getSystemInfo,
				getLocation: uni.getLocation,
				openLocation: uni.openLocation,
				redirectTo: uni.redirectTo,
				showShareMenu: uni.showShareMenu,
				onShareAppMessage: uni.onShareAppMessage,
				getSystemInfoSync: uni.getSystemInfoSync,
				makePhoneCall: uni.makePhoneCall,
				pageScrollTo: uni.pageScrollTo,
				requestPayment: uni.requestPayment,
				setNavigationBarTitle:uni.setNavigationBarTitle
			}
		},	
		// 成功的 showToast
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
		},
		// modal弹框
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
		},
		// confirm弹框
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
		},
		// toast 弹框
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
		},
		// alert 弹框
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
		},
		// error 弹框
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
		},
		// 设置localstorage 
		setStorage ( key , val ) {
			if( key ) {
			  // 成功返回 customer
			  this.getDeviceApi.setStorageSync({
				key: key,
				data: val ,
				success: function(res){
				  // success
				  console.log(`---localStorage已成功存入 ${key}---值为：`,val)          
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
		},
		// 提取localstorage
		getStorage( key ) {
			return new Promise((resolve,reject)=>{
			  let res = this.getDeviceApi.getStorageSync(key);
			  resolve( res )
			})
		},
		// 删除localstorage 
		removeStorage( key, type = 1 ) {
			switch (type){
				// type 1 表示 异步删除
				case 1:
					this.getDeviceApi.removeStorage({
					  key: key,
					  success: function(res){
						// success
						console.log(`localStorage删除${key}成功`)          
					  },
					  fail: function() {
						// fail
						console.log(`localStorage删除[${key}]失败`)          
					  },
					  complete: function() {
						// complete
					  }
					})    				
				break;
				// type 2 表示 同步删除
				case 2:
					this.getDeviceApi.removeStorageSync({
					  key: key,
					  success: function(res){
						// success
						console.log(`localStorage删除${key}成功`)          
					  },
					  fail: function() {
						// fail
						console.log(`localStorage删除[${key}]失败`)          
					  },
					  complete: function() {
						// complete
					  }						
					})
					break;
				default:
				break;
			}
		},
		// 授权成功后，进行登陆注册获取 token，并缓存 AuthorizeStatus ,token 等
		async authorizeAfter_login(){
			let that = this;
			// debugger;
			// 登陆之前，首先将全局的授权状态notAuthrize改为 已授权(true)，并存入 localstorage中，后续判断是否授权都是看localstorage里面的这个字段
			this.$parent.globalData.notAuthorize = true;
			await that.setStorage( "AuthorizeStatus", true );    
			return new Promise(async (resolve,reject)=>{
			  try {
				console.log('---调用login方法---')
				let token = this.getDeviceApi.getStorageSync('token') || '';    
		  
				let userInfo = this.getDeviceApi.getStorageSync( 'userInfo' ) || '';
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
		},		
		// 判断是否登录授权（主要是微信小程序）
		async getAuthorizeStatus( ) {
			return new Promise((resolve,reject)=>{
				wx.getSetting({
					success: (res) => {
					  if ( res ) {
						if( res.authSetting && res.authSetting["scope.userInfo"] ){
						  // 用户已授权
						  resolve( true );
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
				// 方法二直接通过 缓存中的 AuthorizeStatus 字段来判断
				// 通过 缓存中的AuthorizeStatus 字段来判断是否授权过（有个问题，授权过就会一直是授权的，因为只要登陆过缓存中一直有此值），因为直接通过wepy.getSetting()频繁的调用会出现本已经是授权但是此方法放回的数据报错问题
				// let auth = await this.getStorage("AuthorizeStatus");
				// if( auth ) {
				//   return true;
				// }else {
				//   return false;
				// }							
			})		
		},
}





export default {
  data = {
    mixin: 'This is mixin data.'
  },
  // methods = {
  //   tap () {
  //     this.mixin = 'mixin data was changed'
  //     console.log('mixin method tap')
  //   }
  // }



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




	
  

 





	/**
	 * 转换场景值 typeNum 为场景值
	*/



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

