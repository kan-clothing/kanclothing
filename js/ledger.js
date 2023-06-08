
  
  // Function to retrieve data from Firebase and populate the table
  function populateTable() {
    var tableBody = document.querySelector(".table-body");
  
    // Clear existing table entries
    tableBody.innerHTML = "";
  
    // Retrieve data from the "checkout" node in Firebase
    database.ref("checkout").once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var checkout = childSnapshot.val();
  
        // Create a new table row for each entry
        var row = document.createElement("tr");
  
        // Populate the table cells with data from Firebase
        var nameCell = document.createElement("td");
        nameCell.textContent = checkout.name;
        row.appendChild(nameCell);
  
        var emailCell = document.createElement("td");
        emailCell.textContent = checkout.email;
        row.appendChild(emailCell);
  
        var phoneCell = document.createElement("td");
        phoneCell.textContent = checkout.phone;
        row.appendChild(phoneCell);
  
        var dateCell = document.createElement("td");
        dateCell.textContent = checkout.dateSent;
        row.appendChild(dateCell);
  
        var productsCell = document.createElement("td");
        productsCell.textContent = checkout.orders;
        row.appendChild(productsCell);
  
        var priceCell = document.createElement("td");
        priceCell.textContent = checkout.priceAccumulate;
        row.appendChild(priceCell);
  
        var deleteCell = document.createElement("td");
        deleteCell.textContent = "X";
        row.appendChild(deleteCell);
  
        tableBody.appendChild(row);
      });
    });
  }
  
  // Call the populateTable function to populate the table initially
  populateTable();
  