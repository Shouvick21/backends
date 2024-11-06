const {model,Schema}=require("mongoose")


const bookingSchema=new Schema({
    user : { type: Schema.Types.ObjectId, ref: 'user' },
    flight : { type: Schema.Types.ObjectId, ref: 'flight' }
      
})

const booking=model("booking",bookingSchema)

module.exports=booking