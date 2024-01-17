//Form validation

//sign up
var fullName2 = document.querySelector('#fullname');
var userName2 = document.querySelector('#username');
var email2 = document.querySelector('#email');
var phone2 = document.querySelector('#phone');
var pwd2 = document.querySelector('#pwd');
var fullErrorMessage = document.getElementById('full-error-message');
var userErrorMessage = document.getElementById('user-error-message');
var emailErrorMessage = document.getElementById('email-error-message');
var phoneErrorMessage = document.getElementById('phone-error-message');
var pwdErrorMessage = document.getElementById('pwd-error-message');


function checkme(event){
    // event.preventDefault();

    const fullName = document.querySelector('#fullname').value;
    const userName = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const pwd = document.querySelector('#pwd').value;

    if(fullName.length > 0 && userName.length > 0 && email.length > 0 && phone.length > 0 && pwd.length > 0){
        return true;
    }else{
        if(fullName.length == 0){
            fullName2.style.border = "1px solid red";
            fullErrorMessage.innerHTML = "Please fill in this field";
        }
        if(userName.length == 0){
            userName2.style.border = "1px solid red";
            userErrorMessage.innerHTML = "Please fill in this field";
        }
        if(email.length == 0){
            email2.style.border = "1px solid red";
            emailErrorMessage.innerHTML = "Please fill in this field";
        }
        if(phone.length == 0){
            phone2.style.border = "1px solid red";
            phoneErrorMessage.innerHTML = "Please fill in this field";
        }
        if(pwd.length == 0){
            pwd2.style.border = "1px solid red";
            pwdErrorMessage.innerHTML = "Please fill in this field";
        }
        return false;
    }
};
function clearFullErrorMessage(){
    fullName2.style.border = "1px solid grey";
    fullErrorMessage.innerHTML = "";
}
function clearUserErrorMessage(){
    userName2.style.border = "1px solid grey";
    userErrorMessage.innerHTML = "";
}
function clearEmailErrorMessage(){
    email2.style.border = "1px solid grey";
    emailErrorMessage.innerHTML = "";
}
function clearPhoneErrorMessage(){
    phone2.style.border = "1px solid grey";
    phoneErrorMessage.innerHTML = "";
}
function clearPwdErrorMessage(){
    pwd2.style.border = "1px solid grey";
    pwdErrorMessage.innerHTML = "";
}

//Login

var loginEmail2 = document.getElementById('login-email');
var loginPwd2 = document.getElementById('login-pwd');
var LoginEmailErrorMessage = document.getElementById('login-email-error-message');
var LoginPwdErrorMessage = document.getElementById('login-pwd-error-message');

function checklogin(event){
    // event.preventDefault();

    const loginEmail = document.getElementById('login-email').value;
    const loginPwd = document.getElementById('login-pwd').value;
    if(loginEmail.length > 0 && loginPwd.length > 0){
        return true;
    }else{
        if(loginEmail.length == 0){
            loginEmail2.style.border = "1px solid red";
            LoginEmailErrorMessage.innerHTML = "Please fill in this field";
        }
        if(loginPwd.length == 0){
            loginPwd2.style.border = "1px solid red";
            LoginPwdErrorMessage.innerHTML = "Please fill in this field";
        }
        return false;
    }
}

function clearLoginEmailErrorMessage(){
    loginEmail2.style.border = "1px solid grey";
    LoginEmailErrorMessage.innerHTML = "";
}

function clearLoginPwdErrorMessage(){
    loginPwd2.style.border = "1px solid grey";
    LoginPwdErrorMessage.innerHTML = "";
}