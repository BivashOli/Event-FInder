import Express, { Request, Response, NextFunction } from 'express'
import { LoginTicket, OAuth2Client } from 'google-auth-library'
import User from '../models/User'

const Authentication = (req: Request, res: Response, next: NextFunction): void => {

     console.log(req.headers.authorization)
     const credential = (req.headers.authorization as string).split(" ")[1]
     // req.headers.authorization
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
                         }).catch(err => res.json({ success: -1 }))
                    } else {
                         console.log("USER ALREADY EXISTS")
                    }

               })
               next()
          }).catch(() => {
               res.json({failed : 1})
               
          })

               

          
}

export default Authentication