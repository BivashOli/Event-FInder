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
          type: String,
          enum: ['Point'],
          required: true,
          coordinates: {
               type: [Number],
               index: '2dsphere'
          }
     },
     closed: {
          type: Boolean,
          required: true
     },
     host : {
          type: mongoose.Schema.Types.ObjectId,
          required: true
     },
     media : {
          type: [mongoose.Schema.Types.ObjectId],
          required: true
     },
     
}, {timestamps: true})

const Event = mongoose.model('Event', eventSchema)

export default Event