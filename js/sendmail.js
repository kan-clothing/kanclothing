var btn = document.getElementById('btnsend');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email; we'll reply as soon as possible (our email may be marked as spam, please check spam). Have a nice day!");

    var mail = 'name: ' + name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> message: ' + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kanclothingph1@gmail.com",
        Password: "5A9752781AFC5E4478BF8F10BB7AACF32FDC",
        To: "kanclothingph1@gmail.com",
        From: "kanclothingph1@gmail.com",
        Subject: subject,
        Body: mail,
    }).then(
        function(emailMessage) {
            console.log('Email sent successfully');
            var dateSent = new Date().toLocaleDateString('en-US') + ' at ' + new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
            var newNodeRef = database.ref('mail').push();
            newNodeRef.set({
                name: name,
                email: email,
                subject: subject,
                message: message,
                "date-sent": dateSent
            }).then(function () {
                document.getElementById('name').value = name;
                document.getElementById('subject').value = '';
                document.getElementById('message').value = '';
                alert('Message sent successfully!');
            }).catch(function (error) {
                console.log('Error sending message:', error);
                alert('An error occurred while sending the message. Please try again.');
            });
        }
    ).catch(
        function(error) {
            console.log('Error sending email:', error);
            alert('Error: ' + error);
        }
    );
});
