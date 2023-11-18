const express = require("express");
const User = require("../models/user");
const hrcreationrouter = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');

hrcreationrouter.post('/createuser', (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    birthday: req.body.birthday,
    departement: req.body.departement,
    role: req.body.role,
    wallet: req.body.wallet,
    password: req.body.password,
    rate: req.body.rate
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
          // Send email notification
          sendWelcomeEmail(user);

          res.json(user);
        })
        .catch((err) => console.log(err));
    });
  });
});

// Function to send a welcome email to the new user
function sendWelcomeEmail(user) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'charmsfive@gmail.com', // your Gmail email address
      pass: 'inoa pwcr cptc zpix' // your Gmail password or an app-specific password
    }
  });

  const mailOptions = {
    from: 'charmsfive@gmail.com', // sender address
    to: user.email,
    subject: 'Welcome to YourCompany!',
    text: `Dear ${user.firstname} ${user.lastname},\n\nWelcome to YourCompany! Your account has been successfully created.\n\nDetails:\nDepartment: ${user.departement}\nRole: ${user.role}\n\nThank you for joining us!\n\nBest regards,\nYourCompany Team`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

  module.exports = hrcreationrouter;