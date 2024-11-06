const express=require("express")
const { registerUser, loginUser } = require("../controller/user.controller")

const userRoute=express.Router()


userRoute.post("/api/register",registerUser)
userRoute.post("/api/login",loginUser)



module.exports=userRoute
