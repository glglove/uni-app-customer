
import http from '@/utils/http'
export default {
	/*
	*
	* 注册登录接口
	* 
	*/
	async register (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/users/register`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.get( url,{
			...params,
			 loading,
			 loadingText
	   })
	}
}
