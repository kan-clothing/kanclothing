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
  
        var adminStatusCells = document.querySelectorAll('.admin-status');
        adminStatusCells.forEach(function(cell) {
          cell.addEventListener('click', function(event) {
            var userId = event.target.dataset.userid;
  
            var inputElement = document.createElement('input');
            inputElement.type = 'number';
            inputElement.min = '0';
            inputElement.max = '1';
            inputElement.value = event.target.innerText;
            inputElement.classList.add('admin-input');
  
            event.target.innerHTML = '';
            event.target.appendChild(inputElement);
  
            inputElement.focus();
  
            var enterButton = document.createElement('button');
            enterButton.innerText = 'Enter';
            enterButton.classList.add('enter-button');
            event.target.appendChild(enterButton);
  
            enterButton.addEventListener('click', function() {
              var newAdminStatus = parseInt(inputElement.value);
  
              usersRef.child(userId).update({ admin: newAdminStatus })
                .then(function() {
                  console.log('Admin status updated successfully!');
                })
                .catch(function(error) {
                  console.log('Error updating admin status:', error);
                });
  
              event.target.innerHTML = newAdminStatus;
            });
  
            inputElement.addEventListener('blur', function() {
              var newAdminStatus = parseInt(inputElement.value);
  
              usersRef.child(userId).update({ admin: newAdminStatus })
                .then(function() {
                  console.log('Admin status updated successfully!');
                })
                .catch(function(error) {
                  console.log('Error updating admin status:', error);
                });
  
              event.target.innerHTML = newAdminStatus;
            });
          });
        });
      }
    });
  }
  
  getUsersFromDatabase();
  