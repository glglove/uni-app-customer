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
                <image src="../../../../assets/imgs/icon/photo.png" class="pic"></image>
            </view>
            <view class="name center">明年上研一</view>
        </view>  
        <view class="content">
            <view class="listBox">
                <view class="mark">給勤奋的自己定一个学习时间</view>
                <view class="item form clearfix">
                    <view class="lt form_row leftBox">
                        <image src="../../../../assets/imgs/icon/photo.png" class="pic"></image>
                        <view class="tit">提醒</view>
                    </view>
                    <view class="rt rightBox">
                        <image src="../../../../assets/imgs/icon/photo.png"></image>
                    </view>
                </view>
            </view>

            <view class="listBox">
                <view class="mark">进入"突围教育打卡小助手"管理员通道</view>
                <view class="item form clearfix">
                    <view class="lt form_row leftBox">
                        <image src="../../../../assets/imgs/icon/photo.png" class="pic"></image>
                        <view class="tit">管理员入口</view>
                    </view>
                    <view class="rt rightBox">
                        <image src="../../../../assets/imgs/icon/photo.png"></image>
                    </view>
                </view>
            </view>            
        </view>
        <!-- <view class="footer">
            <view class="left-line"></view>
            <view class="footText">突围打卡小助手</view>
            <view class="right-line"></view>
        </view>       -->
    </view>
</template>

<script>
  import wepy from 'wepy'
  import { connect } from 'wepy-redux'
  import base from '../../../../api/base'
  import https from  '../../../../utils/https.js'
  import mockData from '../../../../utils/mockData.js'
  import tabBarBottom from '@/components/tabbar/tabbar';
  import tabBox from '@/components/tab/index';
  import myInfo from '@/components/panel';
  import twMixin from '../../../../mixins/common.js'



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
        navigationBarTitleText: 'set',
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

    onLoad(option){
        var self = this;

        

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
        // this.getHomeData( 1 );
        // let resHomeData = await this.getPageData(1,this,'getHomeData');

        // console.log(this.resHomeData);

    }
}   
</script>
