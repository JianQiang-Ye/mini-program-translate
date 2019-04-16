import {translate} from '../../utils/api.js'

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: 'hello',
    translatedText: '',
    targetLang: {
      chs: '英文',
      lang: 'en',
      index: 0
    }
  },
  translate: function(){
    console.log(this.data.text)
  },
  onInput(e){
    var value = e.detail.value
    // 这是实现双向绑定的关键
    this.setData({text:value}) 
    console.log(this.data.text)
    var target = this.data.targetLang.lang
    translate(this.data.text,'auto',target).then((res)=>{
      this.setData({ translatedText: res.trans_result[0].dst})
      })
  },
  onconfirm(e){
    var value = e.detail.value
    var list = wx.getStorageSync('history') || []
    var index = list.length
    if(value && this.data.translatedText){
      list.push({
        from: value,
        to: this.data.translatedText,
        index
      })
      try {
        wx.setStorageSync('history', list)
      } catch (e) {
        console.log(e)
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var curlang = app.globalData.curLang
    this.setData({'targetLang':curlang})
    translate(this.data.text, 'auto', this.data.targetLang.lang).then((res) => {
      this.setData({ translatedText: res.trans_result[0].dst })
    })
  },

})