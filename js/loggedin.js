firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    return;
  }
  window.location.href = "index.html";
});