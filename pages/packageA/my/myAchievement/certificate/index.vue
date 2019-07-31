<style lang="less" scoped src = "">
#certificate {
    position: relative;
    width: 100%;
    height: 100%;
    background: #F6F6F7;
    box-sizing: border-box;
    .contentBox {
        width: 100%;
        .picBox {
            width: 686rpx;
            height: 994rpx;
            margin: 0 auto;
            .pic {
                width: 100%;
            }
        }
        .share {
            width: 686rpx;
            height: 99rpx;
            background: #FA9960;
            border-radius: 8rpx;
            text-align: center;
            line-height: 99rpx;
            color: #FFFFFF;
            margin: 0 auto;
            margin-top: 15rpx;
        }
    }

    .footer {
        position: absolute;
        // top: 1155rpx;
        bottom: 90rpx;
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

</style>
<template>
    <view id="certificate" class="marginT30">
        <view class="contentBox">
            <view class="picBox">
                <!-- <image class="pic" src="../../../../../assets/imgs/tab/certificate.png"></image> -->
                <image class="pic" ></image>
            </view>
            <view class="share">立即分享</view>
        </view>

        <view class="footer">
            <view class="left-line"></view>
            <view class="footText">分享可获神秘礼品哦</view>
            <view class="right-line"></view>
        </view>      
    </view>
</template>

<script>
  import wepy from 'wepy'
  import { connect } from 'wepy-redux'
  import base from '../../../../../api/base'
  import https from  '../../../../../utils/https.js'
  import mockData from '../../../../../utils/mockData.js'
  import tabBarBottom from '@/components/tabbar/tabbar';
  import tabBox from '@/components/tab/index';
  import myInfo from '@/components/panel';
  import twMixin from '../../../../../mixins/common.js'



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
        navigationBarTitleText: '我的成就',
        "onReachBottomDistance": 10,  
        "enablePullDownRefresh": false,
    };
    components = {
        tabBox,
    };
    data = {
        bg: {
           certificate: base.baseUrl + base.imgs_bg.certificate
        }
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

        clickList () {
            
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
  
    }
}   
</script>
