import express, { Request, Response, Router } from "express"
import Event from '../models/Event'


interface Address{

}

interface EventData{
     title : string,
     description : string,
     emoji : string, 
     dateStart : Date,
     dateEnd : Date,
     address : {

     }
}

const router: Router = Router()

router.post("/event", (req: Request, res: Response) => {

     const {title, description, emoji, dateStart, dateEnd, address, coordinates} = req.body
     const eventData = req.body
     console.log(eventData)
     // res.json(title)
     const newEvent = new Event(
          eventData).save().then((result) => {
               res.json({success : 1})
          }).catch(err => {console.log(err); res.json({success : 0})})
})

router.get("/event/:id", () => { })

router.delete("/event/:id", () => { })

export default router