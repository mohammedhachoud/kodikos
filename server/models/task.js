const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let taskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    departement:{
      type: String,
      required: true 
    },
    developers:[{
        email: {
          type: String,
          required: true
        },
      }],
    is_done:{
        type: Boolean,
        default:false,
        required: true
     },
     is_verified:{
        type: Boolean,
        default:false,
        required: true
     },
     deadline:{
        type: String,
        required: true
     },
     comments:[{
        comment: {
          type: String,
          required:false
        },
        owner:{
            type:String,
            required:false
        }
      }],
      quality:{
        type: String,
        default: 'null',
        required: false
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
module.exports = Task = mongoose.model('Task', taskSchema);