var firebaseConfig = {
  apiKey: "AIzaSyAMo5G5bWkDHzyXkLQjcB6F5C8GQGmeiNc",
  authDomain: "kan-clothing.firebaseapp.com",
  databaseURL: "https://kan-clothing-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kan-clothing",
  storageBucket: "kan-clothing.appspot.com",
  messagingSenderId: "943100252975",
  appId: "1:943100252975:web:0268951ffea192d27e47da"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

var isLoggedIn = false;

function updateLoggedInStatus(status) {
  isLoggedIn = status;

  var loginLink = document.getElementById("loginLink");
  var signUpLink = document.getElementById("signUpLink");
  var logoutLink = document.getElementById("logoutLink");
  var respsign = document.getElementById("respsign");
  var respout = document.getElementById("respout");
  var contactUs = document.getElementById("contact-us");
  var cartShop = document.getElementById("cart-shop");
  var checkOut = document.getElementById("check-out");
  var logoutResp = document.getElementById("logout-resp");
  var loginResp = document.getElementById("login-resp");
  var orResp = document.getElementById("or-resp");
  var registerResp = document.getElementById("register-resp");
  var loggedInUserName = "";

  if (isLoggedIn) {
    console.log('User is logged in!');
    if (loginLink) loginLink.style.display = "none";
    if (signUpLink) signUpLink.style.display = "none";
    if (logoutLink) logoutLink.style.display = "";
    if (respsign) respsign.style.display = "none";
    if (respout) respout.style.display = "none";
    if (contactUs) contactUs.style.display = "none";
    if (cartShop) cartShop.style.display = "none";
    if (checkOut) checkOut.style.display = "none";
    if (logoutResp) logoutResp.style.display = "";
    if (loginResp) loginResp.style.display = "none";
    if (orResp) orResp.style.display = "none";
    if (registerResp) registerResp.style.display = "none";
  } else {
    console.log('User is logged out.');
    if (loginLink) loginLink.style.display = "";
    if (signUpLink) signUpLink.style.display = "";
    if (logoutLink) logoutLink.style.display = "none";
    if (respout) respout.style.display = "";
    if (contactUs) contactUs.style.display = "";
    if (cartShop) cartShop.style.display = "";
    if (checkOut) checkOut.style.display = "";
    if (logoutResp) logoutResp.style.display = "none";
    if (loginResp) loginResp.style.display = "";
    if (orResp) orResp.style.display = "";
    if (registerResp) registerResp.style.display = "";
  }
}

auth.onAuthStateChanged(function (user) {
  if (user && user.emailVerified) {
    updateLoggedInStatus(true);
    var userId = user.uid;
    var userRef = database.ref('users/' + userId);

    userRef.on('value', function (snapshot) {
      var userData = snapshot.val();
      var firstName = userData.firstname;
      updateUsername(firstName);

      console.log('User logged in:', user.email);
      if (userData.admin === 1) {
        showAdminButton();
      } else {
        hideAdminButton();
      }
    });

    // Update login status in the database
    userRef.update({ loginStatus: 1 }).catch(function (error) {
      console.log('Error updating login status:', error);
    });
  } else {
    updateLoggedInStatus(false);
    console.log('User not logged in');
    hideAdminButton();
  }
});

function showAdminButton() {
  var adminButtons = document.getElementsByClassName("admin-button");
  for (var i = 0; i < adminButtons.length; i++) {
    adminButtons[i].style.display = "inline-block";
  }
}

function hideAdminButton() {
  var adminButtons = document.getElementsByClassName("admin-button");
  for (var i = 0; i < adminButtons.length; i++) {
    adminButtons[i].style.display = "none";
  }
}

function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (!validate_field(email) || !validate_email(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validate_field(password)) {
    alert('Please enter your password.');
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser;

      if (user.emailVerified) {
        var database_ref = database.ref();

        var user_data = {
          last_login: Date.now()
        };
        localStorage.setItem("isLoggedIn", true);

        database_ref.child('users/' + user.uid).update(user_data);
        window.history.back();

      } else {
        auth.signOut();
        alert('Email not verified. Please check your email and verify your account.');
      }
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;
      alert(error_code);
    });
}

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password) {
  return password.length >= 6;
}

function validate_field(field) {
  return field != null && field.length > 0;
}

function updateUsername(username) {
  loggedInUserName = username;
  var usernameElements = document.getElementsByClassName("username");
  for (var i = 0; i < usernameElements.length; i++) {
    usernameElements[i].innerText = "Welcome, " + username;
  }
}

function logout() {
  var user = auth.currentUser;

  if (user) {
    var userId = user.uid;
    var userRef = database.ref('users/' + userId);
    userRef.update({ loginStatus: 0 })
      .then(function() {
        firebase.auth().signOut()
          .then(function() {
            updateLoggedInStatus(false); 
            window.location.href = 'index.html';
          })
          .catch(function(error) {
            console.log('Error signing out:', error);
          });
      })
      .catch(function(error) {
        console.log('Error updating login status:', error);
      });
  } else {
    firebase.auth().signOut()
      .then(function() {
        updateLoggedInStatus(false); 
        window.location.href = 'index.html';
      })
      .catch(function(error) {
        console.log('Error signing out:', error);
      });
  }
}

function forgotPassword() {
  var email = document.getElementById('email-enter').value;

  if (!validate_field(email) || !validate_email(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(function () {
      alert('Password reset email sent. Please check your email to reset your password.');
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}
