
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
                          '<td class="admin-status">' + user.admin + '</td>';

          tableBody.appendChild(row);
        });
      }
    });
  }
  
  getUsersFromDatabase();
  