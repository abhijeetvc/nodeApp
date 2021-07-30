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
const cors=require("cors")
var bodyParser = require('body-parser')
const app=express()
const port=7878


var corsOptions={
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

// parse application/json
app.use(bodyParser.json())

// http methhods -> GET, POST, PUT, DELETE

const db=require("./app/model")

db.mongoose
.connect(db.url,{
    useNewUrlParser:true
}).then(()=>console.log("Connected to DB..."))

require("./app/routes/user.routes")(app)

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


// Mongoose -> Driver  -> Act as bridge between your application and the database
// Cors -> Cross Origin ->  Valid source or origin 

// React Application -> localhost:3000  --> abc.com   ->  Server Application


// A ->
// B ->                Server Application
// C ->

// D ->

// config -> database configuration -> database address and port with database name
// model  -> Mapping objects to save to the database. (Whatever json data received will be 
              // mapped with the schema created)
              // Data validation with the schema defined 
              // User/Schema  -> consists of the fields with the type
// routes -> It will consist of actual URL paths.  
// controller -> logic of storing or retrieving the data from DB.            

