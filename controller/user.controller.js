const user = require("../models/user.model")
const { generateWebtoken } = require("../utils/jwtOperation")
const { generatePasword, verifyPasword } = require("../utils/passwordHassed")


const registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body
    const userdata=await user.findOne({email})
    if(userdata) return res.status(404).json({
        message: "user alredy present"
    })
    const haasedPassword=await generatePasword(password)
    const newuser=new user({name,email,password: haasedPassword})
    await newuser.save()
    return res.status(201).json({
        message: "registration sucessfull"
    })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
    const data=await user.findOne({email})
    if(!data) return res.status(400).json({
        message: "user not registerd"
    })
    if(!await verifyPasword(data.password,password)) {
        console.log("hi")
        return res.status(400).json({
            message: "pasword not matched"
        })
    }
    const token= generateWebtoken({email: data.email,name: data.name})
    return res.status(201).json({
        messsage: "sucessfully login",
        accesstoken: token,
        
    })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
    
}



module.exports={registerUser,loginUser}