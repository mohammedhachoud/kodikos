const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
     email: {
      type: String,
      required: true
    },
    rate:{
      type: String,
      default: '0',
      required: false
    },
    phone:{
        type: Number,
        required: true
     },
     birthday:{
        type: Date,
        required: true
     },
     departement:{
        type: String,
        required: true
     },
    role: {
      type: String,
      required: true
    },
    wallet: {
      type: String,
      required: true
    },
    password: {
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
module.exports = Etudiant = mongoose.model('User', userSchema);