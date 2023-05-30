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

    if (isLoggedIn) {
   
      console.log('User is logged in!');
      window.location.href = 'index.html';

    } else {

      console.log('User is logged out.');
  
    }
  }
  

  auth.onAuthStateChanged(function(user) {
    if (user && user.emailVerified) {
    
      updateLoggedInStatus(true);
      window.location.href = 'index.html';
    } else {

      updateLoggedInStatus(false);
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



  