<template>
	<view class="w-calendar" v-show="visible">
		<view class="w-calendar-header">
			<view class="prev" @tap="prev"></view>
			<view class="current">{{year}}年{{month}}月</view>
			<view class="next" @tap="next"></view>
			<view class="back" @tap="back">返回今日</view>
		</view>
		<swiper :duration="400" :circular="true" @change="swiperChange" :current="swiperIndex">
			<swiper-item v-for="(month,mIndex) in dataList" :key="mIndex">
				<view class="w-calendar-item">
					<view class="w-calendar-week">
						<view class="w-week-item" v-for="(week,wIndex) in weeks" :key="wIndex">{{week}}</view>
					</view>
					<view class="w-calendar-day">
						<view class="w-day-item" 
							:class="[
								{'disabled':item.type=='before'||item.type=='after'},
								{'active':item.active},
								{'disabled-before':disabledBefore&&item.disabledBefore},
								{'disabled-after':disabledAfter&&item.disabledAfter}]" 
							v-for="(item,dIndex) in month.data" 
							:key="dIndex" 
							@tap="checkItem(item)">
							<view class="box">
								<text>{{item.day}}</text>
								<text v-if="lunar">{{item.lunar.IDayCn}}</text>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import CALENDAR from './calendar.js'
	let _this=null;
	export default {
		props:{
			lunar:{
				type:Boolean,
				default:false
			},
			disabledBefore:{
				type:Boolean,
				default:false
			},
			disabledAfter:{
				type:Boolean,
				default:false
			},
			theme:{
				type:String,
				default:"#f00"
			}
		},
		data() {
			return {
				swiperIndex:0,
				last:0,
				weeks:["周日","周一","周二","周三","周四","周五","周六"],
				year:"",
				month:"",
				swiperLen:3,
				dataList:[],
				rusult:{},
				today:new Date(),
				visible:true,
				isClick:false
			};
		},
		created() {
			_this=this;
			_this.init();
		},
		methods:{
			show(){
				_this.visible=true;
			},
			hide(){
				_this.visible=false;
			},
			returnRusult(item){
				let result={};
				_this.dataList=_this.dataList.map((v,k)=>{
					v.data=v.data.map((i,j)=>{
						i.active=false;
						return i;
					});
					return v;
				});
				item.active=true;
				result={
					fullDate:item.year+"-"+item.month+"-"+item.day,
					iosDate:item.year+"/"+item.month+"/"+item.day,
					format:item.year+"年"+item.month+"月"+item.day+"日",
					week:item.lunar.ncWeek,
				};
				if(_this.lunar){
					result.lunar=item.lunar
				};
				_this.$emit("confirm",result);
				_this.hide();
			},
			back(){
				_this.today=new Date();
				_this.init();
			},
			checkItem(item){
				if(this.disabledBefore&&!this.disabledAfter){
					if(!item.disabledBefore){
						this.returnRusult(item)
					}
					return;
				}
				if(this.disabledAfter&&!this.disabledBefore){
					if(!item.disabledAfter){
						this.returnRusult(item)
					}
					return;
				}
				if(this.disabledAfter&&this.disabledBefore){
					if(!item.disabledAfter&&!item.disabledBefore){
						this.returnRusult(item)
					}
					return;
				}
				this.returnRusult(item);
			},
			formatNum(n){
				return n<10?'0'+n:n;
			},
			prev(){
				if(_this.swiperIndex>0){
					_this.swiperIndex--;
				}else{
					_this.swiperIndex=_this.swiperLen-1;
				}
				_this.isClick=true;
				setTimeout(()=>{
					_this.isClick=false;
				},300)
				this.init("prev");
			},
			next(){
				if(this.swiperIndex<this.swiperLen-1){
					this.swiperIndex++;
				}else{
					this.swiperIndex=0;
				};
				_this.isClick=true;
				setTimeout(()=>{
					_this.isClick=false;
				},300)
				this.init("next");
			},
			swiperChange(e){
				if(!_this.isClick){
					let index=e.target.current;
					let isPrev=(index-this.last==1||index-this.last==-2)?true:false;
					this.swiperIndex=index;
					if(isPrev){
						this.init("next");
					}else{
						this.init("prev");
					}
					this.last=index;
				}
			},
			init(str){
				let aDate=this.today;
				let bDate="";
				let week=this.today.getDay();
				let year="",month="";
				let max=42;
				let lastDays=0,lastWeek=0,lastDate="";
				let curYear=aDate.getFullYear(),curMonth=aDate.getMonth(),curDays=0,curData=[],curDate="",curWeek=0;
				let nextYear=0,nextMonth=0,nextDays=0,nextData=[],nextDate="",nextWeek=0;
				let afterYear=0,afterMonth=0,afterDays=0,afterData=[],afterDate="",afterWeek=0;
				let afterDate1="";
				let dDate=new Date();
				switch(str){
					case "prev":
						aDate.setMonth(curMonth-1);
						break;
					case "next":
						aDate.setMonth(curMonth+1);
						break;
				}
				year=aDate.getFullYear();
				month=aDate.getMonth();
				lastDate=new Date(year,month-1,0);
				lastDays=lastDate.getDate();
				lastWeek=lastDate.getDay();
				
				
				curDate=new Date(year,month,0);
				curDays=curDate.getDate();
				curWeek=curDate.getDay();
				

				nextDate=new Date(year,month+1,0);
				nextDays=nextDate.getDate();
				nextWeek=nextDate.getDay();
				
				afterDate=new Date(year,month+2,0);
				afterDays=afterDate.getDate();
				afterWeek=afterDate.getDay();
				
				afterDate1=new Date(year,month+3,0);

				let lStart=7-lastWeek;
				let lEnd=42-lStart-curDays;
				let cStart=7-curWeek;
				let cEnd=42-cStart-nextDays;
				let nStart=7-nextWeek;
				let nEnd=42-nStart-afterDays;
				for(let i=lastDays-lStart+1;i<=lastDays;i++){
					curData.push({
						year:lastDate.getFullYear(),
						month:this.formatNum(lastDate.getMonth()+1),
						day:this.formatNum(i),
						type:"before",
						lunar:CALENDAR.solar2lunar(lastDate.getFullYear(), lastDate.getMonth()+1, i)
					});
				}
				for(let i=1;i<=curDays;i++){
					curData.push({
						year:curDate.getFullYear(),
						month:this.formatNum(curDate.getMonth()+1),
						day:this.formatNum(i),
						type:"current",
						lunar:CALENDAR.solar2lunar(curDate.getFullYear(), curDate.getMonth()+1, i)
					})
				};
				for(let i=1;i<=lEnd;i++){
					curData.push({
						year:nextDate.getFullYear(),
						month:this.formatNum(nextDate.getMonth()+1),
						day:this.formatNum(i),
						type:"after",
						lunar:CALENDAR.solar2lunar(nextDate.getFullYear(), nextDate.getMonth()+1, i)
					});
				}
				
				for(let i=curDays-cStart+1;i<=curDays;i++){
					nextData.push({
						year:curDate.getFullYear(),
						month:this.formatNum(curDate.getMonth()+1),
						day:this.formatNum(i),
						type:"before",
						lunar:CALENDAR.solar2lunar(curDate.getFullYear(), curDate.getMonth()+1, i)
					});
				}
				for(let i=1;i<=nextDays;i++){
					nextData.push({
						year:nextDate.getFullYear(),
						month:this.formatNum(nextDate.getMonth()+1),
						day:this.formatNum(i),
						type:"current",
						lunar:CALENDAR.solar2lunar(nextDate.getFullYear(), nextDate.getMonth()+1, i)
					})
				};
				for(let i=1;i<=cEnd;i++){
					nextData.push({
						year:afterDate.getFullYear(),
						month:this.formatNum(afterDate.getMonth()+1),
						day:this.formatNum(i),
						type:"after",
						lunar:CALENDAR.solar2lunar(afterDate.getFullYear(), afterDate.getMonth()+1, i)
					});
				}
				
				for(let i=nextDays-nStart+1;i<=nextDays;i++){
					afterData.push({
						year:nextDate.getFullYear(),
						month:this.formatNum(nextDate.getMonth()+1),
						day:this.formatNum(i),
						type:"before",
						lunar:CALENDAR.solar2lunar(nextDate.getFullYear(), nextDate.getMonth()+1, i)
					});
				}
				for(let i=1;i<=afterDays;i++){
					afterData.push({
						year:afterDate.getFullYear(),
						month:this.formatNum(afterDate.getMonth()+1),
						day:this.formatNum(i),
						type:"current",
						lunar:CALENDAR.solar2lunar(afterDate.getFullYear(), afterDate.getMonth()+1, i)
					})
				};
				for(let i=1;i<=nEnd;i++){
					afterData.push({
						year:afterDate1.getFullYear(),
						month:this.formatNum(afterDate1.getMonth()+1),
						day:this.formatNum(i),
						type:"after",
						lunar:CALENDAR.solar2lunar(afterDate1.getFullYear(), afterDate1.getMonth()+1, i)
					});
				}
				this.year=year;
				this.month=this.formatNum(month+1);
				switch(this.swiperIndex){
					case 0:
						this.dataList=[
							{
								data:nextData,
								year:nextDate.getFullYear(),
								month:nextDate.getMonth()+1
							},
							{
								data:curData,
								year:curDate.getFullYear(),
								month:curDate.getMonth()+1
							},
							{
								data:afterData,
								year:afterDate.getFullYear(),
								month:afterDate.getMonth()+1
							}
						];
						break;
					case 1:
						this.dataList=[
							{
								data:curData,
								year:curDate.getFullYear(),
								month:curDate.getMonth()+1
							},
							{
								data:nextData,
								year:nextDate.getFullYear(),
								month:nextDate.getMonth()+1
							},
							{
								data:afterData,
								year:afterDate.getFullYear(),
								month:afterDate.getMonth()+1
							}
						];
						break;
					case 2:
						this.dataList=[
							{
								data:afterData,
								year:afterDate.getFullYear(),
								month:afterDate.getMonth()+1
							},
							{
								data:curData,
								year:curDate.getFullYear(),
								month:curDate.getMonth()+1
							},
							{
								data:nextData,
								year:nextDate.getFullYear(),
								month:nextDate.getMonth()+1
							}
						];
						break	
				}
				let date=aDate
				this.dataList.map((v,k)=>{
					v.data.map((i,j)=>{
						let beforeFlag=new Date(i.year,i.month-1,i.day).getTime()-new Date(dDate.getFullYear(),dDate.getMonth(),dDate.getDate()).getTime()>=0?false:true;
						let afterFlag=new Date(i.year,i.month-1,i.day).getTime()-new Date(dDate.getFullYear(),dDate.getMonth(),dDate.getDate()).getTime()>0?true:false;
						i.disabledBefore=beforeFlag;
						i.disabledAfter=afterFlag;
						if(i.year==dDate.getFullYear()&&i.month==dDate.getMonth()+1&&i.day==dDate.getDate()){
							i.active=true;
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.w-calendar{
		width: 100%;
		position: fixed;
		left:0;
		top:0;
		/* #ifdef H5 */
		top:44px;
		/* #endif */
		width: 100%;
		height: 100%;
		background-color: #fff;
		transition: all 0.3s ease;
		z-index: 99999;
		.w-calendar-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 88rpx;
			position: relative;
			.prev,.next{
				font-size: 30rpx;
				position: relative;
				width: 40rpx;
				height: 40rpx;
			}
			.prev{
				padding-left: 20px;
				&:before{
					content: "";
					border:1px solid transparent;
					border-left:solid 1px #000;
					border-top:solid 1px #000;
					width: 20rpx;
					display: block;
					height: 20rpx;
					position: absolute;
					left:0;
					top:50%;
					transform: rotate(-45deg) translate(0,-50%);
				}
			}
			.next{
				padding-right: 20px;
				&:after{
					content: "";
					border:1px solid transparent;
					border-right:solid 1px #000;
					border-top:solid 1px #000;
					width: 20rpx;
					display: block;
					height: 20rpx;
					position: absolute;
					right:0;
					top:50%;
					transform: rotate(45deg) translate(0,-50%);
				}
			}
			.current{
				padding:0 10rpx;
				font-size: 32rpx;
			}
			.back{
				position: absolute;
				right: 0;
				top:50%;
				margin-top: -30rpx;
				background-color: #f00;
				padding:0 10rpx;
				height: 60rpx;
				line-height: 60rpx;
				color:#fff;
				font-size: 28rpx;
				text-align: center;
				border-radius: 30rpx 0 0 30rpx;
			}
		}
		swiper{
			height: 802rpx;
			overflow: hidden;
		}
		.w-calendar-item{
			.w-calendar-week{
				display: flex;
				border-bottom:solid 2rpx #eee;
				.w-week-item{
					flex:1;
					text-align: center;
					line-height: 88rpx;
					height: 88rpx;
					font-size: 30rpx;
				}
			}
			.w-calendar-day{
				display: flex;
				flex-wrap:wrap;
				overflow: hidden;
				/* height: 612rpx; */
				.w-day-item{
					width: calc(100% / 7);
					height: 100rpx;
					border-bottom:solid 2rpx #eee;
					.box{
						display: block;
						width: 80rpx;
						height: 80rpx;
						margin:10rpx auto;
						border-radius: 50%;
						text-align: center;
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
					text{
						font-size: 26rpx;
					}
				}
				.w-day-item.disabled{
					.box{
						color:#aaa;
					}
				}
				.w-day-item.disabled-before,.w-day-item.disabled-after{
					.box{
						color:#eee;
					}
				}
				.w-day-item.active{
					.box{
						background-color: #f00;
						color:#fff;
					}
				}
			}
		}
	}
</style>
