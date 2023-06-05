try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  if (error.code === "app/duplicate-app") {
    window.location.href = 'index.html';
  } else {
    console.log('Firebase initialization error:', error);
  }
}

const auth = firebase.auth();
const database = firebase.database();

function loadLoginScript() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "js/login.js", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      eval(xhr.responseText);

      // Check if user is already logged in
      if (isLoggedIn) {
        window.location.href = 'index.html';
      }
    }
  };
  xhr.send();
}

loadLoginScript();