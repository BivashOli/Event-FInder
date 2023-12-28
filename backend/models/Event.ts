import mongoose from 'mongoose'

const eventSchema : mongoose.Schema = new mongoose.Schema({
     title: {
          type: String,
          required: true
     },
     description: {
          type: String,
          required: false
     },
     emoji: {
          type: String,
          required: false
     },
     dateStart : {
          type: Date,
          required: true
     },
     dateEnd : {
          type: Date, 
          required: true
     },
     address: {
          street: String,
          city: String,
          state: String,
          postalCode: String,
          country: String
     },
     coordinates : {
          type: {
               type: String, // Don't do `{ location: { type: String } }`
               enum: ['Point'], // 'location.type' must be 'Point'
               required: true
             },
             coordinates: {
               type: [Number],
               required: true
             }

     },
     closed: {
          type: Boolean,
          required: false
     },
     host : {
          type: mongoose.Schema.Types.ObjectId,
          required: false
     },
     media : {
          type: [mongoose.Schema.Types.ObjectId],
          required: false
     },
     
}, {timestamps: true})

const Event = mongoose.model('Event', eventSchema)

export default Event