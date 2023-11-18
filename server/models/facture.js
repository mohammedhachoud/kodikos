const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let factureSchema = new Schema({
    nom:{
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    },
    wallet:{
      type: String,
      required: true 
    },
    hours: {
          type: Number,
          required: true
    },
    salaire:{
        type: Number,
        required: true
     },
     motivation:{
        type: Number,
        required: true
     },
     total:{
        type: String,
        required: true
     },
    is_done:{
        type: Boolean,
        default: false,
        required: false
    },
    date:{
        type: Date,
        required: true,
        default: Date.now 
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
module.exports = Facture = mongoose.model('Facture', factureSchema);