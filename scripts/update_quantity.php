<?php
// Connect to the database
// ...

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



// Retrieve the productId and newQuantity from the AJAX request
$cartproductId = $_POST['productId'];
$newCartQuantity = $_POST['newCartQuantity'];

// Update the quantity in the database
$query = "UPDATE cart_items SET quantity = '$newCartQuantity' WHERE product_id = '$cartproductId'";
mysqli_query($connection, $query);

// Handle the response, e.g., send a success message back to the client
echo "Quantity updated successfully";
?>