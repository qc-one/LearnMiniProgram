

const request = function (options) {
  return new Promise((resolve,rejects) => {
    wx.request({
      url: options.url || '',
      method: options.method || 'get',
      data: options.data || {},
      success: (res) => {
        resolve(res) 
      },
      fail: (err) => {
        rejects(err)
      }
    })
  })
}


export default request