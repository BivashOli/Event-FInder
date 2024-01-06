import Express, { Request, Response, NextFunction } from 'express'
import { LoginTicket, OAuth2Client } from 'google-auth-library'
import {User, UserModel} from '../models/User'
import mongoose from 'mongoose'
import {doesUserExistByEmail, createUser } from '../controller/UserController'

const Authentication = (req: Request, res: Response, next: NextFunction): void => {

     const credential = (req.headers.authorization as string).split(" ")[1]
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
                    res.json({error : "Error: Payload doesn't exist"})
               }

               doesUserExistByEmail(email).then((user) => {
                    if (!user) {
                         const userData : User = {username : "bobjoe", email : email as string, firstName : "bob", lastName : "joel", dob : new Date(), isPublic : true}
                         createUser(userData).then((newUser) => {
                              user = newUser
                         })
                    }
                    if (user)
                         (req as any).authorizationId = user._id
                    next()
               })
          }).catch((err) => {
               res.json({ failed: 1 })
               console.log(err)
          })
}

export default Authentication