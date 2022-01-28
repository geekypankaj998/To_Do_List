const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task_db');

const db = mongoose.connection;

db.on('error',function(err){
  console.log('Error Occured while setting DB',err.message);
});

db.once('open',function(){
    console.log('DB setup Complete');
});

