/*设置为根据id获取元素*/
function $(elementId) {
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
    var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    if (reg.test(user) == false) {
        userId.innerHTML = "输入用户名不正确！！！"
        return false;
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
    var reg = /^[a-zA-Z0-9]{4,10}$/;
    if (reg.test(pwd) == false) {
        pwdId.innerHTML = "密码长度在4-10位之间！！！"
        return false;
    }
    return true;
}

function checkRepwd() {
    var pwd = $("pwd").value;
    var repwd = $("repwd").value;
    var repwdId = $("repwd_prompt");
    repwdId.innerHTML = "";
    if (pwd != repwd) {
        repwdId.innerHTML = "两次输入密码不一致，请重新输入！！！"
    }
    return true;
}

/*验证邮箱
* 正确的邮箱里面应该包含一个@符号，并且包含.。@符号在.前
* */
function checkEmail() {
    var email = $("email").value;
    var email_prompt = $("email_prompt");
    email_prompt.innerHTML = ""
    var reg = /^\w+@\w+\.\w+[(com) | (cn)] $/;
    if (reg.test(email) == false) {
        email_prompt.innerHTML = "输入的邮箱格式中应该包含'@'符号"
        return false
    }
    return true;
}

/*验证手机号
* 一般手机号长度为11位纯数字
* */
function checkMobile() {
    var mobile = $("mobile").value;
    var mobileId = $("mobile_prompt");
    mobileId.innerHTML = "";
    var regMobile = /^1\d{10}$/;
    if (regMobile.test(mobile) == false) {
        mobileId.innerHTML = "输入手机号码不正确，请重新输入！！！"
        return false;
    }
    return true;
}

/*验证出生
* 1.出生年月日中不得出现字符
* 2.年月日之间应该用-隔开
* */
function checkBirth() {
    var birth = $("birth").value;
    var birthId = $("birth_prompt");
    birthId.innerHTML = ""
    var reg = /^((19\d{2}) | (200\d) | (201[0-4]])) - (0?[1-9] | 1[0-2]]) - (0?[1-9] | [1-2]\d | 3[0-1])$/;
    if (reg.test(birth) == false) {

        birthId.innerHTML = "生日格式输入不正确，例如1980-05-12或1985-05-04";
        return false
    }
    return true;
}
/*
* 验证所有信息
* */
function checkAll() {
    if (checkUser() && checkPwd() && checkRepwd() && checkEmail() && checkMobile() && checkBirth()) {
        return true;
    } else {
        return false;
    }
}