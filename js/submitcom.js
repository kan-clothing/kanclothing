function getCurrentDateTime() {
  var now = new Date();
  var date = now.toDateString();
  var time = now.toTimeString().split(" ")[0];
  return date + " " + time;
}

function submitComment() {
  var comment = document.getElementById('comment-input').value;
  var userName = getLoggedInUserName();

  if (userName) {
    var database = firebase.database();
    var commentKey = database.ref().child('comment_section').push().key;

    var commentObject = {
      comment: comment,
      name: userName,
      date: getCurrentDateTime()
    };

    var updates = {};
    updates['comment_section/' + commentKey] = commentObject;

    database.ref().update(updates);

    document.getElementById('comment-input').value = '';

    alert('Comment submitted successfully!');

    displayComment(commentObject);
  } else {
    alert('You need to be logged in to submit a comment.');
  }
}

function displayComment(comment) {
  var commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');

  var nameElement = document.createElement('p');
  nameElement.classList.add('comment-name');
  nameElement.textContent = comment.name;

  var dateElement = document.createElement('p');
  dateElement.classList.add('comment-date');
  dateElement.textContent = comment.date;

  var contentElement = document.createElement('p');
  contentElement.classList.add('comment-content');
  contentElement.textContent = comment.comment;

  commentDiv.appendChild(nameElement);
  commentDiv.appendChild(dateElement);
  commentDiv.appendChild(contentElement);

  var commentsSection = document.getElementById('comments-section');
  commentsSection.appendChild(commentDiv);
}

function getLoggedInUserName() {
  if (typeof loggedInUserName !== 'undefined') {
    return loggedInUserName;
  } else {
    return null; // Return null or handle the case when the variable is not defined
  }
}

function getLoggedInUserFullName() {
  var user = firebase.auth().currentUser;
  if (user) {
    var userId = user.uid;
    var userRef = firebase.database().ref('users/' + userId);
    userRef.once('value', function(snapshot) {
      var userData = snapshot.val();
      var firstName = userData.firstname || "";
      var lastName = userData.lastname || "";
      var fullName = firstName + " " + lastName;
      loggedInUserName = fullName; // Update the loggedInUserName variable
    });
  }
  return getLoggedInUserName(); // Return the updated full name
}


function displayComments() {
  var database = firebase.database();
  var commentRef = database.ref('comment_section');

  var commentRef = database.ref('comment_section');
  commentRef.on('child_added', function(snapshot) {
    var comment = snapshot.val();
    displayComment(comment);
  });
}


displayComments();


