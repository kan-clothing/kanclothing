var btn = document.getElementById('btnsend');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email; we'll reply as soon as possible (our email may be marked as spam, please check spam). Have a nice day!");

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message1 = document.getElementById('message').value;

    var mail = 'name: ' + name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> message: ' + message1;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kanclothingph1@gmail.com",
        Password: "5A9752781AFC5E4478BF8F10BB7AACF32FDC",
        To: "kanclothingph1@gmail.com",
        From: "kanclothingph1@gmail.com",
        Subject: subject,
        Body: mail,
    }).then(
        message => alert("Email sent successfully")
    ).catch(
        error => alert("Error: " + error)
    );
});
