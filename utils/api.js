// 调用百度的api
import md5 from './md5.min.js'

const appid = '20190415000288334';
const key = 'nCiPcrqYQTut6bnfpnKk';

function translate (query,from,to) {

 // 注意这里的salt必须是最新的
  var salt = (new Date).getTime();
  var str1 = appid + query + salt + key;
  var sign = md5(str1);

  return new Promise(function(resolve, reject){
      // 默认是get方法
      wx.request({
          url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
          data: {
            // 参数
            q: query,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign
          },
          success(res) {
            if (res.data && res.data.trans_result) {
              console.log(res.data)
              resolve(res.data)
            } else {
              reject(res)
              console.log('翻译失败')
            }
          },
          fail(){
            reject({ status: 'error', msg: '翻译失败' })
            console.log('翻译失败')
          }
      })
  })
}

 module.exports.translate = translate