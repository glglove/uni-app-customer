<style lang="less" scoped src = "">
#lessBox {
    width: 100%;
    height: 100%;
    background: #F6F6F7;
    .topContentBox {
        position: absolute;
        top: 30rpx;
        left: 40rpx;
        right: 40rpx;
        height: 349rpx;
        margin: 0 auto;
        background: #FFFFFF;
        border-radius: 10rpx;
        .picBox {
            width: 126rpx;
            height: 126rpx;
            margin: 0 auto;
            margin-top: 40rpx;
            margin-bottom: 20rpx;
            .pic {
                width: 100%;
            }
        }
        .name {
            text-align: center;
            height: 42rpx;
            line-height: 42rpx;
            font-size: 30rpx;
            color: #231815;
            letter-spacing: 0;
            font-weight: 700;
        }
        .top-bottomBox {
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            .rankInfoBox {
                flex: 1;
                text-align: center;
                .num {
                   height: 67rpx;
                   line-height: 67rpx;
                   font-size: 48rpx;
                   color: #FA9960;  
                   letter-spacing: 0;
                   text-align: center;
                }
                .tit {
                   height: 33rpx;
                   line-height: 33rpx;
                   color: #231815;
                   font-size: 24rpx;
                   letter-spacing: 0;
                   text-align: center;
                   font-weight: 500;
                }
            }
        }
    }
    .middleBox {
        position: absolute;
        top: 400rpx;
        left: 40rpx;
        right: 40rpx;
        height: 66rpx;
        .randlistBtn {
            position: relative;
            width: 190rpx;
            height: 66rpx;
            background:  linear-gradient(-147deg, #FDC999 0%, #FA9960 100%);
            border-radius: 33rpx;
            &::after {
                display: block;
                content: '\e60c';
                font-family: "iconfont";
                clear: both;
                position: absolute;
                top: 50%;
                right: 10rpx;
                color: #FFFFFF;
                transform: translateY(-50%);
                transform: -webkit-translateY(-50%);
            }
            .tit-totalRank {
                height: 100%;
                line-height: 66rpx;
                text-align: center;
                color: #FFFFFF;
                font-size: 30rpx;
            }
        }
        .peper {
            height: 100%;
            .joinPeper {
                display: inline-block;
                height: 100%;
                line-height: 66rpx;
                text-align: center;
                color: #888C91;
                font-size: 24rpx;
            }
        }
    }
    .ranklistBox {
        position: absolute;
        top: 500rpx;
        height: 550rpx;
        background: #FFFFFF;
        // padding: 0 35rpx;
        .itemBox {
            height: 115rpx;
            padding: 0 30rpx;
            .item-left {
                height: 88rpx;
                // width: 300px;
                margin:13rpx 0;  
                .rank-no {
                    width: 53rpx;
                    height: 53rpx;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 53rpx;
                    border: 1px solid #CACBCE;
                }
                .rank-photo {
                    display: block;
                    width: 88rpx;
                    height: 88rpx;
                    margin: 0 30rpx;

                }
                .rank-name {
                    height: 43rpx;
                    font-size: 30rpx;
                    color: #000000;
                    text-align: center;
                }
            }
            .item-right {
                width: 120rpx;
                height: 88rpx;
                margin:13rpx 0;  
                line-height: 88rpx;                
                .day {
                    width: 100%;
                    height: 100%;
                    color: #888C91;
                    font-size: 30rpx;
                    text-align: center;
                }
                .Fabulous {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    color: #888C91;
                    font-size: 30rpx;
                    text-align: center;      
                    &::after {
                        display: block;
                        content: '\e68c';
                        color: #515151;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        -webkit-transform: translateY(-50%);
                        right: 0;
                        clear: both;
                    }              
                }
                .Invitation {
                    width: 100%;
                    height: 100%;
                    color: #888C91;
                    font-size: 30rpx;
                    text-align: center;                      
                }
            }
        }
    }

    .footer {
        position: absolute;
        // top: 1155rpx;
        bottom: 50px;
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
    <view id="lessBox">
        <view class="topContentBox">
            <view class="picBox">
                <image src="../../../../assets/imgs/icon/photo.png" class="pic"></image>
            </view>
            <view class="name">明年上研一</view>
            <view class="top-bottomBox">
                <view class="rankInfoBox">
                    <view class="num">13</view>
                    <view class="tit">总排名</view>
                </view>
                <view class="rankInfoBox">
                    <view class="num">3</view>
                    <view class="tit">打卡天数</view>
                </view>                
            </view>
        </view>
        <view class="middleBox clearfix">
            <view class="randlistBtn lt">
                <view class="tit-totalRank">总排名</view>
            </view>
            <view class="peper rt">
                <text class="joinPeper">参与人数: 689</text>
            </view>
        </view>

        <scroll-view scroll-y class="ranklistBox">
            <view class="itemBox clearfix form line">
                <view class="item-left form_row lt">
                    <view class="rank-no">1</view>
                    <image class="rank-photo" src="../../../../assets/imgs/icon/photo.png"></image>
                    <view class="rank-name">青玉</view>
                </view>
                <view class="item-right rt">
                    <!-- <view clss="day">15天</view> -->
                    <view class="Fabulous iconfont tuweing-edit_icon">30</view>
                    <!-- <view clss="Invitation">25人</view> -->
                </view>
            </view>

            <view class="itemBox clearfix form line">
                <view class="item-left form_row lt">
                    <view class="rank-no">2</view>
                    <image class="rank-photo" src="../../../../assets/imgs/icon/photo.png"></image>
                    <view class="rank-name">青玉23</view>
                </view>
                <view class="item-right rt">
                    <!-- <view clss="day">15天</view> -->
                    <view class="Fabulous iconfont tuweing-edit_icon">10</view>
                    <!-- <view clss="Invitation">25人</view> -->
                </view>
            </view>     

            <view class="itemBox clearfix form line">
                <view class="item-left form_row lt">
                    <view class="rank-no">2</view>
                    <image class="rank-photo" src="../../../../assets/imgs/icon/photo.png"></image>
                    <view class="rank-name">青玉23</view>
                </view>
                <view class="item-right rt">
                    <!-- <view clss="day">15天</view> -->
                    <view class="Fabulous iconfont tuweing-edit_icon">10</view>
                    <!-- <view clss="Invitation">25人</view> -->
                </view>
            </view>   

            <view class="itemBox clearfix form line">
                <view class="item-left form_row lt">
                    <view class="rank-no">2</view>
                    <image class="rank-photo" src="../../../../assets/imgs/icon/photo.png"></image>
                    <view class="rank-name">青玉23</view>
                </view>
                <view class="item-right rt">
                    <!-- <view clss="day">15天</view> -->
                    <view class="Fabulous iconfont tuweing-edit_icon">10</view>
                    <!-- <view clss="Invitation">25人</view> -->
                </view>
            </view>   

            <view class="itemBox clearfix form line">
                <view class="item-left form_row lt">
                    <view class="rank-no">2</view>
                    <image class="rank-photo" src="../../../../assets/imgs/icon/photo.png"></image>
                    <view class="rank-name">青玉23</view>
                </view>
                <view class="item-right rt">
                    <!-- <view clss="day">15天</view> -->
                    <view class="Fabulous iconfont tuweing-edit_icon">10</view>
                    <!-- <view clss="Invitation">25人</view> -->
                </view>
            </view>   

            <view class="itemBox clearfix form line">
                <view class="item-left form_row lt">
                    <view class="rank-no">2</view>
                    <image class="rank-photo" src="../../../../assets/imgs/icon/photo.png"></image>
                    <view class="rank-name">青玉23</view>
                </view>
                <view class="item-right rt">
                    <!-- <view clss="day">15天</view> -->
                    <view class="Fabulous iconfont tuweing-edit_icon">10</view>
                    <!-- <view clss="Invitation">25人</view> -->
                </view>
            </view>   

            <view class="itemBox clearfix form line">
                <view class="item-left form_row lt">
                    <view class="rank-no">2</view>
                    <image class="rank-photo" src="../../../../assets/imgs/icon/photo.png"></image>
                    <view class="rank-name">青玉23</view>
                </view>
                <view class="item-right rt">
                    <!-- <view clss="day">15天</view> -->
                    <view class="Fabulous iconfont tuweing-edit_icon">10</view>
                    <!-- <view clss="Invitation">25人</view> -->
                </view>
            </view>   

            <view class="itemBox clearfix form line">
                <view class="item-left form_row lt">
                    <view class="rank-no">2</view>
                    <image class="rank-photo" src="../../../../assets/imgs/icon/photo.png"></image>
                    <view class="rank-name">青玉23</view>
                </view>
                <view class="item-right rt">
                    <!-- <view clss="day">15天</view> -->
                    <view class="Fabulous iconfont tuweing-edit_icon">10</view>
                    <!-- <view clss="Invitation">25人</view> -->
                </view>
            </view>   


            <view class="itemBox clearfix form line">
                <view class="item-left form_row lt">
                    <view class="rank-no">2</view>
                    <image class="rank-photo" src="../../../../assets/imgs/icon/photo.png"></image>
                    <view class="rank-name">青玉23</view>
                </view>
                <view class="item-right rt">
                    <!-- <view clss="day">15天</view> -->
                    <view class="Fabulous iconfont tuweing-edit_icon">10</view>
                    <!-- <view clss="Invitation">25人</view> -->
                </view>
            </view>                                                                                              
        </scroll-view>

        <view class="footer marginT20">
            <view class="left-line"></view>
            <view class="footText">突围打卡小助手</view>
            <view class="right-line"></view>
        </view>

    </view>
</template>

<script>
  import wepy from 'wepy'
  import { connect } from 'wepy-redux'
  import base from '@/api/base'
  import https from  '@/utils/https.js'
  import mockData from '@/utils/mockData.js'
  import tabBarBottom from '@/components/tabbar/tabbar';
  import tabBox from '@/components/tab/index';
  import myInfo from '@/components/panel';
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
        navigationBarTitleText: '排行榜',
        "onReachBottomDistance": 10,  
        "enablePullDownRefresh": false,
    };
    components = {
        tabBox,
    };
    data = {

    };


    computed = {
      now () {
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

    onLoad(option,preloadData){
        var self = this;

        
        // 获取预加载的数据 

        console.log("获取在find首页预加载的数据detailData",preloadData)
        console.log(9999999999999999999999999)
        //console.log(this.$parent.globalData.tabBar)

        //  获取数据,更新数据  tabBarClickHandle()启动文件中编写的---- 0就是形参id的实参
        // this.tabBarData = this.$parent.globalData.tabBar;
        // this.$apply();
        // console.log(this.tabBarData)
    }

    async onShow () {
        console.log(2)
        var self = this;
        console.log('onShow')
        console.log(this)
        console.log(base.baseUrl)

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
