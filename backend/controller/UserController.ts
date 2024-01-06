import User from "../models/User"
import mongoose from "mongoose"

interface UserData{
     username : string,
     email : string,
     firstName : string,
     lastName : string, 
     dob : Date,
     isPublic: boolean
}

const getUserById = async (id: string) => {
     return (await User.findById(new mongoose.Types.ObjectId(id)
     ))?.toJSON()
}

const doesUserExistByEmail = async (email: string | undefined) => {
     return await User.findOne({ email: email })
}

const createUser = async (userData : UserData) => {
     return await new User(userData).save()
}

const deleteUser = async (id: string) => {
     await User.deleteOne({ _id: id })
}

const updateUser = async (id : string, userData : Partial<UserData>) => {
     await User.findOneAndUpdate({_id : id}, userData)
}

export { UserData, getUserById, doesUserExistByEmail, createUser, deleteUser, updateUser }