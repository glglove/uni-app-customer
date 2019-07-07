import base from './base';

export default class sign extends base {

  /**
   * 
   * @param {*} param 查询 所有课程列表信息
   * @param {*} loading 
   */
  static async  getLessonList ( param ,loading = false ) {
    const url = `${this.baseUrl}/classesApp/myPage`;
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
   * @param {*} param 查询指定课程的 今日试题,  点击 “去打卡” 按钮后，获取该课程的今日试题
   * @param {*} loading 
   */
  static async  getTodayTestData ( param ,loading = false ) {
    const url = `${this.baseUrl}//questionsApp/get`;

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
   * @param {*} param 查询排行榜  打卡天数、总天数数据
   * @param {*} loading 
   */
  static async  getRankDayData ( param ,loading = false ) {
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
    return this.post('POST', paramsObj, loading = false);
  }   


  /**
   * 
   * @param {*} param 查询排行榜  排行list数据
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
   * @param {*} param 查询 学习日历   
   * @param {*} loading 
   */
  static async  getLearnData ( param ,loading = false ) {
    const url = `${this.baseUrl}/clockInApp/pageByClass`;
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
  static async  getContinuitySignUpData ( param ,loading = false ) {
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
   * @param {*} param 查询单个课程相信信息  ，点击 单个报名课程 获取单个课程详情信息
   * @param {*} loading 
   */
  static async  getContinuitySignUpData ( param ,loading = false ) {
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
   * @param {*} param 提交作业 按钮  提交 打卡内容和图片
   * @param {*}  
   */
  static async loadImgAndContent( param ,loading = false ) {
    const url = `${this.baseUrl}/clockInApp/save`;
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
   * @param {*} param 获取 单个课程的 所有人的打卡记录
   * @param {*}  
   */
  static async getAllSignData ( param ,loading = false ) {
    const url = `${this.baseUrl}/clockInApp/allPage`;
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
   * @param {*} 对打卡记录进行点评（文字、图片、音频）
   * @param {*}  
  */
  static async addComment ( param ,loading = false ) {
    const url = `${this.baseUrl}/customerApp/addComment`;
    var data = {
      params: {
        id: "",
        commentContent: "",
        filePath: "",
      }
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
  
}
