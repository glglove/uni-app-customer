
import http from '@/utils/http'

export default {
	/*
	*
    * @param {*} param 查询 已打卡天数 和总天数信息，点击连续打卡icon，获取获取总排名，打卡天数
    * @param {*} loading 
	* 
	*/
	async getRankDayData (params) {
		debugger
	   const url = `/find/customerApp/myRank`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params 
	   })
	},
	
    /**
     * 
     * @param {*} param 查询 学习打卡记录信息，5.点击连续打卡icon，获取学习记录,如果学生报名了11个课程，每天都打卡，那么这里第一页获取10条，第二页获取1条
     * @param {*} loading 
     */
	async getContinuitySignUpData (params) {
		debugger
	   const url = `/find/clockInApp/pageByDate`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params 
	   })
	},	
	
    /**
     * 
     * @param {*} param 查询排行榜  list 排名信息 ，find首页点击 排行榜icon 获取排名 list 数据
     * @param {*} loading 
    */
	async getRankListData (params) {
		debugger
	   const url = `/find/customerApp/rank`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params 
	   })
	},	
		
    /**
     * 
     * @param {*} param 查询报名课程信息  list 信息 ，find首页点击 立即报名 btn获取课程list 数据
     * @param {*} loading 
    */	
	async getLessonListData (params) {
		debugger
	   const url = `/find/classesApp/page`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params 
	   })
	},	
		
    /**
     * 
     * @param {*} param 查询单个课程相信信息  ，点击 单个报名课程 获取单个课程详情信息
     * @param {*} loading 
     */
	async getlessonListDetailData (params) {
		debugger
	   const url = `/find/classesApp/get`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params 
	   })
	},	
		
    /**
     * 
     * @param {*} param 单个课程详情信息中点击 立即报名，返回报名卡图片URL
     * @param {*} loading 
     */ 
	async SignUpLesson (params) {
		debugger
	   const url = `/find/classesApp/join`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params 
	   })
	},	
	
    /**
     * 
     * @param {*} 点赞打卡的接口
     * @param {*} loading 
     */  
	async addCollect (params) {
		debugger
	   const url = `/find/customerApp/addCollect`;
	   var data = {}
	   params = Object.assign(data, params)
	   return http.post( url,{
			...params 
	   })
	},		
}
