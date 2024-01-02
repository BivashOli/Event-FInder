import User from '../models/User'
import mongoose from 'mongoose'

const getUserById = async (id : string) => {

     return (await User.findById(id))?.toJSON()

}

const userExistsByEmail = async (email : string) : Promise<boolean> => {

     return !(await User.findOne({ email: email }))
}

export {getUserById, userExistsByEmail}