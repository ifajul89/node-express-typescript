import dotenv from 'dotenv'
import path from 'path'

// এখানে আমরা .env কে বলে দিয়েছি cwd অর্থাৎ current working directory -র ফাইলটি নেওয়ার জন্য
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
}
