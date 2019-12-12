<style lang="less" scoped>


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
       type:Array,
	   default: () => {
		   return []
	   }
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
         // this.lPostion=this.customerData.lPostion+100
    },
    itemTap(index){
      // this.index=index;
      // this.$emit("item-change",index)
    }
  }
}
</script>
