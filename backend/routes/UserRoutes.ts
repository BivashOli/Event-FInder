import express, { Request, Response } from 'express'
import { Express } from 'express'
import { LoginTicket, OAuth2Client } from 'google-auth-library'
import dotenv from 'dotenv'
import User from '../models/User'
import Authorization from '../middleware/Authorization'
import mongoose from 'mongoose'
import { getUserById } from '../controller/UserController'


dotenv.config({ path: '.env.local' })
const router: express.Router = express.Router()



router.get('/user/:id', (req : Request, res : Response) => {
     const id = req.params?.id
     // User.findOne({username : id})
     // .then((user) => {
     //      if(user){
     //           res.json(user)
     //      }
     // })

     getUserById(id).then(
          (user) => {
               res.json(user)
          }
     )
})

router.delete('/user/:id', Authorization, (req : Request, res : Response) => {
     const id = req.params?.id

     User.deleteOne({username : id})
     .then((result) => {
          if (result.deletedCount == 0){
               console.log("ERROR: User that was trying to be deleted doesn't exist")
          }else{
               console.log("Successfully deleted")
          }
     } )
     res.json({deleted : 1})
} )

router.patch('/user/:id', Authorization, (req : Request, res : Response) => {
})

export default router