import { Router } from 'express'
import CursoRouter from './routes/Curso.js'

const router = Router()

router.use(CursoRouter)


router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' })
})

export default router
