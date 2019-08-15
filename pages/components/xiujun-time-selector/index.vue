<template>
	<view class="container">
		<!-- tab栏 -->
		<scroll-view class="scroll-view_H b-t b-b" scroll-x>
			<block v-for="(item,index) in dateArr" :key="index">
				<div class="flex-box" @click="selectDateEvent(index,item)" :style="{'box-shadow':index==dateActive ? 'inset 0 -2px 0 0 ' + selectedTabColor : ''}">
					<view class="date-box">
						<text class="days" :style="{color:index==dateActive?selectedTabColor:'#333'}">{{item.week}}</text>
						<text class="date" :style="{color:index==dateActive?selectedTabColor:'#333'}">{{item.date}}</text>
					</view>
				</div>
			</block>
		</scroll-view>
		<!-- 时间选项 -->
		<view class="time-box">
			<block v-for="(item,_index) in timeArr" :key="_index">
				<view class="item">
					<view class="item-box" :class="{'disable':item.disable,'active':_index==timeActive}" :style="{background:_index==timeActive?selectedItemColor:'#F1F3F6'}"  @click="selectTimeEvent(_index,item)">
						<text>{{item.time}}</text>
						<text class="all" v-if="item.disable">{{disableText}}</text>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
import {dateData,timeData,timeStamp} from './date.js'
export default {
	props:{
		//开始时间选项
		startTime:{
			type:String,
			default:'08:00'
		},
		//结束时间选项
		endTime:{
			type:String,
			default:'18:00'
		},
		//时间间隔
		timeInterval:{
			type:[Number,String],
			default:0.5 //半小时 
		},
		//选中的tab颜色
		selectedTabColor:{
			type:String,
			default:'#0092D5'
		},
	   //选中的时间颜色
		selectedItemColor:{
			type:String,
			default:'#0094D7'
		},
		//禁用显示的文本
		disableText:{
			type:String,
			default:'约满'
		}
		
	},
	data(){
		return{
			dateArr:[],//日期数据
			timeArr:[],//时间数据
			dateActive:0,//选中的日期索引
			timeActive:0,//选中的时间索引
			oldTimeActive:0,
			selectDate:'',//选择的日期数据
			selectTime:'',//选择的时间
			oldSelectTime:'',
			currentTimeStamp:'',
			currentTime:'',
		}
	},
	created() {
		//获取日期tab数据
		this.dateArr = dateData()
		//获取时间数据
		this.timeArr = timeData(this.startTime,this.endTime,this.timeInterval)
		//当前时间戳
		this.currentTimeStamp = Date.now()
		this.currentTime = timeStamp(this.currentTimeStamp).hour 
		this.timeArr.map(item=>{
			if(item.time>this.currentTime){
				return item.disable = 0  //判断当前时间大于时间选项则禁用
			}else{
				return item.disable = 1  
			}
		})
		//默认选中的日期
		this.selectDate = `${this.dateArr[0]['date']}(${this.dateArr[0]['week']})` 
		this.timeArr.some((item,index)=>{
			this.selectTime = this.timeArr[index]['time'] //默认选中的时间
			this.oldSelectTime = this.timeArr[index]['time'] //存储选中的时间
			this.timeActive = index  //选中的时间索引
			this.oldTimeActive = index
			return !item.disable
		})
		console.log(this.selectTime)
	},
	methods:{
		selectDateEvent(index,item){
			if(this.currentTimeStamp<item.timeStamp){
				this.timeActive = 0
				this.selectTime = this.timeArr[0]['time']
				this.timeArr.map(item=>{
					return item.disable = 0
				})
			}else{
				this.timeActive = this.oldTimeActive
				this.selectTime = this.oldSelectTime
				this.timeArr.map(item=>{
					if(item.time>this.currentTime){
						return item.disable = 0
					}else{
						return item.disable = 1
					}
				})
			}
			this.dateActive = index
			this.selectDate = `${this.dateArr[index]['date']}(${this.dateArr[index]['week']})`
			this.$emit('selectTime',`${this.selectDate}${this.selectTime}`)
		},
		selectTimeEvent(index,item){
			if(item.disable)return
			this.timeActive = index
			this.selectTime = this.timeArr[index]['time']
			this.$emit('selectTime',`${this.selectDate}${this.selectTime}`)
		}		
	}
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
