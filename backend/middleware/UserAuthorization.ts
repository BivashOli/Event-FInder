import Express, { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'

const UserAuthorization = (req: Request, res: Response, next: NextFunction) => {

     const userId: string = (req.params as any).id
     const authorizationId = (req as any).authorizationId as mongoose.Types.ObjectId

     console.log("userId : " + userId)
     console.log("authorizationId: " + authorizationId)
     if (userId === authorizationId.toString()) {
          next()
     }else{
          res.json({userId : userId, authorizationId : authorizationId, message : "You are not authorized to access this information"})
     }
}

export default UserAuthorization