<template>
	<container>
		<view id="paper" class="page" slot="container-slot">
			<!-- <tabbar-cmp :list="tabbarList"></tabbar-cmp> -->
			<view class="search"><i class="daka_iconfont icon-ali-sousu"></i>搜索</view>
		</view>
	</container>
</template>

<script>
	import TabbarCmp from '../components/tab/tab'
	export default {
		components:{
			TabbarCmp
		},
		data(){
			return {
				tabbarList:["",""]
			}
		}
	}
</script>

<style lang="less" scoped>
	.search>i{
		color: red
	}
</style>
