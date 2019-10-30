<style lang="less" scoped src = "">
#lessBox {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .contentBox {
       height: 100%;
       padding: 24rpx; 
       background: #F6F6F7;
       box-sizing: border-box;
       overflow-y: auto;
        &::-webkit-scrollbar{
            width: 0 !important ;
            height: 0 !important ;
            color: transparent !important ;
            display: none;
        }
       .item {
        //    padding: 40rpx 30rpx;
           height: 332rpx;
           width: 686rpx;
           background: #FFFFFF;
           border-radius: 10px;
            //    padding-top: 66rpx;
           box-sizing: border-box;
        }
        .signInfoBox {
            width: 686rpx;
            height: 250rpx;
            background: #FFFFFF;
            border-radius: 28rpx;
            margin-top: 30rpx;
            .textBox {
                padding: 15rpx;
                font-size: 24rpx;
                letter-spacing: 0.26rpx;
                color: #888C91;
                &::before {
                    display: inline-block;
                    content:"";
                    width: 14rpx;
                    height: 14rpx;
                    border-radius:50%;
                    background: #FA9960;
                    vertical-align: middle;
                }
                .titInfo {
                    margin-left: 10px;
                }
                .tit {
                    margin-left: 20rpx;
                    color: #000000;
                    font-weight: 500;
                }
            }
        }
        .contentBox {
            width: 686rpx;
            height: 3931rpx;
            background: #FFFFFF;
            border-radius: 28rpx;
            margin-top: 30rpx; 
        }
        .signUpBtn {
            width: 100%;
            height: 112rpx;
            line-height: 112rpx;
            background: #FA9960;
            color: #FFFFFF;
            font-size: 34rpx;
            margin-top: 15rpx;
        }
    }
}
</style>
<template>
    <view id="lessBox">
        <!--tab-->
        <!-- <tabBox :list.sync = "tabBox" :index.sync = "tabCurrentIndex"></tabBox> -->
        <!--list-->
        <scroll-view scroll-y scroll-with-animation class="contentBox">
            <view class="item marginT60 clearfix">
                <!-- <image class="pic" src="../../../../../assets/imgs/icon/signUp_detail_top.png"></image> -->
                <image class="pic"></image>
            </view> 
            <view class="signInfoBox">
                <view class="textBox">
                    <text class="titInfo">打卡内容:</text>
                    <text class="tit">世界现代设计史</text>
                </view>
                <view class="textBox">
                    <text class="titInfo">打卡时间:</text>
                    <text class="tit">2019.3.21-2019.4.12</text>
                </view>
                <view class="textBox">
                    <text class="titInfo">限制人数:</text>
                    <text class="tit">500人</text>
                </view>
                <view class="textBox">
                    <text class="titInfo">截至时间:</text>
                    <text class="tit">3天09：12：34</text>
                </view>                                                
            </view>    
            <view class="contentBox">
                <!-- <image class="pic" src="../../../../../assets/imgs/icon/signUp_detail_content.png"></image> -->
                <image class="pic" ></image>
            </view>   
            <view class="signUpBtn center click-able" @tap.stop = "clicksignUpBtn">
                立即报名
            </view>                                                 
        </scroll-view>
    </view>
</template>

<script>
    export default {
        components: {

        },
        data(){
            return {

            }
        },
        onLoad(data) {
			console.log(data.detailItem)
        },
        onShow() {

        },
        computed: {

        },
        watch: {

        },
        methods: {

        }
    }
</script>