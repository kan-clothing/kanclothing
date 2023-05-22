<?php
$xmlDoc = new DOMDocument();
$xmlDoc->load("links.xml");
$x = $xmlDoc->getElementsByTagName('link');
$q = $_GET["q"];

if (strlen($q) > 0) {
  $hint = "";
  
  for ($i = 0; $i < $x->length; $i++) {
    $y = $x->item($i)->getElementsByTagName('title');
    $z = $x->item($i)->getElementsByTagName('url');
    
    if ($y->item(0) != null && $y->item(0)->nodeType == 1) {
      $title = $y->item(0)->nodeValue;
      
      if (strncasecmp($q, $title, strlen($q)) === 0) {
        $hint .= "<a href='" .
          $z->item(0)->nodeValue .
          "' target='_blank' style='padding-right: 20px; width: 100%; font-size: 15px; color: #666666; padding-left: 20px; border: 1px solid #e5e5e5; height: 42px;'>" .
          $title .
          "</a><br />";
      }
    }
  }
}

$response = ($hint != "") ? $hint : "<div style='padding: 20px; font-size: 15px; color: #666666;'>No suggestions</div>";
echo $response;
?>
