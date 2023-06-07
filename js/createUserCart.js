function createUserCart() {
    // Check if Firebase has already been initialized
    if (!firebase.apps.length) {
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
      };
  
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
  
    // Get the current user
    const user = firebase.auth().currentUser;
  
    // Check if the user is logged in
    if (user) {
      // Get a reference to the 'users' node in the database
      const usersRef = firebase.database().ref("users");
  
      // Create a new 'cart' node for the user
      const cartRef = usersRef.child(user.uid).child("cart");
  
      // Check if the 'cart' node exists
      cartRef.once('value', function(snapshot) {
        if (!snapshot.exists()) {
          // Create the 'cart' node if it doesn't exist
          cartRef.set({
            
          })
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
  
