import mongoose from 'mongoose'

const userSchema: mongoose.Schema = new mongoose.Schema({
     username: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     firstName: {
          type: String,
          required: false
     },
     lastName: {
          type: String,
          required: false
     },
     dob : {
          type: Date,
          required: true
     },
     gender : {
          type: String,
          enum: ['male', 'female', 'other'],
          required: false 
     },
     public: {
          type: Boolean,
          required: true
     },
     pfp : {
          type: mongoose.Schema.Types.ObjectId,
          required: false
     }

}, { timestamps: true })



const User = mongoose.model('User', userSchema) 

export default User