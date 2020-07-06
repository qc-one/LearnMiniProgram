//创建App实例的代码以及一些全局相关的内容
const TOKEN = 'token';

App({
  // 保存在对象中，当小程序关闭就消失了
  globalData: {
    token: ''
  },
  //生命周期函数：后台存货2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log("小程序初始化完成了：onLaunch");
    // console.log(options);
    //异步调用
    //获取用户信息
    // wx.getUserInfo({
    //   //数据拿到之后再进行回调的
    //   success: function(res) {
    //     // console.log(res)
    //   }
    // })
    // setTimeout(() => {
    //   var err = new Error()
    //   throw err
    // },3000)

    // 1、先从缓存中取出token
    const token = wx.getStorageSync(TOKEN);
    if (token && token.length !== 0) {
      console.log('已经登录');
      // 验证token是否已经过期
      this.checkToken(token);
    } else {
      // 登录操作
      this.loginIn()
    }
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序界面显示出来之后会执行的生命周期函数
   */
  onShow: function (options) {
    console.log("小程序界面显示出来了:onShow");
    // console.log(options);
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏时会执行：onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序报错的时候执行！！！")
  },
  // 登录
  loginIn() {
    //登录流程
    wx.login({
      complete: (res) => {
        console.log(res); 
        // 1、获取code，code只有5分钟有效
        const code = res.code;
        //2、向自己的服务器发送请求
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res);
            // 1.取出token
            const token = res.data.token;
            console.log(token);
            //2.存储到全局变量中
            this.globalData.token = token;
            //3.存储到storage中
            wx.setStorageSync({
              data: token,
              key: TOKEN,
              success: (res) => {
                console.log(res);
              }
            })
          }
        })
      },
    })
  },
  // 验证token是否过期
  checkToken(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        console.log(res);
      }
    })
  },
  // 定义全局数据，在其它页面可以共享
  globalData: {
    name: 'qin',
    age: 18
  }
})
