// logout.js

// Retrieve the logout link element
var logoutLink = document.getElementById("logoutLink");


logoutLink.addEventListener("click", function(event) {
  event.preventDefault(); 
  

  localStorage.removeItem("isLoggedIn");
  

  window.location.href = "index.html";
  
 
});
var logoutLink = document.getElementById("respout");


logoutLink.addEventListener("click", function(event) {
  event.preventDefault(); 

  localStorage.removeItem("isLoggedIn");
  

  window.location.href = "index.html";
  

});
