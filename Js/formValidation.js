//Form validation-----------------------------------------------------------------

//sign up--------------------------------------------------------------------------

//Collecting data from html========================
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
const pop = document.querySelector('.suc');
const clMsg = document.querySelector('.close-message');

//Close Signup Notification========================
clMsg.addEventListener('click', ()=>{

    pop.classList.remove('active');

});

//Validate Sign Up form======================
function checkme(event){

    //Stop form from submiting==============
    event.preventDefault();

    //Collecting SignUp Form Data====================
    const fullName = document.querySelector('#fullname').value;
    const userName = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const pwd = document.querySelector('#pwd').value;

    //Condition for Signup form====================

    //If input field are greater than 0 (If anything is written in the fields), it should do the following functuons.============== 
    if(fullName.length > 0 && userName.length > 0 && email.length > 0 && phone.length > 0 && pwd.length > 0){

        //if submit button is clicked, change the value to Loading, the background color to #FA481A and color to aliceblue=========
        submit.innerHTML = "Loading...";
        submit.style.backgroundColor = "#FA481A";
        submit.style.color = "aliceblue";

        //if submit button is clicked, disable the input fields after 2sec================
        setTimeout(()=>{

            fullName2.disabled = true,userName2.disabled = true,email2.disabled = true,phone2.disabled = true,pwd2.disabled = true;

        }, 2000);

        //After 5sec, submit form and change the values of the variables below to thier default value===============
        setTimeout(()=>{

            //Reset form after 5sec
            form.reset();

            //Change values back to their default value
            submit.innerHTML = "Register";
            submit.style.backgroundColor = "transparent";
            submit.style.color = "#FA481A";

            //input fields are back to normal (Not disabled)
            fullName2.disabled = false,userName2.disabled = false,email2.disabled = false,phone2.disabled = false,pwd2.disabled = false;

            //Pop up successful message
            pop.classList.add('active');

          }, 5000);

          //Remove Pop up message after 10Sec
        setTimeout(()=>{

              pop.classList.remove('active');

        }, 15000);
    
        //Form is good to go
        return true;

    }// End first if
    else{

        //If input fields are = 0 (nothing is writen in the fields), display error msg
        if(fullName.length == 0){

            fullName2.style.border = "1px solid red";
            fullErrorMessage.innerHTML = "Please fill in this field";

        };

        //If input fields are = 0 (nothing is writen in the fields), display error msg
        if(userName.length == 0){

            userName2.style.border = "1px solid red";
            userErrorMessage.innerHTML = "Please fill in this field";

        };

        //If input fields are = 0 (nothing is writen in the fields), display error msg
        if(email.length == 0){

            email2.style.border = "1px solid red";
            emailErrorMessage.innerHTML = "Please fill in this field";

        };

        //If input fields are = 0 (nothing is writen in the fields), display error msg
        if(phone.length == 0){

            phone2.style.border = "1px solid red";
            phoneErrorMessage.innerHTML = "Please fill in this field";

        };

        //If input fields are = 0 (nothing is writen in the fields), display error msg
        if(pwd.length == 0){

            pwd2.style.border = "1px solid red";
            pwdErrorMessage.innerHTML = "Please fill in this field";

        };

        //submit value should remain the same
        submit.innerHTML = "Register";
        
        //stop form from submiting
        return false;

    }; //End first else
}; //End function

//Clear the error message after user type inside the input field
function clearFullErrorMessage(){

    fullName2.style.border = "1px solid grey";
    fullErrorMessage.innerHTML = "";

};

//Clear the error message after user type inside the input field
function clearUserErrorMessage(){

    userName2.style.border = "1px solid grey";
    userErrorMessage.innerHTML = "";

};

//Clear the error message after user type inside the input field
function clearEmailErrorMessage(){

    email2.style.border = "1px solid grey";
    emailErrorMessage.innerHTML = "";

};

//Clear the error message after user type inside the input field
function clearPhoneErrorMessage(){

    phone2.style.border = "1px solid grey";
    phoneErrorMessage.innerHTML = "";

};

//Clear the error message after user type inside the input field
function clearPwdErrorMessage(){

    pwd2.style.border = "1px solid grey";
    pwdErrorMessage.innerHTML = "";

};

//Login---------------------------------------------------------------------------

//Collecting Login form data
var loginEmail2 = document.getElementById('login-email');
var loginPwd2 = document.getElementById('login-pwd');
var LoginEmailErrorMessage = document.getElementById('login-email-error-message');
var LoginPwdErrorMessage = document.getElementById('login-pwd-error-message');

//Login form validation
function checklogin(event){

    //Prevent form from submiting
    event.preventDefault();

    //Extracting the input fields value
    const loginEmail = document.getElementById('login-email').value;
    const loginPwd = document.getElementById('login-pwd').value;

    //Collecting more Login form data
    const poll = document.querySelector('.poll');
    const h3Msg = document.querySelector('#h3msg');
    const pmsg = document.querySelector('#pmsg');
    const closeLoginMsg = document.querySelector('#closeloginmsg');
    const loginpop = document.querySelector('.loginsuc');

    //Close Login pop up Message
    closeLoginMsg.addEventListener('click', ()=>{

        loginpop.classList.remove('active');
        
    });

     //If input field are greater than 0 (If anything is written in the fields), it should do the following functuons.============== 
    if(loginEmail.length > 0 && loginPwd.length > 0){

        //Setting login details to a constant value Email:"admin@gmail.com", password:"Jkimberly11".
        if(loginEmail == "admin@gmail.com" && loginPwd == "Jkimberly11"){

                //After 5sec reset form and pop up a successful msg
                setTimeout(()=>{

                    form.reset();

                    //Change pop up message colors and values.
                    poll.style.backgroundColor = "rgb(112, 238, 112)";
                    h3Msg.style.color = "rgb(112, 238, 112)";
                    pmsg.innerHTML = "Login is successful";

                    //Display pop up message
                    loginpop.classList.add('active');

                }, 5000);

        }//End second If
        else{

            //If Wrong Login details run the following function================

            //Change pop up message colors and values.
            poll.style.backgroundColor = "red";
            h3Msg.style.color = "red";
            h3Msg.innerHTML = "Error";
            pmsg.innerHTML = "Login is Unsuccessful.";

            //Change default values of the variables after 5sec=========
            setTimeout(()=>{

                loginEmail2.style.border = "1px solid red";
                LoginEmailErrorMessage.innerHTML = "Please fill in this field correctly";
                loginPwd2.style.border = "1px solid red";
                LoginPwdErrorMessage.innerHTML = "Please fill in this field correctly";

            }, 5000);

            //If user try to submit wrong details again run this.
            if(loginEmail.length > 0 && loginPwd.length > 0){
                clearLoginEmailErrorMessage();
                clearLoginPwdErrorMessage();

                //Remove pop up message
                loginpop.classList.remove('active');
            }

        };//End second Else;

        //Change submit value and colors if all the conditions are true
        submit.innerHTML = "Logging In...";
        submit.style.backgroundColor = "#FA481A";
        submit.style.color = "aliceblue";

        //Disbale input fields after 2 sec of clicking the submit btn
        setTimeout(()=>{

            loginEmail2.disabled = true, loginPwd2.disabled = true;

        }, 2000);

        //Cahnge Values back to default After 5 secs
        setTimeout(()=>{

            //Submit values and color back to default
            submit.innerHTML = "Register";
            submit.style.backgroundColor = "transparent";
            submit.style.color = "#FA481A";

            //input fields are back to normal (Not disabled)
            loginEmail2.disabled = false, loginPwd2.disabled = false;
            loginpop.classList.add('active');

          }, 5000);

          //Remove pop up message after 10secs
        setTimeout(()=>{

              loginpop.classList.remove('active');

        }, 15000);

        //Submit form
        return true;

    }//End first if
    else{

         //If input fields are = 0 (nothing is writen in the fields), display error msg
        if(loginEmail.length == 0){

            loginEmail2.style.border = "1px solid red";
            LoginEmailErrorMessage.innerHTML = "Please fill in this field";

        };

        //If input fields are = 0 (nothing is writen in the fields), display error msg
        if(loginPwd.length == 0){

            loginPwd2.style.border = "1px solid red";
            LoginPwdErrorMessage.innerHTML = "Please fill in this field";

        };

        //Stop form from submiting
        return false;

    };//End first else
};//End function

//Clear the error message after user type inside the input field
function clearLoginEmailErrorMessage(){

    loginEmail2.style.border = "1px solid grey";
    LoginEmailErrorMessage.innerHTML = "";

};

//Clear the error message after user type inside the input field
function clearLoginPwdErrorMessage(){

    loginPwd2.style.border = "1px solid grey";
    LoginPwdErrorMessage.innerHTML = "";

};

//To be continued