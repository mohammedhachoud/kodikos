const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let meetingSchema = new Schema({
    subject:{
        type: String,
        required: true
    },
    memebres:[{
      email: {
        type: String,
        required: true
      },
    }],
    responsible: {
      type: String,
      required: true
    },
    time:{
        type: String,
        required: true
     },
     
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
module.exports = Meeting = mongoose.model('Meeting', meetingSchema);