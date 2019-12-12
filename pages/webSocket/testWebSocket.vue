<!--webSoket测试页面-->

<template>
    <container>
        <view id="websockets" class="page" slot="container-slot">
            <button type="primary" @tap="clickRequest">点击发送请求</button>
            <button type="primary" @tap="leave">离开页面</button>
        </view>
    </container>
</template>
 
<script>
	import { mapGetters } from 'vuex'	
	import { miniProApi } from '@/utils/mixins.js'
	export default {
		mixins:[
			miniProApi
		],
		onLoad() {

		},
		data() {
			return {

			}
		},
		computed:{
			...mapGetters([
				'userId',
				'userInfo',
				'userToken',
				'socketStatus'
			])
		},
		// 关闭websocket【必须在实例销毁之前关闭,否则会是underfined错误】
		beforeDestroy() {
			
		},
		methods: {
			clickRequest(){
				debugger
				// 先监测是否已经登陆
				let res = this.checkLogin()
				if(!res){
					// 未登陆
				}else {
					debugger
					// 已登陆
					if(this.socketStatus){
						// socket已经连接
						// 向socket 服务器发送 一个消息
						this.$socket.emit("testMsg", {
							userId: this.userId,
							from_Id: 57,
							from_Token: 'oh_g55CR__hDw53k1WHjDfoCGZh0',
							userInfo: this.userInfo,
							userToken: this.userToken, // oh_g55CR__hDw53k1WHjDfoCGZh0  
							to_Id: 124,
							to_Token: 'oh_g55LwPbFhIpOqPYaaUz5i3VNc',  // fengsheng 的token
							to_msg: `这是发送给用户id：57的消息`,
							to_url: '/pages/my/my',
							to_url_type: 'switchTab', //  "switchTab"  "redirectTo"  "navigateTo" "reLaunch"
						})		
						console.log("客户端向socket服务器 发送用户信息成功")						
					}else {
						this.toast("当前socket 连接是断开的")
						console.log("当前socket 连接是断开的")
					}
				}
			},
			leave() {
                debugger
				// this.$uniReLaunch("/pages/tabbar/wallet/wallet")
				// 离开此页面时 关闭socket
				// this.$socket.close()
				// this.$store.dispatch("setSocketStatus", false)
				// console.log("主动关闭socket 服务器成功")
			}
		}
	}
</script>
