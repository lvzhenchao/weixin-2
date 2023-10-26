// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films: [
      {
        'image':'../../images/1.jpg',
        'title':'我的战争',
        'year': '2016',
        'score': '7.7',
        'director':'鹏顺',
        'actor':'王珞丹、刘烨',
        'id':1
      },
      {
        'image':'../../images/3.png',
        'title':'河边的错误',
        'year': '2006',
        'score': '7.4',
        'director':'魏淑君',
        'actor':'朱一龙、侯天来',
        'id':3
      },
      {
        'image':'../../images/4.png',
        'title':'传奇一生',
        'year': '2019',
        'score': '7.7',
        'director':'布莱根',
        'actor':'古道尔',
        'id':4
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    // id = options.id,
    wx.setNavigationBarTitle({
      title: options.title,
    })
    // var that = this,
    // wx.request({
    //   url: 'url',
    //   success: function(res){
    //     that.setData({fim:res.data})
    //   }
    // })
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

  }
})