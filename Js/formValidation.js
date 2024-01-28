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
const submit = document.getElementById('submit');
const form = document.querySelector('form');
const hero = document.querySelector('body');
const suc = document.querySelector('.suc');

function checkme(event){
    event.preventDefault();

    const fullName = document.querySelector('#fullname').value;
    const userName = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const pwd = document.querySelector('#pwd').value;

    if(fullName.length > 0 && userName.length > 0 && email.length > 0 && phone.length > 0 && pwd.length > 0){
        
        submit.innerHTML = "Loading...";
        submit.style.backgroundColor = "#FA481A";
        submit.style.color = "aliceblue";
        fullName2.disabled = true,userName2.disabled = true,email2.disabled = true,phone2.disabled = true,pwd2.disabled = true;
        setTimeout(()=>{
            form.reset();
            submit.innerHTML = "Register";
            submit.style.backgroundColor = "transparent";
            submit.style.color = "#FA481A";
            fullName2.disabled = false,userName2.disabled = false,email2.disabled = false,phone2.disabled = false,pwd2.disabled = false;
            suc.classList.add('active');
          }, 5000);
        setTimeout(()=>{
              suc.classList.remove('active');
        }, 8000);
    
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
        submit.innerHTML = "Register";
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
    event.preventDefault();

    const loginEmail = document.getElementById('login-email').value;
    const loginPwd = document.getElementById('login-pwd').value;
    const pmsg = document.getElementById('pmsg');
    const loginsuc = document.querySelector('.loginsuc');

    if(loginEmail.length > 0 && loginPwd.length > 0){
        if(loginEmail == "admin@gmail.com" && loginPwd == "Jkimberly11"){
                setTimeout(()=>{
                    pmsg.innerHTML = "Login successful";
                    loginsuc.style.backgroundColor = "palegreen";
                    loginsuc.classList.add('active');
                }, 5000)

        }else{

            pmsg.innerHTML = "Login Unsuccessful";
            loginsuc.style.backgroundColor = "red";

        }

        submit.innerHTML = "Logging In...";
        submit.style.backgroundColor = "#FA481A";
        submit.style.color = "aliceblue";
        loginEmail2.disabled = true, loginPwd2.disabled = true;
        setTimeout(()=>{
            form.reset();
            submit.innerHTML = "Register";
            submit.style.backgroundColor = "transparent";
            submit.style.color = "#FA481A";
            loginEmail2.disabled = false, loginPwd2.disabled = false;
            loginsuc.classList.add('active');
          }, 5000);
        setTimeout(()=>{
              loginsuc.classList.remove('active');
        }, 8000);
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