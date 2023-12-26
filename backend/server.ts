import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/UserRoutes'


require('dotenv').config({ path: '.env.local' })

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(userRoutes)

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

app.listen(3001, () => {
     console.log("Server listening on port 3001")
})

app.get("/", (req: Request, res: Response) => {
     res.send("<h1>HOME</h1>")
})