import connection from '../../config/database/connection.js'

class CursoRepository {
  queryCurso(sql, params = '') {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (error, result) => {
        if (error) {
          const erro = {
            erro: 'SQL - reject',
            message: error.message,
          }
          return reject(erro)
        } else {
          const row = JSON.parse(JSON.stringify(result.rows))
          return resolve(row)
        }
      })
    })
  }


  create(curso) {
    const sql = `
    INSERT INTO curso (nome_curso, carga_horaria_curso, docente_curso, local_curso) VALUES ($1, $2, $3, $4) RETURNING *;`
    return this.queryCurso(sql, [
      curso.nomeCurso,
      curso.cargaHorariaCurso,
      curso.docenteCurso,
      curso.localCurso
    ])
  }

  findAll() {
    const sql = 'SELECT * FROM curso ORDER BY nome_curso;'
    return this.queryCurso(sql)
  }

  findById(idCurso) {
    const sql = 'SELECT * FROM curso WHERE id_curso = $1;'
    return this.queryCurso(sql, [idCurso])
  }

  update(idCurso, curso) {
    const sql = `UPDATE curso SET nome_curso = $1, carga_horaria_curso = $2, docente_curso = $3, local_curso = $4 WHERE id_curso = $5 RETURNING *;`

    return this.queryCurso(sql, [
      curso.nomeCurso,
      curso.cargaHorariaCurso,
      curso.docenteCurso,
      curso.localCurso,
      idCurso
    ])
  }

  delete(idCurso) {
    const sql = 'DELETE FROM curso WHERE id_curso = $1;'
    return this.queryCurso(sql, [idCurso])
  }
}

export default new CursoRepository()
