
import http from '@/utils/http'

export default {
	/*
	*
    * @param {*} param 查询 已打卡天数 和总天数信息，点击连续打卡icon，获取获取总排名，打卡天数
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
	*/
	async getRankDayData (params, loading = false, loadingText = "加载中...") {
		// debugger
		// params 的格式如下:
		// params = {
		// 	params:{
		// 		
		// 	},
		//  page: {
          // pageNum: 1,
          // pageSize: 10 
           // }
		// }
	   const url = `/find/customerApp/myRank`;
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
     * @param {*} param 查询 学习打卡记录信息，5.点击连续打卡icon，获取学习记录,如果学生报名了11个课程，每天都打卡，那么这里第一页获取10条，第二页获取1条
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
    */
	async getContinuitySignUpData (params, loading = false, loadingText = "加载中...") {
		// debugger
	   const url = `/find/clockInApp/pageByDate`;
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
     * @param {*} param 查询排行榜  list 排名信息 ，find首页点击 排行榜icon 获取排名 list 数据
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
    */
	async getRankListData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/find/customerApp/myRank`;
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
     * @param {*} param 查询报名课程信息  list 信息 ，find首页点击 立即报名 btn获取课程list 数据
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
    */	
	async getLessonListData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/find/classesApp/page`;
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
     * @param {*} param 查询单个课程相信信息  ，点击 单个报名课程 获取单个课程详情信息
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
     */
	async getlessonListDetailData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/find/classesApp/get`;
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
     * @param {*} param 单个课程详情信息中点击 立即报名，返回报名卡图片URL
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
     */ 
	async signUpLesson (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/find/classesApp/join`;
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
     * @param {*} 点赞打卡的接口
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
     */  
	async addCollect (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/find/customerApp/addCollect`;
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
     * @param {*} 取消点赞
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
     */  
	async cancelCollect (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/find/customerApp/cancelCollect`;
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
     * @param {*} 生产海报的接口 传userid
    * @param {} loading  是否显示loading
	* @param {} loadingText  loading 的文字
     */  
	async getShareData (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/find/customerApp/getShareData`;
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
