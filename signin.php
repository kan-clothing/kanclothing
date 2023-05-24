
<!DOCTYPE html>
<html>
<head>
    <title>Sign In</title>
</head>
<body>
    <h2>Sign In</h2>

    <form method="post">
        <input type="text" name="username" placeholder="Enter your username">
        <input type="text" name="password" placeholder="Enter your username">
        <input type="submit" value="Log In">

</form>








<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST["username"];
    $password = $_POST["password"];

   

    
    $conn = mysqli_connect('localhost', 'username', 'password', 'database_name');
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    
    $sql = "SELECT * FROM user_table WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        
        echo "Login successful!";
    } else {
        
        echo "Invalid username or password.";
    }

    
    mysqli_close($conn);
}
?>

   
