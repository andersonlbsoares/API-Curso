import CursoController from '../controllers/CursoController.js'
import express from 'express'

const router = express.Router()

router.post('/curso', CursoController.store)
router.put('/curso/:idCurso', CursoController.updateById)
router.get('/curso/:idCurso', CursoController.findById)
router.get('/curso', CursoController.findAll)
router.delete('/curso/:idCurso', CursoController.deleteById)

export default router