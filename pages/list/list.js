// pages/list/list.js
const base64 = require('../images/base64');
Page({
  mixins: [require('../../mixin/common')],

  /**
   * 页面的初始数据
   */
  data: {
    dailyList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.requestList();
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
    this.requestList();
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
  requestList() {
    var that = this;
    wx.request({
      url: 'https://daily.yibabycloud.cn/daily/list',
      method: 'POST',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          dailyList: res.data,
        });
      }
    })
  },
  // 在按钮点击事件或其他触发时执行复制操作
  copyToClipboard(event) {
    const content = event.currentTarget.dataset.content;
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
  toEditor(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../editor/editor?id=' + id
    })
  }

})