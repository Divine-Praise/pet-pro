<?php
$fullname = $_REQUEST['user'];
$username = $_REQUEST['user'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$pwd = $_REQUEST['pwd'];

if((!empty($fullname)) && (!empty($username)) && (!empty($email)) && (!empty($phone)) && (!empty($pwd))){
    if(($fullname == "admin") && ($username == "admin") && ($email == "admin@gmail.com") && ($phone == "09154618833") && ($pwd == "admin")){
        echo "Login Successful.";
    }else{
        echo "Login unsuccessful please fill in your correct details.";
    }
}else{
        if(empty($fullname)){
            echo "<br><br>";
            echo "please enter your fullname";
        }
        if(empty($username)){
            echo "<br><br>";
            echo "please enter your username";
        }
        if(empty($email)){
            echo "<br><br>";
            echo "please enter your email";
        }
        if(empty($phone)){
            echo "<br><br>";
            echo "please enter your phone number";
        }
        if(empty($pwd)){
            echo "<br><br>";
            echo "please enter your password";
        }
    };
echo "<br><br>";
echo "<a href='Signup.html'>Back Home</a>";
