const connectMongo = require("./configs/mongoConfig")

const express=require("express")
const userRoute = require("./routes/user.router")
const flightRoute = require("./routes/flight.route")
const dashboardRouter = require("./routes/dashboard.route")
const app=express()
require("dotenv").config()
const port=process.env.PORT
app.use(express.json())


app.use("/",userRoute)
app.use("/",flightRoute)
app.use("/",dashboardRouter)


app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,async()=>{
    await connectMongo()
    console.log(`http://localhost:${port}`)
})

