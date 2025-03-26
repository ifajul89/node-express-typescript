import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function server() {
  try {
    // here mongoose has been connected
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`Server Running on port ${config.port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

// console.log(config.database_url)

server()
