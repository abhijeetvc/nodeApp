module.exports=app=>{

    const users=require("../controller/user.controller")

    var router=require("express").Router()

    router.post("/saveUser",users.create)

    router.get("/getAllUsers",users.findAll)

    router.get("/getUserById/:id",users.findOne)

    app.use("/api",router)
}