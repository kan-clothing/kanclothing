
var isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
  console.log('User is logged in!');
  document.getElementById("loginLink").style.display = "none";
  document.getElementById("signUpLink").style.display = "none";
  document.getElementById("logoutLink")
  document.getElementById("respsign").style.display = "none";
  document.getElementById("respout")
  document.getElementById("contact-us");
  document.getElementById("cart-shop");
  document.getElementById("check-out");
} else {
 
  console.log('User is logged out.');
  document.getElementById("loginLink")
  document.getElementById("signUpLink")
  document.getElementById("logoutLink").style.display = "none";
  document.getElementById("respsign")
  document.getElementById("respout").style.display = "none";
  document.getElementById("contact-us").style.display = "none";
  document.getElementById("cart-shop").style.display = "none";
  document.getElementById("check-out").style.display = "none";

  document.getElementById("product-add-cart").addEventListener("click", function() {
    window.location.href = "login.html";
  });
  
}
