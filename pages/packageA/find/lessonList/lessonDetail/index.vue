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
        //    padding: 40rpx 30rpx;
           height: 332rpx;
           width: 686rpx;
           background: #FFFFFF;
           border-radius: 10px;
            //    padding-top: 66rpx;
           box-sizing: border-box;
        }
        .signInfoBox {
            width: 686rpx;
            height: 250rpx;
            background: #FFFFFF;
            border-radius: 28rpx;
            margin-top: 30rpx;
            .textBox {
                padding: 15rpx;
                font-size: 24rpx;
                letter-spacing: 0.26rpx;
                color: #888C91;
                &::before {
                    display: inline-block;
                    content:"";
                    width: 14rpx;
                    height: 14rpx;
                    border-radius:50%;
                    background: #FA9960;
                    vertical-align: middle;
                }
                .titInfo {
                    margin-left: 10px;
                }
                .tit {
                    margin-left: 20rpx;
                    color: #000000;
                    font-weight: 500;
                }
            }
        }
        .contentBox {
            width: 686rpx;
            height: 3931rpx;
            background: #FFFFFF;
            border-radius: 28rpx;
            margin-top: 30rpx; 
        }
        .signUpBtn {
            width: 100%;
            height: 112rpx;
            line-height: 112rpx;
            background: #FA9960;
            color: #FFFFFF;
            font-size: 34rpx;
            margin-top: 15rpx;
        }
    }
}
</style>
<template>
    <view id="lessBox">
        <!--tab-->
        <!-- <tabBox :list.sync = "tabBox" :index.sync = "tabCurrentIndex"></tabBox> -->
        <!--list-->
        <scroll-view scroll-y scroll-with-animation class="contentBox">
            <view class="item marginT60 clearfix">
                <!-- <image class="pic" src="../../../../../assets/imgs/icon/signUp_detail_top.png"></image> -->
                <image class="pic" src="{{bg.signUp_detail_top}}"></image>
            </view> 
            <view class="signInfoBox">
                <view class="textBox">
                    <text class="titInfo">打卡内容:</text>
                    <text class="tit">世界现代设计史</text>
                </view>
                <view class="textBox">
                    <text class="titInfo">打卡时间:</text>
                    <text class="tit">2019.3.21-2019.4.12</text>
                </view>
                <view class="textBox">
                    <text class="titInfo">限制人数:</text>
                    <text class="tit">500人</text>
                </view>
                <view class="textBox">
                    <text class="titInfo">截至时间:</text>
                    <text class="tit">3天09：12：34</text>
                </view>                                                
            </view>    
            <view class="contentBox">
                <!-- <image class="pic" src="../../../../../assets/imgs/icon/signUp_detail_content.png"></image> -->
                <image class="pic" src="{{bg.signUp_detail_content}}"></image>
            </view>   
            <view class="signUpBtn center click-able" @tap.stop = "clicksignUpBtn">
                立即报名
            </view>                                                 
        </scroll-view>
    </view>
</template>

<script>
  import wepy from 'wepy'
  import { connect } from 'wepy-redux'
  import base from '@/api/base'
  import findApi from '@/api/find'
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
        bg: {
            signUp_detail_top: base.baseUrl + base.imgs_bg.signUp_detail_top,
            signUp_detail_content: base.baseUrl + base.imgs_bg.signUp_detail_content
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

        console.log(9999999999999999999999999)
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

            let predata = await this.getPageData(1,this,"getListData",idx);
            console.log( "首页中获取的单个list的详情数据",predata );

            // 页面调转前 进行数据的预加载
            this.$preload('detailData', predata);

            wepy.navigateTo({
                url: `../packageA/index/index?itemId=${idx}`
            })
        },


        async clicksignUpBtn (idex) {

            let token = await this.getStorage("token");
            //预加载
            let params = {
                params: {
                    id: 1
                },
                // 'token': "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwicm9sZXMiOiJjdXN0b21lciIsImlhdCI6MTU0OTk2NTY3NH0.8R4zpdfGo_vao8yReVJG3j1U1jkWA5Re11j0QVUwhV0",                             
                token: token,
            }

            let signUpSuccessPicUrl = await findApi.SignUpLesson( params );

            this.$preload("signUpSuccessPicUrl",signUpSuccessPicUrl);

            // 跳转 
            this.navigatePage("./enterSuccess/index")
        

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
