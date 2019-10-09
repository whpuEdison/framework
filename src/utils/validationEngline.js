/* eslint-disable*/
const validator = {
  required: {
    required: true,
    message: '此处不为空，请输入值'
  },
  email: {
    type: 'email',
    message: '请输入正确的邮箱格式'
  },
  number: {
    pattern: /^100$|^(\d|[1-9]\d)(\.\d+)*$/, //没有小数的^100$|^(\d|[1-9]\d)$
    message: '不超过满分100'
  },
  phone: {
    pattern: /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
    message: '无效的电话号码'
  },
  IP: {
    pattern: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
    message: '无效的 IP 地址'
  },
  //文件名路径校验 包括windowt 和linux  --D:/logs/logs/logs/log.log   linux--/tmp/test/apache-tomcat-9.0.17/webapps/web/logs/weixin.log
  filePath: {
    pattern: /^(([A-Za-z]{1}:\/[\w\W]*)?\w+\.{1}[a-zA-Z]+$)|(^\/[\w\W]+\.{1}[a-zA-Z]+$)/,
    message: '无效的路径(格式应为:/文件夹名称(/文件夹名称/...)/日志文件名称，如/home/etc/log.log )'
  },
  port: {
    pattern: /^[1-9]$|(^[1-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5]$)/,
    message: '无效端口号'
  },
  url: {
    pattern: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    message: '无效的URL地址'
  },
  http: {
    pattern: /^http:\/\/.+$/,
    message: '无效的地址'
  },
  isPercentage: {
    pattern: /^(100|[1-9]?\d(\.\d\d?)?)%$/,
    message: '请输入百分数'
  },
  onlyNum: {
    pattern: /^\+?[1-9]\d*$/, // 值只能是大于0的正整数
    message: '格式错误,值只能是大于0的正整数'
  },
  limit: (min = 2, max = 2) => {
    return [{
        required: true,
        trigger: 'trigger',
        message: `此处不为空，请输入值`
      },
      {
        validator: (rule, value, callback) => {
          let res = value.replace(/[\u4e00-\u9fa5]/g, '')
          //计算字节长度
          let len = (value.length - res.length) * 2 + res.length
          if (len > max || len < min) {
            callback(new Error(`输入范围为${min/2}至${max/2}个汉字（一个字母或一个数字均为0.5个汉字）`))
          } else {
            callback()
          }
        }
      }
    ]
  },
  fileMaxLength: {
    validator: (rule, value, callback) => {
      let res = value.replace(/[\u4e00-\u9fa5]/g, '')
      //计算字节长度
      let len = (value.length - res.length) * 2 + res.length
      if (len > 2800000) {
        callback(new Error('输入的文字或图片不要超过2M'))
      } else {
        callback()
      }
    }
  },
  doubleQuotation: {
    validator: (rule, value, callback) => {
      let reg = /^".*"$/
      if (!reg.test(value)) {
        callback(new Error('以英文双引号作为起始符和结束符'))
      } else {
        callback()
      }
    }
  },
  numFix: (num = 2) => {
    return [
      {
        validator: (rule, value, callback) => {
          if (typeof value !== 'number') {
            value = Number(value)
          }
          if (isNaN(value)) {
            callback(new Error(`请输入正确的格式：0~${num}位小数`))
          } else {
            let index = String(value).indexOf('.')
            if ((index === -1) || (String(value).length - index <= num + 1)) {
              callback()
            } else {
              callback(new Error(`请输入正确的格式：0~${num}位小数`))
            }
          }
        }
      }
    ]
  },
  isFctor: (num = 1) => {
    return [
      {
        validator: (rule, value, callback) => {
          if (typeof value !== 'number') {
            value = Number(value)
          }
          if (isNaN(value)) {
            callback(new Error(`请输入${num}的因数`))
          } else {
            if ((value !== 0) && (num % value === 0)) {
              callback()
            } else {
              callback(new Error(`请输入${num}的因数`))
            }
          }
        }
      }
    ]
  },
  isInteger: {
    validator: (rule, value, callback) => {
      if (typeof value !== 'number') {
        value = Number(value)
      }
      if (isNaN(value)) {
        callback(new Error(`请输入整数`))
      } else {
        if (value % 1 === 0) {
          callback()
        } else {
          callback(new Error(`请输入整数`))
        }
      }
    }
  },
  checkSpecificKey: {
    validator: (rule, value, callback) => {
      let specialKey = '|`&><\'"\\[]{};,，‘’“”'
      let flag = false
      if (value) {
        for (var i = 0; i < value.length; i++) {
          if (specialKey.indexOf(value.substr(i, 1)) !== -1) {
            flag = true
          }
        }
      }
      if (flag) {
        callback(new Error('禁止输入这些符号|`&><\'"\[]{};,'))
      } else {
        callback()
      }
    }
  },
  numLength: (min, max) => {
    return {
      validator: (rule, value, callback) => {
        if (value || value === 0) {
          let str = value.toString()
          if (str.length > max || str.length < min || str.indexOf('.') !== -1) {
            callback(new Error(`值为${min}到${max}位长度的整数且不能为空`))
          } else {
            callback()
          }
        } else {
          callback(new Error(`值为${min}到${max}位长度的整数且不能为空`))
        }
      }
    }
  },
  /*只能输入整数，最多4位小数，和百分号的数*/
  checkConfigModal: {
    validator: (rule, value, callback) => {
      let reg = /^\d+$|(^\d+(\.)?\d{1,4}?$)|(^\d+$)|(^(100|[1-9]?\d(\.\d\d?\d?\d?)?)%$)/
      if(value){
        if (!reg.test(value)) {
          callback(new Error('请输入整数、至多带4位的小数或百分数'))
        } else {
          callback()
        }
      }else{
        callback()
      }
    }
  }
}

//统一添加验证触发方式
for (let key in validator) {
  validator[key].trigger = 'blur'
}
export default validator
