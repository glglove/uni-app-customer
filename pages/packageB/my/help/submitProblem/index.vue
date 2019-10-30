<style lang="less" scoped src = "">
#submitProblem {
    width: 100%;
    height: 100%;
    padding: 20rpx;
    box-sizing: border-box;
    .problemBox, .problemScreenshots,.contactBox{
        height: 495rpx;
        border-bottom: 1px dotted #979797;
        .tit {
            position: relative;
            height: 48rpx;
            line-height: 48rpx;
            font-size: 34rpx;
            color: #000000;
            padding-left: 53rpx;
            &::before {
                display: block;
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                width: 28rpx;
                height: 28rpx;
                border-radius: 50%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                background:  linear-gradient(-249deg, #FDC999 3%, #FA9960 100%);
                clear: both;
            }
        }
        .problemContent {
            height: 374rpx;
            margin-top: 30rpx;
            .submitProblem_textarea {
                width: 100%;
                height: 100%;
                border-radius: 28px;
                background: #F4F4F4;  
                text-indent: 28rpx;       
                font-size: 24rpx;
                color: #6B6B6B;
                line-height: 33rpx;
                padding: 30rpx 40rpx;
                box-sizing: border-box;

            }
        }
    }
    .problemScreenshots {
        height: 277rpx;
        margin-top: 25rpx;
        .addProblem {
            position: relative;
            width: 150.6rpx;
            height: 150.6rpx;
            background: #F4F4F4;
            margin-top: 30rpx;
            .transverseLine {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%);
                -webkit-transform: translate(-50%);
                width: 41rpx;
                height: 0rpx;
                background: #9B9B9B;
                // transform: rotate(90deg);
                border: 2rpx solid #9B9B9B;
            }
            .verticalLine {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 41rpx;                
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                background: #9B9B9B;
                border: 2rpx solid #9B9B9B;
            }
        }
    }
    .contactBox {
        margin-top: 30rpx;
        height: 240rpx;
        border: 0;
        .problemContent {
            height: 81rpx;
            line-height: 81rpx;
            background: #F4F4F4; 
            border-radius: 28rpx;                       
            .contact_textarea {
                width: 100%;
                height: 100%;
                padding-top: 28rpx;
                text-indent: 28rpx;
                font-size: 24rpx;
                color: #6B6B6B;

            }
        }
    }
    .submitBtn {
        width: 100%;
        height: 99rpx;
        background: #FA9960;
        border-radius: 8px;
        color: #FFFFFF;
        font-size: 34rpx;
        text-align: center;
        line-height: 99rpx;
    }
}
</style>
<template>
    <view id="submitProblem">
        <view class="problemBox">
            <view class="tit">遇到的问题</view>
            <view class="problemContent">
                <textarea class="submitProblem_textarea" value="" placeholder="tianxie" placeholder-class="placeholder" maxlength="" focus="" auto-height="" show-confirm-bar="">
                    
                </textarea>                
            </view>
        </view>

        <view class="problemScreenshots">
            <view class="tit">遇到的问题</view>
            <view class="addProblem">
                <view class="transverseLine"></view>
                <view class="verticalLine"></view>
            </view>
        </view>     

        <view class="contactBox">
            <view class="tit">联系微信号</view>
            <view class="problemContent">
                <textarea class="contact_textarea" value="" placeholder="qingtianxie" placeholder-class="placeholder" maxlength="" focus="" auto-height="" show-confirm-bar="">
                    
                </textarea>                
            </view>
        </view>   

        <view class="submitBtn click-able" @tap.stop="clickSubmitBtn">
            提交问题
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
