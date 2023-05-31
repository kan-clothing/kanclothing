<?php
// Get the selected color from the AJAX request
$color = $_POST['color'];

// Read the HTML content of the products
$html = file_get_contents('shop.html');

// Create a new DOMDocument object
$dom = new DOMDocument();
$dom->loadHTML($html);

// Get all product items
$items = $dom->getElementsByTagName('div');

// Loop through each product item and filter based on the selected color
foreach ($items as $item) {
  // Check if the item has the specified color class
  if (strpos($item->getAttribute('class'), $color) === false) {
    // Remove the item from the DOM if it doesn't match the color
    $item->parentNode->removeChild($item);
  }
}

// Save the filtered HTML content
$html = $dom->saveHTML();

// Return the filtered HTML content
echo $html;
?>
