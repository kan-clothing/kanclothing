var accessToken; 

function fetchAccessToken() {
  axios.get('/fetchAccessToken')
    .then(function(response) {
      accessToken = response.data.access_token;
    })
    .catch(function(error) {
      console.error('Error fetching access token:', error);
    });
}

fetchAccessToken();

$('#btnsend').click(function(e) {
  e.preventDefault();

  var name = $('#name').val();
  var email = $('#email').val();
  var subject = $('#subject').val();
  var message = $('#message').val();

  var emailContent =
    "From: " + email + "\r\n" +
    "To: kanclothingph1@gmail.com\r\n" +
    "Subject: " + subject + "\r\n" +
    "Content-Type: text/plain; charset=utf-8\r\n" +
    "\r\n" +
    "Name: " + name + "\r\n" +
    "Message: " + message;

  var emailData = {
    'raw': btoa("Content-Type: text/plain; charset=utf-8\r\n" + emailContent)
  };

  $.ajax({
    type: 'POST',
    url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: emailData,
    success: function(response) {
      console.log('Email sent successfully.');
    },
    error: function(error) {
      console.error('Error sending email:', error);
    }
  });
});
