// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disAbled: true,
    //从相册中选择图片的路径
    picPath:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 获取用户手机号
  getUserInfo (e) {
    console.log(e);
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  // 选中相册中的图片
  handleChoosePic() {
    //系统API，让用户在相册中选择图片或者拍照
    wx.chooseImage({
      complete: (res) => {
        console.log(res);
        this.setData({
          picPath: res.tempFilePaths[0]
        })
      },
    })
  },
  //图片加载完成
  imageLoad() {
    console.log('图片加载完成');
  },
  //图片加载出错
  handleImageError() {
    console.log('图片加载出错');
  },
  handleInput(e) {
    console.log(e);
  },
  handleFocus() {
    console.log('输入框聚焦');
  },
  handleBlur() {
    console.log('输入框失焦');
  },
  handleConfirm() {
    console.log('点击完成按钮');
  },
  handleHeightChange() {
    console.log('高度发生变化');
  },
  handleScroll(e) {
    console.log(e);
    console.log('滚了');
  },
  handleScrollTop() {
    console.log('滚到了顶部');
  }
})