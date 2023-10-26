// index.js
// 获取应用实例
const app = getApp()

Page({
  detail: function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})
