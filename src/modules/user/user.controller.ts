// manages req and res

import { Request, Response } from 'express'
import User from './user.model'

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

export const userController = {
  createUser,
}
