import http from '@/utils/http'

export function getMessage(params, loading = false, loadingText = "加载中..."){
/*
*查询 所有课程列表信息
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