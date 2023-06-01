// Add a click event listener to each add-to-cart button
var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the item details from the corresponding item container
        var itemContainer = button.closest('.item');
        var itemName = itemContainer.querySelector('h3').textContent;
        var itemPrice = itemContainer.querySelector('p').textContent;
        var itemImage = ''; // Set the item image source here

        // Call the addItemToCart function with the item details
        addItemToCart(itemName, itemPrice, itemImage);
    });
});

// Function to add an item to the cart
selected_itemImage = itemName;
selected_itemPrice = itemPrice;
selected_itemImage = itemImage;

function addItemToCart(selected_itemName, selected_itemPrice, selected_itemImage) {
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

// Makes the X icon into a button to remove entry
var closeIcon = newRow.querySelector('.cart__close');
closeIcon.addEventListener('click', function() {
    removeItemFromCart(newRow);
});
}

function removeItemFromCart(row) {
// Remove the row from the table
row.parentNode.removeChild(row);

}