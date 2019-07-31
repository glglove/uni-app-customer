<template>
	<view>
		这是发现页面
		{{contentData.rank}}
	</view>
</template>

<script>
	import {uniCard, uniPagination} from '@dcloudio/uni-ui'	
	import findApi from '@/api/find.js'
	export default {
        components: {
            uniCard,
            uniPagination
        },			
		data() {
			return {
				contentData: []		
			};
		},
		onLoad () {
			this._getRankDayData()
		},
		methods:{
			// 获取list 列表数据
			_getRankDayData () {
				debugger
				// uni.showLoading()
				let paramsObj = {
					params: {

					},
					page: {
						pageSize: 10,
						pageNum: 1
					}
				}
				findApi.getRankDayData( paramsObj, "loading", "加载中..").then(res => {
					debugger
					// uni.hideLoading()
					console.log(res)
					if(res && res.data.code === 1){
						debugger
						uni.showToast({
							title:"数据获取成功",
							icon: 'success',
							mask: true,
							duration:2000
						})
						this.contentData = res.data.data
						
						//页面跳转到
						uni.redirectTo({
							url:'../packageA/find/ranklist/index'
						})
					}else{
						// uni.hideLoading()
						uni.showToast({
							title:"数据获取失败",
							icon: 'success',
							mask: true,	
							duration:2000
						})

					}
				}).catch(err => {
					// uni.hideLoading()
					uni.showToast({
						title:"数据获取失败,请重试",
						icon: 'success',
						mask:true,
						duration:2000
					})
				})
			}
		}
	}
</script>

<style lang="less" scoped>

</style>