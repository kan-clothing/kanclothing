// Function to handle comment submission
function submitComment(event) {
  event.preventDefault();

  var commentInput = document.getElementById('comment-input');
  var comment = commentInput.value.trim();

  if (comment === '') {
    alert('Please enter a comment.');
    return;
  }

  var user = auth.currentUser;
  var userId = user.uid;

  var userRef = database.ref('users/' + userId);
  userRef.once('value')
    .then(function(snapshot) {
      var userData = snapshot.val();
      var fullName = userData.firstname + ' ' + userData.lastname;

      var commentData = {
        comment: comment,
        user: fullName
      };

      // Save comment to the database
      database.ref('comment_section').push(commentData)
        .then(function() {
          // Clear the comment input field
          commentInput.value = '';
        })
        .catch(function(error) {
          console.log('Error saving comment:', error);
        });
    })
    .catch(function(error) {
      console.log('Error fetching user data:', error);
    });
}

// Function to display comments
function displayComments() {
  var commentsContainer = document.getElementById('comments-container');

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

// Add event listener to comment form
var commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', submitComment);

// Call the displayComments() function to initially display the comments
displayComments();

// Fetch and display the user's own comment
var user = auth.currentUser;
if (user) {
  var userId = user.uid;
  var userCommentRef = database.ref('comment_section').orderByChild('user').equalTo(userId);

  userCommentRef.once('value')
    .then(function(snapshot) {
      var userCommentContainer = document.getElementById('user-comment-container');

      if (snapshot.exists()) {
        var userCommentData = snapshot.val();
        var userCommentKey = Object.keys(userCommentData)[0];
        var userComment = userCommentData[userCommentKey].comment;

        userCommentContainer.innerText = userComment;
      } else {
        userCommentContainer.innerText = 'No comment found.';
      }
    })
    .catch(function(error) {
      console.log('Error fetching user comment:', error);
    });
}