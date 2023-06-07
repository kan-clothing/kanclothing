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
  
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('comment-delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteComment(comment);
    });
  
    commentDiv.appendChild(nameElement);
    commentDiv.appendChild(dateElement);
    commentDiv.appendChild(contentElement);
    commentDiv.appendChild(deleteButton);
  
    var commentsSection = document.getElementById('comments-section');
    commentsSection.appendChild(commentDiv);
  }
  
  function getLoggedInUserName() {
    if (typeof loggedInUserName !== 'undefined') {
      return loggedInUserName;
    } else {
      return null;
    }
  }
  
  function saveUserComment(comment) {
    var userComments = JSON.parse(localStorage.getItem('userComments')) || [];
    userComments.push(comment);
    localStorage.setItem('userComments', JSON.stringify(userComments));
  }
  
  function loadUserComments() {
    var userComments = JSON.parse(localStorage.getItem('userComments')) || [];
    userComments.forEach(function(comment) {
      displayComment(comment);
    });
  }
  
  function deleteComment(comment) {
    var database = firebase.database();
    var commentRef = database.ref('comment_section');
    commentRef.orderByChild('comment').equalTo(comment.comment).once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        childSnapshot.ref.remove()
          .then(function() {
            // Comment successfully deleted
            console.log('Comment deleted successfully');
            removeCommentFromLocalStorage(comment); // Remove the comment from local storage
            removeCommentFromUI(comment); // Remove the comment from the UI
          })
          .catch(function(error) {
            // Error deleting comment
            console.error('Error deleting comment:', error);
          });
      });
    });
  }
  
  function removeCommentFromLocalStorage(comment) {
    var userComments = JSON.parse(localStorage.getItem('userComments')) || [];
    var updatedComments = userComments.filter(function(c) {
      return c.comment !== comment.comment;
    });
    localStorage.setItem('userComments', JSON.stringify(updatedComments));
  }
  
  function removeCommentFromUI(comment) {
    var comments = document.getElementsByClassName('comment');
    for (var i = 0; i < comments.length; i++) {
      var content = comments[i].getElementsByClassName('comment-content')[0];
      if (content && content.textContent === comment.comment) {
        comments[i].remove();
        break;
      }
    }
  }
  
  function displayComments() {
    var database = firebase.database();
    var commentRef = database.ref('comment_section');
  
    commentRef.on('child_added', function(snapshot) {
      var comment = snapshot.val();
      displayComment(comment);
    });
  }
  
  loadUserComments();
  displayComments();