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

// Create an array to store the selected product IDs
var selectedProducts = [];

// Function to retrieve product data from Firebase and add it to the cart
function displayProductInCart(product) {
  // Get a reference to the shopping cart table body
  const shoppingCartItems = document.getElementById('shopping-cart-items');

  // Create a new table row for the product
  const tableRow = document.createElement('tr');
  tableRow.style.borderColor = 'black';

  // Create product image column
  const imageColumn = document.createElement('td');
  const image = document.createElement('img');
  image.src = product.img;
  image.style.width = '90px';
  image.style.height = 'auto';
  imageColumn.appendChild(image);
  tableRow.appendChild(imageColumn);

  // Create product name column
  const nameColumn = document.createElement('td');
  const productName = document.createElement('h6');
  productName.textContent = product.name;
  nameColumn.appendChild(productName);
  tableRow.appendChild(nameColumn);

  // Create product price column
  const priceColumn = document.createElement('td');
  const productPrice = document.createElement('h5');
  productPrice.textContent = '₱ ' + product.price;
  priceColumn.appendChild(productPrice);
  tableRow.appendChild(priceColumn);

  // Create remove product column
  const removeColumn = document.createElement('td');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function() {
    removeProductFromCart(product.id);
  });
  removeColumn.appendChild(removeButton);
  tableRow.appendChild(removeColumn);

  // Append the table row to the shopping cart
  shoppingCartItems.appendChild(tableRow);
}

// Function to add an item to the shopping cart
function addItemToCart(productID) {
  // Get a reference to the specific product in the Firebase Realtime Database
  const productsRef = firebase.database().ref("products/shirts/" + productID);

  // Function to retrieve product data from Firebase and add it to the cart
  productsRef.on('value', function(snapshot) {
    const product = snapshot.val();

    // Check if the product is not null and not already in the shopping cart
    if (product && !selectedProducts.includes(productID)) {
      // Add the product ID to the selectedProducts array
      selectedProducts.push(productID);

      // Display the product in the cart
      displayProductInCart(product);
    }
  });
}

// Function to remove a product from the shopping cart
function removeProductFromCart(productID) {
  // Get the index of the product in the selectedProducts array
  const index = selectedProducts.indexOf(productID);

  // Check if the product is in the selectedProducts array
  if (index !== -1) {
    // Remove the product from the selectedProducts array
    selectedProducts.splice(index, 1);

    // Get the table row of the product
    const tableRow = document.getElementById(productID);

    // Check if the table row exists
    if (tableRow) {
      // Remove the table row from the shopping cart
      tableRow.remove();
    }
  }
}
