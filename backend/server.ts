
const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config({path : '.env.local'})

const app = express()

const dbURI = process.env.DB_URI
console.log(dbURI)
mongoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology : true}).then(
     (result : any) => {
          console.log('connected to db')
     }
).catch((err : any) => console.log(err))

app.listen(3001) 
