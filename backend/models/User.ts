import mongoose from 'mongoose'

interface User{
     username : string,
     email : string,
     firstName : string,
     lastName : string, 
     dob : Date,
     isPublic: boolean
}

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
     isPublic: {
          type: Boolean,
          required: true
     },
     pfp : {
          type: mongoose.Schema.Types.ObjectId,
          required: false
     }

}, { timestamps: true })



const UserModel = mongoose.model('User', userSchema) 

export {User, UserModel}