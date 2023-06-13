// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },
  navigateToEditor() {
    wx.navigateTo({
      url: '../list/list'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({

      })
    }
  },
  bindInputUserName:function(e){
    this.setData({
      userName: e.detail.value
    });
  },
  bindInputPW:function(e){
    this.setData({
      passWord: e.detail.value
    });
  }
})