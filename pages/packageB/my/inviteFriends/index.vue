<style lang="less" scoped src = "">
#invitation {
    position: relative;
    width: 100%;
    height: 100%;
    .sendBox {
        width: 686rpx;
        height: 236rpx;
        margin: 0 auto;
        padding-bottom: 40rpx;
        background: #FFFFFF;
        box-shadow: 0 2px 16px 0 rgba(0,0,0,0.11);
        border-radius: 28rpx;
        &.sendPaper {
            margin-top: 30px;
        }
        .picBox {
            width: 114rpx;
            height: 114rpx;
            margin: 0 auto;
            padding: 40rpx 0;
            .pic {
                width: 100%;
                height: 100%;
            }
        }
        .tit {
            width: 100%;
            height: 48rpx;
            line-height: 48rpx;
            font-size: 34rpx;
            color: #000000;
            text-align: center;
            button {
                width: 100%;
                background-color: #ffffff;
                line-height: 48rpx;
            }
        }
    }
    .footer {
        position: absolute;
        // top: 1155rpx;
        bottom: 120rpx;
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
    <view id="inviteFriends" class="marginT30">
        <view>inviteFriends</view>

        <view class="footer">
            <view class="left-line"></view>
            <view class="footText">突围打卡小助手</view>
            <view class="right-line"></view>
        </view>      
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
        navigationBarTitleText: '邀请好友',
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
        // this.getHomeData( 1 );
    }
}   
</script>
