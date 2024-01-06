import mongoose from 'mongoose'

const followerSchema : mongoose.Schema = new mongoose.Schema({
     
     following: {
          type: mongoose.Schema.ObjectId,
          required: true
     }
}, { timestamps: true })