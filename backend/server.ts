
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoutes = require('./routes/UserRoutes')

require('dotenv').config({path : '.env.local'})

const app = express()

app.use(cors)
app.use(express.urlencoded({extended : true}))
app.use(userRoutes)

const dbURI = process.env.DB_URI
console.log(dbURI)
mongoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology : true}).then(
     (result : any) => {
          console.log('connected to db')
     }
).catch((err : any) => console.log(err))

app.listen(3001) 
