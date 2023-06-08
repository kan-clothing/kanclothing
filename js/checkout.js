const checkoutRef = firebase.database().ref('checkout');

// Function to load the ledger data from Firebase
function loadLedgerData() {
  // Get a reference to the table body element
  const tableBody = document.querySelector('.table-body');

  // Clear existing table rows
  tableBody.innerHTML = '';

  // Fetch the data from the Firebase checkout node
  checkoutRef.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      // Get the data for each checkout entry
      const checkoutData = childSnapshot.val();

      // Create a new table row element
      const newRow = document.createElement('tr');

      // Set the HTML content for the table row using the checkout data
      newRow.innerHTML = `
        <td class="name">${checkoutData.name}</td>
        <td class="email">${checkoutData.email}</td>
        <td class="phone-num">${checkoutData.phone}</td>
        <td class="date-sent">${checkoutData.datesent}</td>
        <td class="products-bought">${checkoutData.orders}</td>
        <td class="price-accum">${checkoutData.priceaccumulated}</td>
        <td class="delete-order">X</td>
      `;

      // Append the new table row to the table body
      tableBody.appendChild(newRow);
    });
  });
}

// Function to initialize the ledger
function initializeLedger() {
  // Load the initial data from Firebase
  loadLedgerData();

  // Listen for changes in the Firebase checkout node and update the ledger accordingly
  checkoutRef.on('child_added', loadLedgerData);
  checkoutRef.on('child_changed', loadLedgerData);
  checkoutRef.on('child_removed', loadLedgerData);
}

// Call the initializeLedger function when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeLedger);