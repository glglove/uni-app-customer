<style lang="less" scoped src = "">
#help {
    width: 100%;
    height: 100%;
    .contentBox {
        height: 550px;
        &::-webkit-scrollbar{
            width: 0 !important ;
            height: 0 !important ;
            color: transparent !important ;
            display: none;
        }
        .listBox {
            height: 95rpx;
            line-height: 95rpx;
            padding: 0 20rpx;
            .no {
                display: inline-block;
                width: 45rpx;
                height: 45rpx;
                background: #FA9960;
                color: #FFFFFF;
                vertical-align: middle;
                border-radius: 50%;
                text-align: center;
                line-height: 45rpx;
            }
            .tit {
                height: 33rpx;
                line-height: 33rpx;
                color: #000000;
                font-size: 24rpx;
                margin-left: 20rpx;
            }
        }
    }

    .tickBtnBox {
        position: fixed;
        bottom: 128rpx;
        right: 50rpx;
        width: 128rpx;
        height: 128rpx;
        border-radius: 50%;
        background: #FA9960;
        line-height: 128rpx;
        text-align: center;
        font-size: 30rpx;
        color: #FFFFFF;
        box-shadow: 0 2rpx 31rpx rgba(70, 67, 67, 1)
    }
}


</style>
<template>
    <view id="help">
        <scroll-view scroll-y class="contentBox">
            <view class="listBox line">
                <text class="no">1</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">2</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>  

            <view class="listBox line">
                <text class="no">1</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">2</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view> 

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>  

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>  

            <view class="listBox line">
                <text class="no">1</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">2</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view> 

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>   

            <view class="listBox line">
                <text class="no">2</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>

            <view class="listBox line">
                <text class="no">3</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view> 

            <view class="listBox line">
                <text class="no">4</text>
                <text class="tit">为什么打卡的时候一直显示转圈？无法上传提交打卡？</text>
            </view>                                                                      
        </scroll-view>


        <view class="tickBtnBox" @tap.stop = "clickSubmitProblemBtn">
            <text class="tickBtn">提交</br>问题</text>
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
  import base from '@/api/base'
  import myApi from '@/api/mine'
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
        navigationBarTitleText: '帮助中心',
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
      token () {
          return this.getStorageSync("token")
      }
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


        async clickSubmitProblemBtn () {


            this.navigatePage("./submitProblem/index")
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
