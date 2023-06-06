// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
var productsRef = firebase.database().ref("products");

// Function to retrieve product data from Firebase and add it to the cart
function loadProducts() {
  var databaseRef = productsRef.child('shirts'); // Update the reference to the correct node in your database

  databaseRef.on('value', function(snapshot) {
    var products = snapshot.val();
    var productList = document.getElementById('product-list');

    productList.innerHTML = '';

    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var product = childSnapshot.val();
      var listItem = document.createElement('li');
      var imgElement = document.createElement('img');
      imgElement.src = product.img; // Assuming the "img" property contains the image link
      listItem.appendChild(imgElement);
      listItem.innerHTML += '<strong>' + product.name + '</strong> - $' + product.price;
      productList.appendChild(listItem);
    });
  });
}

// Call the loadProducts function to populate the shopping cart with data from Firebase
loadProducts();

// Function to add an item to the shopping cart
function addItemToCart(selected_itemName, selected_itemPrice, selected_itemImage) {
  var table = document.getElementById('shoppingcart_add_item');

  // Create a new row
  var newRow = document.createElement('tr');
  newRow.style.borderColor = 'black';

  // Create the HTML for the item details
  var itemHTML = `
    <td class="product__cart__item">
      <div class="product__cart__item__pic">
        <img src="${selected_itemImage}" style="width: 90px; height: auto;" alt="">
      </div>
      <div class="product__cart__item__text">
        <h6>${selected_itemName}</h6>
        <h5>₱${selected_itemPrice}</h5>
      </div>
    </td>
    <td class="quantity__item">
      <div class="quantity">
        <div class="pro-qty-2">
          <input type="text" value="1">
        </div>
      </div>
    </td>
    <td class="cart__price">₱${selected_itemPrice}</td>
    <td class="cart__close"><i class="fa fa-close"></i></td>
  `;

  // Set the HTML for the new row
  newRow.innerHTML = itemHTML;

  // Append the new row to the table
  table.appendChild(newRow);

  // Make the X icon into a button to remove the entry
  var closeIcon = newRow.querySelector('.cart__close');
  closeIcon.addEventListener('click', function() {
    removeItemFromCart(newRow);
  });
}