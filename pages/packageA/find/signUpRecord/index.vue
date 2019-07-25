<style lang="less" scoped src = "">

.wrap {
    width: 90%;
}
#signUpRecord {
    position: relative;
    width: 100%;
    height: 100%;
    background: #F6F6F7;
    padding: 25rpx;
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
        .signDayBox {
            position: relative;
            width: 90%;
            height: 289rpx;        
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            background: #FFFFFF;
            border-radius: 28rpx;
            margin-top: 30rpx;
            padding-top: 30rpx;
            box-sizing: border-box;
            .box {
                width: 48%;
                .picBox {
                    width: 96rpx;
                    height: 96rpx;
                    margin: 0 auto;
                    .pic {
                        
                    }
                }
                .tit {
                    height: 42rpx;
                    line-height: 42rpx;
                    color: #9C9C9C;
                    font-size: 30rpx;
                    margin: 10rpx auto;
                    text-align: center;

                }
                .no {
                    height: 48rpx;
                    line-height: 48rpx;
                    color: #000000;
                    font-size: 34rpx;
                    margin: 10rpx auto;
                    text-align: center;
                    font-weight: 500;
                }
            }
        }
        .calendarBox {
            position: relative;
            // top: 300rpx;
            // left: 0;
            width: 100%;
            height: 650rpx;
        }
        .tipBox {
            // position: relative;
            top: 0;
            left: 50%;
            width: 90%;
            height: 78rpx;
            padding-right: 25rpx;
            text-align: right;
            font-size: 30rpx;
            color: #888C91;
            line-height: 78rpx;
            background: #FFFFFF;
            font-weight: 700;
            border-radius: 28rpx;
            margin: 20rpx auto;
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
            // position: relative;
            // top: 1070rpx;
            // left: 50%;
            // transform: translateX(-50%);
            // -webkit-transform: translateX(-50%);
            width: 90%;
            min-height: 400rpx;
            // min-height: 350rpx;
            background: #FFFFFF;
            border-radius: 28rpx;
            padding: 20rpx;
            box-sizing: border-box;
            // margin-top: 15rpx;
            margin: 0 auto;
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
    <view  id="signUpRecord">
        <!--tab-->
        <!-- <tabBox :list.sync = "tabBox.list"></tabBox> -->
        <scroll-view scroll-y class="scrollBox">
            <view class="signDayBox clearfix wrap">
                <view class="lt box">
                    <view class="picBox">
                        <image class="pic" src="../../../../assets/imgs/icon/sign_day.png"></image>
                    </view>
                    <view class="tit">已打卡</view>
                    <view class="no">{{signData.alreadySignDay}}天</view>
                </view>
                <view class="rt box">
                    <view class="picBox">
                        <image class="pic" src="../../../../assets/imgs/icon/sign_totalDay.png"></image>
                    </view>  
                    <view class="tit">总天数</view>
                    <view class="no">{{signData.totalDay}}天</view>                              
                </view>
            </view>

            <!-- 日历区-->
            <view class="calendarBox wrap">
                <twCalendar :isShow.sync="calendarVisible" :value.sync="time" :color="#05c8d3"></twCalendar> 
            </view>

            <view class="tipBox wrap">
                <!-- <image class="titPic" src="../../../../assets/imgs/icon/sign_already.png"></image> -->
                <text class="tit">已打卡</text>
            </view>

            <block wx:if="{{signContent.signList.length>0}}" class="recordBox wrap">
                <repeat for="{{signContent.signList}}" wx:key="index" wx:for-item="item">
                    <view class="recordBox wrap">
                        <view class="record_top">
                            <view class="userInfo clearfix">
                                <view class="photo lt">
                                    <!-- <image class="pic" src="../../../../assets/imgs/icon/photo.png"></image> -->
                                    <image class="pic" src="{{item.headImg}}"></image>
                                </view>
                                <view class="nameBox">
                                    <view class="name">{{item.nickName}}</view>
                                    <view class="time">{{item.createTime}}</view>
                                </view>
                            </view>

                            <view class="signContentBox">
                                <!-- <view class="content">
                                    发现理论知识还有很多需要学习的地方,感谢学姐学长带我们打卡，希望自己21天可以收获满满
                                </view> -->
                                <view class="content">
                                    {{item.content}}
                                </view>                                
                                <view class="picItemBox">
                                    <!-- <image class="itemPic" src="../../../../assets/imgs/icon/commentPic.png"></image>
                                    <image class="itemPic" src="../../../../assets/imgs/icon/commentPic.png"></image>
                                    <image class="itemPic" src="../../../../assets/imgs/icon/commentPic.png"></image> -->
                                </view> 
                            </view>

                            <view class="thumbsUpBox">
                                <image class="thumbsUp_pic" src="../../../../assets/imgs/icon/btn_highlight_dianzan.png"></image>
                                <text class="thumbsUp_tit">点赞1</text>
                                <image class="thumbsUp_pic" src="../../../../assets/imgs/icon/btn_highlight_dianpin.png"></image>
                                <text class="remark_tit">点评</text>
                            </view>

                        </view>
                        <view class="record_bottom">
                            <view class="remark_content_box">
                                <repeat for="{{item.commentList}}" wx:key="index" wx:for-item="item">
                                    <!-- <text class="teacherName">陈老师：</text>
                                    <text class="content">
                                        回答的还不错，感觉最近复习的很到位，理论基础掌握的不错，知识答题的时候要分点
                                        论述，这样看起来条例更清晰，卷面更整洁。
                                    </text> -->
                                    <text class="teacherName">{{item.commentName}}：</text>
                                    <text class="content">
                                        {{item.commentContent}}
                                    </text>                                    
                                </repeat>    
                            </view>
                        </view>
                    </view>                    
                </repeat>
            </block>

            <view wx:else class="recordBox wrap not_found">
                <!-- <view class="not_found"></view> -->
            </view>
        </scroll-view>

        <!-- <view class="footer marginT20">
            <view class="left-line"></view>
            <view class="footText">突围打卡小助手</view>
            <view class="right-line"></view>
        </view>  -->

    </view>
</template>

<script>
  import wepy from 'wepy'
  import { connect } from 'wepy-redux'
  import moment from 'moment'
  import base from '@/api/base'
  import mockData from '@/utils/mockData.js'
  import tabBarBottom from '@/components/tabbar/tabbar';
  import tabBox from '@/components/tab/index';
  import myInfo from '@/components/panel';
  import twCalendar from '@/components/calendar/index';
  import twMixin from '@/mixins/common.js'



  @connect({
    num (state) {
      return state.counter.num
    },
    asyncNum (state) {
      return state.counter.asyncNum
    },
    sumNum (state) {
      return state.counter.num + state.counter.asyncNum
    }
  })

  export default class gaolong extends wepy.page {
    config = {
        navigationBarTitleText: '学习日历',
        "onReachBottomDistance": 10,  
        "enablePullDownRefresh": false,
    };
    components = {
        tabBox,
        twCalendar
    };
    data = {
        // dayData: {
        //     signDay: "5",
        //     totalDay: "21"
        // },
        calendarVisible: true,
        time: '',  
        signData: {
            alreadySignDay: "--",
            totalDay: "--",
        },
        signContent : {
            signList: [
                {
                   collectNames: "小芳",
                   collectNum: 1,
                   commentList: [
                       {
                           commentName: "小芳",
                           commentContent: "你好吗？"
                       }
                   ],
                   commentStatus: 1,
                   content: "123123",
                   createTime: "2019-02-12 00:00:00",
                   headImg: "https://wx.qlogo.cn/mmopen/vi_32/HxUZMaNib6daDgzQnCaeoV5ia5KqFJatahlaySC2zzEt1s2evSjL5DWuh0fibc1n3Fe6A2KkP8PJKfZ9x1drQuqfg/132",
                   id: 2,
                   imgUrls: "https://wx.qlogo.cn/mmopen/vi_32/HxUZMaNib6daDgzQnCaeoV5ia5KqFJatahlaySC2zzEt1s2evSjL5DWuh0fibc1n3FeC0MAA2Usr4w9dSXbMSBmDw/132",
                   nickName: "gaolong"
                },
            ],
        },
    };


    computed = {
      now () {
        // this.time = 
        return +new Date()
      },
    };

    watch = {};  // 声明数据watcher（详见后文介绍）

    mixins = [
        twMixin,
    ];  // 声明页面所引用的Mixin实例

    onLaunch () {
      console.log('onlanch')
      console.log(base)
    };

    onLoad( options,predata ){
        var self = this;

        moment();
        console.log("当天日期：", this.now)
        console.log("当天日期：", moment().format('YYYY-MM-DD'))

        console.log( options,predata )

        console.log(9999999999999999999999999)
        //console.log(this.$parent.globalData.tabBar)

        this.signData.alreadySignDay = predata.preload.signData.signDay.data.days;
        this.signData.totalDay = predata.preload.signData.signDay.data.rank;
        this.signContent.signList = predata.preload.signData.signList.data.list;
        this.$apply();

        console.log( this.signData.alreadySignDay )
        console.log( this.signData.totalDay )
        console.log( this.signContent.signList )

        //  获取数据,更新数据  tabBarClickHandle()启动文件中编写的---- 0就是形参id的实参
        // this.tabBarData = this.$parent.globalData.tabBar;
        // this.$apply();
        // console.log(this.tabBarData)
    }

    async onShow () {
        var self = this;
        console.log('onShow')
        console.log(this)
        console.log(base.baseUrl)

        this.time = moment().format('YYYY-MM-DD');
        // 开始调用 子组件中 日期的初始化方法

        this.$broadcast('initCalendar', this.time);

        // 开始调用home页面 的接口数据
        // await self.init();
    }

    // 绑定的事件
    methods = {
        //事件处理函数
        intoDetail: async function ( idx , item ) {
            //进入详情页
            console.log( idx , item );

            let predata = await this.getPageData(1,this,"getListData",idx);
            console.log( "首页中获取的单个list的详情数据",predata );

            // 页面调转前 进行数据的预加载
            this.$preload('detailData', predata);

            wepy.navigateTo({
                url: `../packageA/index/index?itemId=${idx}`
            })
        },


        showcalendar () {
            this.calendarVisible = true
            // this.$apply()
        },

        hanleConfirm (e) {
            console.log(e)
        },


        searchSelect () {
            console.log(self)
            wx.showActionSheet({
                itemList: ['A', 'B', 'C'],
                success: function(res) {
                    if (!res.cancel) {
                        console.log(res.tapIndex)
                    }
                }
            });            
        },


        focusEvent( e ) {
            this.$broadcast('foucsEvent')
        },

        blurEvent( ){
            this.$broadcast('blurEvent')
        },



        openConfirm: function () {
            wx.showModal({
                title: '修改昵称',
                content: '修改昵称',
                confirmText: "确定",
                cancelText: "取消",
                success: function (res) {
                    console.log(res);
                    if (res.confirm) {
                        console.log('用户点击主操作')
                    }else{
                        console.log('用户点击辅助操作')
                    }
                }
            });
        },        
    }


    //包括组件之间的 广播、分发等事件
    //$broadcast：父组件触发所有子组件事件

    //$emit：子组件触发父组件事件
    
    //$invoke：子组件触发子组件事件

    events = {


    }

    // 自定义的 事件

    async init(){
        // 页面初始化
    }
}   
</script>
