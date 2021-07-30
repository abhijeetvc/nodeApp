const db=require("../model")
const User=db.users

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
