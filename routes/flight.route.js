const express=require("express")
const { addflight ,fetchSingleflight,fetchAllflight,deleteflight,updateFlightdata} = require("../controller/flight.controller")

const flightRoute=express.Router()


flightRoute.post("/api/flights",addflight)
flightRoute.get("/api/flights",fetchAllflight)
flightRoute.get("/api/flights/:id",fetchSingleflight)
flightRoute.delete("/api/flights/:id",deleteflight)
flightRoute.put("/api/flights/:id",updateFlightdata)

module.exports=flightRoute
