import app from '../../app/app.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = 3000


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})