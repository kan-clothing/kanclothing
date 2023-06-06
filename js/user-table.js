


function getUsersFromDatabase() {
    var usersRef = database.ref('users');
  
    usersRef.once('value', function(snapshot) {
      var users = snapshot.val();
  
      if (users) {
        var tableBody = document.querySelector('.table-body');
  
   
        tableBody.innerHTML = '';
  
        Object.keys(users).forEach(function(userId) {
          var user = users[userId];
  
    
          if (user.admin === undefined) {
            user.admin = 0;
          }
  
        
          var row = document.createElement('tr');
  
       
          row.innerHTML = '<td class="fname">' + user.firstname + '</td>' +
                          '<td class="lname">' + user.lastname + '</td>' +
                          '<td class="email">' + user.email + '</td>' +
                          '<td class="login-status">' + user.loginStatus + '</td>' +
                          '<td class="admin-status" contenteditable="true" data-userid="' + userId + '">' + user.admin + '</td>';
  
      
          tableBody.appendChild(row);
        });
  
e
        var adminStatusCells = document.querySelectorAll('.admin-status');
        adminStatusCells.forEach(function(cell) {
          cell.addEventListener('input', function(event) {
            var userId = event.target.dataset.userid;
            var newAdminStatus = parseInt(event.target.innerText); 
  
          
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
  
  getUsersFromDatabase();
  