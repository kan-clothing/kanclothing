// Function to submit a comment
function submitComment() {
    var commentInput = document.getElementById('comment-input').value.trim();
    var user = auth.currentUser;
  
    if (!validateField(commentInput)) {
      alert('Please enter a comment.');
      return;
    }
  
    if (user) {
      var userId = user.uid;
      var userRef = database.ref('users/' + userId);
  
      userRef.once('value', function(snapshot) {
        var userData = snapshot.val();
        var firstName = userData.firstname;
        var lastName = userData.lastname;
  
        var commentData = {
          user: firstName + ' ' + lastName,
          comment: commentInput
        };
  
        database.ref('comment_section').push(commentData)
          .then(function() {
            // Clear the comment input field
            document.getElementById('comment-input').value = '';
  
            // Update the comments
            displayComments();
          })
          .catch(function(error) {
            console.log('Error submitting comment:', error);
          });
      });
    } else {
      alert('Please log in to leave a comment.');
    }
  }
  
  // Function to display comments
  function displayComments() {
    var commentsContainer = document.getElementById('comments');
  
    database.ref('comment_section').on('value', function(snapshot) {
      commentsContainer.innerHTML = '';
  
      snapshot.forEach(function(childSnapshot) {
        var commentData = childSnapshot.val();
        var comment = commentData.comment;
        var user = commentData.user;
  
        var commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = '<p><strong>' + user + ':</strong> ' + comment + '</p>';
  
        commentsContainer.appendChild(commentElement);
      });
    });
  }
  
  // Function to validate a field
  function validateField(field) {
    return field != null && field.length > 0;
  }
  
  // Call the displayComments() function to initially load the comments
  displayComments();