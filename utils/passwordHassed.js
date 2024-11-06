const {hash,verify} =require("argon2")

const generatePasword=async(password)=>{
    const result=await hash(password)
    console.log(result)
    return result
}

const verifyPasword=async(haasedPassword,password)=>{
    const result=await verify(haasedPassword,password)
    console.log(result)
    return result
}


module.exports={generatePasword,verifyPasword}
