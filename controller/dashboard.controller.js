const booking = require("../models/booking.model")


const bookFlight=async(req,res)=>{
    try {
        const {user,flight}=req.body
    let newBooking= booking({
        user,
        flight
    })
    // console.log(newBooking)
    await newBooking.save()
    return res.status(201).json({
        message: "sucessfully created",
        id: newBooking._id
    })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const showAllbooking=async(req,res)=>{
    try {
        const data=await booking.find().populate("user").populate("flight")
        return res.status(201).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const deleteBooking=async(req,res)=>{
    try {
        const id=req.params.id
        await booking.deleteOne({_id:id})
        return res.status(202).json({
            message: "sucesssfully deleted",
            id: id
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const updateBookingdata=async(req,res)=>{
    try {
        const id=req.params.id
        const data=req.body
        const flightData= await booking.findOne({_id: id}).lean()
        let newdata={...flightData,...data}
        console.log(newdata)
        await booking.updateOne({_id:id},newdata)
        return res.status(200).json(newdata)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



module.exports={bookFlight,showAllbooking,updateBookingdata,deleteBooking}