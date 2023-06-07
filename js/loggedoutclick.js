document.getElementById("product-add-cart").addEventListener("click", function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
        window.location.href = "login.html";
      } else {
    

        
      }
    });
  });
  