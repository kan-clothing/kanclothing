function loadLoginScript() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "js/login.js", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      eval(xhr.responseText);
    }
  };
  xhr.send();
}

loadLoginScript();
