var btn = document.getElementById('checkout');
btn.addEventListener('click', function(e) {
    e.preventDefault();

    // Alert message
    alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email, we'll reply as soon as possible (our email may be marked as spam, please check spam). Have a nice day!");

    // Retrieve form input values
    var sname = document.getElementById('fname').value;
    var fname = document.getElementById('sname').value;
    var email = document.getElementById('email').value;
    var message1 = document.getElementById('message').value;
    var city = document.getElementById('tcity').value;
    var postal = document.getElementById('postcode').value;
    var phone = document.getElementById('phone').value;
    var address1 = document.getElementById('address1').value;
    var address2 = document.getElementById('address2').value;

    // Validate required fields
    if (sname === '' || fname === '' || email === '' || city === '' || postal === '' || phone === '' || address1 === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone number format
    var phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (11 digits starting with 09).');
        return;
    }

    // Construct email body
    var mail = 'SUBJECT: CHECKOUT <br>' +
               'ORDERS: NOTHING YET <br>' +
               'ACCUMULATED PRICE: NOTHING YET <br>' +
               'NAME: ' + sname + ' ' + fname + '<br>' +
               'EMAIL: ' + email + '<br>' +
               'PHONE: ' + phone + '<br>' +
               'ADDRESS: ' + address1 + ' ' + address2 + '<br>' +
               'POSTCODE: ' + postal + '<br>' +
               'NOTES: ' + message1;

    // Send email
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kanclothingph1@gmail.com",
        Password: "5A9752781AFC5E4478BF8F10BB7AACF32FDC",
        To: "kanclothingph1@gmail.com",
        From: "kanclothingph1@gmail.com",
        Subject: 'CHECKOUT',
        Body: mail,
    }).then(
        message => alert("Email sent successfully")
    ).catch(
        error => alert("Error: " + error)
    );
});
