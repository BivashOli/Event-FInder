import express, { Request, Response } from 'express'
import { Express } from 'express'
import { LoginTicket, OAuth2Client } from 'google-auth-library'
import dotenv from 'dotenv'
import User from '../models/User'

dotenv.config({ path: '.env.local' })
const router: express.Router = express.Router()

router.post('/login', (req: Request, res: Response) => {
     const { credential } = req.body

     const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

     let email: string | undefined
     let sub: string | undefined
     client.verifyIdToken({ idToken: credential, audience: process.env.GOOGLE_CLIENT_ID })
          .then((ticket: LoginTicket) => {
               const payload = ticket.getPayload()
               if (payload) {
                    email = payload.email;
                    sub = payload.sub
                    console.log(email)
               } else {
                    console.log("ERROR: No payload found")
               }
          }).then(() => {

               User.findOne({ email: email }).then((user) => {
                    if (!user) {
                         const newUser = new User({
                              username: "testinggg",
                              sub: sub,
                              email: email,
                              dob: new Date(),
                              public: true
                         }).save().then((result) => {
                              console.log(result)

                         }).catch(err => console.log(err))
                    }else{
                         console.log("USER ALREADY EXISTS")
                    }

               })

          })

     res.json({ success: 1 })
})

export default router