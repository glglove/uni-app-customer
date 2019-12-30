import http from '@/utils/http'

export function getMessage(params, loading = false, loadingText = "加载中..."){
/*
*查询 未读消息
* @param {*} id  用户id
* 
*/
   const url = `/paper/getMessage`;
   var data = {}
   params = Object.assign(data, params)
   return http.post( url,{
		...params
   },{
	   loading,
	   loadingText
   })
}



export function saveMessage(params, loading = false, loadingText = "加载中..."){
/*
* 保存 未读消息（socket消息 未发送时,将 数据存入数据库表中）
* @param {*} id  用户id
* 
*/
   const url = `/paper/saveMessage`;
   var data = {}
   params = Object.assign(data, params)
   return http.post( url,{
		...params
   },{
	   loading,
	   loadingText
   })
}


export function deleteMessage(params, loading = false, loadingText = "加载中..."){
/*
* 保存 未读消息（删除socket消息）
* @param {*} id  用户id
* 
*/
   const url = `/paper/deleteMessage`;
   var data = {}
   params = Object.assign(data, params)
   return http.post( url,{
		...params
   },{
	   loading,
	   loadingText
   })
}