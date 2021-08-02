const db=require("../model")
const User=db.users


// save data to db
exports.create=(req,res)=>{
     console.log(req.body)
    const user=new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
    user.save(user)
        .then(userData=>{
            res.send(userData)
    })
}

// Get all users from db
exports.findAll=(req,res)=>{

    User.find()
        .then(data=>{
            res.send(data)
        })
}

//Get single user based on id
exports.findOne=(req,res)=>{
     
    let id=req.params.id  // id will be url appended id

    console.log("User Id: "+id);

    User.findById(id)
        .then(data=>{
            res.send(data)
        })
}