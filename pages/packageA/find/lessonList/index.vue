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
           padding: 40rpx 30rpx;
           height: 260rpx;
           width: 686rpx;
           background: #FFFFFF;
           border-radius: 10px;
            //    padding-top: 66rpx;
           box-sizing: border-box;
           .picBox {
               width: 131rpx;
               height: 178rpx;
               .pic {
                   width: 100%;
                //    height: 100%;
               }
            }
           .item-right-contentBox {
               position: relative;
               margin-left: 160rpx;
               height: 178rpx;
               overflow: hidden;
               .top　{
                   position: absolute;
                   top: 0;
                   left: 0;
                   .tit-top {
                        font-size: 34rpx;
                        letter-spacing: 0.36rpx;
                        height: 48rpx;
                        line-height: 48rpx;
                        color: #000000;
                        font-family: PingFangSC-Medium;
                        // text-align: center;
                        font-weight: bold;
                    }
                    .tit-bottom {
                        margin-top: 10rpx;
                        font-size: 24rpx;
                        color: #888C91;
                        letter-spacing: 0.26rpx;

                    }
                }
               .bottom {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    font-size: 20rpx;
                    color: #000000;
                    letter-spacing: 0.21rpx;
                   .signTime {
                        height: 28rpx;
                        line-height: 28rpx;
                    }
                   .signPeper {
                        margin-top: 10rpx;
                        height: 28rpx;
                        line-height: 28rpx;  
                    }
                }
            }
        }
    }
}
</style>
<template>
    <view id="lessBox">
        <!--tab-->
        <tabBox :list.sync = "tabBox" :index.sync = "tabCurrentIndex"></tabBox>
        <!--list-->
        <scroll-view scroll-y scroll-with-animation class="contentBox">
            <view class="item marginT60 clearfix" @tap.stop = "intoDetail(1)">
                <view class="picBox lt">
                    <image class="pic" src="../../../../assets/imgs/icon/lesson.png"></image>
                </view>
                <view class="item-right-contentBox">
                    <view class="top">
                        <view class="tit-top">视觉传达|手绘基础</view>
                        <view class="tit-bottom">巩固绘画基础,脱离手绘小白</view>
                    </view>
                    <view class="bottom">
                        <view class="signTime">打卡时间： 2019.3.21-2019.4.12</view>
                        <view class="signPeper">参与人数： 30人</view>
                    </view>
                </view>
            </view>
            <view class="item marginT60 clearfix">
                <view class="picBox lt">
                    <image class="pic" src="../../../../assets/imgs/icon/lesson.png"></image>
                </view>
                <view class="item-right-contentBox">
                    <view class="top">
                        <view class="tit-top">视觉传达|手绘基础</view>
                        <view class="tit-bottom">巩固绘画基础,脱离手绘小白</view>
                    </view>
                    <view class="bottom">
                        <view class="signTime">打卡时间： 2019.3.21-2019.4.12</view>
                        <view class="signPeper">参与人数： 30人</view>
                    </view>
                </view>
            </view>
            <view class="item marginT60 clearfix">
                <view class="picBox lt">
                    <image class="pic" src="../../../../assets/imgs/icon/lesson.png"></image>
                </view>
                <view class="item-right-contentBox">
                    <view class="top">
                        <view class="tit-top">视觉传达|手绘基础</view>
                        <view class="tit-bottom">巩固绘画基础,脱离手绘小白</view>
                    </view>
                    <view class="bottom">
                        <view class="signTime">打卡时间： 2019.3.21-2019.4.12</view>
                        <view class="signPeper">参与人数： 30人</view>
                    </view>
                </view>
            </view>
            <view class="item marginT60 clearfix">
                <view class="picBox lt">
                    <image class="pic" src="../../../../assets/imgs/icon/lesson.png"></image>
                </view>
                <view class="item-right-contentBox">
                    <view class="top">
                        <view class="tit-top">视觉传达|手绘基础</view>
                        <view class="tit-bottom">巩固绘画基础,脱离手绘小白</view>
                    </view>
                    <view class="bottom">
                        <view class="signTime">打卡时间： 2019.3.21-2019.4.12</view>
                        <view class="signPeper">参与人数： 30人</view>
                    </view>
                </view>
            </view>
            <view class="item marginT60 clearfix">
                <view class="picBox lt">
                    <image class="pic" src="../../../../assets/imgs/icon/lesson.png"></image>
                </view>
                <view class="item-right-contentBox">
                    <view class="top">
                        <view class="tit-top">视觉传达|手绘基础</view>
                        <view class="tit-bottom">巩固绘画基础,脱离手绘小白</view>
                    </view>
                    <view class="bottom">
                        <view class="signTime">打卡时间： 2019.3.21-2019.4.12</view>
                        <view class="signPeper">参与人数： 30人</view>
                    </view>
                </view>
            </view>
            <view class="item marginT60 clearfix">
                <view class="picBox lt">
                    <image class="pic" src="../../../../assets/imgs/icon/lesson.png"></image>
                </view>
                <view class="item-right-contentBox">
                    <view class="top">
                        <view class="tit-top">视觉传达|手绘基础</view>
                        <view class="tit-bottom">巩固绘画基础,脱离手绘小白</view>
                    </view>
                    <view class="bottom">
                        <view class="signTime">打卡时间： 2019.3.21-2019.4.12</view>
                        <view class="signPeper">参与人数： 30人</view>
                    </view>
                </view>
            </view>                                                            
        </scroll-view>
    </view>
</template>

<script>
  import wepy from 'wepy'
  import { connect } from 'wepy-redux'
  import base from '@/api/base'
  import findApi from '@/api/find'
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
        navigationBarTitleText: '突围打卡小助手',
        "onReachBottomDistance": 10,  
        "enablePullDownRefresh": false,
    };
    components = {
        tabBox,
    };
    data = {
        tabBox:  ["理论","手绘"],
        tabCurrentIndex: '',   
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

    onLoad( options, preloadData ){
        var self = this;

        console.log(9999999999999999999999999)
        console.log(options, preloadData)
        // //console.log(this.$parent.globalData.tabBar)

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

            let params = {
                params: {
                    id: idx
                },
                'token': "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwicm9sZXMiOiJjdXN0b21lciIsImlhdCI6MTU0OTk2NTY3NH0.8R4zpdfGo_vao8yReVJG3j1U1jkWA5Re11j0QVUwhV0",     
            }

            let lessonDetail = await findApi.getlessonListDetailData( params );
            // console.log( "首页中获取的单个list的详情数据",predata );

            // 页面调转前 进行数据的预加载
            this.$preload('detailData', lessonDetail);

            wepy.navigateTo({
                url: `./lessonDetail/index?itemId=${idx}`
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
        'item-change': (index)=>{
            console.log(index)
            this.tabCurrentIndex = index;
        }
    }

    // 自定义的 事件

    async init(){
        // 页面初始化
      
    }

}   
</script>
