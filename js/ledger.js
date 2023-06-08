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
        dateCell.textContent = checkout["datesent"]; // Use bracket notation to access datesent property
        row.appendChild(dateCell);
  
        var productsCell = document.createElement("td");
        productsCell.textContent = checkout.orders;
        row.appendChild(productsCell);
  
        var priceCell = document.createElement("td");
        priceCell.textContent = 0; // Use the correct property name from the Firebase database
        row.appendChild(priceCell);
  
        var deleteCell = document.createElement("td");
        deleteCell.textContent = "X";
        deleteCell.addEventListener("click", function () {
          if (confirm("WARNING: Delete Transaction?")) {
            // Delete entry from Firebase
            childSnapshot.ref.remove()
              .then(function () {
                // Remove row from the table
                row.remove();
              })
              .catch(handleFirebaseError);
          }
        });
        row.appendChild(deleteCell);
  
        tableBody.appendChild(row);
      });
    });
  }
  
  // Function to handle errors when retrieving data from Firebase
  function handleFirebaseError(error) {
    console.error("Firebase error:", error);
  }
  
  // Retrieve data from Firebase and populate the table
  database
    .ref("checkout")
    .once("value")
    .then(function (snapshot) {
      populateTable();
    })
    .catch(handleFirebaseError);
  
  // Call the populateTable function to populate the table initially
  populateTable();
  