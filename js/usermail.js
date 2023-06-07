// Fetch all mail from the database
function fetchAllMail() {
    var mailRef = database.ref('mail');
    mailRef.on('value', function(snapshot) {
      var mailData = snapshot.val();
      var tableBody = document.querySelector('.table-body');
  
      // Clear existing table rows
      tableBody.innerHTML = '';
  
      // Iterate over each mail and create table rows
      for (var mailId in mailData) {
        if (mailData.hasOwnProperty(mailId)) {
          var mail = mailData[mailId];
  
          // Create table row elements
          var row = document.createElement('tr');
          var nameCell = document.createElement('td');
          var subjectCell = document.createElement('td');
          var messageCell = document.createElement('td');
          var emailCell = document.createElement('td');
          var dateSentCell = document.createElement('td');
          var deleteCell = document.createElement('td');
  
          // Set the text content of each cell
          nameCell.textContent = mail.name;
          subjectCell.textContent = mail.subject;
          emailCell.textContent = mail.email;
          dateSentCell.textContent = mail['date-sent']; // Access date-sent property using brackets notation
          deleteCell.textContent = 'X';
  
          // Set width and height of message cell
         // Set width of message cell
messageCell.style.width = '20px';

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
          deleteCell.addEventListener('click', function(event) {
            var row = event.target.parentNode;
            var mailId = row.getAttribute('data-mail-id');
  
            // Delete mail from database
            deleteMail(mailId);
  
            // Remove table row from DOM
            row.remove();
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
  
          // Append row to the table body
          tableBody.appendChild(row);
        }
      }
  
    });
  }
  
  // Delete mail from the database
  function deleteMail(mailId) {
    var mailRef = database.ref('mail/' + mailId);
    mailRef.remove()
      .then(function() {
        console.log('Mail deleted successfully');
      })
      .catch(function(error) {
        console.log('Error deleting mail:', error);
      });
  }
  
  // Call fetchAllMail function to load initial mail
  fetchAllMail();