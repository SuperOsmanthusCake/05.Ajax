// 首先获取数据并显示
function getData(){
    // 通过Ajax获取数据
    $.get('http://www.liulongbin.top:3006/api/cmtlist',function(res){
        if(res.status !== 200) return alert('获取评论表失败！')
        let arry = []
        $.each(res.data,function(i,item){
            arry.push('<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">'+item.time+'</span><span class="badge" style="background-color: #5BC0DE;">'+item.username+'</span>'+ item.content+'</li>')

        })
        $('#cmt-list').empty().append(arry.join(''))
    })}
getData()

// 发表评论
$(function(){
    // 添加监听表单事件
    $('#formAddCmt').on('submit',function(e){
        e.preventDefault()
        // 快速获取到表单数据
        let data = $('#formAddCmt').serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            if(res.status !== 201) return alert('发表评论失败')
            getData()
        })
    })
    
})