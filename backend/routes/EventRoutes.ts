import express, { Request, Response, Router } from "express"
import {EventModel, EventDocument, Event} from '../models/Event'
import {createEvent, deleteEvent, getEvent, updateEvent } from "../controller/EventController"
import EventAuthorization from "../middleware/EventAuthorization"


const router: Router = Router()

router.post("/event", (req: Request, res: Response) => {


     const tempEventData = req.body
     tempEventData.host = (req as any).authorizationId

     const eventData: Event = tempEventData
     createEvent(eventData).then((event) => {
          res.json(event)
     }).catch(err => console.log(err))

})

router.get("/event/:id", (req: Request, res: Response) => {
     const id = req.params?.id
     getEvent(id).then((result) => {
          res.json(result)
     }).catch((err) => {
          console.log(err)
     })
})

router.delete("/event/:id", EventAuthorization, (req: Request, res: Response) => {
     const id = req.params?.id

     deleteEvent(id).then(() => {
          res.json({ deleted: 1 })
     }).catch(() => {
          res.json({ deleted: 0 })
     })




})

router.patch('/user/:id', EventAuthorization, (req: Request, res: Response) => {
     const id = req.params?.eventId
     const updatedData: Partial<Event> = req.body

     updateEvent(id, updatedData).then(() => {
          res.json({ success: 1 })
     }).catch(() => {

     })
})

export default router