firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
    //  clearShoppingCart();
      window.location.href = "login.html";
    }
  });