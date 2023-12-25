import {Request, Response} from 'express'
import { Express } from 'express'

const express = require('express')
const router = express.Router()

router.post('/login', (req : Request, res : Response) => {
     console.log(req.body.credentialResponse)
     res.json({success : "oh blimey!!!"})
})

router.get('/usertest', (req : Request, res : Response) => {
     res.render("efqe")
})
module.exports = router