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
  } 
  else {
    console.log('User is logged out.');
    if (loginLink) loginLink.style.display = "";
    if (signUpLink) signUpLink.style.display = "";
    if (logoutLink) logoutLink.style.display = "none"; 
    if (respout) respout.style.display = "";
    if (contactUs) contactUs.style.display = "";
    if (cartShop) cartShop.style.display = "";
    if (checkOut) checkOut.style.display = "";

    var productAddCart = document.getElementById("product-add-cart");
    if (productAddCart) {
      productAddCart.addEventListener("click", function() {
        window.location.href = "login.html";
      });
    }
  }
}


auth.onAuthStateChanged(function(user) {
  if (user && user.emailVerified) {
    updateLoggedInStatus(true);
    var userId = user.uid;
    var userRef = database.ref('users/' + userId);

    userRef.on('value', function(snapshot) {
      var userData = snapshot.val();
      var firstName = userData.firstname; 
      updateUsername(firstName);

      console.log('User logged in:', user.email); 
    });
  } else {
    updateLoggedInStatus(false);
    console.log('User not logged in');
  }
});

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
    .then(function() {
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
    .catch(function(error) {
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
  document.getElementById("username").innerText = "Welcome, " + username;
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      window.location.href = 'index.html'; 
      updateLoggedInStatus(false); 
    })
    .catch(function (error) {
      console.log(error);
    });
}
