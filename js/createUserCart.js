// Check if Firebase has already been initialized
if (!firebase.apps.length) {
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
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  // Function to create a cart for the current user
  function createUserCart() {
    // Get the current user
    const user = firebase.auth().currentUser;
  
    if (user) {
      // Get a reference to the 'users' node in the database
      const usersRef = firebase.database().ref("users");
  
      // Create a new 'cart' node for the user
      const cartRef = usersRef.child(user.uid).child("cart");
  
      // Check if the 'cart' node exists
      cartRef.once('value', function(snapshot) {
        if (!snapshot.exists()) {
          // Create the 'cart' node if it doesn't exist
          cartRef.set({})
            .then(() => {
              console.log("Cart created in Firebase");
            })
            .catch((error) => {
              console.error("Error creating cart in Firebase:", error);
            });
        } else {
          console.log("Cart already exists in Firebase");
        }
      });
    } else {
      console.log("User is not logged in");
    }
  }
  