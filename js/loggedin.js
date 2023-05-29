// Retrieve the logged-in status from storage
var isLoggedIn = localStorage.getItem("isLoggedIn");

// Update your UI based on the logged-in status
if (isLoggedIn === "true") {
  // User is logged in
  console.log('User is logged in!');
  document.getElementById("loginLink").style.display = "none";
  document.getElementById("signUpLink").style.display = "none";
  document.getElementById("logoutLink")
} else {
  // User is logged out
  console.log('User is logged out.');
  document.getElementById("loginLink")
  document.getElementById("signUpLink")
  document.getElementById("logoutLink").style.display = "none";
}
