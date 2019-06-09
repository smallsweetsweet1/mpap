// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  await db.collection('data').add({
    data: event
  })
  .then(res =>{
    console.log(res)
  })
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}