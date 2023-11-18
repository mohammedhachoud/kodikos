const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let costSchema = new Schema({
    total: {
          type: Number,
          required: true
    },
    development:{
        type: Number,
        required: true
     },
     finance:{
        type: Number,
        required: true
     },
     hr:{
        type: Number,
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
module.exports = Cost = mongoose.model('Cost', costSchema);