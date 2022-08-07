// 引入express
const express = require('express');
// 创建应用对象
const app = express();

// 创建路由规则
// request是对请求报文的封装
// response是对相应报文的封装
app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    let obj = {
        name: '小唐',
        age: 21,
        sex: '男'
    }
    response.send(obj);
});


// 监听端口启动服务
app.listen(8000,()=>{
    console.log("服务器已经启动，8000 端口监听中！！！");
});