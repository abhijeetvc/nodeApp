
// Mongoose(ODM- Object Data Modelling)

module.exports=mongoose=>{ 
    var schema=mongoose.Schema({
            firstName: String,
            lastName: String,
            email: String,
            password: String
        }        
    )

    const User=mongoose.model("users",schema)
    return User
}