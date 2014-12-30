/*$(document).ready(function(){
    $("#registerButton").click(function() {

        var stringToSend = JSON.stringify(new User(  
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
});*/

document.ready(function  onmouseout(){
   
  
    {
        function  checkemail()
        {
           
            var email = document.getElementById("email");
            var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

            var ismail = reg.match(email.val());
            
            if(email.val()=="")
            {
               alert("邮箱不能为空");
            }else if (!ismail)
            {
                alert("邮箱格式不正确！");
            }

            /*var arrEmail = email.split("@");
            var flag = "false";
            if(arrEmail.length>1)
            {
                var email_varlidate = arrEmail[1];
                var des = "'qq.com' || '126.com' || 'yahoo.com' || 'yahoo.com.cn' || 'gmail.com' || 'hotmail.com' || 'sina.com' || '21.com' || 'msn.com' || '163.com' || 'yeah.net' || 'yahoo.cn' || 'foxmail.com' || 'sohu.com' || 'sogou.com' || 'tom.com' || '21cn.com' || 'live.cn' || 'live.com' || 'hexun.com' || '139.com' || '189.cn' || '91.com' || '56.com' || 'eyou.com' || 'people.com.cn' || 'sh.com'";
            }
            if(des.indexOf("'"+email_varlidate+"'")!=-1)
                {
                    flag = "true";
                }

            if (flag != "true"; ) 
           {
                alert("邮箱格式不正确！");
           }*/




        }
     })

})

/*function IsVaildEmail(email) {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

    var ismail = reg.match(email.val());
    return ismail
}

function TestIsVaidEmail() {
    var emails = ["yupengfei@foxmail.com", "yu@ddf.ee.xx", "fdhjh"]
    for var email in emails 
    {
        var isVaild = IsVaildEmail(email)
        alert(email, isVaild)
    }
}
TestIsVaidEmail();
  */









  
   





