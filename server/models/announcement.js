const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let announcementSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    file: {
        data: {
          type: Buffer,
          required: false
        },
        contentType: {
          type: String,
          required: false
        },
        originalFilename: {
          type: String,
          required: false
        }
      }
    /*image:{
      public_id : {
        type: String,
        required: true
      },
      url: {
        type:String,
        required: true
      }
    }*/

})
module.exports = Announcement = mongoose.model('Announcement', announcementSchema);