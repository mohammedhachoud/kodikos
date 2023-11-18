// chatRouter.js
const express = require('express');
const user = require('../models/user');
const socketIo = require('socket.io');
const message = require('../models/message');

const chatRouter = express.Router();
const io = socketIo();

chatRouter.post('/chat', async (req, res) => {
  try {
    const User = await user.findById(req.body._id);
    if (User) {
      const newMessage = new Message({
        user: User._id, // Fix: use User._id instead of user._id
        content: req.body.message,
      });

      await newMessage.save();

      io.emit('chat message', {
        user: { _id: User._id, firstname: User.firstname }, // Fix: use User instead of user
        message: req.body.message,
      });

      res.status(200).json({ success: true, message: 'Chat message sent successfully' });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = { chatRouter, io };
