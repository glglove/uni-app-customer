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
	<container>
		<view id="lessBox" class="page">
			<!--tab-->
			<tabbox :list.sync = "tabBox" :index.sync = "tabCurrentIndex"></tabbox>
			
			<!--list-->
			<scroll-view scroll-y scroll-with-animation class="contentBox">
				<block v-for="(item, key) in lesssonList" :key="key">
					<view class="item marginT60 clearfix" @tap.stop = "intoDetail(item)">
						<view class="picBox lt">
							<image class="pic" :src="require('@/static/imgs/icon/twlogo.png')"></image>
						</view>
						<view class="item-right-contentBox">
							<view class="top">
								<view class="tit-top">{{item.tit}}</view>
								<view class="tit-bottom">{{item.tip}}</view>
							</view>
							<view class="bottom">
								<view class="signTime">打卡时间： {{item.signTime}}</view>
								<view class="signPeper">参与人数： {{item.joinNum}}人</view>
							</view>
						</view>
					</view>				
				</block>    
			</scroll-view>
		</view>
	</container>
</template>

<script>
	import Tabbox from '@/pages/components/tab/tab'
	import { miniProApi } from '@/utils/mixins.js'
    export default {
		mixins:[
			miniProApi
		],
        components: {
			Tabbox
        },
        data(){
            return {
				tabCurrentIndex: 0,
				tabBox: [
					{
						
					}
				],
				lesssonList: [
					{
						tit: '视觉传达|手绘基础',
						tip: '巩固绘画基础,脱离手绘小白',
						signTime: '2019.3.21-2019.4.12',
						joinNum: 30
					},
					{
						tit: '视觉传达|手绘基础',
						tip: '巩固绘画基础,脱离手绘小白',
						signTime: '2019.3.21-2019.5.12',
						joinNum: 40						
					},
					{
						tit: '视觉传达|手绘基础',
						tip: '巩固绘画基础,脱离手绘小白',
						signTime: '2019.3.21-2019.6.12',
						joinNum: 50						
					},
					{
						tit: '视觉传达|手绘基础',
						tip: '巩固绘画基础,脱离手绘小白',
						signTime: '2019.3.21-2019.4.12',
						joinNum: 30
					},
					{
						tit: '视觉传达|手绘基础',
						tip: '巩固绘画基础,脱离手绘小白',
						signTime: '2019.3.21-2019.5.12',
						joinNum: 40						
					},
					{
						tit: '视觉传达|手绘基础',
						tip: '巩固绘画基础,脱离手绘小白',
						signTime: '2019.3.21-2019.6.12',
						joinNum: 50						
					}					
				]
            }
        },
        onLoad() {

        },
        onShow() {

        },
        computed: {

        },
        watch: {

        },
        methods: {
			// 进入详情页
			intoDetail(item){
				let detailItem = JSON.stringify(item)
				this.navigatePage(`./lessonDetail/index?detailItem=${detailItem}`)
			}
        }
    }
</script>


