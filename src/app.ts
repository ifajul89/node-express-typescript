import express, { Request, Response } from 'express'
import userRouter from './modules/user/user.router'

const app = express()

// this middleware is a parser and is used to parse the data coming into body and make it suitable for express to read
app.use(express.json())

// this middlewarre is using the api/user/ then the other route create in the router file
app.use('/api/user', userRouter)

// রিকোয়েস্ট আর রেসপন্স এর টাইপ ডিক্লেয়ার করে দিয়েছি
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is Live ⚡️',
  })
})

export default app
