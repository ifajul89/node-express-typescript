import express, { Request, Response } from 'express'

const app = express()

// রিকোয়েস্ট আর রেসপন্স এর টাইপ ডিক্লেয়ার করে দিয়েছি
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is Live ⚡️',
  })
})

export default app
