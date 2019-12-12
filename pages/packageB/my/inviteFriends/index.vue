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
    <view id="inviteFriends" class="page marginT30">
        <view>inviteFriends</view>

        <view class="footer">
            <view class="left-line"></view>
            <view class="footText">突围打卡小助手</view>
            <view class="right-line"></view>
        </view>      
    </view>
</template>

<script>
export default {
    data () {
        return {
			
		}
    }
}  
</script>
