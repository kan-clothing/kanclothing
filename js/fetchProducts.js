// fetchProducts.js

// Import the Firebase SDK
const firebase = require("firebase");

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMo5G5bWkDHzyXkLQjcB6F5C8GQGmeiNc",
    authDomain: "kan-clothing.firebaseapp.com",
    databaseURL: "https://kan-clothing-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kan-clothing",
    storageBucket: "kan-clothing.appspot.com",
    messagingSenderId: "943100252975",
    appId: "1:943100252975:web:0268951ffea192d27e47da"
};

firebase.initializeApp(firebaseConfig);

// Function to fetch products from the Firebase Realtime Database
function fetchProducts() {
  // Get a reference to the 'products' node in the database
  const productsRef = firebase.database().ref("products/shirts");

  // Fetch the data
  productsRef.once("value", function(snapshot) {
    const products = [];

    // Iterate over each child snapshot
    snapshot.forEach(function(childSnapshot) {
      // Get the data from the child snapshot
      const productData = childSnapshot.val();

      // Extract the required information
      const { img, name, price } = productData;

      // Create a product object
      const product = {
        img,
        name,
        price
      };

      // Add the product to the array
      products.push(product);
    });

    // Pass the products to the addProductToCart function
    addProductToCart(products);
  });
}

// Export the fetchProducts function
module.exports = fetchProducts;
