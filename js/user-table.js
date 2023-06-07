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
                        '<td class="login-status">' + user.loginStatus + '</td>' +
                        '<td class="admin-status" contenteditable="true" data-userid="' + userId + '">' + user.admin + '</td>';

        tableBody.appendChild(row);
      });

      var editableCells = document.querySelectorAll('.fname, .lname');
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
            var newName = inputElement.value;
            var fieldName = event.target.classList.contains('fname') ? 'firstname' : 'lastname';
            usersRef.child(userId).update({ [fieldName]: newName })
              .then(function() {
                console.log(fieldName + ' updated successfully!');
              })
              .catch(function(error) {
                console.log('Error updating ' + fieldName + ':', error);
              });
            event.target.innerHTML = newName;
          });
          inputElement.addEventListener('blur', function() {
            var newName = inputElement.value;
            var fieldName = event.target.classList.contains('fname') ? 'firstname' : 'lastname';
            usersRef.child(userId).update({ [fieldName]: newName })
              .then(function() {
                console.log(fieldName + ' updated successfully!');
              })
              .catch(function(error) {
                console.log('Error updating ' + fieldName + ':', error);
              });
            event.target.innerHTML = newName;
          });
        });
      });

      var adminStatusCells = document.querySelectorAll('.admin-status');
      adminStatusCells.forEach(function(cell) {
        // Admin status cell code...
      });
    }
  });
}
getUsersFromDatabase();
