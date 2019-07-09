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
}
