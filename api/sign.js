
import http from '@/utils/http'

export default {
	/*
	*
    * @param {*} param 查询 所有课程列表信息
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
	* 
	*/
	async getLessonList (params, loading = false, loadingText = "加载中...") {
		// debugger
	   const url = `/sign/classesApp/myPage`;
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
     * @param {*} param 查询指定课程的 今日试题,  点击 “去打卡” 按钮后，获取该课程的今日试题
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */
	async getTodayTestData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/sign/questionsApp/get`;
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
     * @param {*} param 查询排行榜  打卡天数、总天数数据
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
    */
	async getRankDayData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/sign/customerApp/myRank`;
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
     * @param {*} param 查询查询排行榜  排行list数据
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
    */	
	async getRankListData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/sign/customerApp/rank`;
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
     * @param {*} param 查询 学习日历  
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */
	async getLearnData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/sign/customerApp/rank`;
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
     * @param {*} param 查询报名课程信息  list 信息 ，find首页点击 立即报名 btn获取课程list 数据
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */ 
	async getContinuitySignUpData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/sign/classesApp/page`;
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
     * @param {*} 查询单个课程相信信息  ，点击 单个报名课程 获取单个课程详情信息
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */  
	async getContinuitySignUpData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/sign/classesApp/get`;
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
     * @param {*} 提交作业 按钮  提交 打卡内容和图片
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */  
	async loadImgAndContent (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/sign/clockInApp/save`;
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
     * @param {*} 获取 单个课程的 所有人的打卡记录
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */  
	async getAllSignData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/sign/clockInApp/allPage`;
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
     * @param {*} 对打卡记录进行点评（文字、图片、音频）
	 * @param {} loading  是否显示loading
	 * @param {} loadingText  loading 的文字
     */  
	async addComment (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/sign/customerApp/addComment`;
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
