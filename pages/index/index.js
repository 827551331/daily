// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    buttons: [{
      text: '取消'
    }, {
      text: '确认'
    }],
    showDialog: false

  },
  navigateToEditor() {
    this.setData({
      showDialog: true
    })
    // wx.navigateTo({
    //   url: '../list/list'
    // })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({

      })
    }
  },
  bindInputUserName: function (e) {
    this.setData({
      userName: e.detail.value
    });
  },
  bindInputPW: function (e) {
    this.setData({
      passWord: e.detail.value
    });
  }
})