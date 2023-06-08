var btn = document.getElementById('checkout');
btn.addEventListener('click', function(e) {
    e.preventDefault();

    alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email, we'll reply as soon as possible (our email may be marked as spam, please check spam). Have a nice day!");

    var sname = document.getElementById('fname').value;
    var fname = document.getElementById('sname').value;
    var email = document.getElementById('email').value;
    var message1 = document.getElementById('message').value;
    var city = document.getElementById('tcity').value;
    var postal = document.getElementById('postcode').value;
    var phone = document.getElementById('phone').value;
    var address1 = document.getElementById('address1').value;
    var address2 = document.getElementById('address2').value;

    if (sname === '' || fname === '' || email === '' || city === '' || postal === '' || phone === '' || address1 === '') {
        alert('Please fill in all required fields.');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    var phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (11 digits starting with 09).');
        return;
    }

    var mail = {
      name: fname + ' ' + sname,
      email: email,
      orders: 'Nothing yet',
      notes: message1,
      city: city,
      postcode: postal,
      phone: phone,
      address: address1 + ' ' + address2
    };

    // Update Firebase database
    var databaseRef = firebase.database().ref('checkout');
    databaseRef.push(mail)
      .then(function() {
        // Email sending code here
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "kanclothingph1@gmail.com",
          Password: "5A9752781AFC5E4478BF8F10BB7AACF32FDC",
          To: "kanclothingph1@gmail.com",
          From: "kanclothingph1@gmail.com",
          Subject: 'CHECKOUT',
          Body: 'SUBJECT: CHECKOUT\n\nORDERS: NOTHING YET\n\nACCUMULATED PRICE: NOTHING YET\n\nNAME: ' + sname + ' ' + fname + '\n\nEMAIL: ' + email + '\n\nPHONE: ' + phone + '\n\nADDRESS: ' + address1 + ' ' + address2 + '\n\nPOSTCODE: ' + postal + '\n\nNOTES: ' + message1
        })
        .then(function() {
          alert("Email sent successfully");
        })
        .catch(function(error) {
          alert("Error: " + error);
        });
      })
      .catch(function(error) {
        console.log('Error updating database:', error);
      });
});
