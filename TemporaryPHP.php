<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully <br>";

// Select or create database
$sql = "CREATE DATABASE IF NOT EXISTS shoppingcartDB";
if (mysqli_query($conn, $sql)) {
   // echo "<br> Database created/selected successfully";
} else {
    echo "Error creating/selecting database: " . mysqli_error($conn);
}

// Select database
mysqli_select_db($conn, "shoppingcartDB");
echo "Database successfully selected <br>";

// Create table if not exists
$sql = "CREATE TABLE IF NOT EXISTS myDbase (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(30) NOT NULL,
    Age VARCHAR(3) NOT NULL,
    Gender VARCHAR(6),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON 
    UPDATE CURRENT_TIMESTAMP
)";
if (mysqli_query($conn, $sql)) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

$name=$_POST['name'];
$age=$_POST['age'];
$gender=$_POST['gender'];
$sql = "INSERT INTO myDbase (Name, Age, Gender)
VALUES ('$name', '$age', '$gender')";
if (mysqli_query($conn, $sql)) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


$sql = "SELECT id, Name, Age FROM myDbase";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"] . " - Name: " . $row["Name"] . " - Age: " . $row["Age"] . "<br>";
    }
} else {
    echo "0 results";
}


 // sql to delete a record
 $sql = "DELETE FROM myDbase WHERE id=3";
 if ($conn->query($sql) === TRUE) {
 echo "Record deleted successfully";
 } else {
 echo "Error deleting record: " . $conn->error;
 }


 $sql = "UPDATE myDbase SET name='Doe' WHERE id=2";
if (mysqli_query($conn, $sql)) {
echo "Record updated successfully";
} else {
echo "Error updating record: " . mysqli_error($conn);
}


mysqli_close($conn);
?>
