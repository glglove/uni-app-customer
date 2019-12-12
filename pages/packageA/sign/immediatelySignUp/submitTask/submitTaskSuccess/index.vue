<style lang="less" scoped src = "">
#submitTaskSuccess {
    position:relative;              
    width: 100%;
    height: 100%;
    // padding: 30rpx 20rpx;
    box-sizing: border-box;
    .top {
        position: absolute;
        top: 0;
        left: 50%;
        right: 0;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        height: 325rpx;
        padding: 30rpx 25rpx;
        // box-sizing: border-box;
        z-index: 1001;
        .imgBox {
            position: absolute;
            top: 100rpx;
            left: 50%;
            right: 0;
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%);            
            width: 146rpx;
            height: 146rpx;
            border: 6px solid #ffffff;
            border-radius: 50%;
            z-index: 1001;
            .top_pic {

            }
        }
        .tit {
            position: absolute;
            top: 300rpx;
            left: 50%;
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%);  
            height: 48rpx;
            width: 400rpx;
            color: #FFFFFF;
            line-height: 48rpx;
            font-size: 34rpx;
            text-align: center;         
        }
    }
    .contentBox {
        position: absolute;
        top: 230px;
        left: 50%;
        right: 0;
        min-height: 450rpx;
        width: 686rpx;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        padding: 0 20rpx;
        background: #FFFFFF;
        border-radius: 28rpx;
        box-sizing: border-box;
        z-index: 1001;
        .mark {
            position: relative;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            height: 134rpx;
            border-bottom: 1px dotted #FBB78F;            
            .day {
                flex: 1;
                position: relative;
                height: 100%;
                line-height: 134rpx;
                font-size: 34rpx;
                color: #FA9960;
                margin-left: 50rpx;
                &::before {
                    display: inline-block;
                    position: absolute;
                    top:50%;
                    left: -40rpx;
                    transform: translateY(-50%);
                    -webkit-transform: translateY(-50%);                    
                    content:"";
                    width: 28rpx;
                    height: 28rpx;
                    border-radius: 50%;
                    background: #FA9960;
                    vertical-align: middle;
                    clear: both;
                }

            }
            .tit {
                flex:1;
                height: 100%;
                line-height: 134rpx;
                color: #888C91;
                font-size: 24rpx;
                text-align: right;

            }
        }
        .content-tit {
            color: #FA9960;
            font-size: 34rpx;
            height: 48rpx;
            line-height: 48rpx;
            margin: 30rpx;
            font-weight: 400;
        }
        .content-tit-mingci {
            color: #000000;
            font-size: 24rpx;
            height: 33rpx;
            line-height: 33rpx;
            margin: 30rpx;     
            font-weight: 400;
        }
        .content-tit-jianda {
            color: #000000;
            font-size: 24rpx;
            min-height: 66rpx;
            line-height: 33rpx;
            margin: 30rpx;     
            font-weight: 400;
        }
    }
    .inSignBox {
        position: absolute;
        bottom: 100rpx;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        width: 686rpx;
        height: 99rpx;
        line-height: 99rpx;
        font-size: 34rpx;
        font-weight: 500;
        z-index: 1001;
        .signBtn {
            width:100%;
            height: 100%;
            background: #FA9960;  
            color: #FFFFFF;                      
        }
        .signTip {
            position: absolute;
            bottom: -30rpx;
            width: 100%;
            height: 28rpx;
            line-height: 28rpx;
            text-align: center;
            color: #888C91;
            font-size: 20rpx;
        }
    }
}
</style>
<template>
    <view id="submitTaskSuccess" class="page">
        <!-- <image class="pic" src="../../../../../../assets/imgs/tab/submitTaskSuccess.png"></image> -->
        <image class="pic"></image>
        <view class="top">
            <view class="imgBox">
                <image class="top_pic" :src="require('@/static/imgs/icon/success01.png')"></image>
            </view>
            <text class="tit">今日任务已完成</text>
        </view>

        <view class="contentBox ">
            <view class="mark">
                <view class="day"> Day 7 </view>
                <view class="tit">已经连续联系6天</view>
            </view>
            <view class="content-tit">今日练习</view>
            <view class="content-tit-mingci">名词解释：意匠、现代设计</view>
            <view class="content-tit-jianda">简答题： 你怎样界定设计的含义及范畴，设计在生活中充当怎样的角色</view>
        </view>


        <view class="inSignBox">
            <button class="signBtn">打卡签到</button>
            <view class="signTip">点击"打卡签到"后，回复"打卡"点击链接分享到朋友圈</view>
        </view>
    </view>
</template>

<script>

</script>
