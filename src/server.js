// install and import express
const express=require("express");
const mongoose=require('mongoose');
const path=require("path");
const User=require('./models/user.model.js')

// const file = require('./assets/users.html')

let app = express();
const port = 8000;

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/assets/users.html'))
})

app.get('/users', function(req, res) {
    res.send(require('./assets/user.json'))
});
// app.get('/users', function(req, res) {
//     res.send(require(path.join(__dirname+'/assets/user.json')))
// });
app.get('/users/:id',function(req,res){
  
    res.send(require('./assets/user.json'))

})
app.post("/users",function(req,res){
    res.send(require('./assets/user.json'))
})
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
// const http=require('http');
// // const { connect, default: mongoose } = require("mongoose");
// const server = http.createServer(function(req, res) {
//      // Set the response HTTP header with HTTP status and Content type
//    res.writeHead(200, {'Content-Type': 'text/plain'});

//    // Send the response body "Hello World"
//    res.end('Hello World\n');
// });



// app.use(express.json());
// let connect='127.0.0.1';
// // let connect=(req,res)=>{
// //     mongoose.connect('http://localhost:8000',{useNewUrlParser:true,unifiedTopology:true})
// // }
// server.listen(8000,connect,function(){
//     console.log("connection done")
// })
// Code here

// Note: Do not remove this export statement
module.exports = app;
