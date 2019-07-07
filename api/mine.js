import base from './base';

export default class mine extends base {

  /**
   * 
   * @param {*} param 查询 证书成就
   * @param {*} loading 
   */
  static async  getAchivementList ( param ,loading = false ) {
    const url = `${this.baseUrl}/certificateLogApp/page`;
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
   * @param {*} param 查询 已打卡天数 和总天数信息，5.点击连续打卡icon，获取获取总排名，打卡天数
   * @param {*} loading 
   */
  static async  getLearnRecord ( param ,loading = false ) {
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
    return this.post('POST', paramsObj, loading = true);
  }  


  /**
   * 
   * @param {*} param 查询排行榜 总天数 和总排名情况，find首页点击 排行榜icon 
   * @param {*} loading 
   */
  static async  getHelpData ( param ,loading = false ) {
    const url = `${this.baseUrl}/feedBackApp/page`;
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
   * @param {*} param 查询排行榜  list 排名信息 ，find首页点击 排行榜icon 获取排名 list 数据
   * @param {*} loading 
   */
  static async  addQuestion ( param ,loading = false ) {
    const url = `${this.baseUrl}/feedBackApp/save`;
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
   * @param {*} param 地址回显
   * @param {*} loading 
   */
  static async  getAddressData ( param ,loading = false ) {
    const url = `${this.baseUrl}/certificateLogApp/get`;
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
   * @param {*} param 查询物流
   * @param {*} loading 
   */
  static async  getTransportData ( param ,loading = false ) {
    const url = `${this.baseUrl}/certificateLogApp/search`;
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
   * @param {*} param 添加修改地址
   * @param {*} loading 
   */
  static async  upDateAddress ( param ,loading = false ) {
    const url = `${this.baseUrl}/certificateLogApp/update`;
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
   * @param {*} param 查看学生所有的报名卡片
   * @param {*} loading 
   */
  static async  getJoinCards ( param ,loading = false ) {
    const url = `${this.baseUrl}/customerApp/myJoinCard`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }
    
    return await this.post('POST', paramsObj, loading = true);
  }   


  /**
   * 
   * @param {*} param  回显设置的闹钟时间
   * @param {*} loading 
   */
  static async  getCallTime ( param ,loading = false ) {
    const url = `${this.baseUrl}/customerApp/get`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }
    
    return await this.post('POST', paramsObj, loading = false);
  }  

  /**
   * 
   * @param {*} param  修改闹钟的时间
   * @param {*} loading 
   */
  static async  changeCallTime ( param ,loading = false ) {
    const url = `${this.baseUrl}/customerApp/update`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }
    
    return await this.post('POST', paramsObj, loading = true);
  }   

  
  /**
   * 
   * @param {*} param 设定提醒闹钟
   * @param {*} loading 
   */
  static async  setCallClock ( param ,loading = false ) {
    const url = `${this.baseUrl}/wxApp/sendMessage`;
    var data = {
      params: {
        formId: param.formId,
      },
      token:param.token,
    }
    const paramsObj = {
      url: url,
      params: JSON.stringify( data )
    }
    
    return await this.post('POST', paramsObj, loading = true);
  }    

}
