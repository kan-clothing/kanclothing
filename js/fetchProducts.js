// Function to fetch products from Firebase
function fetchProducts() {
    // Get a reference to the 'products' node in the database
    const productsRef = firebase.database().ref("products");
  
    // Fetch the products
    return productsRef.once('value')
      .then((snapshot) => {
        const products = [];
        snapshot.forEach((childSnapshot) => {
          const product = childSnapshot.val();
          products.push(product);
        });
        return products;
      })
      .catch((error) => {
        console.error("Error fetching products from Firebase:", error);
        return [];
      });
  }
  