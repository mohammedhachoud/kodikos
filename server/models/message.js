const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let messageSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
  });
  
  module.exports = Message = mongoose.model('Message', messageSchema);