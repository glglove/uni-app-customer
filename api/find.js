// import base from './base';
// import {axios} from 'axios'

module.exports =  {
	/*
	*
	* 获取find首页的list数据
	* 
	*/
	async getlistData (params, loading = false) {
	   const url = `/find/getlistData`;
	   var data = {}
	   params = Object.assign(data, params)
	   return this.$http({
		   method: 'POST',
		   url,
		   data: {
			  ...params 
		   }
	   })
	}
}
