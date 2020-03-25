var http = require('http')


// 创建服务
http.createServer(function(request,response){
    response.writeHead(200,{
        'Content-Type':'text/plain',
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"DELETE,PUT,POST,GET,OPTIONS",
    })
    //发送响应数据
      //当前时间与2018-05-10的时间差
    var data = JSON.stringify({
        serverDate: new Date(),
        goods:[
            //    商品秒杀到期时间   格式如下： 2020-03-25 11:28:10
            {name:'测试商品111',num:5,endDate:'2020-03-25 11:28:10'},
        ]
    })
    response.end(data)
}).listen(8088)