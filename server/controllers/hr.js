const express = require("express");
const hrrouter = express.Router();
const bcrypt = require("bcrypt");
const meeting = require("../models/meeting");
const expressAsynchandler = require('express-async-handler');
const user = require("../models/user");
const announcement = require("../models/announcement");
const nodemailer = require('nodemailer');

hrrouter.post('/organizemeeting', async (req, res) => {
  const newMeeting = new meeting({
    subject: req.body.subject,
    memebres: req.body.memebres,
    responsible: req.body.responsible,
    time: req.body.time
  });

  try {
    const savedMeeting = await newMeeting.save();

    // Extract the email addresses from the membres array
    const recipientEmails = newMeeting.memebres.map((membre) => membre.email);

    // Notify members via email
    notifyMembersByEmail(savedMeeting, recipientEmails);

    res.json(savedMeeting);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to send email notification to meeting members
function notifyMembersByEmail(meeting, recipientEmails) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'charmsfive@gmail.com', // your Gmail email address
      pass: 'inoa pwcr cptc zpix' // your Gmail password or an app-specific password
    }
  });

  const mailOptions = {
    from: 'charmsfive@gmail.com', // sender address
    to: recipientEmails.join(','), // recipients
    subject: `New Meeting: ${meeting.subject}`,
    text: `You have a new meeting scheduled!\n\nSubject: ${meeting.subject}\nResponsible: ${meeting.responsible}\nTime: ${meeting.time}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


  
  hrrouter.post('/announcement', (req, res) => {
    const newAnnouncement = new announcement({
        title: req.body.title,
        content : req.body.content,
        file : req.body.file
      });
    
      newAnnouncement
        .save()
        .then((announcement) => res.json(announcement))
        .catch((err) => console.log(err));
  });

  const fetchdevelopers = expressAsynchandler(
    async(req, res) => {
        try{
            const developers = await user.find({role: 'developer'});
            res.json(developers)
        } catch(error){
            res.json(error)
        }
    }
);
const fetchfacture = expressAsynchandler(
  async(req, res) => {
      try{
          const Facture = await  facture.find({
              nom: req.body.firstname,
              prenom: req.body.lastname,
            });
          res.json(Facture)
      } catch(error){
          res.json(error)
      }
  }
);
hrrouter.post('/facture',fetchfacture)

const fetchmeetings = expressAsynchandler(
  async(req, res) => {
      try{
          const meetings = await  meeting.find();
          res.json(meetings)
      } catch(error){
          res.json(error)
      }
  }
);

hrrouter.get('/developers',fetchdevelopers)
hrrouter.get('/meetings',fetchmeetings)
module.exports = hrrouter;