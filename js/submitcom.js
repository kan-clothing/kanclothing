function submitComment() {
  // Get the comment input from the textarea
  var comment = document.getElementById('comment-input').value;

  // Get the logged-in user's first name and last name (replace with your own implementation)
  var firstName = updateUsername;
  var lastName = 'Doe';

  // Create a new Firebase database reference
  var database = firebase.database();

  // Generate a unique key for the new comment
  var commentKey = database.ref().child('comment_section').push().key;

  // Create the comment object with the desired properties
  var commentObject = {
    comment: comment,
    name: firstName + ' ' + lastName,
    date: getCurrentDateTime()
  };

  // Create the Firebase update object to store the comment
  var updates = {};
  updates['comment_section/' + commentKey] = commentObject;

  // Perform the update operation
  database.ref().update(updates);

  // Clear the comment input field after submitting
  document.getElementById('comment-input').value = '';

  // Display a success message (you can customize this part as needed)
  alert('Comment submitted successfully!');
}

function getCurrentDateTime() {
  var now = new Date();
  var date = now.toDateString();
  var time = now.toTimeString().split(' ')[0];
  return date + ' ' + time;
}
function displayComments() {
  // Get the reference to the comments container element
  var commentsContainer = document.getElementById('comments-container');

  // Create a Firebase database reference to the comment section
  var commentSectionRef = firebase.database().ref('comment_section');

  // Listen for changes in the comment section
  commentSectionRef.on('child_added', function (snapshot) {
    // Get the comment object from the snapshot
    var comment = snapshot.val();

    // Create a new comment element
    var commentElement = document.createElement('div');
    commentElement.className = 'comment';

    // Create sub-elements for comment details
    var commentTextElement = document.createElement('p');
    commentTextElement.textContent = comment.comment;

    var commentNameElement = document.createElement('p');
    commentNameElement.textContent = 'Name: ' + comment.name;

    var commentDateElement = document.createElement('p');
    commentDateElement.textContent = 'Date: ' + comment.date;

    // Append the comment details to the comment element
    commentElement.appendChild(commentTextElement);
    commentElement.appendChild(commentNameElement);
    commentElement.appendChild(commentDateElement);

    // Append the comment element to the comments container
    commentsContainer.appendChild(commentElement);
  });
}

// Call the displayComments function to show the existing comments
displayComments();