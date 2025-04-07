import { Router } from 'express'
import { userController } from './user.controller'

const userRouter = Router()

userRouter.post('/create-user', userController.createUser)
userRouter.get('/get-user', userController.getUser)

export default userRouter
