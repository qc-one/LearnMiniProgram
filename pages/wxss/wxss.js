// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     //地图
     markers: [{
      iconPath: "/images/map-dw.png",   //定位小图标
      id: 0,  
      latitude: 35.099994,      //中心经度
     longitude: 114.324520,     //中心纬度
      width: 50,      //小图标的宽
      height: 50      //小图标的高
    }],
    polyline: [{
      points: [{           //经纬度数组
        longitude: 114.3245211,
        latitude: 35.10229
      }, {
        longitude: 120.324520,
        latitude: 35.21229
      }],
      color: "#ff0000dd",
      width: 2,
      dottedLine: true
    }]
  },
  markertap(event) {
    wx: wx.openLocation({
      latitude: '35.10229',
      longitude: '114.324520',
    })
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

  }
})