<?php
    $conn = mysqli_connect('localhost', 'root', '', 'contact_db');

    if($conn){
        echo "Connection Successful";
    }
    else{
        echo "Connection Failed";
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $message = $_POST['message'];

    $query = "INSERT INTO contact_table (name, email, contact, message) VALUES ('$name', '$email', '$contact', '$message')";
    
    mysqli_query($conn,$query);
    header('location:index.html#contact');
?>
