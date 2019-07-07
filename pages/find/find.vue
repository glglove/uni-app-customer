<template>
	<view>
<!-- 		<mt-header title="long long long long title">
		  <router-link to="/" slot="left">
			<mt-button icon="back">back</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header> -->
		
		<mt-navbar v-model="selectedOption">
		  <mt-tab-item id="optionA">option A</mt-tab-item>
		  <mt-tab-item id="optionB">option B</mt-tab-item>
		  <mt-tab-item id="optionC">option C</mt-tab-item>
		</mt-navbar>
		
		<template v-for="listItem in contentData" v-if="contentData.length">
			<uni-card :title='listItem.title' :isFull="listItem.isFull" :note="listItem.note" :thumbnail="listItem.thumbnail" :extra="listItem.extra"></uni-card>
		</template>
		<!-- <uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card>
		<uni-card :title='title' :isFull="isFull" :note="note" :thumbnail="thumbnail" :extra="extra"></uni-card> -->

		<uni-pagination
			:show-icon='false'
			total=100 
			pageSize=10
			current=2
			prev-text="上一页"
			next-text="下一页"
		></uni-pagination>
			

		
		<mt-tabbar v-model="selected" fixed>
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
		</mt-tabbar>
	</view>
</template>

<script>
	import {uniCard, uniPagination} from '@dcloudio/uni-ui'	
	import findApi from '../../api/find.js'
	export default {
        components: {
            uniCard,
            uniPagination
        },			
		data() {
			return {
				selectedOption: 'optionB',
				selected: 'tab1',
				contentData: [],
                // title: '快陪练',
                // extra: '教育科技公司',
                // note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                // thumbnail: require('../../static/logo.png'),
                // isFull: true				
			};
		},
		onLoad () {
			this._getlistData()
		},
		methods:{
			// 获取list 列表数据
			_getlistData () {
				findApi.getlistData().then(res => {
					if(res && res.data.state === 1){
						this.contentData = res.data.Data
					}
				})
			}
		}
	}
</script>

<style lang="less">

</style>