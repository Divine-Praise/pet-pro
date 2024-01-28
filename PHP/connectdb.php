<?php

    $serverName = 'localhost';
    $user = 'root';
    $pwd = '';
    $db = 'Pet_pro';

    $connect = mysqli_connect($serverName, $user, $pwd, $db);

    // check if connection is successful
    if(!$connect){
        die("Unable to connect to the data base.");
    };

    // extract form data 
    $fullname = $_REQUEST['fullname'];
    $username = $_REQUEST['username'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $pwd = $_REQUEST['pwd'];

    // store form data into the database
    $sql = "INSERT INTO sign_up_form (fullname, username, email, phone, password) VALUE ('$fullname', '$username', '$email', '$phone', '$pwd')";

    // check if transfering form data is successful
    if(mysqli_query($connect, $sql)){
        echo "Form have been successfully submited.";
    }else{
        echo "Unable to submit form please check out the fields or your details and try again.";
    };

    mysqli_close($connect);
    echo "<br><br>";
    echo "<a href='PETPRO/Signup.html'>Go back to form</a>";


?>