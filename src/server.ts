import mongoose from 'mongoose'
import app from './app'
import dotenv from './config'

async function server() {
  try {
    await mongoose.connect('')
    app.listen(5000, () => {
      console.log('Server Running')
    })
  } catch (error) {
    console.error(error)
  }
}

console.log(dotenv)

server()
