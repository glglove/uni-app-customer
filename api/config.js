 const miniproConfings = {
    miniproAppid: 'wx224bd53fdc4dd933', // 小程序appid
    miniproSecret: 'e93ec56f5785d73760577dbf4b05ab7f', // 小程序secret
    version: 'v20190805', // 小程序版本号
  }

 const urls = {
	//生产
	//  gateway: "https://locally.uieee.com",
	//  gateway: "https://service.yaya91.com:8495",
	//  gateway: "http://daka.natapp1.cc",
		// gateway: "http://localhost:5000",
		gateway: "http://192.168.1.108:5000",    // 这个为本机的ip 地址 端口号 设置的是 5000  主要是 app-plus 进行真机调试时 用 http://localhost:5000 调取接口时会请求失败
		// gateway: "https://www.kaoyandaka.com",
	//  mobile: "https://www.kaoyandaka.com",
	//  resource: "https://www.kaoyandaka.com",
	//  activityRoot: "https://www.kaoyandaka.com", // /marketing/activity?parentShopId=288920&activityId=2990977b-e7b0-43b8-915d-7985b2c042bb"
		pic_bg_Url: "https://www.kaoyandaka.com",
 }

 const urlConfigs = {
      // login: '/categories',  // 登陆
      // loginOut: '/categories',  // 登出
      // getHomeData: '/categories',  // 获取home首页数据
      // getListData: '/categories', // 获取home页面下面一级list数据
      // getDetailData: '/categories', // 获取list下一级的所有数据
      // getGraphData: '/categories', // 获取曲线图数据
      // gettacticsData: '/categories', // 获取策略list 的数据

      // 网络背景图片地址
      imgs_bg: {
        // find_bg: '/img/find_bg.png',  // find 首页背景地址
        find_bg: '/img/find_bg_gaitubao_com_350x646.png',  // find 首页背景地址 压缩了的
        // sign_bg: '/img/sign_bg.png',  // sign 首页背景地址
        sign_bg: '/img/sign_bg_gaitubao_com_375x667.png',  // sign 首页背景地址
        // my_bg: '/img/my_bg.png',  // my 首页背景地址
        my_bg: '/img/my_bg_gaitubao_com_375x667.png',  // my 首页背景地址
        notData: '/img/notData.png',  // 无数据的图片
        // certificate: '/img/certificate.png', // 证书图片
        certificate: '/img/certificate_gaitubao_com_343x497.png', // 证书图片
        // joinSign_bg: '/img/joinSign_bg.png',   // 立即打卡页面背景图片
        joinSign_bg: '/img/joinSign_bg_gaitubao_com_375x667.png',   // 立即打卡页面背景图片
        submitTaskSuccess: '/img/submitTaskSuccess.png', // 提交作业成功后的背景图片
        signUp_detail_content: '/img/signUp_detail_content.png', // 报名课程详情页中的内容图片02
        signUp_detail_top: '/img/signUp_detail_top.png',     // 报名课程详情页中的内容图片01
        sharePic_bg01: '/img/sharePic_bg01.png',     // 分享页海报图1
        sharePic_bg02: '/img/sharePic_bg02.png',     // 分享页海报图2
        jiantou_share: '/img/jiantou_share.png',     // 分享页箭头
        share_tishi: '/img/share_tishi.png',     // 分享页箭头页面
      },

      // tuweing—— find 页面接口
      login: '/customerApp/login',  // 登陆
      getLessonsData: '/classesApp/page',  // 获取报名课程list数据
      getLesson_detailData: '/classesApp/get', // 获取课程的详情信息
      getLesson_detail_signUpPic: '/classesApp/join', //获取 课程详情下面的报名获取一张报名的图片url
      getContinuitySignUp: '/clockInApp/pageByDate', // 获取 学习日历/学习记录 
      getTotalRank: '/customerApp/myRank', // 获取 总排名和打卡天数


      // tuweing—— sign 页面接口
      getSignLessonsList: '/classesApp/myPage', // 点击 打卡的 tabbar  获取 可以打卡的list数据
      getItemLessonRankDay: '/customerApp/myRank', //  点击 排行榜图标 获取 此课程的天数 和总排名
      getItemLessonRankList: '/customerApp/rank', // 点击 排行榜图标 获取 此课程打卡的 list 信息列表 
      getAppointDayRankList: '/clockInApp/PageByClass',  //点击课程上的学习日历,获取该学生对这门课程打卡的所有记录（分页）
      getQuestion: '/questionsApp/get',  //点击课程上的“去打卡”，获取该门课程的 今日试题
      signUpQuestion: '/clockInApp/save',  //点击 今日试题的  立即打卡 按钮
      getSignUpQuestionContent: '/clockInApp/allPage',  //今日试题 页面 获取所有的学生对该门课程的打卡内容（分页）只有打卡了之后才能看到
      addCollect: '/customerApp/addCollect', //对打卡点赞
      addComment: '/customerApp/addComment', //对打卡点评

      // tuweing -- my 页面接口
      getmyAchivementList: '/classesApp/certificatePage', //我的成就，分页列表
      getmylearnList: '/clockInApp/pageByDate', //点击学习记录,如果学生报名了11个课程，每天都打卡，那么这里第一页获取10条，第二页获取1条
      getmylearnList: '/clockInApp/pageByDate', //点击学习记录,如果学生报名了11个课程，每天都打卡，那么这里第一页获取10条，第二页获取1条
      getHelpList: '/feedBackApp/page', //点击 帮助中心，
      addQuestion: '/feedBackApp/save', //点击 帮助中心，


      // 图片上传、点赞、评论相关接口  /fileMappedApp/upload 这里的参数不是json格式，multipart/form-data，后台用"file"变量接收文件,这里不懂问我，
      //"file"：file对象
      uploadSound: '/fileMappedApp/upload', //上传音频文件
      shareImg: '/customerApp/shareImg',  // 分享
}
 export default {
  miniproConfings: miniproConfings,  // 小程序配置（appid、secret）
  baseUrl: urls.gateway,        // 小程序入口地址
  baseImgsUrl: urls.pic_bg_Url, // 背景图片
  baseUrlConfigs: urlConfigs,   // 接口名称
  // loginUrl: urls.gateway + "/login" ,  // 登陆接口地址
  // filesUrl: urls.gateway + "/FilesMgr" // 文件地址
 }
