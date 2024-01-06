import express, { Request, Response } from 'express'
import { Express } from 'express'
import { LoginTicket, OAuth2Client } from 'google-auth-library'
import dotenv from 'dotenv'
import User from '../models/User'
import mongoose from 'mongoose'
import { UserData, getUserById, deleteUser, updateUser } from '../controller/UserController'
import UserAuthorization from '../middleware/UserAuthorization'

dotenv.config({ path: '.env.local' })
const router: express.Router = express.Router()



router.get('/user/:id', (req: Request, res: Response) => {
     const id = req.params?.id
     getUserById(id).then((result) => {
          res.json(result)
     }).catch((err) => {
          console.log(err)
     })
})

router.delete('/user/:id', UserAuthorization, (req: Request, res: Response) => {
     const id = req.params?.id
     deleteUser(id).then(() => {
          res.json({ deleted: 1 })
     }).catch(() => {
          res.json({ deleted: 0 })
     })
})

router.patch('/user/:id', UserAuthorization, (req: Request, res: Response) => {
     const id = req.params?.id 
     const updatedData : Partial<UserData> = req.body

     updateUser(id, updatedData).then(() => {
          res.json({success : 1})
     }).catch(() => {
          
     })
})
export default router