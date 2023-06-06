<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the selected color value from the AJAX request
    $color = $_POST['color'];

    // Retrieve the content to be sorted (e.g., from a database)
    $content = file_get_contents('shop.html');// Replace with the actual source of your content

    // Filter and return the sorted HTML content based on the selected color
    $filteredContent = applyColorFilter($content, $color);
    echo $filteredContent;
}

function applyColorFilter($content, $color)
{
    // Parse the HTML content using a library like DOMDocument
    $dom = new DOMDocument();
    libxml_use_internal_errors(true);
    $dom->loadHTML($content);
    libxml_clear_errors();

    $xpath = new DOMXPath($dom);

    // Remove product items that don't match the selected color
    $query = "//div[contains(@class, '$color-shirt')]";
    $nodesToRemove = $xpath->query($query);

    foreach ($nodesToRemove as $node) {
        $node->parentNode->removeChild($node);
    }

    // Return the filtered HTML content
    return $dom->saveHTML();
}
?>
