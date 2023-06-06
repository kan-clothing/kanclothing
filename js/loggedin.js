auth.onAuthStateChanged(function (user) {
  if (user) {
    var userId = user.uid;
    var userRef = database.ref('users/' + userId);
    userRef.on('value', function (snapshot) {
      var userData = snapshot.val();
      var loginStatus = userData.loginStatus;
      if (loginStatus === 0) {
      } else if (loginStatus === 1) {
        window.location.href = 'index.html';
      }
    });
  } else {
  }
});