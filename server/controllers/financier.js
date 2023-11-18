const express = require("express");
const financerouter = express.Router();
const bcrypt = require("bcrypt");
const meeting = require("../models/meeting");
const expressAsynchandler = require('express-async-handler');
const user = require("../models/user");
const announcement = require("../models/announcement");
const nodemailer = require('nodemailer');
const facture = require("../models/facture");
const cost = require("../models/cost");


financerouter.post('/addfacture', async (req, res) => {
    const newFacture = new facture({
      nom: req.body.nom,
      prenom: req.body.prenom,
      wallet: req.body.wallet,
      hours: req.body.hours,
      salaire: req.body.salaire,
      motivation: req.body.motivation,
      total: req.body.total,
      is_done: req.body.is_done,
      date: req.body.date,
    });
  
    try {
      const savedFacture = await newFacture.save();
  
      // Fetch responsible user from the user schema based on name
      const responsibleUser = await user.findOne({
        firstname: req.body.nom,
        lastname: req.body.prenom,
      });
  
      // Notify responsible user via email
      notifyResponsibleUserFacture(savedFacture, responsibleUser);
  
      res.status(200).json({
        success: true,
        message: 'Facture added successfully',
      });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });
  
  // Function to send email notification to responsible user for new facture
  function notifyResponsibleUserFacture(newFacture, responsibleUser) {
    if (responsibleUser) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'charmsfive@gmail.com', // your Gmail email address
          pass: 'inoa pwcr cptc zpix', // your Gmail password or an app-specific password
        },
      });
  
      const mailOptions = {
        from: 'charmsfive@gmail.com', // sender address
        to: responsibleUser.email, // recipient
        subject: 'New Facture Available',
        text: `Dear ${responsibleUser.firstname} ${responsibleUser.lastname},\n\nA new facture is available for review:\n\nNom: ${newFacture.nom}\nPrenom: ${newFacture.prenom}\nTotal: ${newFacture.total}\n\nBest regards,\nYour Company Finance Team`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    } else {
      console.log('Responsible user not found.');
    }
  }


  
const fetchfactures = expressAsynchandler(
    async(req, res) => {
        try{
            const factures = await  facture.find();
            res.json(factures)
        } catch(error){
            res.json(error)
        }
    }
  );
  financerouter.get('/allfactures',fetchfactures)

  const fetchfacture = expressAsynchandler(
    async(req, res) => {
        try{
            const Facture = await  facture.find({
                nom: req.body.nom,
                prenom: req.body.prenom,
              });
            res.json(Facture)
        } catch(error){
            res.json(error)
        }
    }
  );
  financerouter.get('/allfactures',fetchfactures)
  financerouter.post('/facture',fetchfacture)

financerouter.post('/cost', async (req, res) => {
    const newCost = new cost({
      total: req.body.total,
      development:req.body.development,
      finance: req.body.finance,
      hr: req.body.hr,
    });
  
    try {
      const savedCost = await newCost.save();
  
      res.status(200).json({
        success: true,
        message: 'Cost added successfully',
      });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });

  const fetchcost = expressAsynchandler(
    async(req, res) => {
        try{
            const Cost = await  cost.find();
            res.json(Cost)
        } catch(error){
            res.json(error)
        }
    }
  );
  financerouter.get('/cost',fetchcost)
  module.exports= financerouter