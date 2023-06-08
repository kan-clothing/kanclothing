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
        const selectedSizeInput = document.querySelector('input[name="size"]:checked');

        if (selectedSizeInput) {
          const selectedSize = selectedSizeInput.value;

          findProductBySize(cartRef, product.name, selectedSize)
            .then((existingProductSnapshot) => {
              if (existingProductSnapshot) {
                // The product with the selected size already exists, increment the amount
                const existingProduct = existingProductSnapshot.val();
                const existingAmount = existingProduct.amount;
                const newAmount = parseInt(existingAmount || 0) + 1;
                const newTotalPrice = parseFloat(product.price) * newAmount;

                // Update the amount and total price of the existing product
                existingProductSnapshot.ref
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
              } else {
                // The product with the selected size doesn't exist, add it to the cart
                const newProductRef = cartRef.push();
                const totalPrice = parseFloat(product.price);

                // Set the product data including the size
                newProductRef
                  .set({
                    img: product.img,
                    name: product.name,
                    price: totalPrice,
                    size: selectedSize,
                    totalprice: totalPrice,
                    amount: 1,
                  })
                  .then(() => {
                    console.log("Product added to cart in Firebase");
                  })
                  .catch((error) => {
                    console.error("Error adding product to cart in Firebase:", error);
                  });
              }
            })
            .catch((error) => {
              console.error("Error finding product in Firebase:", error);
            });
        } else {
          console.error("No size is selected");
        }
      } else {
        console.error("Product not found in the database");
      }
    });
  } else {
    console.log("User is not logged in");
  }
}

function findProductBySize(cartRef, productName, size) {
  return cartRef
    .orderByChild("name")
    .equalTo(productName)
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        // Check if any product with the selected size exists
        let existingProductRef = null;
        snapshot.forEach(function (childSnapshot) {
          const productSize = childSnapshot.val().size;
          if (productSize === size) {
            existingProductRef = childSnapshot;
            return true; // Stop iterating
          }
        });
        return existingProductRef;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error("Error finding product in Firebase:", error);
      return null;
    });
}
