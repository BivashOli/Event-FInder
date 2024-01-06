import {EventModel, Event, EventDocument} from '../models/Event'
import mongoose from 'mongoose'


const createEvent = async (event: Event) => {
     return await new EventModel(event).save()

}

const deleteEvent = async (id: string) => {
     await EventModel.deleteOne({ _id: id })
}

const getEvent = async (id: string) : Promise<EventDocument | null> => {
     return (await EventModel.findById(new mongoose.Types.ObjectId(id)
     ))
}

const updateEvent = async (id: string, eventData: Partial<Event>) => {
     await EventModel.findOneAndUpdate({ _id: id }, eventData)
}

export {createEvent, deleteEvent, getEvent, updateEvent }
