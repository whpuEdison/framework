export const Util = {
  clone: (obj) => {
    return JSON.parse(JSON.stringify(obj))
  },
  /* eslint-disable */
  extend: function () {
    var src, copyIsArray, copy, name, options, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target
      target = arguments[1] || {}
      // skip the boolean and the target
      i = 2
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object' && !this.isFunction(target)) {
      target = {}
    }

    // extend jQuery itself if only one argument is passed
    if (length === i) {
      target = this
      --i
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name]
          copy = options[name]

          // Prevent never-ending loop
          if (target === copy) {
            continue
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false
              clone = src && this.isArray(src) ? src : []

            } else {
              clone = src && this.isPlainObject(src) ? src : {}
            }

            // Never move original objects, clone them
            target[name] = this.extend(deep, clone, copy)

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy
          }
        }
      }
    }
    // Return the modified object
    return target
  },
  isFunction: function (obj) {
    return Object.prototype.toString.call(obj) === '[object Function]'
  },
  isPlainObject: function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  },
  isArray: function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  },
  formatNumber(num) { //格式化数据
    let res = new Number(num).toFixed(2)
    return (Number.isNaN(res) || res === 'NaN') ? '-' : res
  },
  formatNumberToInt(num) { //格式化数据为整数
    let res = new Number(num).toFixed(0)
    return (Number.isNaN(res) || res === 'NaN') ? '-' : res
  },
  formartNaN (num) {
    return (Number.isNaN(num) || num === 'NaN') ? '-' : num
  },
  formartThousandth (data) { // 格式化为千分位
    let result = '-'
    if (!isNaN(Number(data))) {
      let datapoint = ''
      if (data.toString().indexOf('.') > -1) { // 如果有小数，只取整数部分
        datapoint = '.' + data.toString().split('.')[1]
        data = data.toString().split('.')[0]
      }
      let reverseArr = data.toString().split('').reverse()
      let reverseStr = ''
      let arrLength = reverseArr.length
      reverseArr.forEach((item, index) => {
        if (index % 3 === 2 && index !== arrLength - 1) {
          reverseStr += (item + ',')
        } else {
          reverseStr += item
        }
      })
      if (datapoint) reverseStr = datapoint.split('').reverse().join('') + reverseStr
      result = reverseStr.split('').reverse()
    }
    return result
  },
  /**
   * 根据年月获取当前月的天数
   * @param time
   */
  getDaysInOneMonth(time) {
    let arr = time.split('-')
    if(!(arr.length && arr.length === 2)) {
      console.error('参数格式错误,YYYY-MM')
      return 0
    }
    let year = Number.parseInt(arr[0],10)
    let month = Number.parseInt(arr[1],10)
    let tempDate = new Date(year,month,0)
    return tempDate.getDate()
  },
  /**
   * 判断是否有权限
   * @param arrs
   */
  hasPermission(arrs,routeName) {

    if(arrs && arrs.length) return false

    for(let i = 0;i < arrs.length; i++) {
      // if(arrs[i])
    }
  },
  // 判断数组中是否有此值
  hasValue(arr, val) {
    let result = false
    for(let i = 0 ; i < arr.length; i++) {
      if(arr[i] === val){
        result = true
        break
      }
    }
    return result
  },
  /**
   * 返回格式化后的日期
   * @param date new Date的时间
   * @param format 转换格式
   */
  formatterDate (date, format) {
    var o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds() // 秒
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return format
  },

  /**
   *根据菜单转换
   * @param menus
   */
  convertPermissionByMenu(menus) {

  }
}
