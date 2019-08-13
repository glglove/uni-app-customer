<style>
.container {
	overflow: hidden;
    box-sizing: border-box;
    opacity: 0;
}
.container-loading{
    position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1002;
    background-color: #f5f5f5;
    box-sizing: border-box;
    image{
        height: 75rpx;
        width: 75rpx;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
    }
    text{
        position: absolute;
        top:50%;
        left: 50%;
        margin-top: 75rpx;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        font-size: 20rpx;
        color: #999;
    }
}
@-webkit-keyframes topRoate{  
	from{  
		-webkit-transform:rotate(0deg);  
	}  
	to{  
		-webkit-transform:rotate(360deg);  
	}  
} 
@keyframes topRoate{  
	from{  
		transform:rotate(0deg);  
	}  
	to{  
		transform:rotate(360deg);  
	}  
}
@-webkit-keyframes topRoateOut{  
	from{ 
		color: #0078d7;
		top:80px;
		transform:rotate(360deg);  
	}  
	to{ 
		color: #eb637a;
		top:-40px;
		opacity: 0;
		transform:rotate(0deg);  
	}  
} 
@keyframes topRoateOut{  
	from{ 
		color: #0078d7;
		top:80px;
		transform:rotate(360deg);  
	}  
	to{ 
		color: #eb637a;
		top:-40px;
		opacity: 0;
		transform:rotate(0deg);  
	}  
} 
.top-loadding{
	position: fixed;
	background: #FFFFFF;
	box-shadow: 0 4px 25px 0 rgba(0,0,0,0.17);
	left: 50%;
	z-index: 9999;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	margin-left: -20px;
	color: #eb637a;
	transform-origin:50% 50%;
    opacity: 0;
    transition:all .1s ease 0;
	text,span{
		font-size: 34rpx;
	}
	&.out{
		opacity: 1;
		animation:topRoateOut .3s linear 0s;  
		-webkit-animation:topRoateOut .3s linear 0s;  
    }
	&.roate{
        color: #0078d7;
		opacity: 1;
		top:80px;
		animation:topRoate 1s linear 0s infinite;  
		-webkit-animation:topRoate 1s linear 0s infinite;  
	}
}
.bottom-loadding {
	font-size: 24rpx;
	color: #999;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	overflow: hidden;
	left: 0;
    width: 100%;
    opacity: 0;
	image,
	img {
		display: inline-block;
		height: 40rpx;
		width: 40rpx;
		margin-right: 10rpx;
		vertical-align: middle;
	}
}

.ad_box {}

.container_mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	opacity: 0.82;
	background: rgba(0, 0, 0, .75);
}

.container_loading {
    position: fixed;
	top: 50%;
	left: 50%;
	width: 200rpx;
	height: 200rpx;
	margin-left: -100rpx;
	margin-top: -100rpx;
	// background: rgba(0, 0, 0, 0.80);
	border-radius: 10rpx;
	z-index: 1001;
	text-align: center;
	.load-container {
		margin-top: 30rpx;
		margin-bottom: 14rpx;
	}
	image {
		background: #FFFFFF;
		box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.14);
		border-radius: 8px;
	}
	.l_text {
		font-size: 28rpx;
		color: #fff;
		display: block;
	}
}

.container-oauth {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 546rpx;
	height: 680rpx;
	margin-left: -273rpx;
	margin-top: -340rpx;
	background: linear-gradient(-180deg, #F3E7E9 0%, #E3EEFF 100%);
	border-radius: 14px;
	z-index: 1000;
	text-align: center;
	.container-oauth_icon {
		width: 128rpx;
		height: 128rpx;
		display: block;
		margin: 128rpx auto 24rpx;
		background: #f3f3f3;
		border-radius: 50%;
		.iconfont {
			font-size: 100rpx;
			color: #dcdcdc;
			line-height: 128rpx;
		}
	}
	.container-oauth_title {
		font-size: 38rpx;
		color: #242424;
		display: block;
		margin: 0 auto 17rpx;
	}
	.container-oauth_desc {
		font-size: 28rpx;
		color: #333;
		display: block;
		width: 392rpx;
		margin: 0 auto 54rpx;
	}
	.container-oauth_btn {
		width: 416rpx;
		line-height: 88rpx;
		margin-bottom: 33rpx;
	}
	.container-oauth_bind {
		font-size: 24rpx;
		color: #eb637a;
        line-height: 33rpx;
        padding-bottom: 40rpx;
		.iconfont {
			font-size: 24rpx;
			margin-left: 27rpx;
		}
	}
}

.container-error {
	position: fixed;
	width: 100%;
	height: 100%;
	top:0;
	background: #f3f3f3;
	z-index: 100;
	text-align: center;
	.container-error_icon {
		margin: 264rpx auto 15rpx auto;
		width: 219rpx;
		height: 189rpx;
	}
	.container-error_title {
		font-size: 28rpx;
		color: #333;
		display: block;
		margin: 0 auto 7rpx auto;
	}
	.container-error_desc {
		font-size: 24rpx;
		color: #808080;
		display: block;
		width: 392rpx;
		margin: 0 auto 87rpx auto;
	}
	.container-error_btn {
		width: 416rpx;
		line-height: 88rpx;
	}
}

.container-notfound{
	position: fixed;
	width: 100%;
	height: 100%;
	background: #f3f3f3;
	z-index: 100;
	text-align: center;
	top:0;
	.container-error_icon {
		margin: 264rpx auto 15rpx auto;
		width: 219rpx;
		height: 189rpx;
	}
	.container-error_title {
		font-size: 28rpx;
		color: #333;
		display: block;
		margin: 0 auto 7rpx auto;
	}
	.container-error_desc {
		font-size: 24rpx;
		color: #808080;
		display: block;
		width: 392rpx;
		margin: 0 auto 60rpx auto;
	}
	.container-error_btn {
		width: 416rpx;
		line-height: 88rpx;
	}
}

.container-picker {
	position: fixed;
	width: 100%;
	height: 540rpx;
	bottom: 0;
	background: #fff;
	z-index: 1000;
	text-align: center;
	.container-picker_title {
		font-size: 28rpx;
		line-height: 80rpx;
		color: #333;
	}
	.container-picker_btn {
		position: absolute;
		top: 0;
		display: block;
		font-size: 28rpx;
		line-height: 80rpx;
		color: #eb637a;
		padding: 0 30rpx;
		&.left {
			left: 0;
		}
		&.right {
			right: 0;
		}
	}
	.container-picker_content {
		height: 460rpx;
		position: absolute;
		width: 100%;
		bottom: 0;
		.container-picker_item {
			// line-height: 50rpx;
			font-size: 30rpx;
		}
	}
}
	
</style>
<template>
	<!-- <view class="top-loadding" style="top:{{moreTop}}rpx;">
        <image src="/assets/imgs/icons/loading.svg" />
        <text>下拉刷新</text>
    </view> -->
	<view>
		<view class="top-loadding {{topClass}}" style="{{topViewStyle}}" hidden="{{refreshTop==0&&!refreshFlag}}">
			<text class="iconfont mykicon-d_loading_icon"></text>
		</view>
		
		<view class="container" style="{{positionStyle}}" @touchstart="ctstart"  @touchmove="ctmove" @touchend="ctend">
			<slot></slot>
		</view>
		
		<!--<view class="bottom-loadding"  wx:if="{{more!='false'&&!showLoadingFlag}}" style="opacity:{{more!='false'&&!showLoadingFlag?'1':'0'}}">
			<image src="../../assets/imgs/loading2.svg" wx:if="{{nomore=='false'}}" />
			<text wx:if="{{nomore=='false'}}">{{moretext}}</text>
			<text wx:else>沒有更多啦~</text>
		</view> -->
		<view class="ad_box"></view>
		<!-- common mask -->
		<view class="container_mask {{aniClass1}}" @tap="handleMaskTap" hidden="{{!maskFlag}}"></view>
		<!-- loading -->
		<view class="container_loading {{aniClass}}" hidden="{{!loadingFlag}}">
			<image src="../../assets/imgs/loading.gif" />
		</view>

	</view>
</template>
<script>
	import wepy from '@/core/MWepy.js';
    import login from './login.js';
    let lastTime = 0;
    let ease=function(x){
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    };
    let requestAnimationFrame=function(callback) {
      let now = Date.now();
      let nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
          callback(lastTime = nextTime);
        },
        nextTime - now);
    };
    let cancelAnimationFrame=function(id,_this){
        clearTimeout(id)
        _this.tickID=null;
    };
	export default class Container {
		// 只在Page实例中存在的配置数据，对应于原生的page.json文件
		config = {};
        // 页面所需数据均需在这里声明，可用于模板数据绑定
        customerData={
            pickerIndex:-1,
            scrollPosition:0,
            pickerFailCallback:null,
            pickerCallback:null

        }
		data = {
			// loadingText: '加载中',
			maskFlag: false,
			aniClass: 'animated fast fadeIn',
			aniClass1: 'animated fast fadeIn',
			loadingFlag: false,
			oauthFlag: false,
			ani2Class: 'animated fast zoomIn',
			globalErrorFlag: false,
			globalNotFoundFlag: false,
			pickerFlag: false,
			ani1Class: 'animated fast slideInUp',
			pickerArr: null,
			pickerValue: null,
			pickerTitle: null,
            refreshFlag: false,
			showLoadingFlag:true,
			pHeight:0,
			refreshTop:0,
            topClass:'',
            _imgUrl:''
		};
		props = {
			top: {
				type: String,
				default: "0"
			},
			bottom: {
				type: String,
				default:"0"
			},
			left: {
				type: String,
				default:"0"
			},
			right: {
				type: String,
				default: "0"
			},
			background: {
				type: String,
				default: 'transparent'
			},
			more: {
				type: String,
				default: 'false'
			},
			nomore: {
				type: String,
				default: 'false'
			},
			moretext: {
				type: String,
				default: '加载中'
			},
			pulldown:{
				type: String,
				default: 'false'
			}
		};

		// 声明页面中所引用的组件，或声明组件中所引用的子组件
		components = {
        
		};

		// 声明页面所引用的Mixin实例
		// mixins = [];

		// 声明计算属性（详见后文介绍）
		computed = {
			 ViewStyle(){
				if(!this.refreshFlag&&this.pulldown!='false'){
					let rotate=this.refresh *4.3%360;
					let cosVal = Math.cos(rotate * Math.PI / 180), sinVal = Math.sin(rotate * Math.PI / 180);
                    let  Position=this.refresh ==0?-40:this.refresh ;
                    return `transform:matrix(${cosVal.toFixed(6)},${sinVal.toFixed(6)},${ (-1 * sinVal).toFixed(6)},${cosVal.toFixed(6)},0,${ Position});opacity:${this.refresh /80};
                    -webkit-transform:matrix(${cosVal.toFixed(6)},${sinVal.toFixed(6)},${ (-1 * sinVal).toFixed(6)},${cosVal.toFixed(6)},0,${ Position});opacity:${this.refresh /80};`
				}else{
					return '';
				}
			},
			positionStyle() {
                return `background:${this.background};position:relative;padding-top:${this.top}rpx;padding-bottom:${this.bottom }rpx;
                padding-left:${this.left}rpx;padding-right:${this.right}rpx;min-height:${this.pHeight}px;opacity:${this.showLoadingFlag?0:1}`
			}
		};

		// 声明数据watcher（详见后文介绍）
		watch = {
        };
        onComLoad(){
			this.pHeight=wx.getSystemInfoSync().windowHeight;
			this.customerData.showLoadingTImes=setTimeout(() => {
                if(this.customerData.showLoadingTImes){
                    clearTimeout(this.customerData.showLoadingTImes);
                    this.customerData.showLoadingTImes=null;
                }
				if(this.showLoadingFlag){
					// this.$parent.toast("加载超时……")
					this.showLoadingFlag=false;
					this.$apply();
				}
            }, 20000);
        }
		// 声明页面wxml中标签的事件处理函数。注意，此处只用于声明页面wxml中标签的bind、catch事件，自定义方法需以自定义方法的方式声明
		methods = {
			ctstart(e){
                cancelAnimationFrame(this.tickID,this)
                if(this.customerData.scrollPosition<=0&&e.changedTouches.length>0){
                    this.startY=e.changedTouches[0].clientY
                    this.refreshOk=true
                }else{
                    this.refreshOk=false
                }
			},
			ctmove(e){
				if(this.refreshOk&&!this.refreshFlag&&this.customerData.scrollPosition<=0&&e.changedTouches[0].clientY>this.startY){
					let diffY=e.changedTouches[0].clientY-this.startY;
					if(diffY<200){
						diffY=(1-(200-diffY)/200)*80;
						if(diffY>80){
							diffY=80;
						}
					}else{
						diffY=80;
                    }
                    if(diffY!=this.refresh ){
                        this.refreshTop=diffY;
                        this.$apply()
                    }
				}else{
                    if(this.refreshOk&&this.refreshTop!=0){
                        setTimeout(() => {
                            this.refreshTop=0; 
                            this.$apply();
                        }, 300);
                    }
				}
			},
			ctend(e){
                if(this.refreshOk&&this.refreshTop>=75&&this.pulldown!='false'){
					this._beginFresh()
				}else if(this.refreshOk&&this.refreshTop>0){
                    let current =this.refreshTop;
                    let dv = 0 - current;
                    let beginTime = new Date();
                    let time=400;
                    let toTick =()=>{
                        var dt = new Date() - beginTime;
                        if (dt >= time) {
                            return;
                        }
                        this.refreshTop = dv * ease(dt / time) + current;
                        this.$apply();
                        this.tickID = requestAnimationFrame(toTick);
                    };
                    toTick();
                }
			},
            tapLoading(){
                this.openLoading();
            },
			hiddenNotFound() {
				this.globalNotFoundFlag = false;
			},
			getPhoneNumber({
				detail
			}) {
				if (detail.errMsg == 'getPhoneNumber:ok') {
					// //console.log(detail.errMsg);
					// //console.log(detail.iv);
                    // //console.log(detail.encryptedData);
                    this.loadingFlag = true;
                    this.$apply()
					login.loginByMobile(this, {
						iv: detail.iv,
						cryptData: detail.encryptedData
					});
				}else{
                    this.closeLoading();
                }
			},
			handleMaskTap() {
				if (this.oauthFlag) {
					this.$emit('oauth.close');
				}
				this.$emit('mask.tap');
			},
			handleErrorRetry() {
				this.$emit('global.error.retry');
				this.globalErrorFlag = false;
			},
			handlePickerChange({detail}) {
                const value = detail.value;
				this.customerData.pickerIndex = value[0];
			},
			handlePickerComplete() {
				this.$emit('global.picker.complete', this.customerData.pickerIndex);
				this.customerData.pickerCallback && this.customerData.pickerCallback(this.customerData.pickerIndex);
				this._pickerClose();
			},
			handlePickerCancel() {
                this.customerData.pickerFailCallback && this.customerData.pickerFailCallback(this.customerData.pickerIndex);
				this._pickerClose();
				this.pickerArr = null;
				this.customerData.pickerIndex = -1;
				this.pickerValue = null;
			},
			handleNavi2Login() {
                this._oauthClose();
				this.$parent.getDeviceApi().navigateTo({
					url: '/pages/login?sid='+this.customerData.sid
				});
			}
		};
		_beginFresh(){
			if(this.pulldown!='false'){
                let current =this.refreshTop;
                let dv = 80 - current;
                let beginTime = new Date();
                let time=150;
                let toTick =()=>{
                    var dt = new Date() - beginTime;
                    if (dt >= time||dv==0) {
                        this.$parent._pullRefresh()
                        this.topClass='roate'
                        this.refreshFlag=true;
                        this.refreshTims=setTimeout(() => {
                            if(this.refreshFlag){
                                this._closeFresh();
                                this.$apply();
                            }
                        }, 10000);
                        this.$apply();
                        return;
                    }
                    this.refreshTop = dv * ease(dt / time) + current;
                    this.$apply();
                    this.tickID = requestAnimationFrame(toTick);
                };
                toTick();
			}
		}
		_closeFresh(){
            cancelAnimationFrame(this.tickID,this)
			clearTimeout(this.refreshTims);
			if(this.refreshFlag){
				this.topClass='out';
			}
			this.refreshTimes=setTimeout(() => {//还需要600MS 才能结束下拉刷新
				this.refreshFlag=false;
				this.topClass='';
				this.refreshTop=0;
				this.$apply();
			}, 300);
		}
		_maskClose(flag) {
			//(this.loadingFlag && flag != 1) ||
			if (flag != 0 && ((this.oauthFlag && flag != 2) || (this.pickerFlag && flag != 3))) {
				setTimeout(() => {
					if (!this.loadingFlag && !this.oauthFlag && !this.pickerFlag) {
						this.maskFlag = false;
						this.aniClass1 = 'animated fast fadeIn';
						this.$apply();
					}
				}, 300);
				return;
			}
			this.aniClass1 = 'animated fast fadeOut';
			setTimeout(() => {
				this.maskFlag = false;
				this.aniClass1 = 'animated fast fadeIn';
				this.$apply();
			}, 300);
		}
		_oauthClose() {
			this.ani2Class = 'animated fast zoomOut';
			setTimeout(() => {
				this.oauthFlag = false;
				this.ani2Class = 'animated fast zoomIn';
				this.$apply();
			}, 300);
			this._maskClose(2);
		}

		_pickerShow(pickerArr, pickerIndex, pickerTitle, callback,faildCall) {
			this.maskFlag = true;
			this.pickerFlag = true;
			this.pickerArr = pickerArr;
			this.pickerTitle = pickerTitle;
            this.customerData.pickerCallback = callback;
            this.customerData.pickerFailCallback=faildCall;
			if (pickerIndex >= 0) {
				this.customerData.pickerIndex = pickerIndex;
				this.pickerValue = pickerArr[pickerIndex];
			} else if (pickerIndex == -1 && pickerArr != null && pickerArr.length > 0) {
				this.customerData.pickerIndex = 0;
				this.pickerValue = pickerArr[pickerIndex];
			}
		}

		_pickerClose() {
			this.ani1Class = 'animated fast slideOutDown';
			setTimeout(() => {
				this.pickerFlag = false;
				this.ani1Class = 'animated fast slideInUp';
				this.$apply();
			}, 300);
			this._maskClose(3);
		}
		openLoading(title, mask = false) {
            if(!this.showLoadingFlag)
			    this.loadingFlag = true;
			// this.maskFlag = mask;
			// this.loadingText = title;
		}
		closeLoading() {
			this.aniClass = 'animated fast fadeOut';
			setTimeout(() => {
				this.loadingFlag = false;
				this.aniClass = 'animated fast fadeIn';
				this.$apply();
			}, 300);
		}
		// 声明组件之间的事件处理函数
		events = {
			//如果开始刷新，那么填入开始下拉刷新标志
			'start.refresh'(){
				this._beginFresh();
			},
			//结束下拉刷新
			'done.refresh'(){
				this._closeFresh()
			},
            'loading.open'(){
                this.showLoadingFlag=true;
            },
            'loading.close'(flag){
                if((this.customerData.showLoadingTImes)||flag!=true){
                    if(this.customerData.showLoadingTImes){
                        clearTimeout(this.customerData.showLoadingTImes);
                        this.customerData.showLoadingTImes=null;
                    }
                    setTimeout(() => {
                        this.showLoadingFlag=false;
                        this.$apply();
                    }, 150);
                }
            },
			loading_open: (title, mask = false) => {
				this.openLoading(title, mask);
			},
			loading_close: () => {
				// this.loadingFlag = false;
				this.closeLoading();
			},
			'not_found': () => {
				this.globalNotFoundFlag = true
			},
			'found': () => {
				this.globalNotFoundFlag = false;
            },
            'close_more':()=>{
                this.more='false'
            },
            'open_more':()=>{
                this.more=''
            },
			'no_more': () => {
				this.nomore = 'true'
			},
			'more': () => {
				this.nomore = 'false'
			},
			'mask.show': () => {
                this.maskFlag = true;
			},
			'mask.close': () => {
				this._maskClose(0);
			},
			'oauth.open': (id) => {
				this.oauthFlag = true;
                this.maskFlag = true;
                this.customerData.sid=id;
			},
			'oauth.close': () => {
				this._oauthClose();
			},
			'global.error': () => {
				this.globalErrorFlag = true;
			},
			'global.picker': (pickerArr, pickerIndex, pickerTitle, callback,faildCall) => {
				this._pickerShow(pickerArr, pickerIndex, pickerTitle, callback,faildCall);
			},
			'page.scroll' (position) {
				this.customerData.scrollPosition = position;
            },
            'parentShow'(){
                this._imgUrl=this.$parent._imgUrl;
            }
		};
	}

</script>
