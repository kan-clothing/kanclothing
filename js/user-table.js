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

        row.innerHTML = '<td class="fname" contenteditable="true" data-userid="' + userId + '">' + user.firstname + '</td>' +
          '<td class="lname" contenteditable="true" data-userid="' + userId + '">' + user.lastname + '</td>' +
          '<td class="email">' + user.email + '</td>' +
          '<td class="login-status" contenteditable="true" data-userid="' + userId + '">' + user.loginStatus + '</td>' +
          '<td class="admin-status" contenteditable="true" data-userid="' + userId + '">' + user.admin + '</td>';

        tableBody.appendChild(row);
      });

      var editableCells = document.querySelectorAll('.fname, .lname, .login-status, .admin-status');
      editableCells.forEach(function(cell) {
        cell.addEventListener('click', function(event) {
          var userId = event.target.dataset.userid;
          var inputElement = document.createElement('input');
          inputElement.type = 'text';
          inputElement.value = event.target.innerText;
          inputElement.classList.add('name-input');
          event.target.innerHTML = '';
          event.target.appendChild(inputElement);
          inputElement.focus();
          var enterButton = document.createElement('button');
          enterButton.innerText = 'Enter';
          enterButton.classList.add('enter-button');
          event.target.appendChild(enterButton);
          enterButton.addEventListener('click', function() {
            var newValue = inputElement.value;
            var fieldName = event.target.classList.contains('fname') ? 'firstname' :
              event.target.classList.contains('lname') ? 'lastname' :
              event.target.classList.contains('login-status') ? 'loginStatus' :
              'admin';

            if (fieldName === 'admin') {
              // Validate and convert the admin value to a number between 0 and 1
              var adminValue = parseFloat(newValue);
              if (!isNaN(adminValue) && adminValue >= 0 && adminValue <= 1) {
                newValue = adminValue;
              } else {
                console.log('Invalid admin value. Enter a number between 0 and 1.');
                return;
              }
            }

            usersRef.child(userId).update({ [fieldName]: newValue })
              .then(function() {
                console.log(fieldName + ' updated successfully!');
              })
              .catch(function(error) {
                console.log('Error updating ' + fieldName + ':', error);
              });
            event.target.innerHTML = newValue;
          });
          inputElement.addEventListener('blur', function() {
            var newValue = inputElement.value;
            var fieldName = event.target.classList.contains('fname') ? 'firstname' :
              event.target.classList.contains('lname') ? 'lastname' :
              event.target.classList.contains('login-status') ? 'loginStatus' :
              'admin';

            if (fieldName === 'admin') {
              // Validate and convert the admin value to a number between 0 and 1
              var adminValue = parseFloat(newValue);
              if (!isNaN(adminValue) && adminValue >= 0 && adminValue <= 1) {
                newValue = adminValue;
              } else {
                console.log('Invalid admin value. Enter a number between 0 and 1.');
                return;
              }
            }

            usersRef.child(userId).update({ [fieldName]: newValue })
              .then(function() {
                console.log(fieldName + ' updated successfully!');
              })
              .catch(function(error) {
                console.log('Error updating ' + fieldName + ':', error);
              });
            event.target.innerHTML = newValue;
          });
        });
      });

      // Rest of the code...

    }
  });
}

getUsersFromDatabase();
