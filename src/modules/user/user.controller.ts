// in this file we write all the crud operations with request and respose

import { Request, Response } from 'express'
import User from './user.model'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body

    const result = await User.create(payload)

    res.json({
      status: true,
      message: 'User Created Successfully',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something Went Wrong',
      error,
    })
  }
}

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser()

    res.send({
      status: true,
      message: 'Getting Users Successfully',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something Went Wrong',
      error,
    })
  }
}

export const userController = {
  createUser,
  getUser,
}
