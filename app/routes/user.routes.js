module.exports=app=>{

    const users=require("../controller/user.controller")

    var router=require("express").Router()

    router.post("/saveUser",users.create)

    app.use("/api",router)
}