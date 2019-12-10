import store from '@/store/index.js'
import { getDeviceApi } from '@/utils/deviceApi.js'
import configs from '@/api/config.js'
import io from 'socket.io-client'   // 客户端引入socket.io-client
// // 建立socket 连接 此时会自动触发 后台的connection 事件
// let socket = io(`${configs.wsUrl}`)
// // 将socket 对象挂载在 Vue实例的原型上
// Vue.prototype.$socket = socket		
export default {
    onConnect(socket){
        // 监听后台传过来的消息
        socket.on("connectionSuccess",function(data){
            console.log("app onLaunch 中 ----------------socket已成功连接！")
            // 连接成功后 store 中存放
            store.dispatch("setSocketStatus", true)
            // 发送一个 bindId 的事件
            socket.emit("bindId",{
                // userId: store.app.userId
                userId: '57',
                token: 'oh_g55CR__hDw53k1WHjDfoCGZh0'
            })
            console.log("客户端 发送bindId事件", JSON.stringify({
                userId: '57',
                token: 'oh_g55CR__hDw53k1WHjDfoCGZh0'
            }))
        })	
        
		// 监听 socket服务端给指定的客户端发送的 消息
        socket.on("emitFixedCustomerInfo", function(data){
            console.log("接受服务端给特定客户端发送的消息")
            // getDeviceApi().showToast({
            //     title: JSON.stringify(data)
            // })
            getDeviceApi().showModal({
				 title: '提示',
				 content: '您有新消息？',
				 showCancel: true,//是否显示取消按钮
				 cancelText:"取消",//默认是“取消”
				 cancelColor:'skyblue',//取消文字的颜色
				 confirmText:"查看",//默认是“确定”
				 confirmColor: 'skyblue',//确定文字的颜色
				 success: function (res) {
					if (res.cancel) {
					   //点击取消,默认隐藏弹框
					   
					} else {
					    //点击确定
					    let toUrlType = 'navigateTo'
					    if(data.to_url_type){
						   toUrlType = data.to_url_type 
						}
						debugger
						switch (toUrlType){
							case 'navigateTo':
								getDeviceApi().navigateTo({
									url: data.to_url
								})
								break;
							case 'switchTab':
								getDeviceApi().switchTab({
									url: data.to_url
								})
								break;
							case 'reLaunch':
								getDeviceApi().reLaunch({
									url: data.to_url
								})
								break;	
							case 'redirectTo':
								getDeviceApi().redirectTo({
									url: data.to_url
								})
								break;																
							default:
								getDeviceApi().switchTab({
									url: '/pages/find/find'
								})							
								break;
						}
					}
				 },
				 fail: function (res) { },//接口调用失败的回调函数
				 complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
			})			
        })  
    },	  
}