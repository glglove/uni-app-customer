<style lang="less" scoped src = "">
#invitation {
    position: relative;
    width: 100%;
    height: 100%;
    .sendBox {
        width: 686rpx;
        height: 236rpx;
        margin: 0 auto;
        padding-bottom: 40rpx;
        background: #FFFFFF;
        box-shadow: 0 2px 16px 0 rgba(0,0,0,0.11);
        border-radius: 28rpx;
        &.sendPaper {
            margin-top: 30px;
        }
        .picBox {
            width: 114rpx;
            height: 114rpx;
            margin: 0 auto;
            padding: 40rpx 0;
            .pic {
                width: 100%;
                height: 100%;
            }
        }
        .tit {
            width: 100%;
            height: 48rpx;
            line-height: 48rpx;
            font-size: 34rpx;
            color: #000000;
            text-align: center;
            button {
                width: 100%;
                background-color: #ffffff;
                line-height: 48rpx;
            }
        }
    }
    .footer {
        position: absolute;
        // top: 1155rpx;
        bottom: 120rpx;
        left: 0;
        right: 0;
        width: 100%;
        height: 33rpx;
        text-align: center;
        color: #888C91;
        line-height: 33rpx;
        font-size: 24rpx;
        .left-line {
            display: inline-block;
            width: 80rpx;
            height: 0;
            border-top: 1px solid #979797;
            vertical-align: middle;
        }
        .footText {
            display: inline-block;
            width: 170rpx;
            height: 33rpx;   
            margin: 30rpx 10rpx 0 10rpx;         
        }
        .right-line {
            display: inline-block;
            width: 80rpx;
            height: 0;
            border-top: 1px solid #979797;
            vertical-align: middle;                                     
        }
    }
}


</style>
<template>
	<container :containerLoading="containerLoading">
		<view id="invitation" class="marginT30" slot="container-slot">
			<view class="sendBox">
				<view class="picBox">
					<image class="pic" :src="require('@/static/imgs/icon/sendLink.png')"></image>
				</view>
				<view class="tit">
					<button class="highlight" open-type='contact' session-from='sendFriendBtn'>发送給朋友</button>
				</view>
			</view>

			<view class="sendBox sendPaper">
				<view class="picBox">
					<image class="pic" :src="require('@/static/imgs/icon/sendPaper.png')"></image>
				</view>
				<view class="tit">
					<button class="highlight">海报分享</button>
				</view>
			</view>

			<view class="footer">
				<view class="left-line"></view>
				<view class="footText">突围打卡小助手</view>
				<view class="right-line"></view>
			</view>      
		</view>
	</container>
</template>

<script>
	import findApi from '@/api/find.js'
	import { miniProApi } from '@/utils/mixins.js'
    export default {
		mixins:[
			miniProApi
		],
        components: {

        },
        data(){
            return {
				token: '',
				userInfo: ''
            }
        },
        onLoad(option) {
			debugger
			console.log(data)
        },
        onShow() {

        },
        computed: {

        },
        watch: {

        },
        methods: {
			// 获取
			async _getPicData(){
				this.token = await this.getStorage("token")

				this.userInfo = await this.getStorage("userInfo")
				
				// let userId = userInfo.id;
				console.log("用户id----",this.userInfo.id)
				
				let params = {
					userId: this.userInfo.id,
					// token:token
				}				
				// 获取 海报的信息
				let haibaoData = await findApi.getShareData(params,false);
				
				
				let shareData = {};
				
				if( haibaoData && haibaoData.code === 1 ){
					if( haibaoData.data ) {
						shareData.headImg = haibaoData.data.headImg;
						shareData.realName = haibaoData.data.realName;
						shareData.time = haibaoData.data.time;
						shareData.title = haibaoData.data.title;
						shareData.days = haibaoData.data.days;
						shareData.qrcode = haibaoData.data.qrcode;
					}
					// let picUrl = base.baseUrl + base.imgs_bg.sharePic_bg02; // 底图
					
					let haibaoPicObj = {
						picUrl_bg: this.$configs.baseUrl + this.$configs.baseImgsUrl.sharePic_bg02, // 底图
						avertor_bg: '@/assets/imgs/icon/logo_1.png',
						headImg: shareData.headImg,
						title:shareData.title,
						name:shareData.realName,
						dayNum: shareData.days,
						time: shareData.time,
						codePic: shareData.qrcode,
					}
				
					// this.toast("正在生成分享图片...");
					//setTimeout(()=>{
					// },500)
				
					// // 预加载
					// this.$preload("data",JSON.stringify(haibaoPicObj));
				
					// debugger;
					//获取当前页面URL
					var pages = getCurrentPages();
					var currentPage = pages[pages.length - 1];
					var url = currentPage;
					var options = currentPage.options; //获取参数
					var url1 = currentPage.route; //获取地址
					
				
					// // 页面跳转
					// this.navigatePage(`../packageA/find/invitation/shaireHaibao/index`)
				
				}else {
					
					this.toast("网络走神了~~",1000);
					// this.navigatePage(`./shaireHaibao/index`)
				}  
			}                			
        }
    }
</script>
