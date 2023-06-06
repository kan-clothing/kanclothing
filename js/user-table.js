// user-table.js

// Function to fetch users from Firebase Realtime Database
function getUsersFromDatabase() {
    var usersRef = database.ref('users');
  
    usersRef.once('value', function(snapshot) {
      var users = snapshot.val();
  
      if (users) {
        var tableBody = document.querySelector('.table-body');
  
        // Clear existing table rows
        tableBody.innerHTML = '';
  
        // Loop through each user
        Object.keys(users).forEach(function(userId) {
          var user = users[userId];
  
          // Check if admin status is available, otherwise set it to 0
          if (user.admin === undefined) {
            user.admin = 0;
          }
  
          // Create a new table row
          var row = document.createElement('tr');
  
          // Populate the row with user data
          row.innerHTML = '<td class="fname">' + user.firstname + '</td>' +
                          '<td class="lname">' + user.lastname + '</td>' +
                          '<td class="email">' + user.email + '</td>' +
                          '<td class="login-status">' + user.loginStatus + '</td>' +
                          '<td class="admin-status" contenteditable="true" data-userid="' + userId + '">' + user.admin + '</td>';
  
          // Append the row to the table body
          tableBody.appendChild(row);
        });
  
        // Add event listener for admin status update
        var adminStatusCells = document.querySelectorAll('.admin-status');
        adminStatusCells.forEach(function(cell) {
          cell.addEventListener('input', function(event) {
            var userId = event.target.dataset.userid;
            var newAdminStatus = parseInt(event.target.innerText); // Parse as integer
  
            // Update the admin status in the Realtime Database
            usersRef.child(userId).update({ admin: newAdminStatus })
              .then(function() {
                console.log('Admin status updated successfully!');
              })
              .catch(function(error) {
                console.log('Error updating admin status:', error);
              });
          });
        });
      }
    });
  }
  
  // Call the function to fetch users and populate the table
  getUsersFromDatabase();
  