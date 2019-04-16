//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    var list = wx.getStorageSync('history')
    this.setData({'logs': list})
  },
  onShow(){
    var list = wx.getStorageSync('history')
    this.setData({ 'logs': list })
  },
  clear(){
    wx.clearStorage('history')
    this.onShow()
  },
  clearOnly(e){
    var list = wx.getStorageSync('history') || []
    if(list.length!==0){
      var index = e.currentTarget.dataset.index
      list.splice(index,1)
      wx.setStorageSync('history', list)
      this.onShow()
    }
  }
})
