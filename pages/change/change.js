const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    langList: app.globalData.langList,
    curLang: app.globalData.curLang
  },
  changLang(e){
    var curlang = e.currentTarget.dataset.lang
    this.setData({'curLang':curlang})
    app.globalData.curLang = curlang
    console.log(app.globalData.curLang)
    wx.switchTab({
      url: '../index/index',
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({ 'curLang': app.globalData.curLang})
  }
})