require("dotenv").config({path: "../.env"})
const jwt=require("jsonwebtoken")
const password=process.env.JWT_KEY

const generateWebtoken=(data)=>{
    const token= jwt.sign(data,password)
    // console.log(token)
    return token
}

const verifyWebtoken=(token)=>{
    const result= jwt.verify(token,password)
    // console.log(result)
    return result
}
// generateWebtoken("hel")
// verifyWebtoken("eyJhbGciOiJIUzI1NiJ9.aGVs.FMvxnph8uPaJMz8bbnKi4k9J7feDRnZFXCZwsO2nF5E")
module.exports={generateWebtoken,verifyWebtoken}

