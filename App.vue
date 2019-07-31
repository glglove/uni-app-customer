<style lang="less" src="./static/style/base.less"></style>
<style lang="less" src="./static/style/icons.less"></style>
<!-- <style lang="less" src="./static/style/iconfont.less"></style> -->
<style lang="less">
	// .container {
	//   height: 100%;
	//   display: flex;
	//   flex-direction: column;
	//   align-items: center;
	//   justify-content: space-between;
	//   box-sizing: border-box;
	// }
</style>	

<script>
	// import getEnterType from '@/utils/miniProSceneType'

	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 小程序检查是否有版本更新 采用条件判断来编译
			// #ifdef MP-WEIXIN
			// this.checkNewVersion()
			// #endif
		},
		onShow: function() {
			console.log('App Show')
				
		},
		onHide: function() {
			console.log('App Hide')
			
		},
		// 检查是否有版本更新
		checkNewVersion () {
			// 用户版本更新
			// debugger
			if (wx.canIUse("getUpdateManager")) {
			  let updateManager = wx.getUpdateManager();
			  updateManager.onCheckForUpdate((res) => {
				// 请求完新版本信息的回调
				console.log(res.hasUpdate);
			  })
			  updateManager.onUpdateReady(() => {
				// debugger;
				wx.showModal({
				  title: '更新提示',
				  content: '新版本已经准备好，是否重启应用？',
				  success: (res) => {
					if (res.confirm) {
					  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
					  updateManager.applyUpdate();
					} else if (res.cancel) {
					  return false;
					}
				  }
				})
			  })
			  updateManager.onUpdateFailed(() => {
				// 新的版本下载失败
				wx.hideLoading();
				wx.showModal({
				  title: '升级失败',
				  content: '新版本下载失败，请检查网络！',
				  showCancel: false
				});
			  });
			}  
		}			
	}
</script>

