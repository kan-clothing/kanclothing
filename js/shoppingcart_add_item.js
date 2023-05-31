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

    // Append the new row to the tables
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


