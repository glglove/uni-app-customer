<style lang="less" scoped src = "">
#submitTask {
    width: 100%;
    height: 100%;
    padding: 25rpx;
    background: #F6F6F7;
    box-sizing: border-box;
    .contentBox {
        height: 170rpx;
        .submitTask_textarea {
            width: 100%;
            height: 100%;
            color: #000000;
            font-size: 24rpx;
            letter-spacing: 0.4rpx;
            line-height: 33rpx;
        }
        .picBox {
            width: 200px;
            height: 200px;
        }
        .add {
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
        .submitTask {
            position: absolute;
            bottom: 10rpx;
            left: 0;
            width: 100%;
            height: 99rpx;
            background: #FA9960;
            line-height: 99rpx;
            color: #FFFFFF;
            font-size: 34rpx;
            text-align: center;
        }

    }
}
</style>
<template>
    <view id="submitTask">
        <view class="contentBox">
            <textarea class="submitTask_textarea" value="" placeholder="{{submitTask.placeholder}}" placeholder-class="placeholder" maxlength="" focus="" auto-height="" show-confirm-bar="">
                    
            </textarea>  

            <!-- 图片预览区-->
            <repeat for="{{addImgRes}}" wx:if="{{addImgRes.length>0}}" wx:key="index" wx:for-item="item">
                <view class="picBox"  @tap.stop = "preview_img({{index}})">
                    <image src="{{item}}" mode="aspectFitf"></image>
                </view>
            </repeat>


            <!--添加按钮-->
            <view class="add" @tap.stop = "chooseImg">
                <view class="transverseLine"></view>
                <view class="verticalLine"></view>
            </view>

            <view class="submitTask click-able" @tap.stop = "clickSubmitTaskBtn">提交作业</view>
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
  import myInfo from '@/components/panel';
  import searchBox from '@/components/searchBox/searchBox';
  import aczhMixin from '../../../../../mixins/common.js'



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
        tabBarBottom,
    };
    data = {
        submitTask: {
            placeholder: "今日打卡感想如何,留言与大家一起分享吧~"
        },
        addImgRes: [],
    };


    computed = {
      now () {
        return +new Date()
      },
    };

    watch = {};  // 声明数据watcher（详见后文介绍）

    mixins = [
        aczhMixin,
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
    }

    async onShow () {
        console.log(2)
        var self = this;
        console.log('onShow')
        console.log(this)
        console.log(base.baseUrl)

        // 开始调用home页面 的接口数据
        await self.init();
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

        clickSubmitTaskBtn () {
            // 上传 图片

            // 页面跳转
            this.navigatePage("./submitTaskSuccess/index")
        },


        // 选择图片
        chooseImg: async()=>{
            let that = this;
            console.log(44444444444445)
            // 调用mixin中的 chooseImg方法 得到选择的图片
            let params = {
                count: 9, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有    
            }

            // let a = await this.chooseImg( params );

            await this.chooseImg( params ).then((res)=>{
                console.log("打印选择图片后返回的数据----------",res)
                if( res && res.length ) {

                    that.addImgRes = that.addImgRes.concat( res );
                    that.$apply();
                    console.log(that.addImgRes)

                }
            })
        },

        //预览图片
        preview_img: async ( idx )=>{
            console.log(idx)
            let that = this;
            let params = {
                urls: that.addImgRes,
                index: idx,
            }
            this.previewImage( params )
        },

        //　上传图片
        addImg: async () =>{

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
