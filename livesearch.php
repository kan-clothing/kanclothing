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
      if (stristr($y->item(0)->nodeValue, $q)) {
        if ($hint == "") {
          $hint = "<a href='" .
            $z->item(0)->nodeValue .
            "' target='_blank' style='padding-right: 20px; width: 100%; font-size: 15px; color: #666666; padding-left: 20px; border: 1px solid #e5e5e5; height: 42px;'>" .
            $y->item(0)->nodeValue .
            "</a>";
        } else {
          $hint .= "<br /><a href='" .
            $z->item(0)->nodeValue .
            "' target='_blank' style='padding-right: 20px; width: 100%; font-size: 15px; color: #666666; padding-left: 20px; border: 1px solid #e5e5e5; height: 42px;'>" .
            $y->item(0)->nodeValue .
            "</a>";
        }
      }
    }
  }
}
if ($hint == "") {
  $response = "<div style='padding: 20px; font-size: 15px; color: #666666;'>No suggestions</div>";
} else {
  $response = $hint;
}

echo $response;
?>
