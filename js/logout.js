// logout.js

// Retrieve the logout link element
var logoutLink = document.getElementById("logoutLink");

// Add a click event listener to the logout link
logoutLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  
  // Clear the logged-in status from storage
  localStorage.removeItem("isLoggedIn");
  
  // Redirect the user to the login page
  window.location.href = "index.html";
  
  // Perform any additional actions upon logout
  // Example: Clear user-specific data, show a logout confirmation message, etc.
});
var logoutLink = document.getElementById("respout");

// Add a click event listener to the logout link
logoutLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  
  // Clear the logged-in status from storage
  localStorage.removeItem("isLoggedIn");
  
  // Redirect the user to the login page
  window.location.href = "index.html";
  
  // Perform any additional actions upon logout
  // Example: Clear user-specific data, show a logout confirmation message, etc.
});
