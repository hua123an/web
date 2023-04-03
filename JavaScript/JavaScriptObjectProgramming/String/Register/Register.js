/*设置为根据id获取元素*/
function $(elementId){
    return document.getElementById(elementId)
}
/*开始验证用户名
* 用户名长度位4-16位
* 不可出现数字
*  */
function checkUser() {
    var user = $("user").value; //获取id位user的元素
    var userId = $("user_prompt");
    userId.innerHTML = "";
    if (user.length < 4 || user.length > 16){
        userId.innerHTML = "请输入4-16位用户名:"
        return false
    }
    for (var i = 0;i < user.length;i++){
        if (!isNaN(user.charAt(i))){
            userId.innerHTML = "用户名中不可出现数字";
            return false;
        }
    }
    return true;
}
/*密码验证
* 密码长度4-10位
* */
function checkPwd() {
    var pwd = $("pwd").value;
    var pwdId = $("pwd_prompt");
    pwdId.innerHTML = ""
    if (pwd.length < 4 || pwd.length > 10){
        pwd.innerHTML = "密码长度在4-10位之间";
        return false
    }
    return true;
}
function checkRepwd(){
    var pwd = $("pwd").value;
    var repwd = $("repwd").value;
    var repwdId = $("repwd_prompt");
    repwdId.innerHTML = "";
    if (pwd != repwd){
        repwdId.innerHTML = "两次输入密码不一致，请重新输入！！！"
    }
    return true;
}
/*验证邮箱
* 正确的邮箱里面应该包含一个@符号，并且包含.。@符号在.前
* */
function checkEmail(){
    var email = $("email").value;
    var email_prompt = $("email_prompt");
    email_prompt.innerHTML = ""
    if (index == -1){
        email_prompt.innerHTML = "输入的邮箱格式中应该包含'@'符号"
        return false
    }
    if (email.indexOf(".",index) == -1){
        email_prompt.innerHTML = "输入的邮箱中应包含'.'符号且在'@'符号后面";
        return false;
    }
    return true;
}
/*验证手机号
* 一般手机号长度为11位纯数字
* */
function checkMobile(){
    var mobile = $("mobile").value;
    var mobileId = $("mobile_prompt");
    mobileId.innerHTML = "";
    if (mobile.charAt(0) != 1){
        mobileId.inner = "手机号码的第一位应该是1";
        return false;
    }
    for (var i = 0;i < mobile.length;i++){
        if (isNaN(mobile.charAt(i))){
            mobileId.innerHTML = "手机号中不应该出现除数字以外的其他字符！！！"
            return false
        }
        if (mobile.length < 11 || mobile.length > 11){
            mobileId.innerHTML = "请输入11位手机号！！！"
        }
    }
    return true;
}
/*验证出生
* 1.出生年月日中不得出现字符
* 2.年月日之间应该用-隔开
* */
function checkBirth(){
    var birth = $("birth").value;
    var birthId = $("birth_prompt");
    birthId.innerHTML = ""
    if (birth.length != 10 || birth.charAt(4) != "-" || birth.charAt(7) != "-"){
        birthId.innerHTML = "出生日期输入有误！！！"
        return false
    }
    var birthdays = birth.split("-")
    year = parseInt(birthdays[0],10);
    month = parseInt(birthdays[1],10);
    day = parseInt(birthdays[2],10);
    var now = new Date();
    nowYear = now.getFullYear();
    if (isNaN(year) || isNaN(month) || isNaN(day)){
        birthId.innerHTML = "出生日期不能包含字符";
        return false;
    }
    if (year < 1900 || year > nowYear){
        birthId.innerHTML = "输入年份有误！！！"
        return false;
    }
    if (month <= 0 || month > 12){
        birthId.innerHTML = "输入月份有误！！！"
        return false;
    }
    if (day <= 1900 || day > 31){
        birthId.innerHTML = "输入日期有误！！！"
        return false;
    }
    return true;
}
/*
* 验证所有信息
* */
function checkAll(){
    if (checkUser()&&checkPwd()&&checkRepwd()&&checkEmail()&&checkMobile()&&checkBirth()){
        return true;
    }else{
        return false;
    }
}