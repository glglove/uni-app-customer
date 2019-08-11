(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ "../../../../../git-nodeProgram/uni-app-customer/api/base.js":
/*!*******************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/api/base.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "../../../../../git-nodeProgram/uni-app-customer/api/config.js"));
var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

// 创建axios实例
var http = _axios.default.create({
  //   baseURL: process.env.BASE_API,
  // method: 'get', // 默认值
  baseURL: 'http://localhost:5000',
  timeout: 50000, // 请求超时时间
  // 用于请求之前对请求数据进行操作
  // 只用当请求方法为‘PUT’，‘POST’和‘PATCH’时可用
  // 最后一个函数需return出相应数据
  // 可以修改headers
  // 	transformRequest: [function (data, headers) {
  // 	// 可以对data做任何操作
  // 
  // 		return data;
  // 	}],  
  // 用于对相应数据进行处理
  // 它会通过then或者catch
  // 	transformResponse: [function (data) {
  // 	// 可以对data做任何操作
  // 
  // 		return data;
  // 	}],	
  // 是否携带cookie信息
  withCredentials: false, // default	
  // 响应格式
  // 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认值是json

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // 处理上传进度事件
  onUploadProgress: function onUploadProgress(progressEvent) {
    // Do whatever you want with the native progress event
  },

  // 处理下载进度事件
  onDownloadProgress: function onDownloadProgress(progressEvent) {
    // Do whatever you want with the native progress event
  },

  // 设置http响应内容的最大长度
  maxContentLength: 2000,

  // 定义可获得的http响应状态码
  // return true、设置为null或者undefined，promise将resolved,否则将rejected
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  // 最大重定向次数？没用过不清楚
  maxRedirects: 5, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  // httpAgent: new http.Agent({ keepAlive: true }),
  // httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' defines the hostname and port of the proxy server
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  // 代理
  proxy: {
    // host: '127.0.0.1',
    // port: 9000,
    // auth: {
    //   username: 'mikeymike',
    //   password: 'rapunz3l'
    // }
  }

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  // 用于取消请求？又是一个不知道怎么用的配置项
  // cancelToken: new CancelToken(function (cancel) {
  // })	
});

// request拦截器
http.interceptors.request.use(
function (config) {
  config.headers['Content-Type'] = 'application/json'; // 关键所在
  return config;
},
function (error) {
  console.log(error); // for debug
  Promise.reject(error);
});var



base = function base() {_classCallCheck(this, base);};exports.default = base;_defineProperty(base, "imgs_bg",
_config.default.baseUrlConfigs.imgs_bg);_defineProperty(base, "miniproConfings",
_config.default.miniproConfings);_defineProperty(base, "baseUrl",
_config.default.baseUrl);_defineProperty(base, "baseInterfaceMap",
_config.default.baseUrlConfigs);_defineProperty(base, "$http",
http);

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/api/comm.js":
/*!*******************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/api/comm.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http */ "../../../../../git-nodeProgram/uni-app-customer/utils/http.js"));var _register$getOpenId$o;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default = (_register$getOpenId$o = {

  /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 注册登录接口
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */
  register: function () {var _register = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {var loading,loadingText,url,data,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:loading = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;loadingText = _args.length > 2 && _args[2] !== undefined ? _args[2] : "加载中...";
              debugger;
              url = "/app/users/register";
              data = {};
              params = Object.assign(data, params);return _context.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context.stop();}}}, _callee, this);}));function register(_x) {return _register.apply(this, arguments);}return register;}(),



  /**
                                                                                                                                                                                                   * 获取openId
                                                                                                                                                                                                   * 
                                                                                                                                                                                                   * @param {code: 微信登录码} param
                                                                                                                                                                                                   * 
                                                                                                                                                                                                   * @return {"code": 0, "message":"success", "content":{ "openid":"UV3osCbt8XPnq1KNm9LUDw"}}
                                                                                                                                                                                                   */
  getOpenId: function getOpenId(params) {var loading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var loadingText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "加载中...";
    var url = "/app/customerApp/login";
    console.log("打印获取openid时传给后端的参数---》", param);
    var data = {};
    params = Object.assign(data, params);
    return _http.default.post(url, _objectSpread({},
    params),
    {
      loading: loading,
      loadingText: loadingText });

  },

  /**
     * 下拉刷新
     * 
     *
     */
  onlowerFresh: function onlowerFresh(url, params) {var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var loadingText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "加载中...";
    var data = {};
    params = Object.assign(data, params);
    return _http.default.post(url, _objectSpread({},
    params),
    {
      loading: loading,
      loadingText: loadingText });

  } }, _defineProperty(_register$getOpenId$o, "onlowerFresh", function onlowerFresh(






url, params) {var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var loadingText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "加载中...";
  var data = {};
  params = Object.assign(data, params);
  return _http.default.post(url, _objectSpread({},
  params),
  {
    loading: loading,
    loadingText: loadingText });

}), _defineProperty(_register$getOpenId$o, "saveFormIds", function saveFormIds(




params) {var loading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var loadingText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "加载中...";

  // let formIds = wepy.$instance.globalData.gloabalFormIds;//获取全局数据中的推送码gloabalFomIds数组
  // if (!formIds) formIds = [];
  var data = {
    params: {
      formId: params.formId,
      deadTime: parseInt(new Date().getTime() / 1000) + 604800 //计算7天后的过期时间时间戳
    }

    // formIds.push(data);//将data添加到数组的末尾
    // wepy.$instance.globalData.gloabalFormIds = formIds; //保存推送码并赋值给全局变量   
    // console.log(`gloabal中存放的gloabalFormIds----:`, wepy.$instance.globalData.gloabalFormIds )


    // 准备提交服务器保存formid
  };var url = "/app/wxApp/addFormId";
  params = {
    url: url,
    params: data };

  return _http.default.post(url, _objectSpread({},
  params),
  {
    loading: loading,
    loadingText: loadingText });

}), _defineProperty(_register$getOpenId$o, "upLoad", function () {var _upLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(



  params) {var _this = this;var loading,loadingText,_args3 = arguments;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:loading = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;loadingText = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : "上传中...";return _context3.abrupt("return",
            new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(resolve, reject) {var resInfo, data, i, paramsObj, resData;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                        resInfo = []; // 存放上传成功后返回来的数据的集合
                        data = {
                          url: "/app/fileMappedApp/upload",
                          tempFilePath: [] };

                        params = Object.assign(data, params);if (!(

                        params && params.tempFilePaths && params.tempFilePaths.length)) {_context2.next = 21;break;}
                        i = 0;case 5:if (!(i < params.tempFilePaths.length)) {_context2.next = 16;break;}
                        paramsObj = {
                          url: params.url,
                          tempFilePath: params.tempFilePaths[i],
                          totaltempFilePaths: params.tempFilePaths.length };

                        console.log("上传图片/音频的接口地址 和单个图片的临时地址------------", paramsObj);
                        // 调用 上传的 方法
                        _context2.next = 10;return _this.upload('file', paramsObj, loading);case 10:resData = _context2.sent;
                        // 返回结果放入 resInfo 数组中
                        console.log(JSON.parse(resData));
                        if (resData && JSON.parse(resData).code == 1 && JSON.parse(resData).data) {
                          resInfo.push(JSON.parse(resData).data);
                        } else {
                          reject("\u7B2C ".concat(i + 1, " \u5F20\u56FE\u4E0A\u4F20\u5931\u8D25\uFF0C\u540E\u53F0\u8FD4\u56DE\u7ED3\u679C\u51FA\u9519"));
                          uni.showToast({
                            title: '上传失败',
                            icon: 'none',
                            image: '',
                            duration: 1500,
                            mask: false,
                            success: function success(result) {

                            },
                            fail: function fail() {},
                            complete: function complete() {} });

                        }case 13:i++;_context2.next = 5;break;case 16:

                        resolve(resInfo);
                        console.log("全部上传后打印后台返回的结果----------》", resInfo);return _context2.abrupt("return",
                        resInfo);case 21:

                        resolve(resInfo);return _context2.abrupt("return",
                        resInfo);case 23:case "end":return _context2.stop();}}}, _callee2, this);}));return function (_x3, _x4) {return _ref.apply(this, arguments);};}()));case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function upLoad(_x2) {return _upLoad.apply(this, arguments);}return upLoad;}()), _defineProperty(_register$getOpenId$o, "shairePic", function shairePic(






params) {var loading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var loadingText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "上传中...";

  var url = "/app/customerApp/shareImg";
  var data = {};


  params = Object.assign(data, params);
  console.log(params);
  var paramsObj = {
    url: url,
    params: params };


  return _http.default.post(url, _objectSpread({},
  params),
  {
    loading: loading,
    loadingText: loadingText });

}), _register$getOpenId$o);exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/api/config.js":
/*!*********************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/api/config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _urlConfigs;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var miniproConfings = {
  miniproAppid: 'wx224bd53fdc4dd933', // 小程序appid
  miniproSecret: 'e93ec56f5785d73760577dbf4b05ab7f', // 小程序secret
  version: 'v20190805' // 小程序版本号
};

var urls = {
  //生产
  //  gateway: "https://locally.uieee.com",
  //  gateway: "https://service.yaya91.com:8495",
  //  gateway: "http://daka.natapp1.cc",
  gateway: "http://localhost:5000",
  // gateway: "https://www.kaoyandaka.com",
  //  mobile: "https://www.kaoyandaka.com",
  //  resource: "https://www.kaoyandaka.com",
  //  activityRoot: "https://www.kaoyandaka.com", // /marketing/activity?parentShopId=288920&activityId=2990977b-e7b0-43b8-915d-7985b2c042bb"
  pic_bg_Url: "https://www.kaoyandaka.com" };


var urlConfigs = (_urlConfigs = {
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
    find_bg: '/img/find_bg_gaitubao_com_350x646.png', // find 首页背景地址 压缩了的
    // sign_bg: '/img/sign_bg.png',  // sign 首页背景地址
    sign_bg: '/img/sign_bg_gaitubao_com_375x667.png', // sign 首页背景地址
    // my_bg: '/img/my_bg.png',  // my 首页背景地址
    my_bg: '/img/my_bg_gaitubao_com_375x667.png', // my 首页背景地址
    notData: '/img/notData.png', // 无数据的图片
    // certificate: '/img/certificate.png', // 证书图片
    certificate: '/img/certificate_gaitubao_com_343x497.png', // 证书图片
    // joinSign_bg: '/img/joinSign_bg.png',   // 立即打卡页面背景图片
    joinSign_bg: '/img/joinSign_bg_gaitubao_com_375x667.png', // 立即打卡页面背景图片
    submitTaskSuccess: '/img/submitTaskSuccess.png', // 提交作业成功后的背景图片
    signUp_detail_content: '/img/signUp_detail_content.png', // 报名课程详情页中的内容图片02
    signUp_detail_top: '/img/signUp_detail_top.png', // 报名课程详情页中的内容图片01
    sharePic_bg01: '/img/sharePic_bg01.png', // 分享页海报图1
    sharePic_bg02: '/img/sharePic_bg02.png', // 分享页海报图2
    jiantou_share: '/img/jiantou_share.png', // 分享页箭头
    share_tishi: '/img/share_tishi.png' // 分享页箭头页面
  },

  // tuweing—— find 页面接口
  login: '/customerApp/login', // 登陆
  getLessonsData: '/classesApp/page', // 获取报名课程list数据
  getLesson_detailData: '/classesApp/get', // 获取课程的详情信息
  getLesson_detail_signUpPic: '/classesApp/join', //获取 课程详情下面的报名获取一张报名的图片url
  getContinuitySignUp: '/clockInApp/pageByDate', // 获取 学习日历/学习记录 
  getTotalRank: '/customerApp/myRank', // 获取 总排名和打卡天数


  // tuweing—— sign 页面接口
  getSignLessonsList: '/classesApp/myPage', // 点击 打卡的 tabbar  获取 可以打卡的list数据
  getItemLessonRankDay: '/customerApp/myRank', //  点击 排行榜图标 获取 此课程的天数 和总排名
  getItemLessonRankList: '/customerApp/rank', // 点击 排行榜图标 获取 此课程打卡的 list 信息列表 
  getAppointDayRankList: '/clockInApp/PageByClass', //点击课程上的学习日历,获取该学生对这门课程打卡的所有记录（分页）
  getQuestion: '/questionsApp/get', //点击课程上的“去打卡”，获取该门课程的 今日试题
  signUpQuestion: '/clockInApp/save', //点击 今日试题的  立即打卡 按钮
  getSignUpQuestionContent: '/clockInApp/allPage', //今日试题 页面 获取所有的学生对该门课程的打卡内容（分页）只有打卡了之后才能看到
  addCollect: '/customerApp/addCollect', //对打卡点赞
  addComment: '/customerApp/addComment', //对打卡点评

  // tuweing -- my 页面接口
  getmyAchivementList: '/classesApp/certificatePage', //我的成就，分页列表
  getmylearnList: '/clockInApp/pageByDate' }, _defineProperty(_urlConfigs, "getmylearnList",
'/clockInApp/pageByDate'), _defineProperty(_urlConfigs, "getHelpList",
'/feedBackApp/page'), _defineProperty(_urlConfigs, "addQuestion",
'/feedBackApp/save'), _defineProperty(_urlConfigs, "uploadSound",




'/fileMappedApp/upload'), _defineProperty(_urlConfigs, "shareImg",
'/customerApp/shareImg'), _urlConfigs);var _default =

{
  miniproConfings: miniproConfings, // 小程序配置（appid、secret）
  baseUrl: urls.gateway, // 小程序入口地址
  baseImgsUrl: urls.pic_bg_Url, // 背景图片
  baseUrlConfigs: urlConfigs // 接口名称
  // loginUrl: urls.gateway + "/login" ,  // 登陆接口地址
  // filesUrl: urls.gateway + "/FilesMgr" // 文件地址
};exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/api/find.js":
/*!*******************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/api/find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http */ "../../../../../git-nodeProgram/uni-app-customer/utils/http.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =

{
  /*
  *
     * @param {*} param 查询 已打卡天数 和总天数信息，点击连续打卡icon，获取获取总排名，打卡天数
     * @param {} loading  是否显示loading
  * @param {} loadingText  loading 的文字
  */
  getRankDayData: function () {var _getRankDayData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {var loading,loadingText,url,data,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:loading = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;loadingText = _args.length > 2 && _args[2] !== undefined ? _args[2] : "加载中...";
              // debugger
              // params 的格式如下:
              // params = {
              // 	params:{
              // 		
              // 	},
              //  page: {
              // pageNum: 1,
              // pageSize: 10 
              // }
              // }
              url = "/find/customerApp/myRank";
              data = {};
              params = Object.assign(data, params);return _context.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 6:case "end":return _context.stop();}}}, _callee, this);}));function getRankDayData(_x) {return _getRankDayData.apply(this, arguments);}return getRankDayData;}(),



  /**
                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                      * @param {*} param 查询 学习打卡记录信息，5.点击连续打卡icon，获取学习记录,如果学生报名了11个课程，每天都打卡，那么这里第一页获取10条，第二页获取1条
                                                                                                                                                                                                                     * @param {} loading  是否显示loading
                                                                                                                                                                                                                     * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                     */
  getContinuitySignUpData: function () {var _getContinuitySignUpData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(params) {var loading,loadingText,url,data,_args2 = arguments;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:loading = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;loadingText = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : "加载中...";
              // debugger
              url = "/find/clockInApp/pageByDate";
              data = {};
              params = Object.assign(data, params);return _context2.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 6:case "end":return _context2.stop();}}}, _callee2, this);}));function getContinuitySignUpData(_x2) {return _getContinuitySignUpData.apply(this, arguments);}return getContinuitySignUpData;}(),



  /**
                                                                                                                                                                                                                                                    * 
                                                                                                                                                                                                                                                    * @param {*} param 查询排行榜  list 排名信息 ，find首页点击 排行榜icon 获取排名 list 数据
                                                                                                                                                                                                                                                   * @param {} loading  是否显示loading
                                                                                                                                                                                                                                                   * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                                                   */
  getRankListData: function () {var _getRankListData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(params) {var loading,loadingText,url,data,_args3 = arguments;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:loading = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;loadingText = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : "加载中...";
              debugger;
              url = "/find/customerApp/rank";
              data = {};
              params = Object.assign(data, params);return _context3.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context3.stop();}}}, _callee3, this);}));function getRankListData(_x3) {return _getRankListData.apply(this, arguments);}return getRankListData;}(),



  /**
                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                            * @param {*} param 查询报名课程信息  list 信息 ，find首页点击 立即报名 btn获取课程list 数据
                                                                                                                                                                                                                           * @param {} loading  是否显示loading
                                                                                                                                                                                                                           * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                           */
  getLessonListData: function () {var _getLessonListData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(params) {var loading,loadingText,url,data,_args4 = arguments;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:loading = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;loadingText = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : "加载中...";
              debugger;
              url = "/find/classesApp/page";
              data = {};
              params = Object.assign(data, params);return _context4.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context4.stop();}}}, _callee4, this);}));function getLessonListData(_x4) {return _getLessonListData.apply(this, arguments);}return getLessonListData;}(),



  /**
                                                                                                                                                                                                                                  * 
                                                                                                                                                                                                                                  * @param {*} param 查询单个课程相信信息  ，点击 单个报名课程 获取单个课程详情信息
                                                                                                                                                                                                                                 * @param {} loading  是否显示loading
                                                                                                                                                                                                                                 * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                                  */
  getlessonListDetailData: function () {var _getlessonListDetailData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(params) {var loading,loadingText,url,data,_args5 = arguments;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:loading = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;loadingText = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : "加载中...";
              debugger;
              url = "/find/classesApp/get";
              data = {};
              params = Object.assign(data, params);return _context5.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context5.stop();}}}, _callee5, this);}));function getlessonListDetailData(_x5) {return _getlessonListDetailData.apply(this, arguments);}return getlessonListDetailData;}(),



  /**
                                                                                                                                                                                                                                                    * 
                                                                                                                                                                                                                                                    * @param {*} param 单个课程详情信息中点击 立即报名，返回报名卡图片URL
                                                                                                                                                                                                                                                   * @param {} loading  是否显示loading
                                                                                                                                                                                                                                                   * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                                                    */
  signUpLesson: function () {var _signUpLesson = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(params) {var loading,loadingText,url,data,_args6 = arguments;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:loading = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : false;loadingText = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : "加载中...";
              debugger;
              url = "/find/classesApp/join";
              data = {};
              params = Object.assign(data, params);return _context6.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context6.stop();}}}, _callee6, this);}));function signUpLesson(_x6) {return _signUpLesson.apply(this, arguments);}return signUpLesson;}(),



  /**
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   * @param {*} 点赞打卡的接口
                                                                                                                                                                                                                  * @param {} loading  是否显示loading
                                                                                                                                                                                                                  * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                   */
  addCollect: function () {var _addCollect = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(params) {var loading,loadingText,url,data,_args7 = arguments;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:loading = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;loadingText = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : "加载中...";
              debugger;
              url = "/find/customerApp/addCollect";
              data = {};
              params = Object.assign(data, params);return _context7.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context7.stop();}}}, _callee7, this);}));function addCollect(_x7) {return _addCollect.apply(this, arguments);}return addCollect;}(),



  /**
                                                                                                                                                                                                             * 
                                                                                                                                                                                                             * @param {*} 取消点赞
                                                                                                                                                                                                            * @param {} loading  是否显示loading
                                                                                                                                                                                                            * @param {} loadingText  loading 的文字
                                                                                                                                                                                                             */
  cancelCollect: function () {var _cancelCollect = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(params) {var loading,loadingText,url,data,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:loading = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : false;loadingText = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : "加载中...";
              debugger;
              url = "/find/customerApp/cancelCollect";
              data = {};
              params = Object.assign(data, params);return _context8.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context8.stop();}}}, _callee8, this);}));function cancelCollect(_x8) {return _cancelCollect.apply(this, arguments);}return cancelCollect;}(),



  /**
                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                      * @param {*} 生产海报的接口 传userid
                                                                                                                                                                                                                     * @param {} loading  是否显示loading
                                                                                                                                                                                                                     * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                      */
  getShareData: function () {var _getShareData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(params) {var loading,loadingText,url,data,_args9 = arguments;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:loading = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : false;loadingText = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : "加载中...";
              debugger;
              url = "/find/customerApp/getShareData";
              data = {};
              params = Object.assign(data, params);return _context9.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context9.stop();}}}, _callee9, this);}));function getShareData(_x9) {return _getShareData.apply(this, arguments);}return getShareData;}() };exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/api/login.js":
/*!********************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/api/login.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http */ "../../../../../git-nodeProgram/uni-app-customer/utils/http.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  /*
  *
  * 注册登录接口
  * 
  */
  register: function () {var _register = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {var loading,loadingText,url,data,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:loading = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;loadingText = _args.length > 2 && _args[2] !== undefined ? _args[2] : "加载中...";
              debugger;
              url = "/users/register";
              data = {};
              params = Object.assign(data, params);return _context.abrupt("return",
              _http.default.get(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 8:case "end":return _context.stop();}}}, _callee, this);}));function register(_x) {return _register.apply(this, arguments);}return register;}() };exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/api/my.js":
/*!*****************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/api/my.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http */ "../../../../../git-nodeProgram/uni-app-customer/utils/http.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =

{
  /*
  *
     * @param {*} param 查询 证书成就
     * @param {} loading  是否显示loading
  * @param {} loadingText  loading 的文字
  * 
  */
  getAchivementList: function () {var _getAchivementList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {var loading,loadingText,url,data,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:loading = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;loadingText = _args.length > 2 && _args[2] !== undefined ? _args[2] : "加载中...";
              debugger;
              url = "/my/certificateLogApp/page";
              data = {};
              params = Object.assign(data, params);return _context.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context.stop();}}}, _callee, this);}));function getAchivementList(_x) {return _getAchivementList.apply(this, arguments);}return getAchivementList;}(),



  /**
                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                               * @param {*} param查询 已打卡天数 和总天数信息，5.点击连续打卡icon，获取获取总排名，打卡天数
                                                                                                                                                                                                                              * @param {} loading  是否显示loading
                                                                                                                                                                                                                              * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                               */
  getLearnRecord: function () {var _getLearnRecord = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(params) {var loading,loadingText,url,data,_args2 = arguments;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:loading = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;loadingText = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : "加载中...";
              debugger;
              url = "/my/clockInApp/pageByDate";
              data = {};
              params = Object.assign(data, params);return _context2.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params, {
                loading: loading,
                loadingText: loadingText })));case 7:case "end":return _context2.stop();}}}, _callee2, this);}));function getLearnRecord(_x2) {return _getLearnRecord.apply(this, arguments);}return getLearnRecord;}(),



  /**
                                                                                                                                                                                                                          * 
                                                                                                                                                                                                                          * @param {*} param  获取反馈内容
                                                                                                                                                                                                                         * @param {} loading  是否显示loading
                                                                                                                                                                                                                         * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                         */
  getHelpData: function () {var _getHelpData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(params) {var loading,loadingText,url,data,_args3 = arguments;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:loading = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;loadingText = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : "加载中...";
              debugger;
              url = "/my/feedBackApp/page";
              data = {};
              params = Object.assign(data, params);return _context3.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context3.stop();}}}, _callee3, this);}));function getHelpData(_x3) {return _getHelpData.apply(this, arguments);}return getHelpData;}(),



  /**
                                                                                                                                                                                                                * 
                                                                                                                                                                                                                * @param {*} param 提交反馈
                                                                                                                                                                                                               * @param {} loading  是否显示loading
                                                                                                                                                                                                               * @param {} loadingText  loading 的文字
                                                                                                                                                                                                               */
  addQuestion: function () {var _addQuestion = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(params) {var loading,loadingText,url,data,_args4 = arguments;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:loading = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;loadingText = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : "加载中...";
              debugger;
              url = "/my/feedBackApp/save";
              data = {};
              params = Object.assign(data, params);return _context4.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context4.stop();}}}, _callee4, this);}));function addQuestion(_x4) {return _addQuestion.apply(this, arguments);}return addQuestion;}(),



  /**
                                                                                                                                                                                                                * 
                                                                                                                                                                                                                * @param {*} param 地址回显 
                                                                                                                                                                                                               * @param {} loading  是否显示loading
                                                                                                                                                                                                               * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                */
  getAddressData: function () {var _getAddressData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(params) {var loading,loadingText,url,data,_args5 = arguments;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:loading = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;loadingText = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : "加载中...";
              debugger;
              url = "/my/certificateLogApp/get";
              data = {};
              params = Object.assign(data, params);return _context5.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params, {
                loading: loading,
                loadingText: loadingText })));case 7:case "end":return _context5.stop();}}}, _callee5, this);}));function getAddressData(_x5) {return _getAddressData.apply(this, arguments);}return getAddressData;}(),



  /**
                                                                                                                                                                                                                          * 
                                                                                                                                                                                                                          * @param {*} param 查询物流
                                                                                                                                                                                                                         * @param {} loading  是否显示loading
                                                                                                                                                                                                                         * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                          */
  getTransportData: function () {var _getTransportData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(params) {var loading,loadingText,url,data,_args6 = arguments;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:loading = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : false;loadingText = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : "加载中...";
              debugger;
              url = "/my/certificateLogApp/search";
              data = {};
              params = Object.assign(data, params);return _context6.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context6.stop();}}}, _callee6, this);}));function getTransportData(_x6) {return _getTransportData.apply(this, arguments);}return getTransportData;}(),



  /**
                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                               * @param {*} 添加修改地址
                                                                                                                                                                                                                              * @param {} loading  是否显示loading
                                                                                                                                                                                                                              * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                               */
  upDateAddress: function () {var _upDateAddress = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(params) {var loading,loadingText,url,data,_args7 = arguments;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:loading = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;loadingText = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : "加载中...";
              debugger;
              url = "/my/certificateLogApp/update";
              data = {};
              params = Object.assign(data, params);return _context7.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context7.stop();}}}, _callee7, this);}));function upDateAddress(_x7) {return _upDateAddress.apply(this, arguments);}return upDateAddress;}(),



  /**
                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                      * @param {*}查看学生所有的报名卡片
                                                                                                                                                                                                                     * @param {} loading  是否显示loading
                                                                                                                                                                                                                     * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                      */
  getJoinCards: function () {var _getJoinCards = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(params) {var loading,loadingText,url,data,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:loading = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : false;loadingText = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : "加载中...";
              debugger;
              url = "/my/customerApp/myJoinCard";
              data = {};
              params = Object.assign(data, params);return _context8.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context8.stop();}}}, _callee8, this);}));function getJoinCards(_x8) {return _getJoinCards.apply(this, arguments);}return getJoinCards;}(),



  /**
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   * @param {*} 获取 回显设置的闹钟时间
                                                                                                                                                                                                                  * @param {} loading  是否显示loading
                                                                                                                                                                                                                  * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                   */
  getCallTime: function () {var _getCallTime = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(params) {var loading,loadingText,url,data,_args9 = arguments;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:loading = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : false;loadingText = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : "加载中...";
              debugger;
              url = "/my/customerApp/get";
              data = {};
              params = Object.assign(data, params);return _context9.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context9.stop();}}}, _callee9, this);}));function getCallTime(_x9) {return _getCallTime.apply(this, arguments);}return getCallTime;}(),



  /**
                                                                                                                                                                                                                * 
                                                                                                                                                                                                                * @param {*} 修改闹钟的时间
                                                                                                                                                                                                               * @param {} loading  是否显示loading
                                                                                                                                                                                                               * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                */
  changeCallTime: function () {var _changeCallTime = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(params) {var loading,loadingText,url,data,_args10 = arguments;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:loading = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : false;loadingText = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : "加载中...";
              debugger;
              url = "/my/customerApp/update";
              data = {};
              params = Object.assign(data, params);return _context10.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function changeCallTime(_x10) {return _changeCallTime.apply(this, arguments);}return changeCallTime;}(),



  /**
                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                            * @param {*} 设定提醒闹钟
                                                                                                                                                                                                                           * @param {} loading  是否显示loading
                                                                                                                                                                                                                           * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                            */
  setCallClock: function () {var _setCallClock = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(params) {var loading,loadingText,url,data,_args11 = arguments;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:loading = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;loadingText = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : "加载中...";
              debugger;
              url = "/my/wxApp/sendMessage";
              data = {};
              params = Object.assign(data, params);return _context11.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context11.stop();}}}, _callee11, this);}));function setCallClock(_x11) {return _setCallClock.apply(this, arguments);}return setCallClock;}() };exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/api/sign.js":
/*!*******************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/api/sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http */ "../../../../../git-nodeProgram/uni-app-customer/utils/http.js"));var _getLessonList$getTod;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default = (_getLessonList$getTod = {


  /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @param {*} param 查询 所有课程列表信息
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @param {} loading  是否显示loading
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */
  getLessonList: function () {var _getLessonList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {var loading,loadingText,url,data,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:loading = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;loadingText = _args.length > 2 && _args[2] !== undefined ? _args[2] : "加载中...";
              debugger;
              url = "/sign/classesApp/myPage";
              data = {};
              params = Object.assign(data, params);return _context.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context.stop();}}}, _callee, this);}));function getLessonList(_x) {return _getLessonList.apply(this, arguments);}return getLessonList;}(),



  /**
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   * @param {*} param 查询指定课程的 今日试题,  点击 “去打卡” 按钮后，获取该课程的今日试题
                                                                                                                                                                                                                  * @param {} loading  是否显示loading
                                                                                                                                                                                                                  * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                   */
  getTodayTestData: function () {var _getTodayTestData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(params) {var loading,loadingText,url,data,_args2 = arguments;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:loading = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;loadingText = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : "加载中...";
              debugger;
              url = "/sign/questionsApp/get";
              data = {};
              params = Object.assign(data, params);return _context2.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params, {
                loading: loading,
                loadingText: loadingText })));case 7:case "end":return _context2.stop();}}}, _callee2, this);}));function getTodayTestData(_x2) {return _getTodayTestData.apply(this, arguments);}return getTodayTestData;}(),



  /**
                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                * @param {*} param 查询排行榜  打卡天数、总天数数据
                                                                                                                                                                                                                               * @param {} loading  是否显示loading
                                                                                                                                                                                                                               * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                               */
  getRankDayData: function () {var _getRankDayData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(params) {var loading,loadingText,url,data,_args3 = arguments;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:loading = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;loadingText = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : "加载中...";
              debugger;
              url = "/sign/customerApp/myRank";
              data = {};
              params = Object.assign(data, params);return _context3.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context3.stop();}}}, _callee3, this);}));function getRankDayData(_x3) {return _getRankDayData.apply(this, arguments);}return getRankDayData;}(),



  /**
                                                                                                                                                                                                                         * 
                                                                                                                                                                                                                         * @param {*} param 查询查询排行榜  排行list数据
                                                                                                                                                                                                                        * @param {} loading  是否显示loading
                                                                                                                                                                                                                        * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                        */
  getRankListData: function () {var _getRankListData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(params) {var loading,loadingText,url,data,_args4 = arguments;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:loading = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;loadingText = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : "加载中...";
              debugger;
              url = "/sign/customerApp/rank";
              data = {};
              params = Object.assign(data, params);return _context4.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context4.stop();}}}, _callee4, this);}));function getRankListData(_x4) {return _getRankListData.apply(this, arguments);}return getRankListData;}(),



  /**
                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                            * @param {*} param 查询 学习日历  
                                                                                                                                                                                                                           * @param {} loading  是否显示loading
                                                                                                                                                                                                                           * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                            */
  getLearnData: function () {var _getLearnData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(params) {var loading,loadingText,url,data,_args5 = arguments;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:loading = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;loadingText = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : "加载中...";
              debugger;
              url = "/sign/customerApp/rank";
              data = {};
              params = Object.assign(data, params);return _context5.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params, {
                loading: loading,
                loadingText: loadingText })));case 7:case "end":return _context5.stop();}}}, _callee5, this);}));function getLearnData(_x5) {return _getLearnData.apply(this, arguments);}return getLearnData;}(),



  /**
                                                                                                                                                                                                                    * 
                                                                                                                                                                                                                    * @param {*} param 查询报名课程信息  list 信息 ，find首页点击 立即报名 btn获取课程list 数据
                                                                                                                                                                                                                   * @param {} loading  是否显示loading
                                                                                                                                                                                                                   * @param {} loadingText  loading 的文字
                                                                                                                                                                                                                    */
  getContinuitySignUpData: function () {var _getContinuitySignUpData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(params) {var loading,loadingText,url,data,_args6 = arguments;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:loading = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : false;loadingText = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : "加载中...";
              debugger;
              url = "/sign/classesApp/page";
              data = {};
              params = Object.assign(data, params);return _context6.abrupt("return",
              _http.default.post(url, _objectSpread({},
              params),
              {
                loading: loading,
                loadingText: loadingText }));case 7:case "end":return _context6.stop();}}}, _callee6, this);}));function getContinuitySignUpData(_x6) {return _getContinuitySignUpData.apply(this, arguments);}return getContinuitySignUpData;}() }, _defineProperty(_getLessonList$getTod, "getContinuitySignUpData", function () {var _getContinuitySignUpData2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(









  params) {var loading,loadingText,url,data,_args7 = arguments;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:loading = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;loadingText = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : "加载中...";
            debugger;
            url = "/sign/classesApp/get";
            data = {};
            params = Object.assign(data, params);return _context7.abrupt("return",
            _http.default.post(url, _objectSpread({},
            params),
            {
              loading: loading,
              loadingText: loadingText }));case 7:case "end":return _context7.stop();}}}, _callee7, this);}));function getContinuitySignUpData(_x7) {return _getContinuitySignUpData2.apply(this, arguments);}return getContinuitySignUpData;}()), _defineProperty(_getLessonList$getTod, "loadImgAndContent", function () {var _loadImgAndContent = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(









  params) {var loading,loadingText,url,data,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:loading = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : false;loadingText = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : "加载中...";
            debugger;
            url = "/sign/clockInApp/save";
            data = {};
            params = Object.assign(data, params);return _context8.abrupt("return",
            _http.default.post(url, _objectSpread({},
            params),
            {
              loading: loading,
              loadingText: loadingText }));case 7:case "end":return _context8.stop();}}}, _callee8, this);}));function loadImgAndContent(_x8) {return _loadImgAndContent.apply(this, arguments);}return loadImgAndContent;}()), _defineProperty(_getLessonList$getTod, "getAllSignData", function () {var _getAllSignData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(









  params) {var loading,loadingText,url,data,_args9 = arguments;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:loading = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : false;loadingText = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : "加载中...";
            debugger;
            url = "/sign/clockInApp/allPage";
            data = {};
            params = Object.assign(data, params);return _context9.abrupt("return",
            _http.default.post(url, _objectSpread({},
            params),
            {
              loading: loading,
              loadingText: loadingText }));case 7:case "end":return _context9.stop();}}}, _callee9, this);}));function getAllSignData(_x9) {return _getAllSignData.apply(this, arguments);}return getAllSignData;}()), _defineProperty(_getLessonList$getTod, "addComment", function () {var _addComment = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(









  params) {var loading,loadingText,url,data,_args10 = arguments;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:loading = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : false;loadingText = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : "加载中...";
            debugger;
            url = "/sign/customerApp/addComment";
            data = {};
            params = Object.assign(data, params);return _context10.abrupt("return",
            _http.default.post(url, _objectSpread({},
            params),
            {
              loading: loading,
              loadingText: loadingText }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function addComment(_x10) {return _addComment.apply(this, arguments);}return addComment;}()), _getLessonList$getTod);exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/main.js":
/*!***************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/main.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ "../../../../../git-nodeProgram/uni-app-customer/pages.json");
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "../../../../../git-nodeProgram/uni-app-customer/App.vue"));
var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ "../../../../../git-nodeProgram/uni-app-customer/store/index.js"));
var _config = _interopRequireDefault(__webpack_require__(/*! ./api/config.js */ "../../../../../git-nodeProgram/uni-app-customer/api/config.js"));







var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http.js */ "../../../../../git-nodeProgram/uni-app-customer/utils/http.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var container = function container() {return Promise.all(/*! import() | pages/components/container1/container */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/components/container1/container")]).then(__webpack_require__.bind(null, /*! @/pages/components/container1/container */ "../../../../../git-nodeProgram/uni-app-customer/pages/components/container1/container.vue"));};_vue.default.component('container', container); // 引入 uni.request()

_vue.default.config.productionTip = false;

// 挂载在 Vue实例的原型上
_vue.default.prototype.$configs = _config.default;
_vue.default.prototype.$http = _http.default;
_vue.default.prototype.$store = _store.default;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createApp"]))

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/main.js?{\"page\":\"pages%2Ffind%2Ffind\"}":
/*!**********************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/main.js?{"page":"pages%2Ffind%2Ffind"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../git-nodeProgram/uni-app-customer/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _find = _interopRequireDefault(__webpack_require__(/*! ./pages/find/find.vue */ "../../../../../git-nodeProgram/uni-app-customer/pages/find/find.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_find.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/main.js?{\"page\":\"pages%2Flogin%2Flogin\"}":
/*!************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../git-nodeProgram/uni-app-customer/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ "../../../../../git-nodeProgram/uni-app-customer/pages/login/login.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/main.js?{\"page\":\"pages%2Fmy%2Fmy\"}":
/*!******************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/main.js?{"page":"pages%2Fmy%2Fmy"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../git-nodeProgram/uni-app-customer/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _my = _interopRequireDefault(__webpack_require__(/*! ./pages/my/my.vue */ "../../../../../git-nodeProgram/uni-app-customer/pages/my/my.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_my.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/main.js?{\"page\":\"pages%2FpackageA%2Ffind%2Franklist%2Findex\"}":
/*!*********************************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/main.js?{"page":"pages%2FpackageA%2Ffind%2Franklist%2Findex"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../git-nodeProgram/uni-app-customer/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/packageA/find/ranklist/index.vue */ "../../../../../git-nodeProgram/uni-app-customer/pages/packageA/find/ranklist/index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/main.js?{\"page\":\"pages%2Fsign%2Fsign\"}":
/*!**********************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/main.js?{"page":"pages%2Fsign%2Fsign"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../git-nodeProgram/uni-app-customer/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _sign = _interopRequireDefault(__webpack_require__(/*! ./pages/sign/sign.vue */ "../../../../../git-nodeProgram/uni-app-customer/pages/sign/sign.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_sign.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/index.js":
/*!***********************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__(/*! ./lib/axios */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/axios.js");

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/adapters/xhr.js":
/*!**********************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/adapters/xhr.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request };


      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
      request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
      cookies.read(config.xsrfCookieName) :
      undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/axios.js":
/*!***************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/axios.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/defaults.js");

/**
                                       * Create an instance of Axios
                                       *
                                       * @param {Object} defaultConfig The default config for the instance
                                       * @return {Axios} A new instance of Axios
                                       */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/Cancel.js":
/*!***********************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/Cancel.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * A `Cancel` is an object that is thrown when an operation is canceled.
               *
               * @class
               * @param {string=} message The message.
               */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/CancelToken.js":
/*!****************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/CancelToken.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/Cancel.js");

/**
                                   * A `CancelToken` is an object that can be used to request cancellation of an operation.
                                   *
                                   * @class
                                   * @param {Function} executor The executor function.
                                   */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
   * Throws a `Cancel` if cancellation has been requested.
   */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
    * Returns an object that contains a new `CancelToken` and a function that, when called,
    * cancels the `CancelToken`.
    */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel };

};

module.exports = CancelToken;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/isCancel.js":
/*!*************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/isCancel.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/Axios.js":
/*!********************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/Axios.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/mergeConfig.js");

/**
                                             * Create a new instance of Axios
                                             *
                                             * @param {Object} instanceConfig The default config for the instance
                                             */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager() };

}

/**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url }));

  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data }));

  };
});

module.exports = Axios;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/InterceptorManager.js":
/*!*********************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/InterceptorManager.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/createError.js":
/*!**************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/createError.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/enhanceError.js");

/**
                                               * Create an Error with the specified message, config, error code, request and response.
                                               *
                                               * @param {string} message The error message.
                                               * @param {Object} config The config.
                                               * @param {string} [code] The error code (for example, 'ECONNABORTED').
                                               * @param {Object} [request] The request.
                                               * @param {Object} [response] The response.
                                               * @returns {Error} The created error.
                                               */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/dispatchRequest.js":
/*!******************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/dispatchRequest.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/combineURLs.js");

/**
                                                        * Throws a `Cancel` if cancellation has been requested.
                                                        */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
  config.data,
  config.headers,
  config.transformRequest);


  // Flatten headers
  config.headers = utils.merge(
  config.headers.common || {},
  config.headers[config.method] || {},
  config.headers || {});


  utils.forEach(
  ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
  function cleanHeaderConfig(method) {
    delete config.headers[method];
  });


  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
    response.data,
    response.headers,
    config.transformResponse);


    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
        reason.response.data,
        reason.response.headers,
        config.transformResponse);

      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/enhanceError.js":
/*!***************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/enhanceError.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Update an Error with the specified config, error code, and response.
               *
               * @param {Error} error The error to update.
               * @param {Object} config The config.
               * @param {string} [code] The error code (for example, 'ECONNABORTED').
               * @param {Object} [request] The request.
               * @param {Object} [response] The response.
               * @returns {Error} The error.
               */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code };

  };
  return error;
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/mergeConfig.js":
/*!**************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/mergeConfig.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");

/**
                                  * Config-specific merge-function which creates a new config-object
                                  * by merging two configuration objects together.
                                  *
                                  * @param {Object} config1
                                  * @param {Object} config2
                                  * @returns {Object} New object resulting from merging config2 to config1
                                  */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
  'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
  'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
  'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
  'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
  'socketPath'],
  function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/settle.js":
/*!*********************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/settle.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/createError.js");

/**
                                             * Resolve or reject a Promise based on response status.
                                             *
                                             * @param {Function} resolve A function that resolves the promise.
                                             * @param {Function} reject A function that rejects the promise.
                                             * @param {object} response The response.
                                             */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
    'Request failed with status code ' + response.status,
    response.config,
    null,
    response.request,
    response));

  }
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/transformData.js":
/*!****************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/core/transformData.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");

/**
                                    * Transform the data for a request or a response
                                    *
                                    * @param {Object|String} data The data to be transformed
                                    * @param {Array} headers The headers for the request or response
                                    * @param {Array|Function} fns A single function or Array of functions
                                    * @returns {*} The resulting transformed data
                                    */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/defaults.js":
/*!******************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/defaults.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded' };


function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
    utils.isArrayBuffer(data) ||
    utils.isBuffer(data) ||
    utils.isStream(data) ||
    utils.isFile(data) ||
    utils.isBlob(data))
    {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };


defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*' } };



utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/bind.js":
/*!**********************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/bind.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/buildURL.js":
/*!**************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/buildURL.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
  replace(/%40/gi, '@').
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/combineURLs.js":
/*!*****************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/combineURLs.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ?
  baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') :
  baseURL;
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/cookies.js":
/*!*************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/cookies.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    } };

}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {return null;},
    remove: function remove() {} };

}();

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*******************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!*********************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
                 * Parse a URL to discover it's components
                 *
                 * @param {String} url The URL to be parsed
                 * @returns {Object}
                 */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ?
      urlParsingNode.pathname :
      '/' + urlParsingNode.pathname };

  }

  originURL = resolveURL(window.location.href);

  /**
                                                * Determine if a URL shares the same origin as the current location
                                                *
                                                * @param {String} requestURL The URL to test
                                                * @returns {boolean} True if URL shares the same origin, otherwise false
                                                */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol &&
    parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!*************************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/parseHeaders.js":
/*!******************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
'age', 'authorization', 'content-length', 'content-type', 'etag',
'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
'last-modified', 'location', 'max-forwards', 'proxy-authorization',
'referer', 'retry-after', 'user-agent'];


/**
                                          * Parse headers into an object
                                          *
                                          * ```
                                          * Date: Wed, 27 Aug 2014 08:58:49 GMT
                                          * Content-Type: application/json
                                          * Connection: keep-alive
                                          * Transfer-Encoding: chunked
                                          * ```
                                          *
                                          * @param {String} headers Headers needing to be parsed
                                          * @returns {Object} Headers parsed into an object
                                          */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {return parsed;}

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/spread.js":
/*!************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/spread.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Syntactic sugar for invoking a function and expanding an array for arguments.
               *
               * Common use case would be to use `Function.prototype.apply`.
               *
               *  ```js
               *  function f(x, y, z) {}
               *  var args = [1, 2, 3];
               *  f.apply(null, args);
               *  ```
               *
               * With `spread` this example can be re-written.
               *
               *  ```js
               *  spread(function(x, y, z) {})([1, 2, 3]);
               *  ```
               *
               * @param {Function} callback
               * @returns {Function}
               */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js":
/*!***************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/axios/lib/utils.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
                                           * Determine if a value is an Array
                                           *
                                           * @param {Object} val The value to test
                                           * @returns {boolean} True if value is an Array, otherwise false
                                           */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
function isString(val) {
  return typeof val === 'string';
}

/**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
function isNumber(val) {
  return typeof val === 'number';
}

/**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
  navigator.product === 'NativeScript' ||
  navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined');

}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function deepMerge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim };

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/shvl/dist/shvl.es.js":
/*!*****************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/shvl/dist/shvl.es.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.get = t;exports.set = n;function t(t, n, r) {return void 0 === (t = (n.split ? n.split(".") : n).reduce(function (t, n) {return t && t[n];}, t)) ? r : t;}function n(t, n, r, e) {return (n = n.split ? n.split(".") : n).slice(0, -1).reduce(function (t, n) {return t[n] = t[n] || {};}, t)[n.pop()] = r, t;}

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js":
/*!***********************************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));var _shvl = __webpack_require__(/*! shvl */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/shvl/dist/shvl.es.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _default(n, o, u) {function i(t, e, r) {try {return (r = e.getItem(t)) && void 0 !== r ? JSON.parse(r) : void 0;} catch (t) {}}if (o = (n = n || {}).storage || window && window.localStorage, u = n.key || "vuex", !function (t) {try {return t.setItem("@@", 1), t.removeItem("@@"), !0;} catch (t) {}return !1;}(o)) throw new Error("Invalid storage instance given");return function (c) {var a = (0, _shvl.get)(n, "getState", i)(u, o);"object" == typeof a && null !== a && c.replaceState((0, _deepmerge.default)(c.state, a, { arrayMerge: n.arrayMerger || function (t, e) {return e;}, clone: !1 })), (n.subscriber || function (t) {return function (e) {return t.subscribe(e);};})(c)(function (t, i) {(n.filter || function () {return !0;})(t) && (n.setState || function (t, e, r) {return r.setItem(t, JSON.stringify(e));})(u, (n.reducer || function (t, n) {return 0 === n.length ? t : n.reduce(function (n, o) {return (0, _shvl.set)(n, o, (0, _shvl.get)(t, o));}, {});})(i, n.paths || []), o);});};};

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/pages.json":
/*!******************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/pages.json ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/imgs/icon/achievement.png":
/*!****************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/imgs/icon/achievement.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAABGdBTUEAALGPC/xhBQAABkBJREFUaAXtWmtsFFUUPrNbSlofCNpNn5vYbish1EqRGqAIieIPQH5IWv0BBoVITBATIlEjoQJBC38MYghgBWLiD4SCaaAt1FQbKFQN0LeFPrN07bYFSqtt08fueM6wdzs7c2f2brv8MHaS7dxzzne/c8993zsFMHgkppePbWwDGZ4lWdpyUrIwAykdeRf84oQBVS27V/MNfq06Md8eK5OMvsbVen46JTZGlo9uVH4MoRSXDKSIjrRCndOt6CIYgpUIY1BUAcVlIP+bUTniYvb5leoEA6h1OTk5VrXs982UVGpKz91dDE15qxS1dBr8dc0tU0FlG1gtXBPoPBDl5qXJyk+h1/zh0lArYpGyEXtPgw8UeUE74mwNgaipSNoqJC6tV391MUesWplM8bS6e/04btCDox6G1711GW4470PGvlJQ93d1Ll2GTPsctV2X5jYc66I6NCp0HnggtS48GXacqd1gFLTam5J+86W0QqZMibMNahuO2ZQ3r99oM/hbMCAnCqlxtje8svwjJgNGnBaHssciSbnNXT1nOTZjlbYkxkh9/1Rjue2sBmj7rtrG0mYNENQBI3kwNApZB8rAizPQodxMSE+YBYlPRTOz4Vu4H11rv6eQE9P2wmohcsIKR0AlplkzwiLB1ba7lFfoEXagro4lyc8IkRNIuIqEGTVAYQcyNm46zlPz9pSMY3JQw2MoCjlIxWl165kbn9fj0vqnq3tG2p7Sd7Fr0oo2bMjsMxiOZGWgSZIz+enH+svq25/nETliY4pkScoAWbar53Ue9r+rM6winCmrZVnOCBaaJEk1LV09LwTDBdgdsbYq/OUFKA0EwuHvmoGZrw5lJiUGM7zpSJYLNr0MHk8Fvxg+rQTtjl0Te1Yt1nwcBCMnNt9OWUvMZHMHDOV707w/Om68TdHAFVHIwcDwGFR1PNzrzdtbCo1dAzwurs60DViOzPxLLKm81x65DD9tyYb58bMC9DxBKALtVun4+kVC5ORQyAEBZ1gliMKzBI3Ms9UuUgk9QlVETPNiZ0Hhe0sV0jpXvxA5gYQjYOSUiZZP0UfYgSihFjftQFsjOlm4ig5XtCgHk51Fddd1LCYKIQdflDbC0SstMq27p64705Z/Vf69CWeAKaiDc9WdcKKqXa51uhVsi7v3SdeD4fWbf/iDf+oOoA8yDmpcD2DHuRpo6eoNKAhGYv31ds9nBb91fKrh04kBGdXWtMTEhHXHKiFz2QruaCd9fnHDl9Wu/p3qfNo0d9HHSwcn7uSSoiOj5tQ5nX3aTExOt9tnD40O35ckuINR2pl++h1KDXCbwIggNSF2tdfjOW9kn6reYrWuaXa5jXcoHAfcDsjBKSqv13uaEsH6llF+Iz3riz7+4OdKFZHhKFNhJpKyHEWC2cCYAIun/Hw+fvGcIRxheaTy0XeacN/4HM8Wqs7spsCMK7QW0DGZF/7QL80h7TB19AKKKQZg7OEbXFyPXGmFt45fhZNVHcbAKVpCGsRmvvrwnmfR/jLcvFrAi5c9uDjAOF364JN/sREOlt/CQ4oE/4yMwcWtyyEl5nEzOmFb2FpgdnQknHw7C++8JfDgMsgKTyWh9N8j4+DxeuHUpsVhKzxxhy0AIstOiYGDOQu4F/czZ1jho1fnwsIgd8TEE8oT1gDIcVHtX0pN256YCSc2ZEHZBysg0z4bRsY8sLckjLf+vihDWonZPQG7EBK5SBWtTTaNMm7RfGFvAVHH4cJNBxCumpwsz3QLGNUcfu+BO31D+I3h4WJmhJuqPmwrMSvI9sKbylSKK7EcYbG6xjyeeLRZ5kRHnv/945ULMR3HsOF4h60LfVvZqlwslDS45XWZie/TSbrJ5U6iE3SE1fJK3/DYazhVxq09dvlrLLj4HWKQKKccQMXtXuUb+/5LTbAszXa4ydVtOVB884ja7y1Xdznels/EdX9bo2tgG37diM670LALt0ajatwjT9NCxhaztPj4uS8mJyjy6wscFaE4x68k3xEPfi64W/Lhqk/wnym8au5QuCa1EuP/h9TjQWY+bjkrbdbIldc6O4N+F9IWanFiYlSvZ/Rn/N6xxM+HoEe6EmO0ueijC8fnXckamdTa1ZM9mcJTMJQPu9VS4iG+h7wKP5n/P8+/rS0SIpCuf70AAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/imgs/icon/card.png":
/*!*********************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/imgs/icon/card.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAABcRAAAXEQHKJvM/AAAGR0lEQVR4nO2dfUhdZRjAn8Vmfuyqy109upxO75ZltruammDLoDJilLAK5io/oIIJ5V/R+sJR/9gfIYRRBFOhsC/BaEQltTkiEcZm2Ya225rp3M1by3lbkxUYz+WdnPPec47n46qP3ucHY5x7Pjzv++P9Ou97nrNmbm4OGDpcxy5owUKIwUKIwUKIwUKIwUKIwUKIwUKIwUKIwUKIwUKIwUKIwUKIwUKIsdbO7fgUbz4A1ABAFQCkx0MGOeQoAAwFgqFeu6dbmg/xKV6U0AwAdy9dmlYFlwCgDf8FgqFpKwkyFSJKRCeLcA2KqbdSYgyF+BSvXxS9NGqpW8F0BYKherPb1xViQUa/2M9Ec62dNco7UylRQkQ1NWRwwYNYhQWCoXMswhyf4sVMbwGAPJ0DDwaCoRa9C+gJQRnbpePG0HogGBpaktSsEnyKN1006nU6KbonEAxF1TKacYiwKsv4AQD8LMM+2LMS1VOXzslteheUB4ZyMbrWO7DUZWP0EVI+k3ZuF8MJDfMDQ7FTru/arJaMcHuDXzVo9HPvLNLxwba219PUgd3derGtzhf8TdMVnm9DfIoXi9Bzqn1YOvIXKh3h9oYqUbJ4rGIMtsEtO1477JfyGEvPGvW2usryS5frtSADJR5hGQuCNU/Hu7V3VsoH+hRvlXpb/SxLzlTTcUa4vaHToPfAGFBWuPEOnT356g2zp72GYw2W4ZySnAz5XMtCdAm3N9SwjMXD1uN3gW7/GRk4E4LBX/+c3y7fkgEVW73EkkwbW0LC7Q31eo8CvvrxPLz57ShMhf/R/N41GICUhHXQWFEIjbt8qzkfY4bdEhI1kHn+k5PQN3Le8ITLV/+Ft/pHYOT3MLzx6I7lSidZUhLWJarvzW4b8rB649CxgKkMNXhc29cjKzv3FoGctGRFfVXLQsRIfJ6ZK1fh0MAvtu4Qq7Dxi5eXI91kUVKTNL0sO1WWZg79y+ELkerILn0/XTBtT7DUzcz+t+IyNlYdGCe9rAjHxy46Ou/omZChkNc/H4aeoTGnt7SsYOl/v6ESim90t/bD8TKg4MxszNP/89TfMb/mUtJ3Ouj6rzkWoqQmWjhq+a+5lGC15RbHVVZRlgf6HHSabs/dYLjv5d3Fkf8Xo/QtNvtKNy9vG/JI6ebI+MIue3bmGp6RmpQQ92MVx1UWZl5dub3R9x5/HuTekOL0T8YFrtb2Nt9fBPcVbbJ0bEFGKjx7703xnt8L4nqxNVYxWFLwmZURuL9n/65IqWLMcdyGqMGS0nhXQWSwODl9BU6M/wXbMtfDtqxUeKAkm0XYICZCQLQpj5XprQlj7MDvhxCDhRCDhRCDhRCDhRCDhRCDhRCDhRCDhRCDhRCDhRDD1bMsXNLTc3x8NeaLbXDiLRZzPY6F4Lqsve9952gp0Grk05Nj0P1UpWspjqusUxOXWIYKzItY1BYupnCNJ6TilZsVj+uUO66ycEHYgeoSODw8Ge8eIuBqmurbrE1nm+GqUccJKZ6Uii3c7SUGCyEGCyEGCyEGCyEGCyEGCyEGCyGGmRCOy7sInP1jRnPR9dev1bwMoxYiv9xXBUxMwekK+YFscU6a5j04tRA5UJkcJIADX7oE30CWqdyaOar+SS1EDvKbp47l5GnqOCeCmjEO+ejEb5oT8Z2ZvI0pA2ZC5AzvFJE1jaQxFsH37+VYMNW35Mx6mjo0ccnmhYjocZ1yKZGi/8j7GQucmpiOeh8TX3B6yL8pKj/1opLKpaTOp3gjJwqb/SzBOhiy6pkPBqOOf7K8cFZJT2qVf9cIEaVELww2ShkSbUrzciRspYFrDjAyxf4PB6N6VhhV7ukqX6tolzUYxX6XI5Sq6a8szJqsLc3fy8HJtGC39vTENHwzOgXfn53SXXOADfnbj5d1+w501+pdw+zrCBxXMcagjHeeKPvC60nc52nq0I34utD3Q+pFox7vQZFdU7ElE156sLi16JWPXzC71oJf2BFfS2jh0uKMTE8y1O7MP1JXWdCo12bIWPrkEWi/P1XDgZPN2ZCcOJudmjRanJ127MXdt75qVD3pYVmIjBCUb++s1Y/eJyjs4FgIszjwfAgxWAgxWAgxWAgxWAgxWAgxWAgxWAgxWAgxWAgxWAgxWAgxWAgxWAglAOB/9g3Ri/SEgMIAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/imgs/icon/forward-right.png":
/*!******************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/imgs/icon/forward-right.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAfCAYAAAFPB6dHAAAABGdBTUEAALGPC/xhBQAAAthJREFUOBGdVb1rVEEQn3lfqEnAs1HQgPhVqE1QyyCICKIiNgGt7p3JHUmnoun0rA1Y6r3oXRoVrhBBCGm0ECWCkj/AaIokhR9oRITI7eONM3vZzXuXPCJucTu/md/Mzse+PYij0mkwq1UrkpHbuxov9q9q4vHwvEWanPFIAzQ8FYXfAcgxGAzLa9XCeURAv9xos5m6YGksOES0i1m1tFL7U/PK5jVKUawewyCOii80iwM/NccCPRouWCDmDGCMkhin3IuIi5xcr46R+tHZShj1e/mH6NF1j/uDD18Zji1eFHI4F3JB5KAyoW0ZghhkmTwcxJdrCNJGjrKNG/bTL08ULEFmkiT0TCL4hcIWHLi7LLImmJAMo6DSqIjBLhl9Z8utUQTpQxyFZzPKFcCNpt6E6DmND27vJHAFOCZKlcSfO43txKJwFoj28fiVX2kEhqTnF5Qb+7lOIiCfc5jJGAV4Qw23raQ+VQtviGwbIoDqpT1KJZ9E9gM4oMMKkIWl+hz/XhVZteBDxqgJSDaaFcSQG5Yng+Y8LmkUw4lZ66miIjdKEsQZHsIRfYT8tPKawDWNSXeElO6OYIe7ck0bHG+H7OnFpeACd/8cDj34kjaIjKpWXOTve6cGCH/IdfqDy/X3ncT1sIMOXjcGrmYTxMk7ruw1Nat2esbeuetWULPpxkuTk5zBqSwBR7gt97K6VWT7KCqqhwfjGN5yw3sMhS/bN4/8o1iJ5o3O7Blno+RLf5MD3DZY74hP+N5dSuvWdRYCNUe61dLyNEuHjQOPPQHXOcPvwJTocp2Ng4pKJwGSKW7mymWW5wvn3K7uvg2dTZBWVPwIBHsNZsdfngF5+3onM3fO6+rJP/m/a+a/kFuUQDWTzUbdpmjoUAzxdGbOAF89CI7lzjn3hqEzHJTr9zMZpADyG3qR39DHKR3wA/TG27r7BA5UW2l9p+xRQneMkp30V+X/41f1F3XySwKa/+/gAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/imgs/icon/help.png":
/*!*********************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/imgs/icon/help.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAABGdBTUEAALGPC/xhBQAACChJREFUaAXtGWlwU0V49yVNaUcLgs3VAi1NKrYKYsWTYxAED0QGmVEYRjkUxPtEcVCCJ8ogQ72gSgfQ4QeMBQ+ooEC9GAUcCo5S6YtytGmaULFAQ9P0vfX7Xtn0JX1JXkpmGGd4M3m7+93ft9/u+3ZDSKJnYE5OISubMb/Ams2QlnIGtnK6AlCAc1ZTgSN4+9VvHt7tbNVcnVDoOe2WqRGAmAOXy9VFl0IMpvZB+fgrsJq9CFQoQ3LoKBfn9vqsvK+0QHmfw2ZeEwHUPcCw4M9pNb8UzWRUA0BFsNY1fiEhMge/Qig1DX5ry7sH3I0+BEYwEMqeBuL3OLXSMrYgEGD50J+G44g4iB7/+46Fm8PiZ326myxqyDOIDT6FWBGg9SqwmT/DmIGJoPG8PzAhz/KwJjSGpyX7aPotkKbjiu32fiUlJWlqxnDKFufm9v69ru6f6CR0uLaccTf4MjlTOKytUlBkZTMXcwRvv3l85CrexzbMAOvja8LkyWok9rfXNEZkd5gB1E51ura4ohkWb6sJm4O4MAMOps15eN2ED7//G/v4OBduZiAoo2MU4405jo5XzB0TXrdq0ggNCoKRX7DddlBZSWra2H1YxlNiY/9XmBtyczMwvRy27Kri4mITNx7TC3L0W8SVDBjQk8O12sgVraLA7aBJksa4vX7KyqY/QRgJEjJURXEl5BJ90enaWgCKdgOdpqxwbqs4icOavZ4IwjbR0/hxdK6r6XjfuajyAcLYbbBTdMncrmkBXIySWwRi+BGEN3Ah8dqtjw5/DfCjtGg0FRhomlOSQwchBJ9rMUXDxpZ+Z81Nz8yJhuNYM0ScECdx6aQhm+4abJ/IYep275ET5N7yXQTnSQ1X92Mi1EQwJ22w7tKsWekKWGKMNJ1ua69t8EdsVmoe3tcMEUfyllH6JaFyEwVz8Oc/1QZJRddxfLxWlwcoAMMF0r+1Z2U4Pc2BfhAWXcbpIgpbyNhoFI5jWHzzw/ALnXOJQMJJdjgcWaSleSdk5tWdiuiBXpkXjfj1r7+aO2Hd6EGRUYHZ47Bb7lSzF9otYxS4zVyphmv1Y3oAu2klJLtT9PocyMjWP5VB/m2+H9a+TIz91tIZrlbYsvdDTdXsbvCP0BKOME0Fl/W35LcHZRFy3YBEbOWMFnhHfJ6Bs43OXp2Oq1wQ0gYd8nhqkDb60VwHUlA+RA2m/kjcsV1HCVcQxIS4Hhm0L2yMv0cL5mNNBbDvGMX6+jookKo4Yaz2t/m3bwKcphzkiYlQBDI2UmnjvRi5Ph46voJ4nDpx50cBpFaoMMc8WI+RfzSchE2WNsWi1fSAGUmRJLFqSMWY2cEFTljxAzGmC9fwcXSrqcBd5xfBi3LHy5t7RzOox8OWbscP0Kqaw97Dari6r6kACUSvfxYldAUcZMiZULuahwTa2gnCj7cEXxUb/A9EIKMGmitZTVNgs5VQ1v6zJSs9XFh5TwaJYCBDauv91WparX5CBciEG5u4aDxUdkz56qP18SoJtaKwVWqgVn/Y0m9M+MFP9tGt4MdnxrwFwl9ABehBSh88dGKYxg3Kr8S2wG65J6UKUFih3X4pHivxhiAZ4bqi6rRZFshMfkUlmOqdZBXPhe75iYCuOU7GtIF51jy5lRTJgpQPfBczJjQZCDsuUeNet8dzLBlZemjPyQHGGHXmWGcymb0Ou5RFUUjJCdiDd8OXxA1HvWZGWB/KmB1wI6CUyEKas5+nN4YMG7l8w4YNksLXzVe3HLgqL6/XqWDLNij7hoIx/8B5d65Y712v14YCW/at4NwacNoMu2cNYYYRotfr18uvpkvaAVD+Khi+AOLoo4a0EizOuEC2cjacfEIuiP5kOJRfzOGdLQ1AHbuRMNNCOqfMPajAYg4E5L1QtfcFnlKob5/opNXXS8oBqOTXgWFTgKkcP9dcBVxjlIJTj/Gx/hZmYXb/mU7bB6WQao9AblXAbdbd+vljFO5aApz27BmyTMohUpUQqduRBgr666DZBb2YdYmWrAgYBdcJHeV8efPT4MQEKgiz4PqlPIImzkC3YpjmRzvkGJULZ/bxrGvB8J/PyXgUCOd6mNWqx0Y7KxT5TD6rp0NborduByBKV6AwY1bWIUWoLC1PJDwZ/OwbBzyi0DOi6NHLq9sBmAHFcHb6X4g8PIzoqur1GrLnyIkOeZTW6uVBOt0OUIEuQwZJlt/EFp49HU1q3ou3HjyDkiBQWDfqfnQ70LGw6GqI/FCoHz8hRkEpTnVrikP4bEU1+bPxZE9I07fhv6K1cUi7oJLaRpEbatL7IE5r4GvbsmTyVfMnXmkv7SJVJ0D0nSaTyn4iATg1Jbv7cBVJO4CMeE/ul9o2QSkxFobSgzcNOPr82MvzudBE7YofRLJs+yGCN6KQmjtyTZl3VB0+3JqITwvfLQfUggpzLKNlma0HZ3oX2XpWffHQcLgt0v4uzNu0n1TsqyPpRuGUxMjEP+sbd6hldad/zg5wpQ6reRd8iG7Acd9LIi+rEHYmJJHjp4PEZKLVB4/6hiAsFY/uU2VCZZTUwgIHB+j9O5+8uQxmoePm/Czjxuo68tzG/SQUIgcSykqCIGUOQFUJWaRoXjr8nR2CMWp/O3YioCCBRNkuk7AxLmnKUghPzRJrPwJu9LgkM23anhfGzYX+cNReUX2MzNsIgae0lVBjYSoPNilzgIcJ7xjAcBdEurOcpjRAKZuH/5pzulS1KXcA/34sKirSPGXt27fPKIoi3DGl7kmpA3jxAot3CZgnxzBREAT6fK3H93YM/AXw/y4C/wFRc9S0znaLBgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/imgs/icon/invitation.png":
/*!***************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/imgs/icon/invitation.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA2CAYAAAB5u+FtAAAAAXNSR0IArs4c6QAADL9JREFUaAXNWgtwVNUZ/s/dDTEhDyWw2d0EI5IEENBBpqVVqdQ+zGjx7YyoTCOkVUEtVUuL1YpaOq1Vh1ZRR0RR68QHVOqLosNIbaeVaqZaGslTeSTZZAMRkmxIsnvv6fff3XN3s7t3swkJemZ2z3/+8z/Pf865/zn3CjqOsmjRImdbw95FhiEvk0QzhZBFJKnIFCmoVUrRKojqNE1s85bP2oUSOg51x80KW0Zezpxe6OoLyF+RoCVSyknpSBBCdGEgqrMnivv/29zhT4dnrGlG5GxpaWkm9R1dRQbdhUjmjcYYKOwmjX5D2fnrm5qaBkYjY7Q8aTsbiebrkuSCWGWCxOdCo61w/l2NnAdEbm4r98ueniKDQqdCwfcMg64C5rQ4vt2I8iUnMsppOVvu9c40jNDbcHRa1GCxR9PojsY2/7tRnD1U5nWx0w/D6bmKigdK05wXNbS11SnceNbacMLLi4uLdCP0N+UoRickhPbTsxeePy9dR1kH0zIP87IMxrFMls06uD3eJWVkZ8+ePWHgcOf7auqCuIeEuLrJ598Rb5h8evkc0uUSEnIRvJiKfhd+fmxiB0mKXeQQ1aJq0/+Yr9TjupCkfBVTP5fbiPDuzIIp36qtrR3k9niVlM6WugsflWTcwspBGJSaWNTc5v9nrDFy07IZFDI2APedWLwNvJOc2kqx/Jn66V7XOcKQu+BwBtMK0h5rau+4lWHs8KLMW3itlOTGY6tNSK3FmDjx38e7odk6y+tUN4IcCQcbgNFf2dTuf5xhVeTGZStJGo8gkhMUbtha0CAJ7Xbxo2c2lLpdKzBreKC46A4tYw6vX0T+Ojj8pzA6/A/9vTBih9DE5sbWjjdj+9KFbdesYQTvhxDTUdRvJTpaeS8ZxmMjcpSt4oEBn9xYeW9E5luMRnFEdIZbcf8YlBwMwJWGbrwx3TPl/XK3+2txJMM2k0a21O0+Q5LOUeV+6XCIeQ2t/k+UNPlU5TIYvUm1R10LWj7jvrdrdF3+BzJMXYIccxp9vr08jYGZh6nsRcdZcPSMWD3ABZGo3Nbo8z8Zi08FJ42sIOPKiHLsR+LPQxzdWDULG86jqYSm3Qc59WsvGWQdER7ButGW2ARfbGrz39ns818LeDY5qQz4R/AzExFe64aUT0x3ux5MV19SZyHoB0oARrBawWZthB5BsLOH4EbdgBzIi9URqztWbHNLZxOcvsOZqc3k3TvaJ39W5nHdGG3bQwnOYgpPwfow1wNPFS3vlHcUu9xYNR9whWqPUV3x8o3ndbIulse62QY72XX72vcVn5S9CBHeqmgwxR9NZw0nOKtp+gwIgW4u4qP6+vqeMIx/GTIfQ1Z7jIB53rwbWFdEnIjYYCt91759/cWZ2derCPOU1oX+sC1DpCPBWaR07iiTbInCgCRdOKQ9Vg1TblTXUBuSK2GHnSdp16g1DNsWlhW5L05OHcYmOCs18igGPOjbFWxmSBTtU/gxqj2e/Gwre4q1IZV8ntLo36BopGFUKjhZneAs5u9ERSgFBRRMUi+34HEACvMys5TYWBsUzq7OcEyIPnokVZjHUBviZM52WLSSCi3YEFHYQo4dEAxFlw+cjdowjIq9LS2NeF7tZTJOPLRA4Ot2LAnOGpJ8FrGQ1pQmTZ5i4ccB6A8FJyuxQ2xQyBS1JPGx6pbCKFZwfJ3gbIZDMw/fYUI522IwxBcWPA6Ar7vfcnaoDcMrw0ywAoTHUDRAcawJzl5TdXMtdrjDTIdUberM4sK5Jo8m055acTqGbTb4eygwEDLvslg32zAsUwwBp12qCZsTfFJ9CR1r165lxu2KIKTTYhMWjgaFG+t6Z92Q+7ftERvSVsNHQUUMx22DkuAsM0khYo5Qxgre4SIHb2u6KOHHWw9iNF/Y/bmu5AzVrbDD1mdbFFI7YMFxQFJnp07I+gtGKHxxhntgEei5yeTDeTKO/7ib1R8dJH/vQPjMDJ2seyRCZ3k8JdaJSIg+ysn5wI4/qbOcnSAV+7ViwpZ+d2lRUTEJ52MKNxZ1e3c/bXi/0RIFnQ+wbguRBhAU+q0WmZTvpbrNSOosM+d5p26C8s8YxshNJj24Zc76f+1B86+MO94S1A265eUa6gqEEyfWBZ3PjEQuRxVbU3jWgdFBDiubSibH1tmamhrcOdFSbOvqNLKgv6tzc0cguBpJe18yYeniQniQrn7tE/q45YjJwjpYF+tMVwa/ehkk/UXMunDGJ6imob3d2liTybF1lonDl2tilcUo5ZJzH3x3/cEvAnB4dKV3IEQ3PL+b3tjTFiNArIq/yIvpTADnz5+f0VL/aTWm3LncyYPlJKcV4QSGCELdMdn1U1dv4MNJuRP5GbggQjTtud37Odl4Z8FpBdGkw1ZCtGN7rY9WvFRDn7Z3R5GC/tjc3vlAFJEa4qnb1/0Fv4G4SFHiBnJNg69ji2rb1RiU9AquP+7E6uUrEIvHnZ/VfPsFZSXfneF25mWZN6IJwrqPBWlnfQe9VHOQag50xfbDXrG6ud3/UCzSDuaLdEMP3oLbzJVgzI3Sid9DRlozzTI8ymwPlXtcl+uScMqQrlgqhyaMuZ58LS/LSVkZTgoMhuhQ7wD1DerUevQY6VijQ4vwOwTd1ODzvzYUH25hQxQ4my5HfTEwWdA3DVl+GWDLXgAh5Er3NLV1/jaZjGQ4izlZZzIcEow86u25Czf/q2BMZjKaFDgDu+4/sBmtSbVGcW98PWS/YCcHQ1cnhPP6Zp+vxo4mGX7YNRvP1NXVNTApLx/vWvUz0HdafP8wbR7cEkRpeUFOTsXk/Jx9h3sCn8fzYI+YC9wV8XjVhpACpMOTXCfn1h3qDgzJNRVNsnpEkZ1ePKVUhGgdRvZqCIvnRconWkkYASGpWwqNU0tcispMXAJMQUTnIloJbw4gZJdGjtV4bHyoDASdKPW6q7DbLoW8AuBzkcPy0S1eJ7JLsTVjQtZte/fvHzaVjWdW+hJqXFovkYbcaD3Xwpr5bdx20rRtZIg3mtrbOxMYIwhz+h/rrcDbgEswWFfAEazFcIERIZxJf4GN5mGFi69nlZR4Bgf7FwuSV2Awvo9+y3Y4fAjDWtXU1pEy1bQY4oWrNj/TjrQdeAhT7zaFQ41g0ZYMZ+Yv+aYgBp8WyIYHg8fuIUNWwXFrG4fR2/KzciprPvvsaCpBM4pdZ+o63QOnrwSd5QPy+fV4NXo75EBsYrEIE7uIvllcnNUZGngLnN9W/ZiOtQ7hqKz3+dTVp+oacV061TVdhuSzGMiFipnlOx0Z59e1th5WOLu63ONZqJP+AmZJiaKBw0/D4R8nc9g2g+J0DI6+MtRRejWzQH5jLBxl45oO+punzph9AQzDW4ZwwTKZHTQGd5jTXiFt6gaf7+8nZ+WcBX4rocDZtqrM495kw5KINjcIj+v56Xg5oH6lnilrEinHDsN7AnSFlD5+Uzff681ORwMO+xrse9rihd1lnsKfxPMmncZ4b3ovRnitIsbUWovXi/ep9njV5e4pP8SW/izkR+wSm7Fp3ZCOPg4Qvtt4iiPL9Ij2oCTHObHP4oRpXOr14tQv77YUCPHkiXCU9TW0dz6n4ZsLSzfJSryhvyzatod4jeZ7T12BwOxmKjiPx1yomjdYxTXEWf6GQhqhzVinzjCB2Ln0xhUrFfGJqBt9HX/AmwiOrlmwrz7FnyWpdqqaj4j8SgTzInx2RIp5tPWgGWnmG5JB5TlpLXCcMIBe9E4Qjootb74ZZmTkCSqT3J73KDh4HdTl4zcxFJQlXb191iaUyoxDR3qPFOTmDiC2FUyH9TDvzMmux/cdORKyIjtnmqsQXTjZWOXne32+/VbrBAK4WunG4WIZVGKSmX9X87M1bRMm5j6BR1BLhNfb0t9nrnvL2f5+HNKlPIkJeN5jOj2RtvBxIGxo7diJqLwSES30UMw+Mow+8x5KUPQ0JOQ1zGI6O//00/NxTlxhydDEOl7wVvtLApxObR1Uq+hexd96pGuKRhkvgxabOwRIOo9nruns0f6emyExjzsQ1drG1vaYe2PGfjmlrqVjD54h2yLaEWj9jnQtwSdGh+DNrgi91j8gFoensRRLLSGCfvdViKqyx+HQrOmIhPzy2EeJorGrNUHWUsRIBQQf23DmN5N5RDWA7xUmj/Tu1k7ZWOGR5DQjyTmd5SEQFck+J7TTZZ7W4ChORK9r+OzyUkWIkdvxVXOUbcMS26psROuqKDw81NjWUc2OMqWG6xXLWYeUJnJ4ESeWwuHUrGcsssLFo9WuCSmQHvLGRCHNMeErsTHFO1N/0PchltgHpp1Cxl44x5OmbCMVpfsgqBc3BWvSOUOmlDZOnbxh4qvzS/Ex9zJH3qTzR6vm//wmyADzf1yRAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/imgs/icon/photo.png":
/*!**********************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/imgs/icon/photo.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/photo.5f5f10af.png";

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/imgs/icon/record.png":
/*!***********************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/imgs/icon/record.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAAHrWRq0AAAABGdBTUEAALGPC/xhBQAACINJREFUaAXtGgtQVNf13PdYQBdMUHfZxepqWaCGsYkWta3RZmImThoM2rRWrNOKY3Fam2nascHUVD6xHTGZpJ2kyUhIajrB2A+1FSVNmyEqUcdgSvw0fljCghHYXT4aRGCX3dtz3+59fbv73i67ysTJ+GbennvPPf977r3nXQDQeAjHZ5oMlLdt5Q/7mwxJd62j//zpMgkyrMCpGNz0p//I3aABWQQOSwNEFL4mk95Yg1nFXqvJ8Cpa95YsjVatG2XmMgT3x28VBZEjuWWRzZ2zo97E5a6vadrD2/HDTLOxHd8hJkHWza1Uis00G/rpruI7bGXfnGGelJTExoKmiXvABqylBxmASck6aLZ3ynQJElblR8mMw5Rs3C0xhTFwyUoZIczKoc+ibTUbqq1mo5wAsvcYVi8aJIeZGXenoNMvLy4eLjXbvcy31m6XTK9qfJY5/SmWTVvzvyKvjCAOnmqMGyV6bRX510fco6lDHnFW2s922xk+yASG4A8h8AL10dTn373YNb+y/gzHazJQCo/nPv2WZ8uDs80UaApnCJs4PhCYLB3vc6ipgROEwiCn1TI2PTUJHAMjckhlk3CFulvK89E5OidIKgGvddvBIMFB47duB12qwxVaf9MttJpM3+DBxcw6d8+sjF/wPlMmB5Vrxs2kllA4bet2lnOcFmSCCCF3tZQv/zZg2jG6FJ24c7F16icvdLsktrDZYExsldBXigrBR1X3wOI9TbThgutsa7fzy3w9nGzvh9WvHZPTgRulnXgawtkyffeiq8dW8XAbF85wV4fclWrLNyxEXHMkaOtyGt9v66Vr/nAcsoypFJcNi0QJel8SqiRmBYE1KMU70A4Ls9K4iAqY62oPW35HNz+gNhSGi6ggYGEYUyyI8EkmpCMzI2M6nmGnYxGkRasaP7Z4KPj+jBuNUYtRBX8QJzhfBX8bhSeayWTAze5qjiV9Vmg8wic5lGIMfQpepyjoFoyO+D7OzkhfrWS5YQVouUcUhMLzFQ/pcPvY6/X5arBceJIrCcuiTJNxM2bPM5xAC7ItAWuOZjyCu2ydm/Khys5KDdj7waXep+rODLZ2OS2qvMq9XJUggLRmGEpY3FmXbXrs7XmuUKp4lXxxhehL06ZlUx/ssHW77qC7ii5ygQt3vgN//MH8FbzPoOZWwbdiJTFvsz1KbxRSaPm6CrQ/i+FnV9RDybLZjYsq6//B6RiM2QMUTkVReODUpoLpyP8rJmTFrkaYb5niLn79yBLWVz6aHiiJeHtV9THWJHg8jgC4z7FO9dFWsPcMwqmOVqkMZzjlE5MHpy5foclTjEleHzRW/us8tPcNwg6EHz5bOJEJtZqMA0rhrB2TAp0gYCo6EzHfB//afAmW/u4QnNq67BPo778uZZKiauSKYlKQZ0lzDffCAJZu+v7rbnij6KugT0z4AhemBmOag93fX2hWExIJF5MHkQRpjWl6sOjZd6SyV40xlqNUU8FYD3U1A5S4WzNESgtZO1LIblqIOvqHzgEh+lDlaiHyZWUYnwAiFuKmIO3xoUyhfcenw+eW/rbBKohkVehY2IHDCPBMOIAgcNsSyqLWJ04Cwipbd/dhtdHbuM93BFST6LNwOTc3N3Gk13UIqyD5Vg+/L114YBXYLjuPa9mktsy0aMcNjxXWpuFe5wglcA8RdPNYSTdv8X0JuMz/Qr30GK5KH7v8UTNgzDOQk2Fc5KWwGShdgJ9/8mWimtCIOEKqsabcyGhmm80WD3ibKKUG3AYqbd2OLbTmR2lwbagJhzP9ckhz/kuHXzzvGHgVqxknfpin+/H+X82dlBNlm0zzveA97vWhGiKUiQmJP1mzYUMXH48FlpaWsmsH6fMXo/qmm46uxii3pCbrsz+026/QqqLfoPFyVc5kn718ZW5b73U0HssfgW5hUPlEnQG8F7Fj1C3Jgs7y387ODiVzPG0MyEMYELZREyIIBbZORx19regu8MAJLHHlizgPFnZrd5+ADzr6YO70NPcz35qXM+vJvfZQndEdwHsXxqS8faBV6/FI8WGkiBnYbTbOfzCk2CeIl6Ck49rIKKysaqRtPYMizkJtS6fjO5IxVUV1CINOnT1N7bDtwFlI1omwveDunStffLtEolX5iZpCoTx4L38Wy+pcP17yDQMXoAqC2JH6FJ5vuAC/P2zDkJO+hCQh70K7ow2q1xfgzO5DTjmIXVeH8RvgPegdHIHCPIvj6UfzZ5KisuFQG5T9mB1AowLGK8Woty86B2D5S43gxQtbIpAKW6ezlL7x2CQYvHYeb9FylFw/r22G/ac7wTJZT1/53sKCuytq67YfOKkkUW2P6zb6yMt+4zHGb+NV4bZss9Hzt6Mf4Qfp/41vtLkgu+wg1KHxFcvnHG74yC4w460ZxgfZq2q1Ahn7DCiYozYJwXKNitOT9CsO2e3DNT+8f2Dr/jMpT+w7DUusBrh8dQhaXdfg/px0d9XaBY2YUkNr8or2o8PUuu3AIwH5coqp6RtXByboEkYHvG6x2+OZgV/sMHli4oQfL86C9z52wRGMvE4UoOHx+2BGmj4RfL6lsoF8LckI7ca4OvDvx5b0bahp8rQ4B85MTBRHXj7ScmnGZH3PvVaD67lH53467c4J39U2bWwj4+rA1JQk89833sstScRGKr4zOeJmwLgcOGHvhZPtfTHpz7NMhoUzp8TEMxbiuBzAsgI8/j9AjEWHRMN4xuOJy4Gvf3EqsPdWeOJyIJ4UiuZsvCkWuwP4KY7pIMaaQtEcCEox/+e+9B8D0fiiO0DIPjxgVrIPipYux3YAcS2mz5vjmULrXn+/Fg1fhcUTq5UiPhFPOc6JX0xb8Nr419jnpYePj91kKMsnAvzS1umqjCZ/TA6ECikrK+OKQoduqI9yxyswN2TXbeZIEfgfda4ovoIgGgIAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/imgs/icon/set.png":
/*!********************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/imgs/icon/set.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAEwElEQVRYR+2Ya+ifYxjHP1+HlPNeLKyYbEKUzWKTN5QhpznESplJQ85zGrESCqO2ib1AzOa4URuSbEgos3Is5JDxwjFnUaRLX13PPP/f7zn97P9/sfpf757nvu/v/X2u67q/13U/YjMxbSY8GSU63JEa2KMRMQHYfROJbJC0YRCMgYhGxAXAImDrQTapmPsncJ6kpV1xOhONiFOAJ7sCd5gXwDGSnu8wt9thiohtgI+APRL0duD3LhtUzNkZuDTffwLsK+nvNqxOHo2I64CbE+whSWe2ATeNR8TTwPE552JJd7XhtRKNiLGAE3/b9OJESV+1AbcQnQi8n7n+I7CnpF+a1nQh6oQ/K0GulXTrppAs1kbEbcDV+bxY0mX/m2hETALeSoAvAHvzr2Ei6gg5Uo6Yc9S56pyttEaPRsQ64JBcOUPSU8NBsuRVR6qQqGclHTcw0YiYCTyWC9dKml4HEhEz8nDsb88A9vp7wCpgWVP+RYQj5sjZjq6Tq0qPphx9BuyWYdlH0qe9RCNie+Bx4NgGT38PXCLpkao5ETEVeD3HauWqjuj1wE25eKGkyytIWltfA6aUxr4BPsznycCOpbH5kgqJGwIXEeUDe5Gku3v36yPaI0ffARMk/VpB1GAuqbbfgBuAJZL+8IuIsLD7gy3uW+W8CyUtqcAqS2ClXFURfRCYlWBzJN1XAXwA8C78W9m+Bg6tazIiwp59BdgO+AkYV3xMGTci5gGF9C2SNLc8PoRojxy9A0yW5JrcG6rFzrt8ebqklQ05au9eCbjs2mZJWl6B6UbHRcDFoE+ueom+BByeIFMlvVFFoHRSfwbGVH1Mj7d2AhxS7/eopDNqcE8ACglcLemkYt5GohGxK1CUxhWSLE+VFhHfplC/IOnIJm8WYxHxcXprnaRpDdgvAkc4zX0YJTn//+ueImKXzDe/f0LSaQ1gX6Z0rZF0VEei7r72BtqIPmc9rSXqzSKi+Bo/TpPkytRnEfEqcBhgjRzbIfSWqR+ALYEhIe1JEUdnTb5bJenkvtAnUVeIN9PTbwMH1Rym+cCNCTJT0oomr0aEmw83Iba5knxLGGIR4cP0geUwK9t+5SJTJU/3AHMS5VxJ91aAjgM+T320yFueXMmqvO+C8HLKk5vtvSR5TS/RsjIskGS52mhVRMckiR3ypI6vEfw7gCsSqavgz5O0oIKkBd8l2nu6yLg/HXKDqCuh7g0XJmCf+GaabAHY++eUNrYaOHy23hL6DHBiTSo9AMzOdbMluegMsTqiTnrX7ErxLSOkmLt8uvLU2f3A+VW9bEQcCPg82NZLKtrKdqLpMbd1xQ2xUYZS2txbWrBdXn0dtmddaR6W5Oal0iLCReXgHJwkyRWxz9oa59UOV64a6cZ5qaSz6z6ojaivx+4RLR0jeRVxd+YuzQep0rpc7m4BrsnVI3W5u0qSVaTWuhAtX8IsGZaO2i9v2qwYy/9XzmFHyrJkcW+8NLYSzYPlHw7LcqPlkop+tQuvvjkRYakqLnLTJa1tA+pENMmWb6TD9Uun8eZZJj8IUZfC9eWOq80LLeM+QFMkuf1rtc5E06uWqjuB8a3IzRNM7lRJvlJ3soGIdkIcoUmjRIfbsaMeHW6P/gPoLd46K3IRqgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/loading.png":
/*!**************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/loading.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC40lEQVRYR+2WXUgUURTHz7nunS2Wiu2LrJcigqgEkwKDoh4jhSBQ0tSZTXdnt3rpqVcJevDFQChnVmx31uhLehUKLIwCSayXIohKoS8MQy0Mdu7unJi1lVi3nXVX2gLv8z3n/7v/c+65F6HEC0usD8sAi3KAIsoKEScDEOPcO+vD+v5kXFcuIVEbAnbyYLRjsSVdFICpt7QBsB5bhJFVV8Zd90TC+jYnSkkeMDgikBlWKnkZ+4Kt1z45ATkCmJrsA6KXUij21NSa9wGyYSBMcIRK8M6+E1OeDwCwgQgGJDVaK8LyIwA8CAATXFi78Vzsay6InACiWzlCDB6mTpdg2/Bs5H1cVyoklkygv+9V6ty9pzcLK1ku+Y1RuqJsEi74nBZkBDWuYHSgYABT91UB0CgATHPL2oOh2Mdcyai9nYny8WEA2A9Etks7UTXeFgxgB5rdLXs5t75j2/U3TvVMOdJ1arVwu5o54f0kQEUSyIcAMxzdPlTDIjNH1hIkdLnGAtgiqUY4H9Fse0iXtwvC14DAUmAIDe5A9FZeAKYmTwLiOgTrEFdjjwuBsJ0Dxp6lY4nwpDsYuZ0vgL3xGE+yXXbjFQKQKp+mdAFQIwAMcnQ35V2CQgWzluJOnSSmPU2IOM79kQd5ObBUAHO3Ymzo11ywO0HN7KsFTWjq8nkCPCB5Z5uwvt8sBoa6la2Cwdh8DqLnUtCo+j3nQgBNHgGASm6JjXjmxlRRAJ11K4XHMwEAq+amNcWkoCHnBLAnm2mKte5Q34tixNOxQlOOEsAFQnoieX9czHTV8S1YCoiiJmFJAExduUxAO9yqUVsSgLgudyDgYUmNVhcLQHpgDarhmT/lWe4BRwdMTR5iDLpcAeNuseXIFu8IkNB8x8s4juTzv0sLmD1KteSP2h8Tx+UIkJnB1ORWTjiIoej4/FOrN6xH9eako1qWDUUD0NVGr2D8hBQ0ev8KQCEi/98kXOpT/tMO/AQF+RkwFTuAugAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/style/base.less?vue&type=style&index=0&lang=less&":
/*!****************************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/style/base.less?vue&type=style&index=0&lang=less& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_base_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./base.less?vue&type=style&index=0&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!../../../../../git-nodeProgram/uni-app-customer/static/style/base.less?vue&type=style&index=0&lang=less&");
/* harmony import */ var _HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_base_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_base_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_base_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_base_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_base_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/static/style/icons.less?vue&type=style&index=1&lang=less&":
/*!*****************************************************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/static/style/icons.less?vue&type=style&index=1&lang=less& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_icons_less_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../软件安装包/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./icons.less?vue&type=style&index=1&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!../../../../../git-nodeProgram/uni-app-customer/static/style/icons.less?vue&type=style&index=1&lang=less&");
/* harmony import */ var _HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_icons_less_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_icons_less_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_icons_less_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_icons_less_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_icons_less_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/store/getters.js":
/*!************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/store/getters.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.pHeight = exports.containerMaskFlag = exports.containerLoadingFlag = exports.userId = exports.userName = exports.userToken = void 0; // 获取用户token
var userToken = function userToken(state) {return state.app.userToken;};
// 获取用户姓名
exports.userToken = userToken;var userName = function userName(state) {return state.app.userName;};
// 获取用户id
exports.userName = userName;var userId = function userId(state) {return state.app.userId;};

// 获取 全屏loading状态
exports.userId = userId;var containerLoadingFlag = function containerLoadingFlag(state) {return state.app.containerLoadingFlag;};

// 获取 全屏遮罩mask 状态
exports.containerLoadingFlag = containerLoadingFlag;var containerMaskFlag = function containerMaskFlag(state) {return state.app.containerMaskFlag;};

// 获取 屏幕可视区高度
exports.containerMaskFlag = containerMaskFlag;var pHeight = function pHeight(state) {return state.app.pHeight;};exports.pHeight = pHeight;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/store/index.js":
/*!**********************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/store/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"));
var _vuexPersistedstate = _interopRequireDefault(__webpack_require__(/*! vuex-persistedstate */ "../../../../../git-nodeProgram/uni-app-customer/node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js"));
var _app = _interopRequireDefault(__webpack_require__(/*! ./modules/app */ "../../../../../git-nodeProgram/uni-app-customer/store/modules/app.js"));
var _find = _interopRequireDefault(__webpack_require__(/*! ./modules/find */ "../../../../../git-nodeProgram/uni-app-customer/store/modules/find.js"));
var _sign = _interopRequireDefault(__webpack_require__(/*! ./modules/sign */ "../../../../../git-nodeProgram/uni-app-customer/store/modules/sign.js"));
var _my = _interopRequireDefault(__webpack_require__(/*! ./modules/my */ "../../../../../git-nodeProgram/uni-app-customer/store/modules/my.js"));
var getters = _interopRequireWildcard(__webpack_require__(/*! ./getters */ "../../../../../git-nodeProgram/uni-app-customer/store/getters.js"));
var _logger = _interopRequireDefault(__webpack_require__(/*! vuex/dist/logger */ "./node_modules/vuex/dist/logger.js"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // vuex 数据持久化，防止刷新后vuex中数据消失

_vue.default.use(_vuex.default);

var debug = "development" !== 'production';
















var store = new _vuex.default.Store({
  modules: {
    app: _app.default,
    find: _find.default,
    sign: _sign.default,
    my: _my.default },

  getters: getters,
  // strict: debug,  // 加了严格模式动态挂载路由会报错，但不影响功能
  // plugins: debug ? [createLogger()] : [] // 插件只有一个时




  plugins: debug ? [(0, _logger.default)()] : [] // 多个插件时候
});var _default =


store;exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/store/modules/app.js":
/*!****************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/store/modules/app.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var types = _interopRequireWildcard(__webpack_require__(/*! ../mutation-types */ "../../../../../git-nodeProgram/uni-app-customer/store/mutation-types.js"));
var _fs = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");var _mutations;function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var app = {
  state: {
    userName: '', // 用户名
    userId: '', // 用户id
    // userToken: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NSIsInJvbGVzIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTUzMDQyMzl9.Pznwe4fyBDXb0JIQOKZbMvca3P6a7REvHyYDbdnieSM',
    userToken: '',
    containerLoadingFlag: false, // 控制页面全屏下的外层container 容器的 loading状态显示与隐藏
    containerMaskFlag: false, // 控制页面全屏下的外层container 容器的 遮罩状态显示与隐藏
    pHeight: '0' // 页面的高度，minxin 中获取后 存入了 store中
  },
  mutations: (_mutations = {}, _defineProperty(_mutations,
  types.setUserName, function (state, str) {
    state.userName = str;
  }), _defineProperty(_mutations,
  types.setUserId, function (state, str) {
    state.userId = str;
  }), _defineProperty(_mutations,
  types.setUserToken, function (state, str) {
    state.userToken = str;
  }), _defineProperty(_mutations,

  types.setContainerLoadingFlag, function (state) {var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    state.containerLoadingFlag = flag;
  }), _defineProperty(_mutations,

  types.setContainerMaskFlag, function (state) {var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    debugger;
    state.containerMaskFlag = flag;
  }), _defineProperty(_mutations,

  types.saveWindowHeight, function (state, pHeight) {
    state.pHeight = pHeight;
  }), _mutations),

  actions: {
    // 设置 用户姓名
    setUserName: function setUserName(_ref, str) {var commit = _ref.commit,state = _ref.state;
      commit(types.setUserName, str);
    },
    // 设置 用户id
    setUserId: function setUserId(_ref2, str) {var commit = _ref2.commit,state = _ref2.state;
      commit(types.setUserId, str);
    },
    // 设置用户token
    setUserToken: function setUserToken(_ref3, str) {var commit = _ref3.commit,state = _ref3.state;
      commit(types.setUserToken, str);
    },
    // 设置全屏 loading 状态
    setContainerLoadingFlag: function setContainerLoadingFlag(_ref4, flag) {var commit = _ref4.commit,state = _ref4.state;
      commit(types.setContainerLoadingFlag, flag);
    },
    // 设置全屏 mask遮罩 状态
    setContainerMaskFlag: function setContainerMaskFlag(_ref5, flag) {var commit = _ref5.commit,state = _ref5.state;
      commit(types.setContainerMaskFlag, flag);
    },
    // 存储 获取到的系统的可视区高度
    saveWindowHeight: function saveWindowHeight(_ref6, pHeight) {var commit = _ref6.commit,state = _ref6.state;
      commit(types.saveWindowHeight, pHeight);
    } } };var _default =



app;exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/store/modules/find.js":
/*!*****************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/store/modules/find.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var types = _interopRequireWildcard(__webpack_require__(/*! ../mutation-types */ "../../../../../git-nodeProgram/uni-app-customer/store/mutation-types.js"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}} // import Cookies from 'js-cookie'

var find = {
  state: {},


  mutations: {},


  actions: {} };var _default =




find;exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/store/modules/my.js":
/*!***************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/store/modules/my.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var types = _interopRequireWildcard(__webpack_require__(/*! ../mutation-types */ "../../../../../git-nodeProgram/uni-app-customer/store/mutation-types.js"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}

var my = {
  state: {},


  mutations: {},


  actions: {} };var _default =




my;exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/store/modules/sign.js":
/*!*****************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/store/modules/sign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var types = _interopRequireWildcard(__webpack_require__(/*! ../mutation-types */ "../../../../../git-nodeProgram/uni-app-customer/store/mutation-types.js"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}

var sign = {
  state: {},


  mutations: {},


  actions: {} };var _default =




sign;exports.default = _default;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/store/mutation-types.js":
/*!*******************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/store/mutation-types.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.saveWindowHeight = exports.setUserToken = exports.setUserId = exports.setUserName = void 0; // 设置用户名
var setUserName = 'setUserName';
// 设置 用户id
exports.setUserName = setUserName;var setUserId = 'setUserId';
// 设置 用户token
exports.setUserId = setUserId;var setUserToken = 'setUserToken';
// 存入 minxin 中获取的 系统的可视区高度
exports.setUserToken = setUserToken;var saveWindowHeight = 'saveWindowHeight';exports.saveWindowHeight = saveWindowHeight;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/utils/http.js":
/*!*********************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/utils/http.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
























var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"));
var _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ "../../../../../git-nodeProgram/uni-app-customer/store/index.js"));
var _config2 = _interopRequireDefault(__webpack_require__(/*! @/api/config.js */ "../../../../../git-nodeProgram/uni-app-customer/api/config.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import axios from 'axios'
// // 创建axios实例
// const http = axios.create({
// //   baseURL: process.env.BASE_API,
//   baseURL: 'http://localhost:5000',
//   timeout: 50000 ,// 请求超时时间
// })
// // request拦截器
// http.interceptors.request.use(
//   config => {
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded' // 关键所在
//     return config
//   },
//   error => {
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// )
// export {http}
//-------------up is axios ---------
/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */ /*
    // 开放的接口
    import http from './interface' 
    
    http.config.baseUrl = "http://localhost:8080/api/"
    
    http.request(url:'user/list',method:'GET').then((res)=>{
    	console.log(JSON.stringify(res))
    })
    http.get('user/list').then((res)=>{
    	console.log(JSON.stringify(res))
    })
    http.get('user/list', {status: 1}).then((res)=>{
    	console.log(JSON.stringify(res))
    })
    http.post('user', {id:1, status: 1}).then((res)=>{
    	console.log(JSON.stringify(res))
    })
    http.put('user/1', {status: 2}).then((res)=>{
    	console.log(JSON.stringify(res))
    })
    http.delete('user/1').then((res)=>{
    	console.log(JSON.stringify(res))
    }) 
    
    */var _default = { config: { baseUrl: _config2.default.baseUrl, header: { 'Content-Type': 'application/json;charset=UTF-8' // 默认请求的content-Type 为 application/json
      // 'Content-Type':'application/x-www-form-urlencoded'
    }, data: {}, loading: false, loadingText: '加载中', method: "POST", // 默认的 method
    dataType: "json", /* 如设为json，会对返回的数据做一次 JSON.parse */responseType: "text", success: function success() {}, fail: function fail() {}, complete: function complete() {} }, // 拦截器对象
  interceptor: { // 默认统一的请求拦截函数
    request: function request(configs) {
      // 将请求的参数中 默认增加 token
      //   debugger
      var data = configs.data || {};
      // 主要控制是否loading
      var loading = configs.loading;
      if (configs.url === "".concat(configs.baseUrl, "/users/register")) {

      } else {
        // 非登录接口时 需要接口中 统一加上 token 属性（根据业务需求来定）
        configs.data = JSON.stringify(Object.assign(configs.data, {
          'token': _index.default.getters.userToken // 从store 中 获取userToken 
        }));
      }
      // 全局属性中传入的 loading 为真，则需要显示
      if (loading) {
        var title = configs.loadingText;
        // 加载loading
        uni.showLoading({
          title: title,
          mask: true });

      }
    },
    // 默认统一的响应拦截函数
    response: function response(configs) {
      // debugger
      // 隐藏加载loading
      configs.config.loading && uni.hideLoading();
      return configs;
    } },

  request: function request(options) {var _this = this;
    // debugger
    if (!options) {
      options = {};
    }
    options.header = options.header || this.config.header;
    options.baseUrl = options.baseUrl || this.config.baseUrl;
    options.dataType = options.dataType || this.config.dataType;
    options.url = options.baseUrl + options.url;
    options.data = options.data || {};
    options.loading = options.loading || this.config.loading;
    options.loadingText = options.loadingText || this.config.loadingTextloadingText;
    options.method = options.method || this.config.method;

    //TODO 加密数据

    //TODO 数据签名
    /* 
    _token = {'token': getStorage(STOREKEY_LOGIN).token || 'undefined'},
    _sign = {'sign': sign(JSON.stringify(options.data))}
    options.header = Object.assign({}, options.header, _token,_sign) 
    */

    return new Promise(function (resolve, reject) {
      // debugger
      var _config = null;

      //注意：options.complerte 这个回调函数会在 uni.request() 调用介绍后自动执行（虽然位置现在放在了 uni.request()调用 之前），
      //且uni.request()执行后的返回的数据response会自动传给 options.complate方法
      options.complete = function (response) {
        // uni.require() 请求无论是失败还是成功后都会自动走这个 complete 的回调函数方法
        console.log("请求时间" + new Date().getTime() + ":这是uni.require() 请求完成complete的回调");
        // debugger
        // uni.require() 后返回的 状态码  statusCode 
        var statusCode = response.statusCode;

        response.config = _config;

        if (true) {
          // debugger
          // 开发环境
          if (statusCode === 200) {
            console.log("【" + _config.requestId + "】 结果：" + JSON.stringify(response.data));
          }
        }

        // 如果有响应的回调 再执行响应的回调， 相当于请求结束后的 相应拦截
        if (_this.interceptor.response) {
          // debugger
          var newResponse = _this.interceptor.response(response);
          if (newResponse) {
            response = newResponse;
          }
        }
        // 统一的响应日志记录
        _reslog(response);

        if (statusCode === 200) {//成功
          // debugger
          resolve(response);
        } else {
          reject(response);
        }
      };

      options.fail = function (error) {
        // uni.require() 请求失败后会自动走这个 fail 的回调函数方法
        console.log("请求时间" + new Date().getTime() + ":这是uni.require() 请求完成fail的回调");
      };

      options.success = function (response) {
        // uni.require() 请求成功后会自动走这个 success 的回调函数方法
        console.log("请求时间" + new Date().getTime() + ":这是uni.require() 请求完成success的回调");
      };
      // debugger
      // 将传入的配置参数与默认的参数进行合并 后赋值给 _config
      _config = Object.assign({}, _this.config, options);
      _config.requestId = new Date().getTime();

      // 如果有请求的回调函数,先执行请求回调，相当于 请求拦截
      if (_this.interceptor.request) {
        _this.interceptor.request(_config);
      }

      // 调取统一的请求日志的方法
      _reqlog(_config);

      if (true) {
        // 开发环境下 
        console.log("【" + _config.requestId + "】 地址：" + _config.url);
        if (_config.data) {
          console.log("【" + _config.requestId + "】 参数：" + JSON.stringify(_config.data));
        }
      }

      // 调用 uni.request 发起请求，
      // debugger
      var a = uni.request(_config);
      // debugger
    });
  },
  // get 请求
  get: function get(url, data, options) {
    // debugger
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'GET';
    return this.request(options);
  },
  // post 请求
  post: function post(url, data, options) {
    // debugger
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'POST';
    return this.request(options);
  },
  // put请求
  put: function put(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'PUT';
    return this.request(options);
  },
  // delete 请求
  delete: function _delete(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'DELETE';
    return this.request(options);
  } };



/**
        * 请求接口日志记录
        */exports.default = _default;
function _reqlog(req) {
  if (true) {
    console.log("【" + req.requestId + "】 地址：" + req.url);
    if (req.data) {
      // debugger
      console.log("【" + req.requestId + "】 请求参数：" + JSON.stringify(req.data));
      // debugger
    }
  }
  //TODO 调接口异步写入日志数据库
}

/**
   * 响应接口日志记录
   */
function _reslog(res) {
  var _statusCode = res.statusCode;
  if (true) {
    console.log("【" + res.config.requestId + "】 地址：" + res.config.url);
    if (res.config.data) {
      console.log("【" + res.config.requestId + "】 请求参数：" + JSON.stringify(res.config.data));
    }
    console.log("【" + res.config.requestId + "】 响应结果：" + JSON.stringify(res));
  }
  //TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
  switch (_statusCode) {
    case 200:
      break;
    case 401:
      break;
    case 404:
      break;
    default:
      break;}

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/utils/miniProSceneType.js":
/*!*********************************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/utils/miniProSceneType.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getEnterType = void 0;
var getEnterType = function getEnterType(typeNum) {
  // 判断场景值
  switch (typeNum) {
    case 1001: //发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表）
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1005: //顶部搜索框的搜索结果页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1006: //发现栏小程序主入口搜索框的搜索结果页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1007: //单人聊天会话中的小程序消息卡片
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1008: //群聊会话中的小程序消息卡片
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;


    case 1011: //扫描二维码
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1012: //长按图片识别二维码
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1013: //手机相册选取二维码
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1014: //小程序模板消息
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1017: //前往体验版的入口页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1019: //微信钱包
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1020: //公众号 profile 页相关小程序列表
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1022: //聊天顶部置顶小程序入口
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1023: //安卓系统桌面图标
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1024: //小程序 profile 页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1025: //扫描一维码
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1026: //附近小程序列表
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1027: //顶部搜索框搜索结果页「使用过的小程序」列表
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1028: //我的卡包
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1029: //卡券详情页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1030: //自动化测试下打开小程序
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1031: //长按图片识别一维码
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1032: //手机相册选取一维码
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1034: //微信支付完成页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1035: //公众号自定义菜单
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1036: //App 分享消息卡片
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1037: //小程序打开小程序
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1038: //从另一个小程序返回
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1039: //摇电视
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1042: //添加好友搜索框的搜索结果页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1043: //公众号模板消息
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1044: //带 shareTicket 的小程序消息卡片
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1045: //朋友圈广告
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1046: //朋友圈广告详情页
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1047: //扫描小程序码
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1048: //长按图片识别小程序码
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1049: //手机相册选取小程序码
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1052: //卡券的适用门店列表
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1053: //搜一搜的结果页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1054: //顶部搜索框小程序快捷入口
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1056: //音乐播放器菜单
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1057: //钱包中的银行卡详情页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1058: //公众号文章
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1059: //体验版小程序绑定邀请页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1064: //微信连Wi-Fi状态栏
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1067: //公众号文章广告
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;


    case 1068: //附近小程序列表广告
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1069: //移动应用
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1071: //钱包中的银行卡列表页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1072: //二维码收款页面
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1073: //客服消息列表下发的小程序消息卡片
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1074: //公众号会话下发的小程序消息卡片
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1077: //摇周边
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1078: //连Wi-Fi成功页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1079: //微信游戏中心
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1081: //客服消息下发的文字链
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1082: //公众号会话下发的文字链
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1084: //朋友圈广告原生页
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1089: //微信聊天主界面下拉，「最近使用」栏（基础库2.2.4版本起包含「我的小程序」栏）
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1090: //长按小程序右上角菜单唤出最近使用历史
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1091: //公众号文章商品卡片
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1092: //城市服务入口
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1095: //小程序广告组件
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1096: //聊天记录
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1097: //微信支付签约页
      return 1; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1099: //页面内嵌插件
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1102: //公众号 profile 页服务预览
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1103: //发现栏小程序主入口，「我的小程序」列表（基础库2.2.4版本起废弃）
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;

    case 1102: //微信聊天主界面下拉，「我的小程序」栏（基础库2.2.4版本起废弃）
      return 2; // 目前暂时定义 0是扫码，1是点击分享图，2.微信上搜索的，后续在调整
      break;}

};exports.getEnterType = getEnterType;

/***/ }),

/***/ "../../../../../git-nodeProgram/uni-app-customer/utils/mixins.js":
/*!***********************************************************!*\
  !*** D:/git-nodeProgram/uni-app-customer/utils/mixins.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.miniProApi = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _base = _interopRequireDefault(__webpack_require__(/*! @/api/base.js */ "../../../../../git-nodeProgram/uni-app-customer/api/base.js"));
var _comm = _interopRequireDefault(__webpack_require__(/*! @/api/comm.js */ "../../../../../git-nodeProgram/uni-app-customer/api/comm.js"));

var _miniProSceneType = __webpack_require__(/*! @/utils/miniProSceneType.js */ "../../../../../git-nodeProgram/uni-app-customer/utils/miniProSceneType.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

// 小程序页面跳转
var miniProApi = {
  components: {},


  data: function data() {
    return {
      pHeight: 0 // container 组件的 高，从系统中获取
    };
  },
  computed: {},


  watch: {},


  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(options, data) {var res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              // debugger
              console.log(this);
              //获取 系统的高后，由页面传给 container 组件
              this.pHeight = uni.getSystemInfoSync().windowHeight;
              // 系统的高 存入 store中
              this.$store.dispatch('saveWindowHeight', this.pHeight);
              // debugger
              try {
                if (uni.canIUse('getSystemInfoSync.return.windowHeight')) {
                  res = uni.getSystemInfoSync();
                  console.log(res.model);
                  console.log(res.pixelRatio);
                  console.log(res.windowWidth);
                  console.log(res.windowHeight);
                  console.log(res.language);
                  console.log(res.version);
                  console.log(res.platform);
                }
              } catch (error) {

              }
              // 将页面中 写入  methods 中写入 一个 onComLoad 的方法， 如果有此方法则在 页面 onload 生命周期时，先执行 onComLoad 的方法 
              if (!(typeof this.onComLoad != 'undefined')) {_context.next = 7;break;}_context.next = 7;return this.onComLoad(options, data);case 7:

              // this.pHeight= this.getDeviceApi().getSystemInfoSync().windowHeight;
              // console.log("---获取到的系统屏幕高度---------",this.pHeight)		
              console.log('mixin onLoad');case 8:case "end":return _context.stop();}}}, _callee, this);}));function onLoad(_x, _x2) {return _onLoad.apply(this, arguments);}return onLoad;}(),

  onShow: function onShow() {
    //获取 系统的高后，由页面传给 container 组件
    this.pHeight = uni.getSystemInfoSync().windowHeight;
    // 系统的高 存入 store中
    this.$store.dispatch('saveWindowHeight', this.pHeight);
    console.log('mixin onShow');
  },
  // 页面初次渲染完成
  onReady: function onReady() {
    console.log('mixin onReady');
  },
  onHide: function onHide() {
    console.log('mixin onHide');
  },
  onUnload: function onUnload() {
    console.log('mixin onUnload');
  },
  onPullDownRefresh: function onPullDownRefresh() {
    console.log('mixin onPullDownRefresh');
  },
  onReachBottom: function onReachBottom() {
    console.log('mixin onReachBottom');
  },
  onShareAppMessage: function onShareAppMessage() {
    console.log('mixin onShareAppMessage');
  },
  onPageScroll: function onPageScroll() {
    console.log('mixin onPageScroll');
  },
  onTabItemTap: function onTabItemTap() {
    console.log('mixin onTabItemTap');
  },
  created: function created() {

  },
  methods: {
    // 检查是否登录
    getLoginStatus: function getLoginStatus() {var _this2 = this;
      return new Promise(function (resolve, reject) {
        // 从store 中获取 用户
        var loginStatus = _this2.getStorage("token");
        if (loginStatus) {
          // 登陆成功
          resolve(true);
        } else {
          // 未登陆成功
          resolve(false);
        }
      });
    },
    // 页面跳转
    navigatePage: function navigatePage(url) {
      return new Promise(function (resolve, reject) {
        uni.navigateTo({
          url: url,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          } });

      });
    },
    switchPage: function switchPage(url) {
      return new Promise(function (resolve, reject) {
        uni.switchTab({
          url: url,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          } });

      });
    },
    redirectPage: function redirectPage(url) {
      return new Promise(function (resolve, reject) {
        uni.redirectTo({
          url: url,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          } });

      });
    },
    reLaunchPage: function reLaunchPage(url) {
      return new Promise(function (resolve, reject) {
        uni.reLaunch({
          url: url,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          } });

      });
    },
    // 获取登录场景值（小程序）
    getEnterType: _miniProSceneType.getEnterType,
    //小程序官方所有接口写在这里
    getDeviceApi: function getDeviceApi() {
      return {
        canIUse: uni.canIUse,
        showNavigationBarLoading: uni.showNavigationBarLoading,
        hideNavigationBarLoading: uni.hideNavigationBarLoading,
        stopPullDownRefresh: uni.stopPullDownRefresh,
        chooseImage: uni.chooseImage,
        getStorage: uni.getStorage,
        getStorageSync: uni.getStorageSync,
        getImageInfo: uni.getImageInfo,
        setStorageSync: uni.setStorageSync,
        clearStorage: uni.clearStorage,
        removeStorageSync: uni.removeStorageSync,
        navigateTo: uni.navigateTo,
        switchTab: uni.switchTab,
        reLaunch: uni.reLaunch,
        navigateBack: uni.navigateBack,
        showLoading: uni.showLoading,
        hideLoading: uni.hideLoading,
        showToast: uni.showToast,
        showModal: uni.showModal,
        showActionSheet: uni.showActionSheet,
        getSetting: uni.getSetting,
        authorize: uni.authorize,
        openSetting: uni.openSetting,
        getSystemInfo: uni.getSystemInfo,
        getLocation: uni.getLocation,
        openLocation: uni.openLocation,
        redirectTo: uni.redirectTo,
        showShareMenu: uni.showShareMenu,
        onShareAppMessage: uni.onShareAppMessage,
        getSystemInfoSync: uni.getSystemInfoSync,
        makePhoneCall: uni.makePhoneCall,
        pageScrollTo: uni.pageScrollTo,
        requestPayment: uni.requestPayment,
        setNavigationBarTitle: uni.setNavigationBarTitle,
        getUserInfo: uni.getUserInfo,
        login: uni.login,
        getShareInfo: uni.getShareInfo };

    },

    // 开启loading
    showLoading: function showLoading(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      this.getDeviceApi().showLoading({
        title: title || '加载中' });

      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    },
    // 关闭 loading
    hideLoading: function hideLoading() {var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
      this.getDeviceApi().hideLoading();
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    },
    // 成功的 showToast
    success: function success(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;var mask = arguments.length > 2 ? arguments[2] : undefined;
      this.getDeviceApi().showToast({
        title: title,
        icon: 'success',
        mask: mask ? false : true,
        duration: duration });

      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    },
    // modal弹框
    modal: function modal(text) {var _this3 = this;var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';
      return new Promise(function (resolve, reject) {
        _this3.getDeviceApi().showModal({
          title: title,
          content: text,
          showCancel: false,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          } });

      });
    },
    // confirm弹框
    confirm: function confirm(text) {var _this4 = this;var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '提示';var confirmText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '确定';var cancelText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '取消';
      return new Promise(function (resolve, reject) {
        var params = {
          title: title,
          content: text,
          showCancel: true,
          cancelText: cancelText,
          confirmText: confirmText,
          success: function success(res) {
            if (res.confirm) {
              resolve(0, payload);
            } else if (res.cancel) {
              reject(1, payload);
            }
          },
          fail: function fail(res) {
            reject(-1, payload);
          } };

        _this4.getDeviceApi().showModal(params);
      });
    },
    // toast 弹框
    toast: function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;var onHide = arguments.length > 2 ? arguments[2] : undefined;var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
      this.getDeviceApi().showToast({
        title: title,
        mask: false,
        duration: duration,
        icon: icon });

      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, duration);
      }
    },
    // alert 弹框
    alert: function alert(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      var _this = this;
      this.getDeviceApi().showToast({
        title: title,
        image: '../static/imgs/icon/alert.png',
        mask: false,
        duration: duration });

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, duration);
      });
    },
    // error 弹框
    error: function error(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;var onHide = arguments.length > 2 ? arguments[2] : undefined;
      var _this = this;
      this.getDeviceApi().showToast({
        title: title,
        image: '../static/imgs/icon/error.png',
        mask: true,
        duration: duration });

      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, duration);
      }
    },
    // 设置localstorage 
    setStorage: function setStorage(key, val) {
      if (key) {
        // 成功返回 customer
        this.getDeviceApi.setStorageSync({
          key: key,
          data: val,
          success: function success(res) {
            // success
            console.log("---localStorage\u5DF2\u6210\u529F\u5B58\u5165 ".concat(key, "---\u503C\u4E3A\uFF1A"), val);
          },
          fail: function fail() {
            // fail
            console.log("localStorage存入用户userInfo失败！");
          },
          complete: function complete() {
            // complete
          } });

      }
    },
    // 提取localstorage
    getStorage: function getStorage(key) {var _this5 = this;
      return new Promise(function (resolve, reject) {
        var res = _this5.getDeviceApi.getStorageSync(key);
        resolve(res);
      });
    },
    // 删除localstorage 
    removeStorage: function removeStorage(key) {var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      switch (type) {
        // type 1 表示 异步删除
        case 1:
          this.getDeviceApi.removeStorage({
            key: key,
            success: function success(res) {
              // success
              console.log("localStorage\u5220\u9664".concat(key, "\u6210\u529F"));
            },
            fail: function fail() {
              // fail
              console.log("localStorage\u5220\u9664[".concat(key, "]\u5931\u8D25"));
            },
            complete: function complete() {
              // complete
            } });

          break;
        // type 2 表示 同步删除
        case 2:
          this.getDeviceApi.removeStorageSync({
            key: key,
            success: function success(res) {
              // success
              console.log("localStorage\u5220\u9664".concat(key, "\u6210\u529F"));
            },
            fail: function fail() {
              // fail
              console.log("localStorage\u5220\u9664[".concat(key, "]\u5931\u8D25"));
            },
            complete: function complete() {
              // complete
            } });

          break;
        default:
          break;}

    },
    // 判断是否 isundefined
    isUndefined: function isUndefined(item) {
      return typeof item === 'undefined';
    },
    // 判断是否是 非 undefined
    isDefined: function isDefined(item) {
      return !this.isUndefined(item);
    },
    // 判断是否是 string
    isString: function isString(item) {
      return typeof item === 'string';
    },
    //判断是数字
    isNumber: function isNumber(item) {
      return typeof item === 'number';
    },
    // 判断是数组
    isArray: function isArray(item) {
      return Object.prototype.toString.apply(item) === '[object Array]';
    },
    // 判断是对象
    isObject: function isObject(item) {
      return typeof item === 'object' && !this.isArray(item);
    },
    // 判断是函数
    isFunction: function isFunction(item) {
      return typeof item === 'function';
    },
    // 授权成功后，进行登陆注册获取 token，并缓存 AuthorizeStatus ,token 等
    authorizeAfter_login: function () {var _authorizeAfter_login = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this6 = this;var that;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                that = this;
                // debugger;
                // 登陆之前，首先将全局的授权状态notAuthrize改为 已授权(true)，并存入 localstorage中，后续判断是否授权都是看localstorage里面的这个字段
                this.$parent.globalData.notAuthorize = true;_context5.next = 4;return (
                  that.setStorage("AuthorizeStatus", true));case 4:return _context5.abrupt("return",
                new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(resolve, reject) {var token, userInfo, _ref2, code, _userInfo, ret, type, params;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.prev = 0;

                            console.log('---调用login方法---');
                            token = _this6.getDeviceApi.getStorageSync('token') || '';

                            userInfo = _this6.getDeviceApi.getStorageSync('userInfo') || '';if (!
                            token) {_context4.next = 7;break;}_context4.next = 7;return that.removeStorage("token");case 7:if (!
                            userInfo) {_context4.next = 10;break;}_context4.next = 10;return that.removeStorage("userInfo");case 10:_context4.next = 12;return (


                              _this6.getDeviceApi.login());case 12:_ref2 = _context4.sent;code = _ref2.code; //通过调用login获取code 判断是否开始登录

                            console.log("获取到的code：", code);if (!

                            code) {_context4.next = 34;break;}_context4.next = 18;return (
                              _this6.getDeviceApi.getUserInfo({
                                lang: "zh_CN" }));case 18:_userInfo = _context4.sent;

                            console.log("-----授权后通过wepy.getUserInfo()获取用户信息返回的结果-----：", _userInfo);

                            _this6.$parent.globalData.ret = _userInfo; // 将返回的数据赋值給  globalData中   

                            console.log('---获取信息,发送网络请求，将获取到的code 传给后台获取 用户信息（openid、token等信息）---');

                            ret = _this6.$parent.globalData.ret;

                            type = "";

                            console.log("----打印global中的 optionObj对象信息---：", _this6.$parent.globalData.optionObj);if (!
                            _this6.$parent.globalData.optionObj.scene) {_context4.next = 29;break;}_context4.next = 28;return (

                              that.getEnterType(_this6.$parent.globalData.optionObj.scene));case 28:type = _context4.sent;case 29:


                            params = {
                              params: {
                                code: code,
                                encryptedData: ret.encryptedData,
                                iv: ret.iv,
                                type: type, //0是扫码，1是点击分享图，2.微信上搜索的
                                userId: that.$parent.globalData.optionObj.query.scene ? that.$parent.globalData.optionObj.query.scene : "" // 用户scene唯一标识 用于邀请人数的统计
                              }


                              // 调用 后台注册用户信息的login接口 getOenId 方法
                              // console.log(commApi)
                            };_context4.next = 32;return _comm.default.getOpenId(params, true).then( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(
                                        res && res.code == 1)) {_context2.next = 10;break;}
                                        console.log('---网络请求返回成功---');
                                        console.log("-----调取后台login接口注册用户信息成功后获取openid成功------：", res);
                                        //返回成功 则 存入缓存
                                        // wx.setStorageSync(res);
                                        _context2.next = 5;return that.setStorage("token", res.data.token);case 5:_context2.next = 7;return (

                                          that.setStorage("userInfo", res.data.customer));case 7:
                                        //触发授权组件关闭弹框
                                        // debugger;
                                        // this.reLaunchPage("../blacklist/index");              
                                        resolve(true);_context2.next = 12;break;case 10:







                                        // 登陆后后台返回错误
                                        _this6.toast("登陆失败");
                                        console.log("---------调用后台login接口后返回的状态有问题-------");case 12:case "end":return _context2.stop();}}}, _callee2, this);}));return function (_x5) {return _ref3.apply(this, arguments);};}()).

                            then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var token, userInfo;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                                        that.getStorage("token"));case 2:_context3.t0 = _context3.sent;if (_context3.t0) {_context3.next = 5;break;}_context3.t0 = "";case 5:token = _context3.t0;_context3.next = 8;return (
                                        that.getStorage("userInfo"));case 8:_context3.t1 = _context3.sent;if (_context3.t1) {_context3.next = 11;break;}_context3.t1 = "";case 11:userInfo = _context3.t1;
                                      console.log('--------缓存token成功----------');
                                      console.log("缓存成功后读取缓存中的token：", token);
                                      console.log('----------缓存userInfo成功--------');
                                      console.log("缓存成功后读取缓存中的userInfo：", userInfo);case 16:case "end":return _context3.stop();}}}, _callee3, this);})));case 32:_context4.next = 36;break;case 34:


                            reject("---登陆微信后台 wx.login() 接口返回异常---");
                            console.log('---登陆微信后台 wx.login() 接口返回异常---');case 36:_context4.next = 42;break;case 38:_context4.prev = 38;_context4.t0 = _context4["catch"](0);


                            reject(_context4.t0);
                            console.log(_context4.t0);case 42:case "end":return _context4.stop();}}}, _callee4, this, [[0, 38]]);}));return function (_x3, _x4) {return _ref.apply(this, arguments);};}()));case 5:case "end":return _context5.stop();}}}, _callee5, this);}));function authorizeAfter_login() {return _authorizeAfter_login.apply(this, arguments);}return authorizeAfter_login;}(),



    // 判断是否登录授权（主要是微信小程序）
    getAuthorizeStatus: function () {var _getAuthorizeStatus = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:return _context6.abrupt("return",
                new Promise(function (resolve, reject) {
                  wx.getSetting({
                    success: function success(res) {
                      if (res) {
                        if (res.authSetting && res.authSetting["scope.userInfo"]) {
                          // 用户已授权
                          resolve(true);
                        } else {
                          resolve(false);
                        }
                      } else {
                        resolve(false);
                      }
                    },
                    fail: function fail(res) {
                      // 先判断是否是网络问题造成了请求失败
                      try {
                        wx.getNetworkType({
                          success: function success(res) {
                            var networkType = res.networkType;
                            if (networkType != "none") {
                              // 有网络，检查 缓存中的授权字段
                              var AuthorizeStatus = wx.getStorageSync("AuthorizeStatus");
                              if (AuthorizeStatus) {
                                resolve(true);
                              } else {
                                resolve(false);
                              }
                            } else {
                              // 无网络 返回true, 弹出 提示
                              this.error("网络异常");
                              resolve(true);
                            }
                          } });

                      } catch (error) {

                      }
                    } });

                  // 方法二直接通过 缓存中的 AuthorizeStatus 字段来判断
                  // 通过 缓存中的AuthorizeStatus 字段来判断是否授权过（有个问题，授权过就会一直是授权的，因为只要登陆过缓存中一直有此值），因为直接通过wepy.getSetting()频繁的调用会出现本已经是授权但是此方法放回的数据报错问题
                  // let auth = await this.getStorage("AuthorizeStatus");
                  // if( auth ) {
                  //   return true;
                  // }else {
                  //   return false;
                  // }							
                }));case 1:case "end":return _context6.stop();}}}, _callee6, this);}));function getAuthorizeStatus() {return _getAuthorizeStatus.apply(this, arguments);}return getAuthorizeStatus;}(),

    // 选择图片 在前端显示出来 params:{count,sizeType,sourceType}
    chooseImg: function () {var _chooseImg = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(param) {var data, tempFilePaths, that;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                data = {
                  count: 9, // 默认9
                  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                  sourceType: ['album', 'camera'] // 可以指定来源是相册还是相机，默认二者都有
                };
                param = Object.assign(data, param);
                // debugger;
                tempFilePaths = [];
                that = this;return _context7.abrupt("return",

                new Promise(function (resolve, reject) {
                  that.getDeviceApi().chooseImage({
                    count: param.count, // 默认9
                    sizeType: param.sizeType, // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: param.sourceType, // 可以指定来源是相册还是相机，默认二者都有
                    success: function success(res) {
                      that.getDeviceApi().showToast({
                        title: '正在上传...',
                        icon: 'loading',
                        mask: true,
                        duration: 2000 });

                      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                      console.log("上传成功后后打印返回选择的图片的临时地址", res.tempFilePaths);
                      // 返回选择的图片的临时地址
                      resolve(res.tempFilePaths);
                    },
                    fail: function fail(res) {
                      // debugger; 
                      that.getDeviceApi().showToast({
                        title: '取消选择',
                        // icon: 'loading',
                        image: '../static/imgs/icon/error.png',
                        mask: true,
                        duration: 2000 });

                      reject(res);
                    } });

                }));case 5:case "end":return _context7.stop();}}}, _callee7, this);}));function chooseImg(_x6) {return _chooseImg.apply(this, arguments);}return chooseImg;}(),

    //   选择图片 预览 传入 urls ,index 的对象集合
    previewImage: function () {var _previewImage = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(param) {var data, that, urls, current;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                data = {
                  index: 0, // 默认显示第一张开始
                  urls: [] // 预览的图片地址的数组集合

                  // debugger;
                };param = Object.assign(data, param);
                // let index = e.target.dataset.index;//预览图片的编号
                that = this;
                urls = param.urls;
                current = param.urls[param.index];
                that.getDeviceApi.previewImage({
                  current: current, //预览图片链接
                  urls: urls, //图片预览list列表
                  success: function success(res) {
                    //console.log(res);
                  },
                  fail: function fail() {
                    //console.log('fail')
                  } });case 6:case "end":return _context8.stop();}}}, _callee8, this);}));function previewImage(_x7) {return _previewImage.apply(this, arguments);}return previewImage;}(),


    // 转换时间
    switchTimeForMart: function switchTimeForMart(value) {
      if (value) {
        var theTime = parseInt(value);
        var middle = 0; // 分
        var hour = 0; //小时
        middle = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime < 10) {
          theTime = "0" + theTime;
        }

        if (middle > 60) {
          hour = parseInt(middle / 60);
          middle = parseInt(middle % 60);
        }

        if (middle < 10) {
          middle = "0" + middle + ":";
        }

        if (hour < 10) {
          if (hour == 0) {
            hour = "";
          } else {
            hour = "0" + hour + ":";
          }
        }
        var result = "" + hour + middle + theTime;
        return result;
      }
    },
    //   分享給好友/群,返回一个分享的对象
    sharePic: function () {var _sharePic = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(shareObj) {var that;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                that = this;
                // debugger;
                console.log(shareObj.title);return _context9.abrupt("return",
                new Promise(function (resolve, reject) {
                  var shareObj_res = {
                    title: shareObj.title,
                    path: shareObj.path,
                    imageUrl: shareObj.imageUrl,
                    success: function success(res) {
                      console.log(res);
                      // debugger;
                      that.getDeviceApi().showShareMenu({
                        withShareTicket: true });


                      if (res && res.errMsg == 'showShareMenu:ok') {
                        that.success("分享成功", 1000, true);
                      }
                      // 获取分享者信息
                      that.getDeviceApi.getShareInfo({
                        shareTicket: res.shareTickets[0] || "",
                        success: function success(res) {console.log(res);},
                        fail: function fail(res) {console.log(res);},
                        complete: function complete(res) {console.log(res);} });

                      // resolve( res );          
                    },
                    fail: function fail(res) {
                      console.log(res);
                      // resolve( res );
                      // debugger;
                      if (res.errMsg == 'showShareMenu:cancel') {
                        // 取消
                        that.getDeviceApi().showToast({
                          title: "转发取消",
                          image: '../static/imgs/icon/alert.png',
                          mask: false,
                          duration: duration });


                      } else if (res.errMsg == 'shareAppMessage:fail') {
                        // 转发失败，其中 detail message为详细失败信息
                        that.alert("转发失败", 1000);
                      }
                    },
                    complete: function complete(res) {


                    } };


                  // if( opt.from == 'button' ) {
                  //   let eData = opt.target.dataset;
                  //   console.log( eData.name )
                  //   shareObj.path = `/pages/find/index?btn_name=${eData.name}`
                  // }
                  resolve(shareObj_res);
                }));case 3:case "end":return _context9.stop();}}}, _callee9, this);}));function sharePic(_x8) {return _sharePic.apply(this, arguments);}return sharePic;}(),

    //判断是否开启了 ** 功能授权的权限并进行相应的授权提示操作 传入  scope.type 值
    //type类型scope.userInfo	、scope.userLocation、scope.address、scope.invoiceTitle、scope.invoice、scope.record、scope.werun、scope.writePhotosAlbum、scope.camera	
    getIsAuthorize: function () {var _getIsAuthorize = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(type) {var that, scopeText;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:
                that = this;if (
                type) {_context11.next = 4;break;}
                that.toast("请传入scope.type!");return _context11.abrupt("return");case 4:


                scopeText = {
                  "scope.userInfo": "用户信息",
                  "scope.userLocation": "地理位置",
                  "scope.address": "通讯地址",
                  "scope.invoiceTitle": "发票排头",
                  "scope.invoice": "获取发票",
                  "scope.record": "录音功能",
                  "scope.werun": "微信运动步数",
                  "scope.writePhotosAlbum": "保存到相册",
                  "scope.camera": "摄像头" };return _context11.abrupt("return",

                new Promise( /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(resolve, reject) {return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:
                            that.getDeviceApi.getSetting().then(function (res) {
                              // 获取用户授权信息
                              console.log(res); // res.userInfo 为true  res.errMsg == "authorize:ok"
                              console.log(res.authSetting);
                              if (res.authSetting[type]) {
                                // 自动检测到已经授过权
                                resolve(true);
                                return true;
                              } else if (!res.authSetting[type]) {
                                // 检测到还未授权
                                if (that.getDeviceApi.openSetting) {
                                  that.getDeviceApi.showModal({
                                    title: "提示",
                                    content: "\u4F7F\u7528\u8BE5\u529F\u80FD\u9700\u8981\u6388\u6743\u5F00\u542F".concat(scopeText[type], "\u7684\u6743\u9650\uFF0C\u8BF7\u70B9\u51FB\u786E\u5B9A\u5148\u5F00\u542F\u8BBE\u7F6E"),
                                    showCancel: false,
                                    confirmTex: "授权开启",
                                    confirmColor: "#52a2d8",
                                    success: function success(res) {
                                      that.getDeviceApi.authorize({
                                        scope: type,
                                        success: function success() {
                                          // 授权成功
                                          resolve(true);
                                        },
                                        fail: function fail() {
                                          // 第一次授权失败
                                          that.getDeviceApi.showModal({
                                            title: "提示",
                                            content: "\u60A8\u672A\u5F00\u542F".concat(scopeText[type], "\u7684\u6743\u9650,\u8BF7\u5F00\u542F\u8BBE\u7F6E"),
                                            showCancel: true,
                                            confirmTex: "授权开启",
                                            confirmColor: "#52a2d8",
                                            success: function success(res) {
                                              if (res.confirm) {
                                                that.getDeviceApi.openSetting({
                                                  success: function success(res) {
                                                    console.log(res.authSetting);
                                                    if (res.authSetting[type]) {
                                                      // 第二次授权成功
                                                      resolve(true);
                                                    } else {
                                                      // 第二次也未授权，再次提示开启授权
                                                      that.getDeviceApi.showModal({
                                                        title: "提示",
                                                        content: "\u672A\u5F00\u542F\u6388\u6743\u5C06\u65E0\u6CD5\u4F7F\u7528".concat(scopeText[type], "\u7684\u529F\u80FD,\u8BF7\u5F00\u542F\u8BBE\u7F6E"),
                                                        showCancel: true,
                                                        confirmTex: "开启授权",
                                                        confirmColor: "#52a2d8",
                                                        success: function success(res) {
                                                          if (res.confirm) {
                                                            that.getDeviceApi.openSetting({
                                                              success: function success(res) {
                                                                console.log(res.authSetting);
                                                                if (res.authSetting[type]) {
                                                                  // 第二次授权才成功
                                                                  resolve(true);
                                                                } else {
                                                                  // 第二次授权没有成功
                                                                  that.getDeviceApi.showToast({
                                                                    title: '授权失败',
                                                                    // icon: 'loading',
                                                                    image: '../static/imgs/icon/error.png',
                                                                    mask: true,
                                                                    duration: 1000 });

                                                                  resolve(false);
                                                                }
                                                              } });

                                                          }
                                                        } });

                                                    }
                                                  } });

                                              }
                                            } });

                                        } });

                                    } });

                                }
                              }
                            });case 1:case "end":return _context10.stop();}}}, _callee10, this);}));return function (_x10, _x11) {return _ref5.apply(this, arguments);};}()));case 6:case "end":return _context11.stop();}}}, _callee11, this);}));function getIsAuthorize(_x9) {return _getIsAuthorize.apply(this, arguments);}return getIsAuthorize;}() } };exports.miniProApi = miniProApi;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SYNC_API_RE = /^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(void 0, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(void 0, [Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    }));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}



var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function initHooks(mpOptions, hooks) {
  hooks.forEach(function (hook) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  });
}

function initVueComponent(Vue$$1, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue$$1.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = String;
          vueProps['value'] = null;
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var eventOpts = (event.currentTarget || event.target).dataset.eventOpts;
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage$$1 = _ref5.isPage,initRelation$$1 = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage$$1.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation$$1.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage$$1) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });


  initHooks(pageOptions.methods, hooks$1);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'upx2px') {
        return upx2px;
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  uni.upx2px = upx2px;

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(vm._getFormData || (vm.$parent && vm.$parent.__next_tick_pending)){
              return
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
    // 确保当前 vm 所有数据被同步
    var dataKeys = [].concat(
        Object.keys(vm._data || {}),
        Object.keys(vm._computedWatchers || {}));

    var ret = dataKeys.reduce(function(ret, key) {
        ret[key] = vm[key];
        return ret
    }, Object.create(null));
    //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
    Object.assign(ret, vm.$mp.data || {});
    if (
        Array.isArray(vm.$options.behaviors) &&
        vm.$options.behaviors.indexOf('uni://form-field') !== -1
    ) { //form-field
        ret['name'] = vm.name;
        ret['value'] = vm.value;
    }
    return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
    var this$1 = this;

    if (vnode === null) { //destroy
        return
    }
    if (this.mpType === 'page' || this.mpType === 'component') {
        var mpInstance = this.$scope;
        var data = cloneWithData(this);
        data.__webviewId__ = mpInstance.data.__webviewId__;
        var mpData = Object.create(null);
        Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
            mpData[key] = mpInstance.data[key];
        });
        var diffData = diff(data, mpData);
        if (Object.keys(diffData).length) {
            if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
                console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
                    ']差量更新',
                    JSON.stringify(diffData));
            }
            this.__next_tick_pending = true;
            mpInstance.setData(diffData, function () {
                this$1.__next_tick_pending = false;
                flushCallbacks$1(this$1);
            });
        } else {
            flushCallbacks$1(this);
        }
    }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
    var parts = path.split('.');
    var key = parts[0];
    if (key.indexOf('__$n') === 0) { //number index
        key = parseInt(key.replace('__$n', ''));
    }
    if (parts.length === 1) {
        return obj[key]
    }
    return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

    var oldEmit = Vue.prototype.$emit;

    Vue.prototype.$emit = function(event) {
        if (this.$scope && event) {
            this.$scope['triggerEvent'](event, {
                __args__: toArray(arguments, 1)
            });
        }
        return oldEmit.apply(this, arguments)
    };
    
    Vue.prototype.$nextTick = function (fn) {
      return nextTick$1(this, fn)
    };

    MP_METHODS.forEach(function (method) {
        Vue.prototype[method] = function(args) {
            if (this.$scope) {
                return this.$scope[method](args)
            }
        };
    });

    Vue.prototype.__init_provide = initProvide;

    Vue.prototype.__init_injections = initInjections;

    Vue.prototype.__call_hook = function(hook, args) {
        var vm = this;
        // #7573 disable dep collection when invoking lifecycle hooks
        pushTarget();
        var handlers = vm.$options[hook];
        var info = hook + " hook";
        var ret;
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit('hook:' + hook);
        }
        popTarget();
        return ret
    };

    Vue.prototype.__set_model = function(target, key, value, modifiers) {
        if (Array.isArray(modifiers)) {
            if (modifiers.indexOf('trim') !== -1) {
                value = value.trim();
            }
            if (modifiers.indexOf('number') !== -1) {
                value = this._n(value);
            }
        }
        if(!target){
            target = this;
        }
        target[key] = value;
    };

    Vue.prototype.__set_sync = function(target, key, value) {
        if(!target){
            target = this;
        }
        target[key] = value;
    };

    Vue.prototype.__get_orig = function(item) {
        if (isPlainObject(item)) {
            return item['$orig'] || item
        }
        return item
    };

    Vue.prototype.__get_value = function(dataPath, target) {
        return getTarget(target || this, dataPath)
    };


    Vue.prototype.__get_class = function(dynamicClass, staticClass) {
        return renderClass(staticClass, dynamicClass)
    };

    Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
        if (!dynamicStyle && !staticStyle) {
            return ''
        }
        var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
        var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
        return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
    };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument)
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge;
        return arrayMerge(target, source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!../../../../../git-nodeProgram/uni-app-customer/static/style/base.less?vue&type=style&index=0&lang=less&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!D:/git-nodeProgram/uni-app-customer/static/style/base.less?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!../../../../../git-nodeProgram/uni-app-customer/static/style/icons.less?vue&type=style&index=1&lang=less&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!D:/git-nodeProgram/uni-app-customer/static/style/icons.less?vue&type=style&index=1&lang=less& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/node-libs-browser/mock/process.js":
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuex/dist/logger.js":
/*!******************************************!*\
  !*** ./node_modules/vuex/dist/logger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    store.subscribe(function (mutation, state) {
      if (typeof logger === 'undefined') {
        return
      }
      var nextState = deepCopy(state);

      if (filter(mutation, prevState, nextState)) {
        var time = new Date();
        var formattedTime = " @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3));
        var formattedMutation = mutationTransformer(mutation);
        var message = "mutation " + (mutation.type) + formattedTime;
        var startMessage = collapsed
          ? logger.groupCollapsed
          : logger.group;

        // render
        try {
          startMessage.call(logger, message);
        } catch (e) {
          console.log(message);
        }

        logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
        logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
        logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));

        try {
          logger.groupEnd();
        } catch (e) {
          logger.log('—— log end ——');
        }
      }

      prevState = nextState;
    });
  }
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

return createLogger;

})));


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map