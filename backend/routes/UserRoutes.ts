import express, {Request, Response} from 'express'
import { Express } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

const router: express.Router = express.Router()

router.post('/login', (req : Request, res : Response) => {
     const {credential} = req.body
     const decodedToken : string | jwt.JwtPayload | null = jwt.decode(credential)

     if (typeof decodedToken != 'string' && decodedToken != null){

          const userEmail = decodedToken?.email;
     }
     // Check if this userEmail exists already
     // If it doesnt exist, create them as a new user in DB
     // Regardless of the if statement, redirect them to map page
})

// router.delete() 


export default router