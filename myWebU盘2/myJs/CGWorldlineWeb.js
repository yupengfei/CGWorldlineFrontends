
//User对象
function User(username,userpassword)
{
  this.Username=username;
  this.Userpassword=userpassword;


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
                    if(returnMessage.FeedbackCode!=2)  //data和status有什么联系？？？？
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
                        alert("");



}

});
});
}）；
//注册时的js

$(document).ready(function(){
$("#registerButton").click(function() {

  var stringToSend = JSON.stringify(new User(
  $("#userCancelUserName").val(),
  $("#userCancelUserPassword").val(),

)
);
//alert(stringToSend);
$.post("/register",stringToSend,
   function(data,status){
    var returnMessage = JSON.parse(data)
    if(returnMessage.FeedbackCode!=2)
          alert("Data: " + returnMessage.FeedbackText);
    else
          window.location.href='http://localhost:8080'
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