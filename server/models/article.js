const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define a mongoose schema for the article
const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    file: {
      data: Buffer,
      contentType: String,
    },
  });
  
module.exports = Article = mongoose.model('Article', articleSchema);