const express = require("express");
const resdevrouter = express.Router();
const bcrypt = require("bcrypt");
const meeting = require("../models/meeting");
const expressAsynchandler = require('express-async-handler');
const user = require("../models/user");
const task = require("../models/task");
const nodemailer = require('nodemailer');

resdevrouter.post('/addtask', async (req, res) => {
  const newTask = new task({
    title: req.body.title,
    description: req.body.description,
    developers: req.body.developers,
    deadline: req.body.deadline,
    comments: req.body.comments,
    is_done: req.body.is_done,
    quality: req.body.quality,
    departement: req.body.departement
  });

  try {
    const savedTask = await newTask.save();

    // Extract the email addresses from the developers array
    const recipientEmails = newTask.developers.map((developer) => developer.email);

    // Notify developers via email
    notifyDevelopersByEmail(savedTask, recipientEmails);

    res.json(savedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to send email notification
function notifyDevelopersByEmail(task, recipientEmails) {
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
    subject: `New Task: ${task.title}`,
    text: `You have a new task to do!\n\nTitle: ${task.title}\nDescription: ${task.description}\nDeadline: ${task.deadline}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
  const fetchtasks = expressAsynchandler(
    async(req, res) => {
        try{
            const tasks = await task.find();
            res.json(tasks)
        } catch(error){
            res.json(error)
        }
    }
);

resdevrouter.post('/iscomplete', async (req, res) => {
  try {
    const taskId = req.body._id;

    const taskToUpdate = await task.findById(taskId);
    if (!taskToUpdate) {
      return res.status(400).send('Invalid link');
    }

    console.log("Found");

    // Update is_done to true in the database
    await task.findByIdAndUpdate(taskId, { $set: { is_verified: true } });

    // Notify developers via email
    notifyDevelopersTaskCompletion(taskToUpdate);

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

// Function to send email notification to developers for task completion
function notifyDevelopersTaskCompletion(updatedTask) {
  const developerEmails = updatedTask.developers.map((developer) => developer.email);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'charmsfive@gmail.com', // your Gmail email address
      pass: 'inoa pwcr cptc zpix' // your Gmail password or an app-specific password
    }
  });

  const mailOptions = {
    from: 'charmsfive@gmail.com', // sender address
    to: developerEmails.join(','), // recipients
    subject: `Task Completed: ${updatedTask.title}`,
    text: `Congratulations! The task "${updatedTask.title}" has been successfully completed. Thank you for your hard work!`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


  resdevrouter.post('/comment', async (req, res) => {
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
        owner,
        comment
      };
  
      Task.comments.push(newcomment);
  
      const updatedTask = await Task.save();

      res.status(200).json({
        success: true,
        message: 'Task updated successfully',
      });
    }
  });
  
 
resdevrouter.post('/rate', async (req, res) => {
  const rate = req.body.rate;
  console.log(rate)
  const _id = req.body._id;
  const Task = await user.findById(_id);

  if (!Task) {
    return res.status(400).send('Invalid link');
  } else {
    console.log("Found");

    // Update rate in the database


    await user.findByIdAndUpdate(_id, { $set: { rate: rate } });

    const updatedUser = await Task.save();
    console.log(updatedUser)
    const updatedRate=  updatedUser.rate

    // Notify the user via email
    notifyUserByRateEmail(updatedUser);

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
    });
  }
});

// Function to send email notification to the user for a new rate
function notifyUserByRateEmail(Task , updatedRate) {
 // Replace 'user' with the actual field in your schema
  console.log(updatedRate)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
 
      auth: {
        user: 'charmsfive@gmail.com', // your Gmail email address
        pass: 'inoa pwcr cptc zpix' // your Gmail password or an app-specific password
    }
  });

  const mailOptions = {
    from: 'charmsfive@gmail.com', // sender address
    to: Task.email,
    subject: 'New Rate Received',
    text: `You have received a new rate for your task.\nRate: ${Task.rate}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

resdevrouter.post('/taskquality', async (req, res) => {
  const quality = req.body.quality;
  const _id = req.body._id;

  try {
    const taskToUpdate = await task.findById(_id);

    if (!taskToUpdate) {
      return res.status(400).send('Invalid link');
    }

    console.log("Found");

    // Update quality in the database
    taskToUpdate.quality = quality;

    const updatedTask = await taskToUpdate.save();

    // Notify developers via email
    notifyDevelopersByQuality(updatedTask);

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to send email notification to developers based on task quality
function notifyDevelopersByQuality(updatedTask) {
  const developerEmails = updatedTask.developers.map((developer) => developer.email);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'charmsfive@gmail.com', // your Gmail email address
      pass: 'inoa pwcr cptc zpix' // your Gmail password or an app-specific password
    }
  });

  const mailOptions = {
    from: 'charmsfive@gmail.com', // sender address
    to: developerEmails.join(','), // recipients
    subject: `Task Quality Update: ${updatedTask.title}`,
    text: `The quality of your task "${updatedTask.title}" has been updated to ${updatedTask.quality}.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

resdevrouter.get('/tasks',fetchtasks)
module.exports = resdevrouter;