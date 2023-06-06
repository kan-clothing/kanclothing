
function getAllUsers() {
    var usersRef = database.ref('users');
    usersRef.on('value', function (snapshot) {
      var users = snapshot.val();
      populateUserTable(users);
    });
  }
 
  function populateUserTable(users) {
    var tableBody = document.querySelector('.table-body');
    tableBody.innerHTML = '';
  
    for (var userId in users) {
      var user = users[userId];
      var firstName = user.firstname;
      var lastName = user.lastname;
      var email = user.email;
      var loginStatus = user.loginStatus;
  
      var row = document.createElement('tr');
      var firstNameCell = document.createElement('td');
      var lastNameCell = document.createElement('td');
      var emailCell = document.createElement('td');
      var loginStatusCell = document.createElement('td');
  
      firstNameCell.textContent = firstName;
      lastNameCell.textContent = lastName;
      emailCell.textContent = email;
      loginStatusCell.textContent = loginStatus;
  
      row.appendChild(firstNameCell);
      row.appendChild(lastNameCell);
      row.appendChild(emailCell);
      row.appendChild(loginStatusCell);
  
      tableBody.appendChild(row);
    }
  }
  

  window.addEventListener('load', function () {
    getAllUsers();
  });
  