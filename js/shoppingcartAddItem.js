function loadProducts() {
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

  // Get a reference to the products node in the Firebase Realtime Database
  const productsRef = firebase.database().ref("products/shirts");

  // Function to retrieve product data from Firebase and add it to the cart
  productsRef.on('value', function(snapshot) {
    const products = snapshot.val();
    const table = document.getElementById('shopping-cart-items');

    if (table) {
      table.innerHTML = '';

      for (const productId in products) {
        const product = products[productId];

        // Create a new table row for each product
        const tableRow = document.createElement('tr');
        tableRow.style.borderColor = 'black';

        // Create product image
        const imageColumn = document.createElement('td');
        const image = document.createElement('img');
        image.src = product.img;
        image.style.width = '90px';
        image.style.height = 'auto';
        imageColumn.appendChild(image);
        tableRow.appendChild(imageColumn);

        // Create product name
        const nameColumn = document.createElement('td');
        const productName = document.createElement('h6');
        productName.textContent = product.name;
        nameColumn.appendChild(productName);
        tableRow.appendChild(nameColumn);

        // Create product price
        const priceColumn = document.createElement('td');
        const productPrice = document.createElement('h5');
        productPrice.textContent = '₱ ' + product.price;
        priceColumn.appendChild(productPrice);
        tableRow.appendChild(priceColumn);

        // Append the table row to the existing table
        table.appendChild(tableRow);
      }
    }
  });
}

// Call the loadProducts function to populate the shopping cart with data from Firebase
loadProducts();

// Function to add an item to the shopping cart
function addItemToCart(productID) {
  // Get a reference to the products node in the Firebase Realtime Database
  const productsRef = firebase.database().ref("products/shirts");

  // Update the reference to the correct node in your database
  const databaseRef = productsRef.child(productID);

  databaseRef.on('value', function(snapshot) {
    const product = snapshot.val();
    const table = document.getElementById('shopping-cart-items');

    if (table) {
      // Create a new row
      const newRow = document.createElement('tr');
      newRow.style.borderColor = 'black';

      // Create product image
      const imageColumn = document.createElement('td');
      const image = document.createElement('img');
      image.src = product.img;
      image.style.width = '90px';
      image.style.height = 'auto';
      imageColumn.appendChild(image);
      newRow.appendChild(imageColumn);

      // Create product name
      const nameColumn = document.createElement('td');
      const productName = document.createElement('h6');
      productName.textContent = product.name;
      nameColumn.appendChild(productName);
      newRow.appendChild(nameColumn);

      // Create product price
      const priceColumn = document.createElement('td');
      const productPrice = document.createElement('h5');
      productPrice.textContent = '₱ ' + product.price;
      priceColumn.appendChild(productPrice);
      newRow.appendChild(priceColumn);

      // Append the new row to the shopping cart table body
      table.appendChild(newRow);
    }
  });
}
