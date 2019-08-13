<style lang="less" scoped src = "">
#help {
    width: 100%;
    height: 100%;
    .contentBox {
        height: 550px;
        &::-webkit-scrollbar{
            width: 0 !important ;
            height: 0 !important ;
            color: transparent !important ;
            display: none;
        }
        .listBox {
            height: 95rpx;
            line-height: 95rpx;
            padding: 0 20rpx;
            .no {
                display: inline-block;
                width: 45rpx;
                height: 45rpx;
                background: #FA9960;
                color: #FFFFFF;
                vertical-align: middle;
                border-radius: 50%;
                text-align: center;
                line-height: 45rpx;
            }
            .tit {
                height: 33rpx;
                line-height: 33rpx;
                color: #000000;
                font-size: 24rpx;
                margin-left: 20rpx;
            }
        }
    }

    .tickBtnBox {
        position: fixed;
        bottom: 128rpx;
        right: 50rpx;
        width: 128rpx;
        height: 128rpx;
        border-radius: 50%;
        background: #FA9960;
        line-height: 128rpx;
        text-align: center;
        font-size: 30rpx;
        color: #FFFFFF;
        box-shadow: 0 2rpx 31rpx rgba(70, 67, 67, 1)
    }
}


</style>
<template>
    <view id="help">
        <scroll-view scroll-y class="contentBox">
            <view class="listBox line">
                <text class="no">1</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">2</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>  

            <view class="listBox line">
                <text class="no">1</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">2</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view> 

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>  

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>  

            <view class="listBox line">
                <text class="no">1</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">2</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view> 

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>   

            <view class="listBox line">
                <text class="no">2</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view> 

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>                                                                      
        </scroll-view>


        <view class="tickBtnBox" @tap.stop = "clickSubmitProblemBtn">
            <text class="tickBtn">提交</br>问题</text>
        </view>


        <!-- <view class="footer">
            <view class="left-line"></view>
            <view class="footText">突围打卡小助手</view>
            <view class="right-line"></view>
        </view>-->
    </view>
</template>

<script>
export default {
    data(){

    }
}
</script>
