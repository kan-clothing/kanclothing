// addProductToCart.js

function addProductToCart(product) {
    // Get the current user
    const user = firebase.auth().currentUser;
  
    if (!user) {
      console.log("User is not logged in");
      return;
    }
  
    // Get a reference to the 'users' node in the database
    const usersRef = firebase.database().ref("users");
  
    // Get a reference to the user's cart
    const cartRef = usersRef.child(user.uid).child("cart");
  
    // Check if the product already exists in the cart
    cartRef.orderByChild("name").equalTo(product.name).once("value", function(snapshot) {
      if (snapshot.exists()) {
        // The product already exists, increment the amount
        snapshot.forEach(function(childSnapshot) {
          const existingProductRef = childSnapshot.ref;
          const existingAmount = childSnapshot.val().amount;
          const newAmount = parseInt(existingAmount) + parseInt(product.amount);
  
          // Update the amount of the existing product
          existingProductRef.update({ amount: newAmount })
            .then(() => {
              console.log("Product amount updated in Firebase");
            })
            .catch((error) => {
              console.error("Error updating product amount in Firebase:", error);
            });
        });
      } else {
        // The product doesn't exist, add it to the cart
        const newProductRef = cartRef.push();
  
        // Set the product data
        newProductRef.set({
          img: product.img,
          name: product.name,
          price: product.price,
          amount: product.amount
        })
          .then(() => {
            console.log("Product added to cart in Firebase");
          })
          .catch((error) => {
            console.error("Error adding product to cart in Firebase:", error);
          });
      }
    });
  }
  
  // Export the addProductToCart function
  module.exports = addProductToCart;
  