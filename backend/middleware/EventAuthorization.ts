import Express, { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import { getEvent } from '../controller/EventController'
import { EventModel, Event, EventDocument } from '../models/Event'


const EventAuthorization = (req: Request, res: Response, next: NextFunction) => {

     const eventId: string = (req.params as any).id
     const authorizationId = (req as any).authorizationId as mongoose.Types.ObjectId

     getEvent(eventId).then((result: EventDocument | null) => {
          if (result) {
               if (result.host.toString() === authorizationId.toString()) {
                    next()
               } else {
                    res.json({ error: "You are not the host of this event" })

               }

          } else {
               res.json({ error: "Get event returned null" })
          }

     }).catch((err) => {
          res.json({ error: err })
     })



}

export default EventAuthorization