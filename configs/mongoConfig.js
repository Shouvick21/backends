const {connect} =require("mongoose")
require("dotenv").config()

const uri=process.env.MONGO_URL
const connectMongo=async()=>{
    try {
        await connect(uri)
        console.log("atlas sucessfully connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectMongo