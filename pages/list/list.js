// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 在按钮点击事件或其他触发时执行复制操作
  copyToClipboard() {
    var content = '要复制的内容'; // 替换为你要复制的内容
    console.log("copy");
    wx.setClipboardData({
      data: content,
      success: function () {
        wx.showToast({
          title: '复制成功',
        });
      },
      fail: function () {
        wx.showToast({
          title: '复制失败',
          icon: 'none',
        });
      }
    });
  },
  toEditor(){
    wx.navigateTo({
      url: '../editor/editor'
    })
  }

})