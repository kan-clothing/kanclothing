// addProductToCart.js

function addProductToCart(productId) {
    // Get the current user
    const user = firebase.auth().currentUser;
  
    if (user) {
      // Get a reference to the 'users' node in the database
      const usersRef = firebase.database().ref("users");
  
      // Get a reference to the user's cart
      const cartRef = usersRef.child(user.uid).child("cart");
  
      // Fetch the product details based on the provided product ID
      const productRef = firebase.database().ref("products/shirts").child(productId);
      productRef.once("value", function (snapshot) {
        const product = snapshot.val();
  
        if (product) {
          // Check if the product already exists in the cart
          cartRef
            .orderByChild("name")
            .equalTo(product.name)
            .once("value", function (snapshot) {
              if (snapshot.exists()) {
                // The product already exists, increment the amount
                snapshot.forEach(function (childSnapshot) {
                  const existingProductRef = childSnapshot.ref;
                  const existingAmount = childSnapshot.val().amount;
                  const newAmount = parseInt(existingAmount) + 1;
                  const newTotalPrice = parseFloat(product.price) * newAmount;
  
                  // Update the amount and total price of the existing product
                  existingProductRef
                    .update({ amount: newAmount, totalprice: newTotalPrice })
                    .then(() => {
                      console.log("Product amount and total price updated in Firebase");
                    })
                    .catch((error) => {
                      console.error(
                        "Error updating product amount and total price in Firebase:",
                        error
                      );
                    });
                });
              } else {
                // The product doesn't exist, add it to the cart
                const newProductRef = cartRef.push();
                const totalPrice = parseFloat(product.price);
  
                // Set the product data
                newProductRef
                  .set({
                    img: product.img,
                    name: product.name,
                    price: totalPrice,
                    totalprice: totalPrice,
                    amount: 1,
                  })
                  .then(() => {
                    console.log("Product added to cart in Firebase");
                  })
                  .catch((error) => {
                    console.error(
                      "Error adding product to cart in Firebase:",
                      error
                    );
                  });
              }
            });
        } else {
          console.error("Product not found in the database");
        }
      });
    } else {
      console.log("User is not logged in");
    }
  }
  