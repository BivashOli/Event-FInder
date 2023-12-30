import express, { Request, Response } from 'express'
import { Express } from 'express'
import { LoginTicket, OAuth2Client } from 'google-auth-library'
import dotenv from 'dotenv'
import User from '../models/User'
import mongoose from 'mongoose'

dotenv.config({ path: '.env.local' })
const router: express.Router = express.Router()



router.get('/user/:id', (req : Request, res : Response) => {
     const id = req.params?.id
     User.findOne({username : id})
     .then((user) => {
          if(user){
               res.json(user)
          }
     })
})

router.delete('/user/:id', (req : Request, res : Response) => {
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

export default router