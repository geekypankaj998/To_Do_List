const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const taskSchema = new mongoose.Schema({
   descrip : {
      type : String,
      required : true
   },
   category :{
      type : String,
      required : true
   },
   dateV:{
      type : String,
      required : true 
   },
   status :{
      type : Boolean
   }
});


const Task = mongoose.model('Task',taskSchema);

module.exports = Task;
