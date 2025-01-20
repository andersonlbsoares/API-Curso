import postgres from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()
const connection = new postgres.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
  })
try {
  connection.connect()
  console.log('connection - database on')
} catch (error) {
  console.log(error.message)
}

export default connection
