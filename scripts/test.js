/*QUnit.test("hello test",function(assert){
   assert.ok(1=="1","Passed");

});*/
QUnit.test("hello test",function(assert)
{ 
   assert.ok(1=="1","Passed");
}
function IsVaildEmail(email) {
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
// TestIsVaidEmail();
