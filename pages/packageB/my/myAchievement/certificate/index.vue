<style lang="less" scoped src = "">
#certificate {
    position: relative;
    width: 100%;
    height: 100%;
    background: #F6F6F7;
    box-sizing: border-box;
    .contentBox {
        width: 100%;
        .picBox {
            width: 686rpx;
            height: 994rpx;
            margin: 0 auto;
            .pic {
                width: 100%;
            }
        }
        .share {
            width: 686rpx;
            height: 99rpx;
            background: #FA9960;
            border-radius: 8rpx;
            text-align: center;
            line-height: 99rpx;
            color: #FFFFFF;
            margin: 0 auto;
            margin-top: 15rpx;
        }
    }

    .footer {
        position: absolute;
        // top: 1155rpx;
        bottom: 90rpx;
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
            // width: 170rpx;
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
    <view id="certificate" class="page marginT30">
        <view class="contentBox">
            <view class="picBox">
                <!-- <image class="pic" src="../../../../../assets/imgs/tab/certificate.png"></image> -->
                <image class="pic" ></image>
            </view>
            <view class="share">立即分享</view>
        </view>

        <view class="footer">
            <view class="left-line"></view>
            <view class="footText">分享可获神秘礼品哦</view>
            <view class="right-line"></view>
        </view>      
    </view>
</template>

<script>
  export default {
	  data(){
		 return {
			 
		 }
	  }
  }
</script>
