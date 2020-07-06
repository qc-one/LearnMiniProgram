// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服','鞋子','裤子']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
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
    //1、获取首页的页面对象
    // getCurrentPages当前所有活跃的页面
    const pages = getCurrentPages();
    console.log(pages);
    const home = pages[pages.length - 2];
    //2、调用页面对象的setData
    home.setData({
      title: '呵呵呵'
    })
  },
  //返回上一页
  handleBack() {
    wx.navigateBack({
      delta: 1
    })
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
  handleClick() {
    console.log('1111');
  },
  handleTouchStart() {
    console.log("handleTouchStart");
  },
  handleTouchMove() {
    console.log("handleTouchMove");
  },
  handleTouchEnd() {
    console.log("handleTouchEnd");
  },
  handleTap() {
    console.log("handleTap");
  },
  handleLongPress() {
    console.log("handleLongPress");
  },
  handleEvent(e) {
    console.log('----',e)
  },
  handleItem(e) {
    console.log(e)
    // title---index
  },
  // ----------事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1');
  },
  handleBindView1() {
    console.log('handleBindView1');
  },
  handleCaptureView2() {
    console.log('handleCaptureView2');
  },
  handleBindView2() {
    console.log('handleBindView2');
  },
  handleCaptureView3() {
    console.log('handleCaptureView3');
  },
  handleBindView3() {
    console.log('handleBindView3');
  },
})