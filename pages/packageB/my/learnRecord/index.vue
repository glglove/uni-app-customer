<style lang="less" scoped src = "">
.wrap {
    width: 90%;
}
#learnRecord {
    position: relative;
    width: 100%;
    height: 100%;
    background: #F6F6F7;
    padding: 0 25rpx;
    box-sizing: border-box;
    // overflow-y: scroll;
    .scrollBox {
        height: 100%;
        &::-webkit-scrollbar {
            width: 0 !important ;
            height: 0 !important ;
            color: transparent !important ;
            display: none;
        }   
        // .signDayBox {
        //     position: absolute;
        //     width: 90%;
        //     height: 289rpx;        
        //     top: 0;
        //     left: 50%;
        //     transform: translateX(-50%);
        //     -webkit-transform: translateX(-50%);
        //     background: #FFFFFF;
        //     border-radius: 28rpx;
        //     margin-top: 30rpx;
        //     padding-top: 30rpx;
        //     box-sizing: border-box;
        //     .box {
        //         width: 48%;
        //         .picBox {
        //             width: 96rpx;
        //             height: 96rpx;
        //             margin: 0 auto;
        //             .pic {
                        
        //             }
        //         }
        //         .tit {
        //             height: 42rpx;
        //             line-height: 42rpx;
        //             color: #9C9C9C;
        //             font-size: 30rpx;
        //             margin: 10rpx auto;
        //             text-align: center;

        //         }
        //         .no {
        //             height: 48rpx;
        //             line-height: 48rpx;
        //             color: #000000;
        //             font-size: 34rpx;
        //             margin: 10rpx auto;
        //             text-align: center;
        //             font-weight: 500;
        //         }
        //     }
        // }
        .calendarBox {
            position: absolute;
            // top: 300rpx;
            left: 0;
            width: 100%;
            height: 670rpx;
        }
        .tipBox {
            position: absolute;
            top: 700rpx;
            left: 50%;
            width: 90%;
            height: 78rpx;
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            padding-right: 25rpx;
            text-align: right;
            font-size: 30rpx;
            color: #888C91;
            line-height: 78rpx;
            background: #FFFFFF;
            font-weight: 700;
            border-radius: 28rpx;
            box-sizing: border-box;
            .tit {
                &::before {
                    display: inline-block;
                    content: "";
                    width: 22rpx;
                    height: 22rpx;
                    border-radius: 50%;
                    background: #FA9960;
                    clear: both;
                    vertical-align: middle;
                    margin-right: 20rpx;
                }
            }
        }
        .recordBox {
            position: absolute;
            top: 780rpx;
            left: 50%;
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            width: 90%;
            // min-height: 350rpx;
            background: #FFFFFF;
            border-radius: 28rpx;
            padding: 20rpx;
            box-sizing: border-box;
            .record_top {
                .userInfo {
                    .photo {
                        width: 82rpx;
                        height: 80rpx;
                        .pic {
                            width: 100%;
                        }
                    } 
                    .nameBox {
                        margin-left: 90rpx;
                        height: 80rpx;
                        line-height: 80rpx;
                        .name {
                           height: 42rpx;
                           font-size: 30rpx;
                           color: #000000;
                           letter-spacing: 0.52rpx;
                           line-height: 42rpx;
                           font-weight: 500; 
                        }
                        .time {
                            height: 28rpx;
                            font-size: 20rpx;
                            color: #888C91;
                            line-height: 28rpx;
                            letter-spacing: 0.21rpx;
                        }
                    }
                }
                .signContentBox {
                    .content {
                        font-size: 24rpx;
                        color: #000000;
                        letter-spacing: 0.43rpx;
                        line-height: 33rpx;
                    }
                    .picItemBox {
                        .itemPic {
                            width: 144.4rpx;
                            height: 194.7rpx;
                        }
                    }
                }
                .thumbsUpBox {
                    text-align: right;
                    .thumbsUp_pic {
                        display: inline-block;
                        width: 30rpx;
                        height: 30rpx;
                        margin: 0 20rpx;
                        vertical-align: middle;
                    }
                    .thumbsUp_tit {
                        font-size: 20rpx;
                        color: #000000;
                        letter-spacing: 0.21rpx;
                        
                    }
                    .remark_tit {
                        font-size: 20rpx;
                        color: #FA9960;
                        letter-spacing: 0.21rpx;
                    }
                }
            }
            .record_bottom {
                border-top: 1px dotted #AAACB0;
                .remark_content_box {
                        font-size: 24rpx;
                        line-height: 33rpx;
                        letter-spacing: 0.43rpx;
                    .teacherName {
                        color: #FF9452;
                    }
                    .content {
                        color: #000000;
                    }
                }
            }
        }        
    }
}

</style>
<template>
    <view id="learnRecord">
        <scroll-view scroll-y class="scrollBox">
            <!-- <view class="signDayBox clearfix wrap">
                <view class="lt box">
                    <view class="picBox">
                        <image class="pic" src="../../../../assets/imgs/icon/sign_day.png"></image>
                    </view>
                    <view class="tit">已打卡</view>
                    <view class="no">5天</view>
                </view>
                <view class="rt box">
                    <view class="picBox">
                        <image class="pic" src="../../../../assets/imgs/icon/sign_totalDay.png"></image>
                    </view>  
                    <view class="tit">总天数</view>
                    <view class="no">21天</view>                              
                </view>
            </view> -->
            <view class="calendarBox wrap">
                <!-- <twCalendar :isShow.sync="calendarVisible" :value.sync="time"></twCalendar>  -->
            </view>

            <!-- <view class="flex-center wrapper">
                <view class="btn flex-center" @tap="showcalendar">
                    打开日历图
                </view>
            </view> -->


            <view class="tipBox wrap">
                <!-- <image class="titPic" src="../../../../assets/imgs/icon/sign_already.png"></image> -->
                <text class="tit">已打卡</text>
            </view>

            <view class="recordBox wrap">
                <view class="record_top">
                    <view class="userInfo clearfix">
                        <view class="photo lt">
                            <image class="pic" :src="require('@/static/imgs/icon/photo.png')"></image>
                        </view>
                        <view class="nameBox">
                            <view class="name">明年上研一</view>
                            <view class="time">2019/01/22</view>
                        </view>
                    </view>

                    <view class="signContentBox">
                        <view class="content">
                            发现理论知识还有很多需要学习的地方,感谢学姐学长带我们打卡，希望自己21天可以收获满满
                        </view>
                        <view class="picItemBox">
                            <image class="itemPic" :src="require('@/static/imgs/icon/twlogo.png')"></image>
                            <image class="itemPic" :src="require('@/static/imgs/icon/twlogo.png')"></image>
                            <image class="itemPic" :src="require('@/static/imgs/icon/twlogo.png')"></image>
                        </view> 
                    </view>

                    <view class="thumbsUpBox">
                        <image class="thumbsUp_pic" :src="require('@/static/imgs/icon/btn_highlight_dianzan.png')"></image>
                        <text class="thumbsUp_tit">点赞1</text>
                        <image class="thumbsUp_pic" :src="require('@/static/imgs/icon/btn_highlight_dianpin.png')"></image>
                        <text class="remark_tit">点评</text>
                    </view>

                </view>
                <view class="record_bottom">
                    <view class="remark_content_box">
                        <text class="teacherName">陈老师：</text>
                        <text class="content">
                            回答的还不错，感觉最近复习的很到位，理论基础掌握的不错，知识答题的时候要分点
                            论述，这样看起来条例更清晰，卷面更整洁。
                        </text>
                    </view>
                </view>
            </view>
        </scroll-view>
        <!-- <view class="footer">
            <view class="left-line"></view>
            <view class="footText">突围打卡小助手</view>
            <view class="right-line"></view>
        </view>       -->
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
