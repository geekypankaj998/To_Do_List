const { Console } = require('console');
const express = require('express');
const { Http2ServerRequest } = require('http2');
const port = 8000;
const db = require('./config/mongoose');
const Task = require('./models/task');
const app = express();    //Initializing express and ecosystem

//UrlParser to read Encoded Form Content
app.use(express.urlencoded());
//Refering Assets Files  
app.use(express.static('assets'));

//Setting up View Engine 
app.set('view engine','ejs');
//Refering Views in Folder Structure
app.set('views','./views');

//Dealing Get Request / Home Page for App (Currently)
app.get('/',function(req,resp){
    //Travering DB and displaying Back   
    Task.find({},function(error,tasks){
      if(error){
         return resp.end('<h2>Error occured during DB Fetching</h2>');
      }
      resp.render('home',{
        taskList : tasks
      });
    });
    
});

//After triggered by Anchor Tags handling Get Request to Delete
app.post('/deleteTasks',function(req,resp){
   let targetTask = req.body;
   console.log('Hello there',targetTask);

   let obj = [];
   for(itr in targetTask){
        const { ObjectId } = require('mongodb');
        const _id = ObjectId(itr);
        obj.push(_id);
   }
   console.log(obj);
 
   for(itr of obj){
      Task.findByIdAndDelete(itr,function(err){
        if(err){
          console.log('Error occured ',err.message);
          return;
       }
      });
   }
  
        return resp.redirect('back');      
    
  
});

// Creating new Task
app.post('/createTask',function(req,resp){
     let des = req.body.descrip;
     let dateVal = req.body.dateV;
     let cate = req.body.category;
    //  resp.end(des+ " " +dateVal+" "+cate);
    Task.create({
      descrip : des,
      category : cate,
      dateV : dateVal,
      status : false
    },function(err,task){
        if(err){
          resp.end('Error occured during Creation Of Task');
          return;
        }
        console.log('****',task);
        console.log('Task Info : Descrip ',task.descrip);
        return resp.redirect('back');
    });
});
//Setting up server 
app.listen(port,function(err){
   if(err){
      console.log(`Error occured : ${err}`);  
      return;
    }
   console.log(`Successfully Connected`);
});