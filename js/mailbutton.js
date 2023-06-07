function fetchMessages() {
    var mailRef = database.ref('mail').orderByChild('date-sent').limitToLast(9);
  
    mailRef.on('value', function(snapshot) {
      var messages = snapshot.val();
      var messageBlockContainer = document.querySelector('.message-block');
  
      // Clear existing message blocks
      messageBlockContainer.innerHTML = '';
  
      // Update the message count
      var messageCount = Object.keys(messages).length;
      var notifCounter = document.querySelector('.notif-counter');
      notifCounter.textContent = messageCount;
  
      // Convert messages to an array
      var messageArray = Object.values(messages);
  
      // Sort messages by date in ascending order
      messageArray.sort(function(a, b) {
        var dateA = new Date(a['date-sent']);
        var dateB = new Date(b['date-sent']);
        return dateA - dateB;
      });
  
      // Check if the message count exceeds 5 and add overflow scroll
      if (messageCount > 5) {
        messageBlockContainer.style.overflowY = 'scroll';
        messageBlockContainer.style.maxHeight = '200px'; // Set the desired maximum height
      } else {
        messageBlockContainer.style.overflowY = 'auto'; // Reset overflow property to default
        messageBlockContainer.style.maxHeight = 'none'; // Reset maximum height
      }
  
      // Iterate over the sorted messages in reverse order
      for (var i = messageArray.length - 1; i >= 0; i--) {
        var message = messageArray[i];
        var messageBlock = createMessageBlock(message);
        messageBlockContainer.appendChild(messageBlock);
      }
    });
  }
  
  // Function to create a message block element
  function createMessageBlock(message) {
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message-block';
  
    var messageLink = document.createElement('a');
    messageLink.className = 'dropdown-item d-flex align-items-center';
    messageLink.href = '#';
  
    var messageContentDiv = document.createElement('div');
    messageContentDiv.className = 'font-weight-bold';
  
    var messageTextDiv = document.createElement('div');
    messageTextDiv.className = 'text-truncate';
    messageTextDiv.textContent = message.message;
  
    var messageSenderDiv = document.createElement('div');
    messageSenderDiv.className = 'small text-gray-500';
    messageSenderDiv.innerHTML = '<span class="mail-sender">' + message.name + '</span> · <span class="date-sent">' + message['date-sent'] + '</span>';
  
    messageContentDiv.appendChild(messageTextDiv);
    messageContentDiv.appendChild(messageSenderDiv);
  
    messageLink.appendChild(messageContentDiv);
  
    messageDiv.appendChild(messageLink);
  
    return messageDiv;
  }
  
  // Fetch messages on page load
  fetchMessages();
  