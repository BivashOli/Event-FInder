import express, { Request, Response } from 'express'
import { Express } from 'express'
import { LoginTicket, OAuth2Client } from 'google-auth-library'
import dotenv from 'dotenv'
import {User, UserModel} from '../models/User'
import mongoose from 'mongoose'
import { getUserById, deleteUser, updateUser } from '../controller/UserController'
import UserAuthorization from '../middleware/UserAuthorization'
import RouteError from './RouteError'

dotenv.config({ path: '.env.local' })
const router: express.Router = express.Router()



router.get('/user/:id', (req: Request, res: Response) => {
     const id = req.params?.id
     getUserById(id).then((result) => {
          res.json(result)
     }).catch((err) => {
          const routeError : RouteError = {message: "This user doesn't exist", error : err}
          res.status(404).json(routeError)
     })
})

router.delete('/user/:id', UserAuthorization, (req: Request, res: Response) => {
     const id = req.params?.id
     deleteUser(id).then(() => {
          res.status(204).send("Deleted successfully")
     }).catch((err) => {
          const routeError : RouteError = {message: "Delete failed", error : err}
          res.status(404).json(routeError)
     })
})

router.patch('/user/:id', UserAuthorization, (req: Request, res: Response) => {
     const id = req.params?.id 
     const updatedData : Partial<User> = req.body

     updateUser(id, updatedData).then(() => {
          res.status(200).send("Updated successfully")
     }).catch((err) => {
          const routeError : RouteError = {message: "Updating failed", error : err}
          res.status(404).json(routeError)
     })
})
export default router