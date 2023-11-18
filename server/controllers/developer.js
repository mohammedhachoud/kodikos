const express = require("express");
const devrouter = express.Router();
const bcrypt = require("bcrypt");
const meeting = require("../models/meeting");
const expressAsynchandler = require('express-async-handler');
const user = require("../models/user");
const task = require("../models/task");
const multer = require('multer');
const nodemailer = require('nodemailer');
const facture = require("../models/facture");


// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

devrouter.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { title, content } = req.body;
    const fileBuffer = req.file.buffer;

    // Save the article to the database
    const newArticle = new Article({
      title,
      content,
      file: {
        data: fileBuffer,
        contentType: req.file.mimetype,
      },
    });

    await newArticle.save();

    res.status(201).json({ success: true, message: 'Article uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

const fetchtasks = expressAsynchandler(
    async(req, res) => {
        try{
            const tasks = await task.find({'developers.email': { $in: [req.body.email] },});
            res.json(tasks)
        } catch(error){
            res.json(error)
        }
    }
);


devrouter.post('/isdone', async (req, res) => {
  try {
    const taskId = req.body._id;

    const taskToUpdate = await task.findById(taskId);
    if (!taskToUpdate) {
      return res.status(400).send('Invalid link');
    }

    console.log("Found");

    // Update is_done to true in the database
    await task.findByIdAndUpdate(taskId, { $set: { is_done: true } });

    // Fetch responsible user from the user schema based on role and department
    const responsibleUser = await user.findOne({
      role: 'responsible',
      departement: taskToUpdate.departement // Assuming department is a field in the task schema
    });

    // Notify responsible user via email
    notifyResponsibleUserTaskDone(taskToUpdate, responsibleUser);

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

// Function to send email notification to responsible user for task completion
function notifyResponsibleUserTaskDone(updatedTask, responsibleUser) {
  if (responsibleUser) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'charmsfive@gmail.com', // your Gmail email address
        pass: 'inoa pwcr cptc zpix' // your Gmail password or an app-specific password
      }
    });

    const mailOptions = {
      from: 'charmsfive@gmail.com', // sender address
      to: responsibleUser.email, // recipient
      subject: `Task Completed: ${updatedTask.title}`,
      text: `The task "${updatedTask.title}" has been marked as done. You can now review it.`
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
devrouter.post('/facture',fetchfacture)
  
devrouter.post('/comment', async (req, res) => {
    const comment = req.body.comment
    const _id = req.body._id
    const owner = req.body.owner

    const Task = await task.findById(_id);
    if (!Task) {
      return res.status(400).send('Invalid link');
    } else {
      console.log("Found");

      // Update is_done to true in the database
      const newcomment = {
        comment,
        owner
      };
  
      Task.comments.push(newcomment);
  
      const updatedTask = await Task.save();

      res.status(200).json({
        success: true,
        message: 'Task updated successfully',
      });
    }
  });
    
devrouter.post('/tasks',fetchtasks)

module.exports = devrouter;