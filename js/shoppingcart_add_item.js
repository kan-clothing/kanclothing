// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
// Get a reference to the products node in the Firebase Realtime Database
const productsRef = firebase.database().ref("products");

// Function to retrieve product data from Firebase and add it to the cart
function loadProducts() {
  const databaseRef = productsRef.child('shirts'); // Update the reference to the correct node in your database

  databaseRef.on('value', function(snapshot) {
    const products = snapshot.val();
    const table = document.getElementById('shopping-cart-items');

    table.innerHTML = '';

    for (const productId in products) {
      const product = products[productId];

      // Create a new table row for each product
      const tableRow = document.createElement('tr');
      tableRow.style.borderColor = 'black';

      // Create image cell
      const imageCell = document.createElement('td');
      const image = document.createElement('img');
      image.src = product.img;
      image.style.width = '90px';
      image.style.height = 'auto';
      imageCell.appendChild(image);
      tableRow.appendChild(imageCell);

      // Create name cell
      const nameCell = document.createElement('td');
      const productName = document.createElement('h6');
      productName.textContent = product.name;
      nameCell.appendChild(productName);
      tableRow.appendChild(nameCell);

      // Create price cell
      const priceCell = document.createElement('td');
      const productPrice = document.createElement('h5');
      productPrice.textContent = product.price;
      priceCell.appendChild(productPrice);
      tableRow.appendChild(priceCell);

      // Append the table row to the existing table
      table.appendChild(tableRow);
    }
  });
}

// Call the loadProducts function to populate the shopping cart with data from Firebase
loadProducts();

// Function to add an item to the shopping cart
function addItemToCart(selected_itemName, selected_itemPrice, selected_itemImage) {
  const table = document.getElementById('shopping-cart-items');

  // Create a new row
  const newRow = document.createElement('tr');
  newRow.style.borderColor = 'black';

  // Create image cell
  const imageCell = document.createElement('td');
  const image = document.createElement('img');
  image.src = selected_itemImage;
  image.style.width = '90px';
  image.style.height = 'auto';
  imageCell.appendChild(image);
  newRow.appendChild(imageCell);

  // Create name cell
  const nameCell = document.createElement('td');
  const productName = document.createElement('h6');
  productName.textContent = selected_itemName;
  nameCell.appendChild(productName);
  newRow.appendChild(nameCell);

  // Create price cell
  const priceCell = document.createElement('td');
  const productPrice = document.createElement('h5');
  productPrice.textContent = selected_itemPrice;
  priceCell.appendChild(productPrice);
  newRow.appendChild(priceCell);

  // Append the new row to the existing table
  table.appendChild(newRow);
}