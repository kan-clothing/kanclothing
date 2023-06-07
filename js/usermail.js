// Fetch all mail from the database
function fetchAllMail() {
    var mailRef = database.ref('mail');
    mailRef.on('value', function (snapshot) {
      var mailData = snapshot.val();
      var tableBody = document.querySelector('.table-body');
  
      // Clear existing table rows
      tableBody.innerHTML = '';
  
      // Convert mailData object to an array for sorting
      var mailArray = Object.entries(mailData);
  
      // Sort mailArray based on the "date-sent" property in descending order initially
      mailArray.sort(function (a, b) {
        return new Date(b[1]['date-sent']) - new Date(a[1]['date-sent']);
      });
  
      // Check if the table is currently sorted in ascending order
      var isSortedAsc = false;
  
      // Iterate over each mail and create table rows
      for (var i = 0; i < mailArray.length; i++) {
        var mailId = mailArray[i][0];
        var mail = mailArray[i][1];
  
        // Create table row elements
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var subjectCell = document.createElement('td');
        var messageCell = document.createElement('td');
        var emailCell = document.createElement('td');
        var dateSentCell = document.createElement('td');
        var deleteCell = document.createElement('td');
  
        // Set the text content and width of the name cell
        nameCell.textContent = mail.name;
        nameCell.style.width = '60px';
  
        subjectCell.textContent = mail.subject;
        emailCell.textContent = mail.email;
        dateSentCell.textContent = mail['date-sent']; // Access date-sent property using brackets notation
        deleteCell.textContent = 'X';
  
        // Set width and height of message cell
        // Set width of message cell
        messageCell.style.width = '40px';
  
        // Create message content element
        var messageContent = document.createElement('div');
        messageContent.textContent = mail.message;
  
        // Check if message length exceeds 88 characters
        if (mail.message.length > 88) {
          messageCell.style.height = '20px';
          messageContent.style.maxHeight = '100px'; // Set maximum height for content
          messageContent.style.overflowY = 'scroll'; // Add scrolling for content
          messageContent.style.wordBreak = 'break-all'; // Break long words to prevent horizontal overflow
        } else {
          messageCell.style.height = 'auto'; // Allow the message cell to expand vertically as needed
        }
  
        messageCell.appendChild(messageContent);
  
        // Add click event listener to delete cell
        deleteCell.addEventListener('click', function (event) {
          var row = event.target.parentNode;
          var mailId = row.getAttribute('data-mail-id');
  
          // Show confirmation dialog
          var confirmDelete = confirm('Are you sure you want to delete this mail?');
  
          // If user confirms deletion, proceed with deleting the mail
          if (confirmDelete) {
            // Delete mail from database
            deleteMail(mailId);
  
            // Remove table row from DOM
            row.remove();
          }
        });
  
        // Set data attribute for mail ID
        row.setAttribute('data-mail-id', mailId);
  
        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(subjectCell);
        row.appendChild(messageCell);
        row.appendChild(emailCell);
        row.appendChild(dateSentCell);
        row.appendChild(deleteCell);
  
        tableBody.appendChild(row);
      }
  
      // Initialize DataTables plugin
      var table = $('.table').DataTable();
  
      // Add click event listener to "Date Sent" header for sorting
      $('.namecell').click(function () {
        // Toggle sorting order based on the current sort order
        if (isSortedAsc) {
          table.order([4, 'desc']).draw(); // Sort by the 5th column (index 4) in descending order
          isSortedAsc = false;
        } else {
          table.order([4, 'asc']).draw(); // Sort by the 5th column (index 4) in ascending order
          isSortedAsc = true;
        }
      });
    });
  }
  
  // Rest of the code...
  
  fetchAllMail();
  