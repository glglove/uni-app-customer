<template>
	<view>
		<view>
			这是发现页面
			{{contentData.rank}}
		</view>
		<!--<mt-header title="long long long long title">
		  <router-link to="/" slot="left">
			<mt-button icon="back">back</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header> -->
		<!--	<mt-navbar v-model="selectedOption">
		  <mt-tab-item id="optionA">option A</mt-tab-item>
		  <mt-tab-item id="optionB">option B</mt-tab-item>
		  <mt-tab-item id="optionC">option C</mt-tab-item>
		</mt-navbar> -->
		
		<!--<template v-for="listItem in contentData" v-if="contentData.length">
			<uni-card :title='listItem.title' :isFull="listItem.isFull" :note="listItem.note" :thumbnail="listItem.thumbnail" :extra="listItem.extra"></uni-card>
		</template> -->
		<!-- <uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card> -->

		<!--<uni-pagination
			:show-icon='false'
			total=100 
			pageSize=10
			current=2
			prev-text="上一页"
			next-text="下一页"
		></uni-pagination> -->
			

		
		<!--<mt-tabbar v-model="selected" fixed>
		  <mt-tab-item id="tab1">
			<img slot="icon" src="../../static/logo.png">
			tab1
		  </mt-tab-item>
		  <mt-tab-item id="tab2">
			<img slot="icon" src="../../static/logo.png">
			tab2
		  </mt-tab-item>
		  <mt-tab-item id="tab3">
			<img slot="icon" src="../../static/logo.png">
			tab3
		  </mt-tab-item>
		  <mt-tab-item id="tab4">
			<img slot="icon" src="../../static/logo.png">
			tab4
		  </mt-tab-item>
		</mt-tabbar> -->
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
				selectedOption: 'optionB',
				selected: 'tab1',
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
				uni.showLoading()
				findApi.getRankDayData().then(res => {
					debugger
					uni.hideLoading()
					console.log(res)
					if(res && res.data.code === 1){
						debugger
						uni.showToast({
							title:"数据获取成功"
						})
						this.contentData = res.data.data
					}else{
						uni.hideLoading()
						uni.showToast({
							title:"数据获取失败",
							mask:true,
							duration:2000
						})

					}
				}).catch(err => {
					uni.hideLoading()
					uni.showToast({
						title:"数据获取失败,请重试",
						mask:true,
						duration:2000
					})
				})
			}
		}
	}
</script>

<style lang="less">

</style>