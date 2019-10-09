import axios from '@/utils/request'

/**
 * 根据中继组类型查询实时信息
 */
function getTrunkGroupUsageList (params) {
  return new Promise((resolve, reject) => {
    axios.get('/if/bmp/topoView/public/queryNodeByType', { params: params }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      console.log('getTrunkGroupUsageList接口调用报错，错误信息', error)
    })
  })
}

/**
 * Post方式
 */
// function getTrunkGroupUsageList (params) {
//   return new Promise((resolve, reject) => {
//     axios.post('/if/bmp/acTrunkReport/getTrunkGroupUsageList', params).then((response) => {
//       resolve(response.data)
//     }).catch((error) => {
//       console.log('getTrunkGroupUsageList接口调用报错，错误信息', error)
//     })
//   })
// }

export default {getTrunkGroupUsageList}
