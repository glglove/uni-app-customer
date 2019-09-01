<template>
	<container :containerAllloading = "containerAllloading">
		<view id="ranklist" slot="container-slot">
			ranklist 页面
			<view class="btn" @tap="showCalendar">选择日期：{{result.fullDate}} {{result.week}}</view>
			<view class="calendarBox">
				<calendar
					ref="calendar"
					:lunar="true" 
					:disabledBefore="false" 
					:disabledAfter="false" 
					@confirm="getResult">
				</calendar>	
			</view>		
		</view>
	</container>
</template>

<script>
	import findApi from '@/api/find.js'
	import { miniProApi } from '@/utils/mixins.js'
	import calendar from '@/pages/components/uni-calendar/w-calendar.vue'
	export default {
		mixins:[ miniProApi ],
		components:{
			calendar
		},
		data() {
			return {
				result:{}
			};
		},
		onLoad() {
			this._getRankList()
			// this.showCalendar()
			// this.getResult()
		},
		methods:{
			showCalendar(){
				this.$refs.calendar.show();
			},
			getResult(res){
				console.log(res);
				this.result=res;
			},			
			async _getRankList() {
				this.containerAllloading = true
				let params = {
					
				}
				let signList_day = await findApi.getRankDayData ( params );   
				
				let params_list = {
					params: {
						id: "",     //课程ID  
						type: 1,    //1:总排名  2.点赞排名   3.邀请排名   
					},
					page: {
						pageNum: this.pageNum,
						pageSize: this.pageSize 
					}
				}

				// 排行榜的list列表
				let rankList = await findApi.getRankListData ( params_list );
				
				if( signList_day && rankList ){
					this.containerAllloading = false
				}
			
			}
		}
	}
</script>

<style lang="less" scoped>
	#ranklist {
		width: 100%;
		height: 400px;
		position: absolute;
		top: 0;
		left: 0; 
		right: 0;
		bottom: 0;
		margin: auto;
		.calendarBox {
			height: 100%;
			width: 100%;
		}
	}
</style>
