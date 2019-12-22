<template>
	<container>
		<view id="paper" class="page" slot="container-slot">
			<!-- <tabbar-cmp :list="tabbarList"></tabbar-cmp> -->
			<view class="search"><i class="daka_iconfont icon-ali-sousu"></i>搜索</view>
			
			<view class="chat-list">
				<view class="chat" v-for="(chat,index) in chatList" :key="index">
					<view class="row" @tap="toChat(chat)">
						<view class="left">
							<image :src="chat.face"></image>
						</view>
						<view class="right">
							<view class="top">
								<view class="username">{{chat.username}}</view>
								<view class="time">{{chat.time}}</view>
							</view>
							<view class="bottom">
								<view class="msg">{{chat.msg}}</view>
								<view class="tis" v-if="chat.tisNum>0">{{chat.tisNum}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>		
				
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
				tabbarList:["",""],
				chatList:[
					{
						uid:1,
						username:"鲜果蔬专营店",
						face:"/static/img/im/face/face_1.jpg",
						time:"13:08",
						msg:"亲，20点前下单都是当天送达的",
						tisNum:1
					},
					{
						uid:2,
						username:"官店大欺客旗舰店",
						face:"/static/img/im/face/face_2.jpg",
						time:"13:05",
						msg:"问那么多干什么？不想买就滚~",
						tisNum:0
					},
					{
						uid:3,
						username:"妙不可言",
						face:"/static/img/im/face/face_3.jpg",
						time:"12:15",
						msg:"推荐一个商品呗？",
						tisNum:0
					},
					{
						uid:4,
						username:"茶叶专卖",
						face:"/static/img/im/face/face_4.jpg",
						time:"12:11",
						msg:"现在卖的都是未过青的茶哦",
						tisNum:0
					},
					{
						uid:5,
						username:"likeKiss客服",
						face:"/static/img/im/face/face_5.jpg",
						time:"12:10",
						msg:"你好，发福建快递多久送到的？",
						tisNum:0
					},
					{
						uid:6,
						username:"白开水",
						face:"/static/img/im/face/face_6.jpg",
						time:"12:10",
						msg:"在吗？",
						tisNum:0
					},
					{
						uid:7,
						username:"衣帽间的叹息",
						face:"/static/img/im/face/face_7.jpg",
						time:"11:56",
						msg:"新品上市，欢迎选购",
						tisNum:0
					},
					{
						uid:8,
						username:"景萧疏",
						face:"/static/img/im/face/face_8.jpg",
						time:"11:56",
						msg:"商品七天无理由退换的",
						tisNum:0
					},
					{
						uid:9,
						username:"文宁先生",
						face:"/static/img/im/face/face_9.jpg",
						time:"12:15",
						msg:"星期天再发货的",
						tisNum:0
					},
					{
						uid:10,
						username:"高端Chieh",
						face:"/static/img/im/face/face_10.jpg",
						time:"12:36",
						msg:"建议你直接先测量好尺码在选购的。",
						tisNum:0
					},
					{
						uid:11,
						username:"mode旗舰店",
						face:"/static/img/im/face/face_11.jpg",
						time:"12:40",
						msg:"新品5折，还有大量优惠券。",
						tisNum:0
					},
					{
						uid:12,
						username:"敏萘客服",
						face:"/static/img/im/face/face_12.jpg",
						time:"12:36",
						msg:"还没有用，等我明天早上试一下",
						tisNum:0
					},
					{
						uid:13,
						username:"春天里的花",
						face:"/static/img/im/face/face_13.jpg",
						time:"12:36",
						msg:"适用于成年人的，小孩不适用的",
						tisNum:0
					},
					{
						uid:14,
						username:"电脑外设专业户",
						face:"/static/img/im/face/face_13.jpg",
						time:"12:36",
						msg:"把上面的螺丝拆下来，把铁片撬开就能看见了",
						tisNum:0
					},
					{
						uid:15,
						username:"至善汽车用品",
						face:"/static/img/im/face/face_15.jpg",
						time:"12:36",
						msg:"这个产品是原车配件，完美装上的",
						tisNum:0
					}
				]				
			}
		},
		methods:{
			toChat(chat){
				uni.navigateTo({
					// url:"chat/chat?name="+chat.username
					url: "../packageC/paper/chat/chat?name=" + chat.username
				})
			}			
		}
	}
</script>

<style lang="less" scoped>
	.search>i{
		color: red
	}
	
	
</style>
