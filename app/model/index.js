const dbConfig=require("../config/db.config")

const mongoose=require("mongoose")

const db={}

db.mongoose=mongoose
db.url=dbConfig.url
db.users=require("./user.model")(mongoose)

module.exports=db