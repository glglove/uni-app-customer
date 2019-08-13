<style lang="less" scoped>
.container {
	overflow: hidden;
    box-sizing: border-box;
    opacity: 0;
}
.container-loading{
    position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1002;
    background-color: #f5f5f5;
    box-sizing: border-box;
    image{
        height: 75rpx;
        width: 75rpx;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
    }
    text{
        position: absolute;
        top:50%;
        left: 50%;
        margin-top: 75rpx;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        font-size: 20rpx;
        color: #999;
    }
}
@-webkit-keyframes topRoate{  
	from{  
		-webkit-transform:rotate(0deg);  
	}  
	to{  
		-webkit-transform:rotate(360deg);  
	}  
} 
@keyframes topRoate{  
	from{  
		transform:rotate(0deg);  
	}  
	to{  
		transform:rotate(360deg);  
	}  
}
@-webkit-keyframes topRoateOut{  
	from{ 
		color: #0078d7;
		top:80px;
		transform:rotate(360deg);  
	}  
	to{ 
		color: #eb637a;
		top:-40px;
		opacity: 0;
		transform:rotate(0deg);  
	}  
} 
@keyframes topRoateOut{  
	from{ 
		color: #0078d7;
		top:80px;
		transform:rotate(360deg);  
	}  
	to{ 
		color: #eb637a;
		top:-40px;
		opacity: 0;
		transform:rotate(0deg);  
	}  
} 
.top-loadding{
	position: fixed;
	background: #FFFFFF;
	box-shadow: 0 4px 25px 0 rgba(0,0,0,0.17);
	left: 50%;
	z-index: 9999;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	margin-left: -20px;
	color: #eb637a;
	transform-origin:50% 50%;
    opacity: 0;
    transition:all .1s ease 0;
	text,span{
		font-size: 34rpx;
	}
	&.out{
		opacity: 1;
		animation:topRoateOut .3s linear 0s;  
		-webkit-animation:topRoateOut .3s linear 0s;  
    }
	&.roate{
        color: #0078d7;
		opacity: 1;
		top:80px;
		animation:topRoate 1s linear 0s infinite;  
		-webkit-animation:topRoate 1s linear 0s infinite;  
	}
}
.bottom-loadding {
	font-size: 24rpx;
	color: #999;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	overflow: hidden;
	left: 0;
    width: 100%;
    opacity: 0;
	image,
	img {
		display: inline-block;
		height: 40rpx;
		width: 40rpx;
		margin-right: 10rpx;
		vertical-align: middle;
	}
}

.ad_box {}

.container_mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	opacity: 0.82;
	background: rgba(0, 0, 0, .75);
}

.container_loading {
    position: fixed;
	top: 50%;
	left: 50%;
	width: 200rpx;
	height: 200rpx;
	margin-left: -100rpx;
	margin-top: -100rpx;
	// background: rgba(0, 0, 0, 0.80);
	border-radius: 10rpx;
	z-index: 1001;
	text-align: center;
	.load-container {
		margin-top: 30rpx;
		margin-bottom: 14rpx;
	}
	image {
		background: #FFFFFF;
		box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.14);
		border-radius: 8px;
	}
	.l_text {
		font-size: 28rpx;
		color: #fff;
		display: block;
	}
}

.container-oauth {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 546rpx;
	height: 680rpx;
	margin-left: -273rpx;
	margin-top: -340rpx;
	background: linear-gradient(-180deg, #F3E7E9 0%, #E3EEFF 100%);
	border-radius: 14px;
	z-index: 1000;
	text-align: center;
	.container-oauth_icon {
		width: 128rpx;
		height: 128rpx;
		display: block;
		margin: 128rpx auto 24rpx;
		background: #f3f3f3;
		border-radius: 50%;
		.iconfont {
			font-size: 100rpx;
			color: #dcdcdc;
			line-height: 128rpx;
		}
	}
	.container-oauth_title {
		font-size: 38rpx;
		color: #242424;
		display: block;
		margin: 0 auto 17rpx;
	}
	.container-oauth_desc {
		font-size: 28rpx;
		color: #333;
		display: block;
		width: 392rpx;
		margin: 0 auto 54rpx;
	}
	.container-oauth_btn {
		width: 416rpx;
		line-height: 88rpx;
		margin-bottom: 33rpx;
	}
	.container-oauth_bind {
		font-size: 24rpx;
		color: #eb637a;
        line-height: 33rpx;
        padding-bottom: 40rpx;
		.iconfont {
			font-size: 24rpx;
			margin-left: 27rpx;
		}
	}
}

.container-error {
	position: fixed;
	width: 100%;
	height: 100%;
	top:0;
	background: #f3f3f3;
	z-index: 100;
	text-align: center;
	.container-error_icon {
		margin: 264rpx auto 15rpx auto;
		width: 219rpx;
		height: 189rpx;
	}
	.container-error_title {
		font-size: 28rpx;
		color: #333;
		display: block;
		margin: 0 auto 7rpx auto;
	}
	.container-error_desc {
		font-size: 24rpx;
		color: #808080;
		display: block;
		width: 392rpx;
		margin: 0 auto 87rpx auto;
	}
	.container-error_btn {
		width: 416rpx;
		line-height: 88rpx;
	}
}

.container-notfound{
	position: fixed;
	width: 100%;
	height: 100%;
	background: #f3f3f3;
	z-index: 100;
	text-align: center;
	top:0;
	.container-error_icon {
		margin: 264rpx auto 15rpx auto;
		width: 219rpx;
		height: 189rpx;
	}
	.container-error_title {
		font-size: 28rpx;
		color: #333;
		display: block;
		margin: 0 auto 7rpx auto;
	}
	.container-error_desc {
		font-size: 24rpx;
		color: #808080;
		display: block;
		width: 392rpx;
		margin: 0 auto 60rpx auto;
	}
	.container-error_btn {
		width: 416rpx;
		line-height: 88rpx;
	}
}

.container-picker {
	position: fixed;
	width: 100%;
	height: 540rpx;
	bottom: 0;
	background: #fff;
	z-index: 1000;
	text-align: center;
	.container-picker_title {
		font-size: 28rpx;
		line-height: 80rpx;
		color: #333;
	}
	.container-picker_btn {
		position: absolute;
		top: 0;
		display: block;
		font-size: 28rpx;
		line-height: 80rpx;
		color: #eb637a;
		padding: 0 30rpx;
		&.left {
			left: 0;
		}
		&.right {
			right: 0;
		}
	}
	.container-picker_content {
		height: 460rpx;
		position: absolute;
		width: 100%;
		bottom: 0;
		.container-picker_item {
			// line-height: 50rpx;
			font-size: 30rpx;
		}
	}
}

</style>
<template>
<view class="top_tab">
    <scroll-view :class="['top_tab_box', arrow!='false'?'pr':'']" scroll-with-animation scroll-x scroll-left="lPostion" bindscroll="leftChange">
        <view v-for="(item,idx) in list" :key="idx" :class="['li', index==idx?'selected':'', type=='default'?'':' two_line']" @tap.stop="itemTap(idx)">
            <template v-if="type == 'default'">
              <view>{{item}}</view>
            </template>
            <block wx:else>
              <view :class="['text', item[3]?'vacation':'']">
               {{item[0]}}
              </view>
              <view class="text">
               {{item[1]}}
              </view>
            </block>
        </view>
    </scroll-view>
    <view  v-if="arrow!='false'" class="iconfont mykicon-yyok__arrow_icon click-able" @tap="toRight"></view>
</view>
</template>
<script>

export default {
  data(){
	  return {
		lPostion:0
	  }
  },
  props: {
      arrow:{
       type:String,
       default:'true'
     },
     list:{
       type:Object
     },
     index:{
       type:String,
       default:'0'
     },
     type:{
       type:String,
       default:'default'
     }
  },
  components: {}, // 声明页面中所引用的组件，或声明组件中所引用的子组件

  methods: {
    leftChange(e){
        this.lPostion=e.detail.scrollLeft
    },
    toRight(){
         this.lPostion=this.customerData.lPostion+100
    },
    itemTap(index){
      // this.index=index;
      // this.$emit("item-change",index)
    }
  }
}
</script>
