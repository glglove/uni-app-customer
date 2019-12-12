<style lang="less" scoped src = "">
#myAchievement {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
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
                    bottom: 20rpx;
                    left: 0;
                    // margin-top: 30rpx;
                    font-size: 24rpx;
                    color: #A7A7A7;
                    // letter-spacing: 0.21rpx;
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

    .noData {
        width: 100%;
        height: 100%;
        .noDataPic {
            position: absolute;
            top: 40%;
            left: 50%;
            width: 437rpx;
            height: 382rpx;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            &::after {
                display: block;
                content: "暂未获得结课证书";
                position: absolute;
                top: 0;
                left: 0;
                margin-top: 10px;
            }

        }
    }
}

</style>
<template>
	<container :containerAllloading="containerAllloading">
		<view id="myAchievement" class="page marginT30" slot="container-slot">
			<!-- containerAllloading: {{containerAllloading}} -->
			我的成就页面
		</view>
	</container>
</template>

<script>
	import  myApi from '@/api/my.js'
	import { miniProApi } from '@/utils/mixins.js'
	export default {
		mixins:[miniProApi],
		data(){
			return {
				
			}
		},
		onLoad() {
			debugger
			this._getAchivementList()
		},
		methods: {
			_getAchivementList () {
				debugger
				this.containerAllloading = true
				let paramsObj = {
					page: {
						pageNum: 1,
						pageSize: 6
					},
					params: {
						
					},
				}
				myApi.getAchivementList( paramsObj , "loading", "加载数据" ).then((res)=>{
					debugger
					this.containerAllloading = false
					if(res.data.code === 1){
					}else {
						this.toast("数据获取失败")
					}
				})
			}
		}
	}
</script>
