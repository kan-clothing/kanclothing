var btn = document.getElementById('btnsend');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email; we'll reply as soon as possible (our email may be marked as spam, please check spam). Have a nice day!");

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var mail = 'name: ' + name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> message: ' + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "antoniomabanag3000@gmail.com",
        Password: "48FB03EEA37BF530C1A05A623888A6A54CC7",
        To: "antoniomabanag3000@gmail.com",
        From: "kanclothingph1@gmail.com",
        Subject: subject,
        Body: mail,
    }).then(
        function(emailMessage) {
            console.log('Email sent successfully');
            var dateSent = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }) + ' at ' + new Date().toLocaleDateString('en-US');
            var newNodeRef = database.ref('mail').push();
            newNodeRef.set({
                name: name,
                email: email,
                subject: subject,
                message: message,
                "date-sent": dateSent
            }).then(function () {
                document.getElementById('name').value = '';
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
