import request from '@/utils/request'

function getBasicInfo () {
  return request('get', '/if/basicInfo/getBasicInfo')
}

export default { getBasicInfo }
