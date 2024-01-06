import mongoose from 'mongoose'


interface Event {
     title: string,
     description: string,
     emoji: string,
     dateStart: Date,
     dateEnd: Date,
     isPublic: boolean,
     address: {
          street: string,
          city: string,
          state: string,
          postalCode: string,
          country: string,
     }
     ,
     coordinates: { type: string, coordinates: [number] },
     isClosed: boolean,
     host: mongoose.Types.ObjectId,
     media : mongoose.Schema.Types.ObjectId

}

interface EventDocument extends Event, mongoose.Document { }


const eventSchema: mongoose.Schema = new mongoose.Schema<Event>({
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
     dateStart: {
          type: Date,
          required: true
     },
     dateEnd: {
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
     coordinates: {
          type: {
               type: String,
               enum: ['Point'], 
               required: true
          },
          coordinates: {
               type: [Number],
               required: true
          }

     },
     isClosed: {
          type: Boolean,
          required: false
     },
     host: {
          type: mongoose.Schema.Types.ObjectId,
          required: false
     },
     media: {
          type: [mongoose.Schema.Types.ObjectId],
          required: false
     },

}, { timestamps: true })

const EventModel = mongoose.model<EventDocument> ('Event', eventSchema)

export { EventModel, EventDocument, Event, eventSchema }