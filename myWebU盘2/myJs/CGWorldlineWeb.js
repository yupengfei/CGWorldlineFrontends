
//User的构造函数
function User(username,userpassword)
{
  this.Username=username;
  this.Userpassword=userpassword;  //有疑问？？？？？？？？？？？？？？？？？？？？？？？？？？？？？


}
function User(username){
                                            
 this.Username=username;

}
function  biaodan()
{




}

//登录时的js
$(document).ready（function(){
    $("#loginButton").click(function (){
      
      // var username =$("#userCancelUserName").val();
      // var password =$("#userCancelUserPassword").val();
       var stringToSend=JSON.stringfy(new User(
           $("#userCancelUserName").val(),$("#userCancelUserPassword").val()
           )
          );
       alert(stringTosend);
     $.post("/login", stringToSend,function(data,status){
     
                    var returnMessage=JSON.parse(data)
                    if(returnMessage.FeedbackCode!=2)  //data里面存储着登陆者的个人信息，所以要把它获取过来，并显示在一个可替代＃login的层＃successDiv层里
                      alert(data);
                    else
                        window.location.href='http://localhost:8080'
                    if(status=="success")
                         //隐藏原有的div,显示另外的div
                         $(#login).hide();
                         
                         $(#successDiv).show();
                    else(status=="fail")
                        alert("对不起，用户名或密码错误!");
                    else(status=="unregistered")
                        alert("对不起，该用户从未注册过!");
                    else(status=="frozen")
                        alert("对不起，该用户已被冻结！");



}

});
});
}）；
//注册时的js

$(document).ready(function(){
$("#registerButton").click(function() {

  var stringToSend = JSON.stringify(new User(   //????????????????????????????
  $("#userCancelUserName").val(),
  $("#userCancelUserPassword").val(),

)
);
  alert(stringToSend);
$.post("/register",stringToSend,
   function(data,status){
    var returnMessage = JSON.parse(data)
    if(returnMessage.FeedbackCode!=2)
          alert("Data: " + returnMessage.FeedbackText);
    else
          window.location.href='http://localhost:8080'

   if(status=="success")
                         //隐藏原有的div,显示另外的div
     $(#login).hide();
     $(#successDiv).show();
   else(status=="fail")
     alert("对不起，用户名或密码错误!");
  else(status=="unregistered")
     alert("对不起，该用户从未注册过!");
  else(status=="frozen")
      alert("对不起，该用户已被冻结!");               
});
});
});


//加入导航时需要加载的函数

function resize(){
  var  nHeight=frame.document.body.clientHeight;
  var  oEle=document.getElementById("navBackground");
  oEle.style.height=nHeight+'px';
}

//group.html页面的js
  //确定按钮的js
$(document).ready(function(){
   
  $("buttonSure").click(function(){
      var stringTosend=JSON.stringify(new User($("用户的username的ID").val()); // 这个地方获取数值应该改为提交表单的内容！！！！？？同时还有获取已经登陆用户的用户名！
      alert(stringTosend); 
      $.post("/sure",stringTosend,function(data,status){
      if(status=="success")
      {
           
        alert(stringTosend+",您确定要提交吗？");

      }
      else{
       alert("您还未登陆，请先登陆！");

      }

      });

  });
});

$(document).ready(function(){
   
  $("buttonCanel").click(function(){
      var stringTosend=JSON.stringify(new User($("用户的username的ID").val()); // 这个地方获取数值应该改为提交表单的内容！！！！？？同时还有获取已经登陆用户的用户名！
      alert(stringTosend); 
      $.post("/sure",stringTosend,function(data,status){
      if(status=="success")
      {
           
        alert(stringTosend+",您确定要取消吗？");

      }
      else{
       alert("您还未登陆，请先登陆！");

      }

      });

  });
});

//userRegister.html 注册页面的js


$(document).ready(function(){
   
  $("buttonCanel").click(function(){
      var stringTosend=JSON.stringify(new User($("用户的username的ID").val()); // 这个地方获取数值应该改为提交表单的内容！！！！？？同时还有获取已经登陆用户的用户名！
      alert(stringTosend); 
      $.post("/sure",stringTosend,function(data,status){
      if(status=="success")
      {
           
        alert(stringTosend+",您确定要取消吗？");

      }
      else{
       alert("您还未登陆，请先登陆！");

      }

      });

  });
});








      /* if(username==""||password=="")
       {
             console.log("用户名和密码不可以为空！");
             return false;

       }



       /*else{
       
        //$.post("/Ajax/LoginHandler.ashx",string,callback());
         
       /* $.ajax(

            {  
                type: "POST",  
                url: "/Ajax/LoginHandler.ashx", 
                data: "username=" + escape($('#txtUser').val()) + "&password=" + escape($('#txtPassword').val()),//发送ajax请求  
                beforeSend: function() {  
                    $("#loading").css("display", "block"); //show loading  
                    $("#loginButton").css("display", "none"); //hide login button  
                },  
                success: function(msg) {  
                    $("#loading").hide(); //hide loading  
                    if (msg == "unregistered") {  
                        alert("对不起，该用户未注册!");//user is unregistered  
                    }  
                    if (msg == "frozen") {  
                        alert("对不起，该用户已被冻结!");//user id frozen  
                    }  
                    if (msg == "fail") {  
                        alert("对不起，用户名或密码错误!"); //login failed  
                    }  
                    if (msg == "success") {  
                        parent.document.location.href = "manage.aspx"; //login successfully  
                    }  
                },  
                complete: function(data) {  
                    $("#loading").css("display", "none"); //hide loading  
                    $("#loginButton").css("display", "block"); //show login  
                }  
            });  
        }  
        return false; //stop client continue submit  
    }  
);  






 







    }






    	)










}