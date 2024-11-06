const {model,Schema}=require("mongoose")


const flightSchema=new Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
})

const flight=model("flight",flightSchema)

module.exports=flight