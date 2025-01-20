import Curso from '../model/Curso.js'
import CursoRepository from '../repositories/CursoRepository.js'

class CursoController {
  async findAll(request, response) {
    try {
      const result = await CursoRepository.findAll();
      response.status(200).json(result)
    } catch (error) {
      response.status(500).json({
        message: 'Erro no servidor, contate o administrador',
        error: error,
      })
      console.log(error)
    }
  }

  async findById(request, response) {
    const id = request.params.idCurso;
    try {
      const result = await CursoRepository.findById(id)
      if (Object.keys(result).length === 0) {
        response.status(404).json({ message: 'ID not found' })
      } else {
        response.status(200).json(result[0])
      }
    } catch (error) {
      response.status(500).json({
        message: 'Erro no servidor, contate o administrador',
        error: error,
      })
      console.log(error)
    }
  }

  async updateById(request, response) {
    const id = request.params.idCurso;
    const body = request.body;

    try {
      const result = await CursoRepository.findById(id)
      if (Object.keys(result).length === 0) {
        response.status(404).json({ message: 'ID not found' })
      } else {
        try {
          const curso = new Curso(
            body.nomeCurso,
            body.cargaHorariaCurso,
            body.docenteCurso,
            body.localCurso
          );
          const updateCurso = await CursoRepository.update(id, curso);
          response.status(200).json(updateCurso[0])
        } catch (error) {
          response.status(500).json({
            message: 'Erro no servidor, contate o administrador',
            error: error,
          })
          console.log(error)
        }
      }
    } catch (error) {
      response.status(500).json({
        message: 'Erro no servidor, contate o administrador',
        error: error,
      })
      console.log(error)
    }
  }

  async deleteById(request, response) {
    const id = request.params.idCurso
    try {
      const exist = await CursoRepository.findById(id)
      if (Object.keys(exist).length === 0) {
        response.status(404).json({ message: 'ID not found' })
      } else {
        await CursoRepository.delete(id)
        response.status(204).json()
      }
    } catch (error) {
      response.status(500).json({
        message: 'Erro no servidor, contate o administrador',
        error: error,
      })
      console.log(error)
    }
  }

  async store(request, response) {
    const body = request.body;
    try {
      const curso = new Curso(
        body.nomeCurso,
        body.cargaHorariaCurso,
        body.docenteCurso,
        body.localCurso
      )
      const newCurso = await CursoRepository.create(curso)
      response.status(201).json(newCurso[0])
    } catch (error) {
      response.status(500).json({
        message: 'Erro no servidor, contate o administrador',
        error: error,
      })
      console.log(error)
    }
  }

}

export default new CursoController()
