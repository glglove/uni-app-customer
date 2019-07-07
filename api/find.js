import base from './base';
import {axios} from 'axios'

export default class find extends base {
	
	/*
	*
	* 获取find首页的list数据
	* 
	*/
   static async getlistData (params, loading = false) {
	   const url = `/find/getlistData`;
	   var data = {}
	   params = Object.assign(data, params)
	   // const parmasObj = {
		  //  parmas: JSON.stringify(params)
	   // }
	   return this.$http({
		   method: 'get',
		   url,
		   data: {
			  ...params 
		   }
	   })
   }
	
	
	
	
  /**
   * 
   * @param {*} param 查询 学习打卡记录信息，5.点击连续打卡icon，获取学习记录,如果学生报名了11个课程，每天都打卡，那么这里第一页获取10条，第二页获取1条
   * @param {*} loading 
   */
  static async  getContinuitySignUpData ( param ,loading = false ) {
    const url = `${this.baseUrl}/clockInApp/pageByDate`;
    var data = {

    }
    param = Object.assign(data, param);

    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }

    console.log("233434444444444444",paramsObj)
    return this.post('POST', paramsObj, loading = false);
  }

  /**
   * 
   * @param {*} param 查询 已打卡天数 和总天数信息，5.点击连续打卡icon，获取获取总排名，打卡天数
   * @param {*} loading 
   */
  static async  getRankDayData ( param , loading = false ) {
    const url = `${this.baseUrl}/customerApp/myRank`;

    var data = {

    }
    param = Object.assign(data, param);

    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }

    console.log("233434444444444444",paramsObj)
    return this.post('POST', paramsObj, loading = false  );
  }  
 

  /**
   * 
   * @param {*} param 查询排行榜  list 排名信息 ，find首页点击 排行榜icon 获取排名 list 数据
   * @param {*} loading 
   */
  static async  getRankListData ( param ,loading = false ) {
    const url = `${this.baseUrl}/customerApp/rank`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }

    console.log("233434444444444444",paramsObj)
    return this.post('POST', paramsObj, loading = false);
  }   

  /**
   * 
   * @param {*} param 查询报名课程信息  list 信息 ，find首页点击 立即报名 btn获取课程list 数据
   * @param {*} loading 
   */
  static async  getLessonListData ( param ,loading = false ) {
    const url = `${this.baseUrl}/classesApp/page`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }

    console.log("233434444444444444",paramsObj)
    return this.post('POST', paramsObj, loading = true);
  }    
  
  
  /**
   * 
   * @param {*} param 查询单个课程详情信息  ，点击 单个报名课程 获取单个课程详情信息
   * @param {*} loading 
   */
  static async  getlessonListDetailData ( param ,loading = false ) {
    const url = `${this.baseUrl}/classesApp/get`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }

    console.log("233434444444444444",paramsObj)
    return this.post('POST', paramsObj, loading = true);
  }   

  
  /**
   * 
   * @param {*} param 单个课程详情信息中点击 立即报名，返回报名卡图片URL
   * @param {*} loading 
   */
  static async  SignUpLesson ( param ,loading = false ) {
    const url = `${this.baseUrl}/classesApp/join`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }
    
    console.log("233434444444444444",paramsObj)
    return this.post('POST', paramsObj, loading = true);
  }    




  /**
   * 
   * @param {*} 点赞打卡的接口
   * @param {*} loading 
   */
  static async addCollect( param ,loading = false ) {
    const url = `${this.baseUrl}/customerApp/addCollect`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }
    console.log("233434444444444444",paramsObj)
    return this.post('POST', paramsObj, loading = false);
  } 
  




  
  /**
   * 
   * @param {*} 取消点赞的接口
   * @param {*} loading 
   */
  static async cancelCollect( param ,loading = false ) {
    const url = `${this.baseUrl}/customerApp/cancelCollect`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }
    console.log("233434444444444444",paramsObj)
    return this.post('POST', paramsObj, loading = false);
  }    
  
  
 /**
   * 
   * @param {*} 生成海报的接口 传入 userid
   * @param {*} loading 
   */
  static async getShareData( param ,loading = false ) {
    const url = `${this.baseUrl}/customerApp/getShareData`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      // params: JSON.stringify( param )
      params: param 
    }
    console.log("233434444444444444",paramsObj)
    return await this.get('GET', paramsObj, loading = false);
  }   


}
