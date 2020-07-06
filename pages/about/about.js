// pages/about/about.js

// getApp()获取App()产生的示例对象
const app = getApp();
// console.log(app);

//注册一个页面，页面也有自己的生命周期函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '',
    list: [
      {id: 1, name: 'qin', age: 18, dec: 'jfdksfkasdjfkasdhfksahfjkasdhfjkashfsad'},
      {id: 2, name: 'qin', age: 18, dec: 'jfdksfkasdjfkasdhfksahfjkasdhfjkashfsad'},
      {id: 3, name: 'qin', age: 18, dec: 'jfdksfkasdjfkasdhfksahfjkasdhfjkashfsad'},
      {id: 4, name: 'qin', age: 18, dec: 'jfdksfkasdjfkasdhfksahfjkasdhfjkashfsad'},
      {id: 5, name: 'qin', age: 18, dec: 'jfdksfkasdjfkasdhfksahfjkasdhfjkashfsad'},
      {id: 6, name: 'qin', age: 18, dec: 'jfdksfkasdjfkasdhfksahfjkasdhfjkashfsad'},
      {id: 7, name: 'qin', age: 18, dec: 'jfdksfkasdjfkasdhfksahfjkasdhfjkashfsad'},
      {id: 8, name: 'qin', age: 18, dec: 'jfdksfkasdjfkasdhfksahfjkasdhfjkashfsad'},
      {id: 9, name: 'qin', age: 18, dec: 'jfdksfkasdjfkasdhfksahfjkasdhfjkashfsad'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    // 需要将发送网络请求的IP在控制台中配置
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res);
        this.setData({
          message: res.data['最新动态']
        })
      }
    })
  },
  // 先执行onShow，再执行onReady
  /**
   * 生命周期函数--监听页面初次渲染完成，再次进入的时候不会执行
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //获取用户信息
  handleGetUserInfo(res) {
    console.log(res);
  },
  //监听页面滚动事件
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom(obj) {
    console.log(obj, '滚动到了底部');
  },
  // 监听用户下拉动作
  onPullDownRefresh(obj) {
    console.log(obj, '下拉了');
  },
  //当前是tab页时，点击tab时触发
  onTabItemTap() {
    console.log('点击了tab');
  }
})