var checkoutRef = firebase.database().ref("checkout");

// Function to retrieve and display the transactions
function displayTransactions() {
  // Get the transaction counter element
  var transactionCounter = document.querySelector(".transcation-counter");
  
  // Get the transaction block element
  var transactionBlock = document.querySelector(".transaction-block");
  
  // Clear the previous transactions
  transactionBlock.innerHTML = "";
  
  // Retrieve the transactions from Firebase
  checkoutRef.once("value", function(snapshot) {
    var transactions = snapshot.val();
    var transactionCount = 0;

    // Loop through each transaction
    for (var key in transactions) {
      if (transactions.hasOwnProperty(key)) {
        var transaction = transactions[key];

        // Create a new transaction block element
        var newTransactionBlock = document.createElement("div");
        newTransactionBlock.classList.add("transaction-block");

        // Create the transaction link element
        var transactionLink = document.createElement("a");
        transactionLink.classList.add("dropdown-item", "d-flex", "align-items-center");
        transactionLink.href = "#";

        // Create the transaction content element
        var transactionContent = document.createElement("div");
        transactionContent.classList.add("font-weight-bold");

        // Create the transaction message element
        var transactionMessage = document.createElement("div");
        transactionMessage.classList.add("text-truncate");
        transactionMessage.innerHTML = "ORDER AT DATE: " + transaction.datesent;

        // Create the transaction sender element
        var transactionSender = document.createElement("div");
        transactionSender.classList.add("small", "text-gray-500");
        transactionSender.innerHTML = transaction.name ;

        // Append the message and sender elements to the content element
        transactionContent.appendChild(transactionMessage);
        transactionContent.appendChild(transactionSender);

        // Append the content element to the link element
        transactionLink.appendChild(transactionContent);

        // Append the link element to the new transaction block element
        newTransactionBlock.appendChild(transactionLink);

        // Append the new transaction block to the transaction block element
        transactionBlock.appendChild(newTransactionBlock);

        transactionCount++;
      }
    }

    // Update the transaction counter
    transactionCounter.innerHTML = transactionCount;
  });
}

// Call the displayTransactions function to initially load the transactions
displayTransactions();