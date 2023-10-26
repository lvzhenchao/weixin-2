// index.js
// 获取应用实例
const app = getApp()

Page({
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
  // url = "https://frodo.douban.com/api/v2/book/rank_list",
  onLoad(options) {
    // wx.request({
    //   url: 'url',
    //   method: 'GET',
    //   data: {
    //     apiKey: '0ac44ae016490db2204ce0a042db'
    //   },
    //   header: {
    //     'User-Agent': 'MicroMessenger', 
    //     'Referer': 'https://servicewechat.com/wx2f9b06c1de1ccfca/91/page-frame.html',
    //     "X-AjaxPro-Method":"ShowList",
    //     success: function (res) {
    //       console.log(res);
    //      },
    //      fail: function (res) {
    //         console.log(res);
    //      } 
    //   },
    // })
  },
  detail: function(res){
    console.log(res)
    wx.navigateTo({
      url: '../detail/detail?id='+res.currentTarget.dataset.id+'&title='+res.currentTarget.dataset.title,
    })
  }
})
