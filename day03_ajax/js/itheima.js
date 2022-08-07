// 定义一个数据处理函数 将数据封装为一个查询字符串形式
function resolveData(data) {
  // 定义一个数据用来装改变后的新数组
  let arr = []
  // 使用for循环来将改变的字符串装入新的数组
  for(let k in data){
    let str = k + '=' + data[k]
    // 这里的数据插入元素，不可以使用赋值方式，必须使用push()函数
    arr.push(str)
  }
  return arr.join('&')
}

// var res = resolveData({ name: 'zs', age: 20 })
// console.log(res)

function itheima(options) {
  var xhr = new XMLHttpRequest()

  // 把外界传递过来的参数对象，转换为 查询字符串
  var qs = resolveData(options.data)
  // toUpperCase() 方法用于把字符串转换为大写。
  if (options.method.toUpperCase() === 'GET') {
    // 发起GET请求
    xhr.open(options.method, options.url + '?' + qs)
    xhr.send()
  } else if (options.method.toUpperCase() === 'POST') {
    // 发起POST请求
    xhr.open(options.method, options.url)
    // 设置头文件
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(qs)
  }
    // 注册响应监听事件
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText)
      options.success(result)
    }
  }
}