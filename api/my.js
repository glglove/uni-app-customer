
import http from '@/utils/http'

export default {
	/*
	*
    * @param {*} param 查询 证书成就
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
	* 
	*/
	async getAchivementList (params, loading = false, loadingText = "加载中...") {
		// debugger
	   const url = `/my/certificateLogApp/page`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	},
	
    /**
     * 
     * @param {*} param查询 已打卡天数 和总天数信息，5.点击连续打卡icon，获取获取总排名，打卡天数
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */
	async getLearnRecord (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/clockInApp/pageByDate`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params,
			loading,
			loadingText
	   })
	},	
	
    /**
     * 
     * @param {*} param  获取反馈内容
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
    */
	async getHelpData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/feedBackApp/page`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	},	
		
    /**
     * 
     * @param {*} param 提交反馈
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
    */	
	async addQuestion (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/feedBackApp/save`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	},	
		
    /**
     * 
     * @param {*} param 地址回显 
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */
	async getAddressData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/certificateLogApp/get`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params,
			loading,
			loadingText
	   })
	},	
		
    /**
     * 
     * @param {*} param 查询物流
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */ 
	async getTransportData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/certificateLogApp/search`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	},	
	
    /**
     * 
     * @param {*} 添加修改地址
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */  
	async upDateAddress (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/certificateLogApp/update`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	},	
		
    /**
     * 
     * @param {*}查看学生所有的报名卡片
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */  
	async getJoinCards (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/customerApp/myJoinCard`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	},	
			
    /**
     * 
     * @param {*} 获取 回显设置的闹钟时间
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */  
	async getCallTime (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/customerApp/get`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	},		
			
    /**
     * 
     * @param {*} 修改闹钟的时间
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */  
	async changeCallTime (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/customerApp/update`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	},		
			
    /**
     * 
     * @param {*} 设定提醒闹钟
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */  
	async setCallClock (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/my/wxApp/sendMessage`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	},				
}
