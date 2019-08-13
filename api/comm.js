
import http from '@/utils/http'
export default {
	/*
	*
	* 注册登录接口
	* 
	*/
	async register (params, loading = false, loadingText = "加载中...") {
		debugger
	   const url = `/app/users/register`;
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
	* 获取openId
	* 
	* @param {code: 微信登录码} param
	* 
	* @return {"code": 0, "message":"success", "content":{ "openid":"UV3osCbt8XPnq1KNm9LUDw"}}
	*/
	getOpenId(params, loading = false, loadingText = "加载中...") {
		debugger
		const url = `/app/customerApp/login`;
		console.log( "打印获取openid时传给后端的参数---》", param );
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
	* 下拉刷新
	* 
	*
	*/
	onlowerFresh(url, params, loading = false, loadingText = "加载中...") {
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
	* 上拉刷新
	* 
	*
	*/
	onlowerFresh(url, params, loading = false, loadingText = "加载中...") {
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
	* 全局中存放 推送码 formids 并提交给 后台保存
	*/ 
	saveFormIds ( params, loading = false, loadingText = "加载中...") { 

		// let formIds = wepy.$instance.globalData.gloabalFormIds;//获取全局数据中的推送码gloabalFomIds数组
		// if (!formIds) formIds = [];
		let data = {
		  params: {
			formId: params.formId,
			deadTime: parseInt(new Date().getTime() / 1000)+604800, //计算7天后的过期时间时间戳
		  },  
		}
		// formIds.push(data);//将data添加到数组的末尾
		// wepy.$instance.globalData.gloabalFormIds = formIds; //保存推送码并赋值给全局变量   
		// console.log(`gloabal中存放的gloabalFormIds----:`, wepy.$instance.globalData.gloabalFormIds )


		// 准备提交服务器保存formid
		const url = `/app/wxApp/addFormId`;
		params = {
		  url: url,
		  params: data
		}    
	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })     
	},
	/**
	* 上传资源到服务器
	*/
	async upLoad ( params, loading = false, loadingText = "上传中..." ) {
		return new Promise(async ( resolve, reject)=>{
		  let resInfo = []; // 存放上传成功后返回来的数据的集合
		  var data = {
			url : `/app/fileMappedApp/upload`,
			tempFilePath: [],
		  }
		  params = Object.assign(data, params);

		  if( params && params.tempFilePaths && params.tempFilePaths.length ) {
			for (let i = 0; i< params.tempFilePaths.length;i++){
			  let paramsObj = {
				url: params.url,
				tempFilePath:  params.tempFilePaths[i],
				totaltempFilePaths: params.tempFilePaths.length,
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
				uni.showToast({
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
	},
	/**
	*  获取分享需要的 图片，后端将图片返回 
	*/
	shairePic ( params, loading = false, loadingText = "上传中..." ) {

		const url = `/app/customerApp/shareImg`;
		var data = {

		}
		params = Object.assign(data, params);
		console.log( params );
		const paramsObj = {
		  url: url,
		  params: params
		}

	   return http.post( url,{
			...params
	   },{
		   loading,
		   loadingText
	   })
	}	   
}
