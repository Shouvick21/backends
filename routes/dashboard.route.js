const express=require("express")
const { bookFlight,showAllbooking,updateBookingdata,deleteBooking } = require("../controller/dashboard.controller")

const dashboardRouter=express.Router()


dashboardRouter.post("/api/booking",bookFlight)
dashboardRouter.get("/api/dashboard",showAllbooking)
dashboardRouter.delete("/api/dashboard/:id",deleteBooking)
dashboardRouter.put("/api/dashboard/:id",updateBookingdata)


module.exports=dashboardRouter

