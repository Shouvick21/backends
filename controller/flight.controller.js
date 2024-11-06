const flight = require("../models/flight.model")




const addflight=async(req,res)=>{
   try {
        const data=req.body
        let newFlight= new flight(data)
        await newFlight.save()
        return res.status(201).json({
            message: "sucessfully updload the flight",
            id: newFlight._id
        })
   } catch (error) {
        return res.status(500).json({
            message: error.message
        })
   }

}

const fetchAllflight=async(req,res)=>{
    try {
        const data=await flight.find()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const fetchSingleflight=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await flight.findOne({_id: id})
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const deleteflight=async(req,res)=>{
    try {
        const id=req.params.id
        await flight.deleteOne({_id: id})
        return res.status(202).json({
            messagee: `sucessfully deleted ${id} flight `
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const updateFlightdata=async(req,res)=>{
    try {
        const id=req.params.id
        const data=req.body
        const flightData= await flight.findOne({_id: id}).lean()
        let newdata={...flightData,...data}
        console.log(newdata)
        await flight.updateOne({_id:id},newdata)
        return res.status(204).json(newdata)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



module.exports={addflight,fetchSingleflight,fetchAllflight,deleteflight,updateFlightdata}