<style lang="less" scoped src = "">
#immediatelySignUp {
    position: relative;
    height: 100%;
    width: 100%;
    .bgBox {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;      
    }
    .top {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 686rpx;
        height: 108rpx;
        line-height: 108rpx;
        margin: 40rpx auto;
        z-index: 1001;
        .name {
           height: 48rpx;
           line-height: 48rpx; 
           color: #FFFFFF;
           font-size: 34rpx;
           letter-spacing: 0.5rpx;
        }
    }
    .contentBox {
        position: absolute;
        top: 180rpx;
        left: 0;
        right: 0;
        // bottom: 0;
        width: 686rpx;
        min-height: 499rpx;
        margin: 0 auto;
        border-radius: 28rpx;
        padding: 20rpx 15rpx;
        background: #FFFFFF;
        border: 1px solid rgba(250, 235, 228, 0.2);
        box-shadow: 0 12px 10px rgba(252,195,165,0.2);
        box-sizing: border-box;
        z-index: 1001;    
        .tit {
            position: relative;
            height: 42rpx;
            line-height: 42rpx;
            color: #FA9960;
            font-size: 30rpx;
            letter-spacing: 0.5rpx;
            text-indent: 30rpx;
            &::before {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                display: inline-block;
                content: '';
                height: 21rpx;
                width: 21rpx;
                background: #FA9960;
                border-radius: 50%;
            }
        }
        .titList {
            height: 67rpx;
            color: #000000;
            font-size: 24rpx;
            line-height: 33rpx;
            letter-spacing: 0.4rpx;
            text-indent: 30rpx;
            margin-top: 10rpx;
            .item {

            }
        }    
        .tipBox {

            .tip {
                background: #FA9960;
                border-radius: 28rpx;   
                margin-top: 40rpx;   
                height: 72rpx;    
                padding: 0 20rpx;          
                .onBtn {
                    position: relative;
                    width: 42rpx;
                    height: 42rpx;
                    border-radius: 50%;
                    background: #FFFFFF;
                    padding: 10rpx;
                    box-sizing: border-box;
                    &::before {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        display: block;
                        content: "";
                        width:0;
                        height: 0;
                        font-size: 0;
                        line-height: 0;
                        border-width: 5px;
                        border-color: #FA9960;
                        border-right-width: 0;
                        border-style: dashed;
                        border-left-style: solid;
                        border-top-color: transparent;
                        border-bottom-color: transparent;
                    }
                }
                .progress {
                    flex-grow: 1;
                    margin: 0 40rpx;
                    background: #FFFFFF;
                }
                .time {
                    width: 113rpx;
                    height: 28rpx;
                    line-height: 28rpx;
                    color: #FFFFFF;
                    font-size: 20rpx;
                }
            }
        }  
        .point {
            height: 28rpx;
            line-height: 28rpx;
            text-align: left;
            font-size: 20rpx;
            color: #888C91;
            letter-spacing: 0.2rpx;
            margin-top: 10rpx;
        }  
    }
    // .submitProblem_textarea {
    //     position: absolute;
    //     top: 380rpx;
    //     left: 0;
    // }
    .signContentBox {
        position: absolute;
        width: 100%;
        height: 400rpx;
        top: 700rpx;
        left: 0;
        z-index: 1001;
        .footer {
            position: absolute;
            // top: 1155rpx;
            bottom: 20px;
            left: 0;
            right: 0;
            width: 100%;
            height: 33rpx;
            text-align: center;
            color: #888C91;
            line-height: 33rpx;
            font-size: 24rpx;
            z-index: 1001;
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
    .signUpBtn {
        position: absolute;
        bottom: 10rpx;
        left: 0;
        width:100%;
        height: 99rpx;
        background: #FA9960;
        text-align: center;
        line-height: 99rpx;
        font-size: 34rpx;
        letter-spacing: 0.5rpx;
        color: #FFFFFF;
        font-weight: bold;
        z-index: 1001;
    }
}
</style>
<template>
    <view id="immediatelySignUp" class="page">
        <view class="bgBox">
            <!-- <image class="" src="../../../../assets/imgs/tab/joinSign_bg.png"></image> -->
            <image class=""></image>
        </view>
        <view class="top center marginT40">
            <!-- <image class="photo" src="{{avater? avater : '../../../../assets/imgs/icon/photo.png'}}"></image> -->
            <text class="name">今日试题</text>
            <!-- <image class="set rt" src="../../../../assets/imgs/icon/set.png"></image> -->
        </view>
        <view class="contentBox form">
            <view class="tit">名词解释</view>   
            <view class="titList">
                <text class="item">意境</text>
                <text class="item">现代设计</text>
                <text class="item">意境</text>
                <text class="item">意境</text>
            </view>   

            <view class="tit">简答题</view>   
            <view class="titList">
                <text class="item">你怎么定义设计的含义及范畴,设计在现实生活中充当怎样的角色</text>
            </view>  

            <view class="tipBox form">
                <view class="form_row tip">
                    <view class="onBtn"></view>
                    <progress percent="80" active  activeColor="#EE6723" class="progress"></progress>
                    <view class="time">12:00/12:00</view>
                </view>
            </view> 

            <view class="point">小Tip,快来听听老师说了什么吧!</view>                             
        </view>

        <!-- <textarea class="submitProblem_textarea" value="" placeholder="打卡后才能看到别人的打卡内容" placeholder-class="placeholder" maxlength="" focus="" auto-height="" show-confirm-bar="">
            
        </textarea>      -->

        <view class="signContentBox">
            <view class="footer marginT20">
            <view class="left-line"></view>
            <view class="footText">打卡后可查看全部学员打卡内容</view>
            <view class="right-line"></view>
        </view>   
        </view>

        <view class="signUpBtn click-able" @tap.stop = "clickSignUpBtn">立即打卡</view>         
     
    </view>
</template>

<script>
export default  {
   data(){

   }
}   
</script>
