const mongoose = require('mongoose');

// connect Mongoose to your DB

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/task_db');

const db = mongoose.connection;

db.on('error',function(err){
  console.log('Error Occured while setting DB',err.message);
});

db.once('open',function(){
    console.log('DB setup Complete');
});

