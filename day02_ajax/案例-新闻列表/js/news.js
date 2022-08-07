// 使用Ajax获取到数据
function getNewList(){
    // 2.获取数据
    $.get('http://www.liulongbin.top:3006/api/news',function(res){
        if(res.status !== 200) return alert('数据获取失败！')
        for(let i = 0; i<res.data.length; i++){
            res.data[i].tags = res.data[i].tags.split(',')
        }
        console.log(res);
        // 4.调用template方法
        let thmlNews = template('user',res)
        // 5.渲染数据
        $('#news-list').html(thmlNews)
    }) 
}   
getNewList()

template.defaults.imports.filterName = function(vaule){
    let date = new Date(vaule)
    let year = date.getFullYear()
        let month = date.getMonth()+1
        let day = date.getDate() 
        let week = date.getDay()+1
        let hours = date.getHours()
        let min = date.getMinutes()
        let s = date.getSeconds()
        return year+'年'+month+'月'+day+'日 星期:'+week+' '+hours+':'+min+':'+s
}

