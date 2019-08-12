
<style lang="less" scoped>
.shadBox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2000;
    &.not_authrize {
        transition: all .1s;
        opacity: 1    
    }
    &.already_authrize {
        transition: all .1s;
        opacity: 0    
    }    
    .contentBox {
        position: absolute;
        width: 500rpx;
        height: 480rpx;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        border-radius: 20px;
        background: #FFFFFF;
        padding: 20rpx 40rpx;
        z-index: 3000;
        .header {
            text-align: center;
            width: 100rpx;
            height: 100rpx;
            // line-height: 450rpx;
            margin: 20rpx auto; 
            overflow: hidden;  
            border-radius: 50%;      
            background: rgba( 237,236,232,1 );           
            .pic {
                width: 80%;
                height: 80%;
                margin-top: 10rpx;
            }
        }
        .content {
            margin: 30rpx;
            font-size: 28rpx;
            height: 160rpx;
            .tit {
                color: #000000;
            }
            .text {
                display: block;
                color: #9d9d9d;
                margin-top: 40rpx;
            }
        }
        .bottom {
            border-radius: 80rpx;
            margin: 20rpx 50rpx;
            font-size: 35rpx;
            &.authorizeBtn {
                background: #FA9960;
            }
        }        
    }
    .versitionTit {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        .tit {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            transform: -webkit-translate(-50%,-50%);
            width: 250rpx;
            height:250rpx;
            line-height: 200rpx;
            text-align: center;
        }
    }
}
</style>

<template>
    <view id="shadBox" :class="['shadBox','animated', 'zoomIn', 'normal', authorizeState ? 'already_authrize':'not_authrize']" v-show="!authorizeState">
        <view v-if="canIUse" class="contentBox">
            <view class='header'>
                <!-- <slot name="pic"></slot> -->
                <image  class="pic" :src="require('@/static/imgs/icon/twlogo.png')"></image>
            </view>
            <view class='content'>
                <view class="tit">申请获取以下权限</view>
                <text class="text">获得你的公开信息(昵称，头像等)</text>
            </view>
            <view>
                <button class='bottom authorizeBtn click-able' open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo_miniPro">
                    授权登录
                </button>            
            </view>
        </view>
        <view v-else class="versitionTit">
            <view class="tit">请升级微信版本</view>
        </view> 
    </view>
</template>

<script>
// import twMixin from '@/mixins/common.js'  
import { miniProApi } from '@/utils/mixins.js'
import { mapGetters }  from 'vuex'
export default {
	name: 'Authorize',
	components:{
		
	},
	props:{
		// isShow: {
		// 	type: Boolean,
		// 	default: true,
		// 	twoWay: true
		// },
	},
	mixins: [ miniProApi ],
	data (){
		return {
			//判断小程序的API，回调，参数，组件等是否在当前版本可用。
			canIUse: this.getDeviceApi().canIUse('button.open-type.getUserInfo'),
			// isShowAuthorizeDialog: false, // 控制 授权窗口的显示/隐藏	
		}
	},
	async onload () {
		debugger
		console.log("authorize--------onLoad-------")
	},
	computed: {
		...mapGetters([
			'authorizeState'
		]),
		now () {
			return +new Date()
		}
	},
	watch: {

	},
	methods: {
		onComLoad () {
			console.log("authorize--------onComLoad-------")
		},
		async getUserInfo_miniPro(e) {
			debugger;
			console.log(e);
			if(e){
				if (e.detail.userInfo) {
					//用户按了允许授权按钮
					console.log(  e.detail.userInfo )
					// 修改全局中的notAuthorize 为true（已授权）
					// debugger;
					//将 授权状态存入到 全局store-app 的 authorizeState中
					this.$store.dispatch('setAuthorizeState', true)
					// 关闭授权的弹框
					// this.isShowAuthorizeDialog = false
					// debugger;
					//插入登录的用户的相关信息到数据库
					// this.$emit("authorizeAgree", e.detail.userInfo )
				} else {
					//用户按了拒绝按钮
					this.modal("不授权将无法正常使用小程序相关功能，请授权后使用")
					// this.$emit("authorizeRefuse", e.detail.userInfo )
				}
			}else {
				// 关闭授权的弹框
				
			}
		}
	},
}
</script>

