//The purpose of this function is to get the value of the page text box based on the id
function $(elementId) {
    return document.getElementById(elementId);
}

//This function validates the user name
function checkUser() {
    var user = $("user").value;
    var userId = $("user_prompt");
    userId.innerHTML = "";
    if (user.length > 16 || user.length < 4) {
        userId.innerHTML = "请输入4-16位用户名";
        return false;

    }
    for (var i = 0; i < user.length; i++) {
        if (!isNaN(user.charAt(i))) {
            userId.innerHTML = "用户名不能包含数字";
            return false;
        }
    }
    return true;
}

//This function validates the password
function checkPwd() {
    var pwd = $("pwd").value;
    var pwdId = $("pwd_prompt");
    pwdId.innerHTML = "";
    if (pwd.length > 16 || pwd.length < 4) {
        pwdId.innerHTML = "密码长度在4-16位之间";
        return false;
    }
    return true;
}

//This  function calidates the repassword
function checkRepwd() {
    var repwd = $("repwd").value;
    var pwd = $("pwd").value;
    var repwdId = $("repwd_prompt")
    repwdId.innerHTML = "";
    if (repwd != pwd) {
        repwdId.innerHTML = "两次输入的密码不一致！！！";
        return false;
    }
    return true;
}

//This function calidates the email
function checkEmai() {
    var email = $("email").value;
    var email_prompt = $("email_prompt");
    email_prompt.innerHTML = " ";
    var index = email.indexOf("@", 1)
    if (index == -1) {
        email_prompt.innerHTML = "输入的邮箱格式中应包含‘@’符号";
        return false;
    }
    if (email.indexOf(".",index)==-1){
        email_prompt.innerHTML = "输入的由邮箱格式中应包含为‘.'符号且在‘@’符号后面";
        return false;
    }
    return true;
}
//This  function of validates mobile
function checkMobile() {
    var mobile = $("mobile").value;
    var mobileId = $("mobile_prompt")
    if (mobile.charAt(0) != 1) {
        mobileId.innerHTML = "手机号码第一位应为1";
        return false;
    }
    for (var i = 0; i < mobile.length; i++) {
        if (isNaN(mobile.charAt(i))) {
            mobileId.innerHTML = "输入符号只能是数字"
            return false;
        }
        return true;
    }
}
//This function validates birth
function checkBirth() {
    var birth = $("birth").value;
    var birthId = $("birth_prompt");
    birthId.innerHTML = "";
    if (birth.length != 10 || birth.charAt(4) != "-" || birth.charAt(7) != "-") {
        birthId.innerHTML = "输入正确的出生日期格式";
        return false;
    }
    var birthdays = birth.split("-")
    var year = parseInt(birthdays[0], 10);
    var month = parseInt(birthdays[1], 10);
    var day = parseInt(birthdays[2], 10);
    var now = new Date();
    nowYear = now.getFullYear();
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        birthId.innerHTML = "出生日期不能为非数字";
        return false;
    }
    if (year < 1900 || year > nowYear) {
        birthId.innerHTML = "输入年份不合法";
        return false;
    }
    if (month <= 1 || month > 12) {
        birthId.innerHTML = "输入月份不合法";
        return false;
    }
    if (day > 31 || day < 0) {
        birthId.innerHTML = "输入日期不合法";
        return false;
    }
    return true;
}

//This  function validates all databases
function checkAll() {
    if (checkUser() && checkPwd() && checkRepwd() && checkEmail() && checkMobile() && checkBirth()) {
        return true;
    } else {
        return false;
    }
}
