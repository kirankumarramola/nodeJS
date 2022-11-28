var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kirankumarramola@gmail.com',
    pass: 'kdgisefjeetlxuqv'
  }
});

var mailOptions = {
  from: 'kirankumarramola@gmail.com',
  //to: 'kirankumarramola@gmail.com', for single user
  to: 'kirankumar.ramola@archents.com , kirankumarwork1@gmail.com', // for multiple users
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>' // for  html 
  //text: 'That was easy!' for text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});