// Initialize Firebase
// Replace the following configuration with your own Firebase project credentials
var firebaseConfig = {
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
  
  // Get a reference to the products node in the Firebase Realtime Database
  var productsRef = firebase.database().ref("products");
  
  // Function to retrieve product data from Firebase and add it to the cart
  function loadProducts() {
    productsRef.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var product = childSnapshot.val();
        var itemName = product.name;
        var itemPrice = product.price;
        var itemImage = product.img;
        addItemToCart(itemName, itemPrice, itemImage);
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
  
  // Function to remove an item from the shopping cart
  function removeItemFromCart(row) {
    // Remove the row from the table
    row.parentNode.removeChild(row);
  }
  