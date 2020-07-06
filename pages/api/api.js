// pages/request/request.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '哈哈哈'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送网络请求
    // 1、原生发送网络请求
    // this.get_data_origin()
    // 2、使用封装的方法发送
    // request({
    //   url: 'http://123.207.32.32:8000/recommend'
    // }).then((res) => {
    //   console.log(res,'pppp');
    // }).catch((err) => {
    //   console.log(err,'rrr');
    // })
  },
  get_data_origin() {
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: function(res){
        console.log(res);
      }
    })
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'psot',
      success: function(res){
        console.log(res);
      }
    })
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
  onShareAppMessage: function (options) {
    console.log(options);
    return {
      title: 'hello word',
      path: '/pages/about/about.wxml',
      imageUrl: '/assets/images/111.png' 
    }
  },
  showToast() {
    wx.showToast({
      title: '加载中',
      complete: (res) => {},
      duration: 3000,
      fail: (res) => {},
      icon: 'loading',
      // image: 'image',
      mask: true,
      success: (res) => {
        console.log('弹窗展示成功');
      },
      fail: () => {
        console.log('弹窗展示失败');
      },
      complete: () => {
        console.log('弹窗展示完成');
      }

    })
  },
  showModal() {
    wx.showModal({
      title: '提示',
      content: '内容',
      // showCancel: false,
      cancelText: '退出',
      confirmText: 'ok',
      cancelColor: 'red',
      success: (res) => {
        console.log(res);
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '加载',
      mask: true
    })
    setTimeout(() => {
      // 必须手动调用hideLoading才会让loading消失
      wx.hideLoading({
        complete: (res) => {
          console.log(res);
        },
      })
    }, 3000);
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照', '打电话'],
      itemColor: 'red',
      success: (res) => {
        console.log(res);
      }
    })
  },
  //页面跳转
  handleJump() {
    wx.navigateTo({
      url: '/pages/event/event?name=qin&age=18',
    })
  }
})