import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/UserRoutes'
import dotenv from 'dotenv'

//config dotenv file
dotenv.config({ path: '.env.local' })

// create express app
const app: express.Express = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// set routes
app.use(userRoutes)

// connect to MongoDB atlas
const dbURI: string | undefined = process.env.DB_URI
if (dbURI == undefined) {
     console.log("ERROR: DB URI is not assigned in env file")
} else {
     mongoose.connect(dbURI).then(
          (result) => {
               console.log('connected to db')
          }
     ).catch((err: any) => console.log(err))
}

// start server
app.listen(3001, () => {
     console.log("Server listening on port 3001")
})

// home page
app.get("/", (req: Request, res: Response) => {
     res.send("<h1>HOME</h1>")
})