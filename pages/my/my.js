// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myTitle: '传入的title',
    account: 0,
    btns: ['流行','新款','精选']
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
  handleChangeCpn() {
    this.setData({
      myTitle: 'title改变了'
    })
  },
  incrementNum() {
    console.log('---');
    this.setData({
      account: this.data.account + 1
    })
  },
  handleItem(arg) {
    console.log('---');
    console.log(arg);
  },
  handleCpn() {
    const eventCpn = this.selectComponent("#event-cpn");
    eventCpn.OutputEvent();
    eventCpn.setData({
      account: eventCpn.data.account + 1
    })
  }
})