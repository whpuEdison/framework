/**
 * 封装response数据
 */
function packResponse (doc) {
  let errorCode = 0 // 状态码
  let data = '' // 返回内容
  try {
    if (doc.length > 0) {
      data = doc
    } else {
      errorCode = -1
      data = []
    }
  } catch (err) {
    errorCode = err
    data = []
  }
  let res = {
    errorCode: errorCode,
    data: data
  }
  return res
}

module.exports = { packResponse }
