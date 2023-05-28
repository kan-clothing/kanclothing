
        // Import the functions you need from the SDKs you need
      // Initialize Firebase
     


// Initialize Firebase

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
    apiKey: "AIzaSyAMo5G5bWkDHzyXkLQjcB6F5C8GQGmeiNc",
    authDomain: "kan-clothing.firebaseapp.com",
    databaseURL: "https://kan-clothing-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kan-clothing",
    storageBucket: "kan-clothing.appspot.com",
    messagingSenderId: "943100252975",
    appId: "1:943100252975:web:0268951ffea192d27e47da"
  };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const database = getDatabase();
       

    function register(){
        const email = document.getElementById('email').value;
        const fname = document.getElementById('firstname').value;
        const lname = document.getElementById('lastname').value;
        const password = document.getElementById('password').value;

        if (!validate_email(email) || !validate_password(password)) {
        }
        if (!validate_field(fname) || !validate_field(lname)) {
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(function() {
                const user = auth.currentUser;
                const database_ref = database.ref();
                const user_data = {
                    email: email,
                    full_name: fname + ' ' + lname,
                    last_login: Date.now()
                };
                database_ref.child('users/' + user.uid).set(user_data);
            })
            .catch(function(error) {
                const error_code = error.code;
                const error_message = error.message;
                alert(error_message);
            });
    }

    function validate_email(email) {
        const expression = /^[^@]+@\w+(\.\w+)+\w$/;
        return expression.test(email);
    }

    function validate_password(password) {
        return password.length >= 6;
    }

    function validate_field(field) {
        return field && field.trim().length > 0;
    }


