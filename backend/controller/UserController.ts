import {User, UserModel} from "../models/User"
import mongoose from "mongoose"



const getUserById = async (id: string) => {
     return (await UserModel.findById(new mongoose.Types.ObjectId(id)
     ))?.toJSON()
}

const doesUserExistByEmail = async (email: string | undefined) => {
     return await UserModel.findOne({ email: email })
}

const createUser = async (userData : User) => {
     return await new UserModel(userData).save()
}

const deleteUser = async (id: string) => {
     await UserModel.deleteOne({ _id: id })
}

const updateUser = async (id : string, userData : Partial<User>) => {
     await UserModel.findOneAndUpdate({_id : id}, userData)
}

export { UserModel, getUserById, doesUserExistByEmail, createUser, deleteUser, updateUser }