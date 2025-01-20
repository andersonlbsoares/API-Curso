import CursoController from '../controllers/CursoController.js'
import express from 'express'

const router = express.Router()

router.post('/cursos', CursoController.store)
router.put('/cursos/:idCurso', CursoController.updateById)
router.get('/cursos/:idCurso', CursoController.findById)
router.get('/cursos', CursoController.findAll)
router.delete('/cursos/:idCurso', CursoController.deleteById)

export default router