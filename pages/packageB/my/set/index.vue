<style lang="less" scoped src = "">
#set {
    width: 100%;
    height: 100%;
    .top {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 320rpx;
        background: linear-gradient(to top right,#F8C3A1,#FA9960);
        background: -webkit-linear-gradient(to top right,#F8C3A1,#FA9960);
        .picBox {
            width: 165rpx;
            height: 165rpx;
            margin: auto;
            margin-top: 45rpx;
            border-radius: 50%;
            // z-index: 1002;
            .pic {
                width: 100%;
                height: 100%;
            }
        }
        .name {
           height: 48rpx;
           color: #FFFFFF;
           line-height: 48rpx; 
           font-size: 34rpx;
           letter-spacing: 0.59rpx;
           margin-top: 30rpx;
        }
    }
    .content {
        position: absolute;
        top: 320rpx;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        padding: 30rpx;
        background: #F6F6F7;
        .listBox {
            width: 100%;
            height: 150rpx;
            margin-top: 40rpx;
            .mark {
                font-size: 20rpx;
                color: #888C91;
                height: 28rpx;
                line-height: 28rpx;
                padding-left: 40rpx;
            }
            .item {
                height: 122rpx;
                background: #FFFFFF;
                border-radius: 28rpx;
                padding: 0 30rpx;
                margin-top: 10rpx;
                .leftBox {
                    height: 100%;
                    .pic {
                        width: 35rpx;
                        height: 35rpx;
                    }
                    .tit {
                        height: 42rpx;
                        line-height: 42rpx;
                        font-size: 30rpx;
                        letter-spacing: 0.46rpx;
                        color: #000000;
                        margin-left: 30rpx;
                    }
                }
                .rightBox {
                    width: 30rpx;
                    height: 30rpx;
                    margin-top: 46rpx;
                }
            }

        }
    }
}

</style>
<template>
    <view id="set">
        <view class="top">
            <view class="picBox">
                <image :src="require('@/static/imgs/icon/photo.png')" class="pic"></image>
            </view>
            <view class="name center">明年上研一</view>
        </view>  
        <view class="content">
            <view class="listBox">
                <view class="mark">給勤奋的自己定一个学习时间</view>
                <view class="item form clearfix">
                    <view class="lt form_row leftBox">
                        <image :src="require('@/static/imgs/icon/photo.png')" class="pic"></image>
                        <view class="tit">提醒</view>
                    </view>
                    <view class="rt rightBox">
                        <image :src="require('@/static/imgs/icon/photo.png')"></image>
                    </view>
                </view>
            </view>

            <view class="listBox">
                <view class="mark">进入"突围教育打卡小助手"管理员通道</view>
                <view class="item form clearfix">
                    <view class="lt form_row leftBox">
                        <image :src="require('@/static/imgs/icon/photo.png')" class="pic"></image>
                        <view class="tit">管理员入口</view>
                    </view>
                    <view class="rt rightBox">
                        <image :src="require('@/static/imgs/icon/photo.png')"></image>
                    </view>
                </view>
            </view>            
        </view>
    </view>
</template>

<script>
 export default {
    data(){
            
    }
 }  
</script>
