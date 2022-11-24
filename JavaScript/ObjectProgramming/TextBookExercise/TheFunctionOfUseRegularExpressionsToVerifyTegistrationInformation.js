//The role of the function is to go back to the global id element
function $(elementId) {
    return document.getElementById(elementId)
}

//This function is used to verify the user name
function checkUser() {
    var user = $("user").value;
    var userId = $("user_prompt")
    userId.innerHTML = "";
    var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/   //Define the elements consists of 4 to 16 alphanumeric characters
    if (reg.test(user) == false) {
        userId.innerHTML = "输入用户名不正确";
        userId.innerHTML.style.color = "red";
        return false;

    }
    return true;
}

//This function is used to verify the password
function checkPwd() {
    var pwd = $("pwd").value;
    var pwdId = $("pwd_prompt");
    pwd.innerHTML = "";
    var reg = /^[a-zA-Z0-9]{4,10}$/
    if (reg.test(pwd) == false) {
        pwdId.innerHTML = "密码长度在4-10位之间";
        return false;
    }
    return true;
}

//This function is used to verify the repassword
function checkRepwd() {
    var repwd = $("repwd").value;
    var pwd = $("pwd").value;
    var repwdId = $("repwd_prompt");
    repwdId.innerHTML = "";
    if (pwd != repwd) {
        repwdId.innerHTML = "两次输入密码输入不一致";
        return false;
    }
    return true;
}
//This function is used to verify the email
function checkEmail() {
    var email = $("email").value;
    var emailId = $("email_prompt");
    emailId.innerHTML = "";
    var reg = /^\w+@\w+\.\w+[(com) | (cn)]$/;
    if (reg.test(email) == false){
        emailId.innerHTML = "Email输入格式不正确，请检查后重新输入";
    return false;
    }
    return true;
}
//This function is used to verify the mobile
function checkMobile() {
    var mobile = $("mobile").value;
    var mobileId = $("mobile_prompt");
    mobileId.innerHTML = "";
    var reg = /^1\d{10}$/;
    if (reg.test(mobile) == false) {
        mobileId.innerHTML = "请输入正确的手机号"
        return false;
}
    return true;
}
//This function is used to verify the birth
function checkBirth(){
    var birth = $("birth").value;
    var birthId = $("birth_prompt");
    birthId.innerHTML = ""
    var reg=/^(19[7-9]\d{1}) | (20((0[0-9]) | (2[0-3]))) - ((0?[1-9])| (1[0-2])) - ((0?[1-9])|([1-2][0-9])|30|31)$/;
    if (reg.test(birth) == false){
        birthId.innerHTML = "输入的生日信息不合法，请重新输入";
        return false;
    }
    return true;
}
//This function is used to verify all
function checkAll(){
    if (checkUser()&&checkPwd()&&checkRepwd()&&checkEmail()&&checkMobile()&&checkBirth()){
        return true;
    }else{
        return false;
    }


}

