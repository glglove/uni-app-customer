import base from './base';
// import { resolve } from '../../dist/npm/promise-polyfill/promise';


export default class comm extends base {


  /**
   * 短信验证码
   *
   * @param {phone: 手机号码, tenantId: 商户ID}
   * @param loading 是否显示loading
   * 
   * @return {"code":0,"message":"success","content":"3316"}
   */
  static smscode(param, loading = true) {
    const url = `${this.baseUrl}/member/getTextAuthorizationCode`;
    return this.post(url, param, loading);
  }

  // 语音验证码
  static voicecode(param, loading = true) {
    const url = `${this.baseUrl}/member/getVoiceAuthorizationCode`;
    return this.post(url, param, loading);
  }


  /**
   * 获取openId
   * 
   * @param {code: 微信登录码} param
   * 
   * @return {"code": 0, "message":"success", "content":{ "openid":"UV3osCbt8XPnq1KNm9LUDw"}}
   */
  static getOpenId(param, loading = false) {
    console.log(`${this.baseUrl}`)
    const url = `${this.baseUrl}/customerApp/login`;

    console.log( "打印获取openid时传给后端的参数---》", param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }

    console.log("----打印获取登陆注册用户信息时的 入参----：",paramsObj)
    return this.post('POST', paramsObj, loading);
  }

  /**
   * 微信一键登录
   * 
   * @param {code: 微信登录码} param
   * 
   * @return {"code": 0, "message":"success", "content":{ "openid":"UV3osCbt8XPnq1KNm9LUDw"}}
   */
  static xcxLogin(param, loading = true) {
    const url = `${this.baseUrl}/xcx/login`;
    return this.post(url, param, loading,false);
  }

  /**
   * 下拉刷新
   */
  static onlowerFresh ( url, param = {}, loading = true ) {
    var data = {

    }
    param = Object.assign(data, param);

    console.log( param );

    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }    
    return this.post( "POST", paramsObj, loading )
  }

  /**
   * 上拉刷新
   */
  static onUpperFresh ( url, param, loading = true ) {
    var data = {

    }
    param = Object.assign(data, param);

    console.log( param );
        
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }    
    return this.post( "POST", paramsObj, loading )
  }  

  /**
   * 全局中存放 推送码 formids 并提交给 后台保存
  */ 
 static async saveFormIds ( param ,loading=false) { 

    console.log(this);
    console.log( param );    
    // let formIds = wepy.$instance.globalData.gloabalFormIds;//获取全局数据中的推送码gloabalFomIds数组
    // if (!formIds) formIds = [];
    let data = {
      params: {
        formId: param.formId,
        deadTime: parseInt(new Date().getTime() / 1000)+604800, //计算7天后的过期时间时间戳
      },
      token: param.token,      
    }
    // formIds.push(data);//将data添加到数组的末尾
    // wepy.$instance.globalData.gloabalFormIds = formIds; //保存推送码并赋值给全局变量   
    // console.log(`gloabal中存放的gloabalFormIds----:`, wepy.$instance.globalData.gloabalFormIds )


    // 准备提交服务器保存formid
    console.log(`${this.baseUrl}`)
    const url = `${this.baseUrl}/wxApp/addFormId`;
    const paramsObj = {
      url: url,
      params: JSON.stringify( data )
    }    
    console.log("----打印获取登陆注册用户信息时的 入参----：",paramsObj)

    console.log(this)
    return this.post('POST', paramsObj, loading = false);       
  }  

  /**
   * 上传资源到服务器
   */
  static async upLoad ( param, loading = false ) {
    console.log(`-----打印网路的基础入口地址-----："${this.baseUrl}`)

    return new Promise(async ( resolve, reject)=>{
      let resInfo = []; // 存放上传成功后返回来的数据的集合

      var data = {
        url : `${this.baseUrl}/fileMappedApp/upload`,
        tempFilePath: [],
      }
      param = Object.assign(data, param);
      
      console.log( param );
  
      if( param && param.tempFilePaths && param.tempFilePaths.length ) {
        for (let i = 0; i< param.tempFilePaths.length;i++){
          let paramsObj = {
            url: param.url,
            tempFilePath:  param.tempFilePaths[i],
            totaltempFilePaths: param.tempFilePaths.length,
          }
          console.log("上传图片/音频的接口地址 和单个图片的临时地址------------", paramsObj)
          // 调用 上传的 方法
          let resData = await this.upload('file', paramsObj, loading);  
          // 返回结果放入 resInfo 数组中
          console.log( JSON.parse( resData ) );
          if( resData && JSON.parse( resData ).code ==1 && JSON.parse( resData ).data ){
            resInfo.push(  JSON.parse( resData ).data ) ;       
          }else {
            reject(`第 ${i+1} 张图上传失败，后台返回结果出错`)
            wx.showToast({
              title: '上传失败',
              icon: 'none',
              image: '',
              duration: 1500,
              mask: false,
              success: (result)=>{
                
              },
              fail: ()=>{},
              complete: ()=>{}
            });
          }
        }  
        resolve( resInfo )
        console.log("全部上传后打印后台返回的结果----------》", resInfo )
        return resInfo;
      }else {
        resolve( resInfo )
        return resInfo;
      }   
    })
  }  

  /**
   *  获取分享需要的 图片，后端将图片返回 
  */
  static async shairePic ( param, loading = true ) {

    const url = `${this.baseUrl}/customerApp/shareImg`;
    var data = {

    }
    param = Object.assign(data, param);
    console.log( param );
    const paramsObj = {
      url: url,
      params: JSON.stringify( param )
    }
    
    console.log("233434444444444444",paramsObj)
    return this.post('POST', paramsObj, loading = ""); 
  }
}

 







