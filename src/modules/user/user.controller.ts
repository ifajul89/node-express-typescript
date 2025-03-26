// manages req and res

import { Request, Response } from 'express'
import User from './user.model'

const createUser = async (req: Request, res: Response) => {
  const payload = req.body

  const result = await User.create(payload)

  //   res.json({
  //     message: 'User Created Successfully',
  //     data: result,
  //   })
  res.json({
    message: 'User Created Successfully',
    data: result,
  })
}

export const userController = {
  createUser,
}
