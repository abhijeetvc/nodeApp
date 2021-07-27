// function check(){
//     console.log("Hiiiiiiiii");  
// }

// check()

// Node Modules: a) Core modules, b) Local Modules

// a) Core modules: http, url, path, queryString, fs, util
// b) Local Modules: 

//console.log(module);

// require -> directive


// NodeJS, ExpressJS, Mongoose (ODM), cors (cross origin)

// client -> Server

// var obj=require('./demo')
//console.log(obj.firstName+' '+obj.lastName);
// obj('Hellllooooooooo')

//  var http=require('http')  // import

//  var server=http.createServer(function(req,res){
//          if(req.url=='/check'){   // endpoint / API
//              res.end('Hello From Node Server')
//          }
//  })

//  server.listen(8989)
//  console.log('Server Started');

 // post request

const express=require("express")
var bodyParser = require('body-parser')
const app=express()
const port=7878


// parse application/json
app.use(bodyParser.json())

// http methhods -> GET, POST, PUT, DELETE

app.get("/test",(req,res)=>{
    res.send("Hello Express JS")
})


// client -> server. 
// Data sending from client to server as object
// Data receiving from client to server as object
//receive data to the server
app.post("/saveData",(req,res)=>{
   // const {name} =req.body
    const {name,city} =req.body  // Object destructuring
    console.log("Name : "+name);
    console.log("City : "+city);
    res.send("POST Request recived!!!")
})

const person={
    name:"Peter",
    city:"NewYork"
}

app.get("/getData",(req,res)=>{
    res.json(person)
})

app.get("/fetchData/:fName",(req,res)=>{
    let firstName=req.params.fName
    console.log(firstName)
    res.send(firstName)
})

// PUT
// DELETE

app.listen(port,()=>{
    console.log("Connected to Server...");
})
