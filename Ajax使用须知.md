* 利用jquery里的$.ajax()方法实现数据交互
```js
//前端页面代码
<script>
$(".btn").click(function(){
  var info ={user:$(".user").data().user,
      content:$("#text2").val()
          }
     $.ajax({   
     data: info,
     url:'/questins',
     type: 'post',
     dataType: 'json',
     timeout: 10000,
     success: function(data){
     //var data = $.parseJSON(data);
     console.log(data);
     alert('data');
     
       },
    error: function(jqXHR, textStatus, errorThrown){
    alert('Error'+ textStatus + errorThrown);
    }
    });
 });
</script>

//后台代码
router.post('/',function(req,res,next){
  console.log(req.body);
  //向前端页面发送数据
  res.json({data: "传送成功"});
});

```
* 将后台数据发送到前端页面并显示
```js
