class Curso {
  #idCurso
  #nomeCurso
  #cargaHorariaCurso
  #docenteCurso
  #localCurso
  constructor(nomeCurso, cargaHorariaCurso, docenteCurso, localCurso) {
    this.#nomeCurso = nomeCurso
    this.#cargaHorariaCurso = cargaHorariaCurso
    this.#docenteCurso = docenteCurso
    this.#localCurso = localCurso
  }

  get idCurso() {
    return this.#idCurso
  }

  set idCurso(value) {
    this.#idCurso = value
  }

  get nomeCurso() {
    return this.#nomeCurso
  }

  set nomeCurso(value) {
    this.#nomeCurso = value
  }

  get cargaHorariaCurso() {
    return this.#cargaHorariaCurso
  }

  set cargaHorariaCurso(value) {
    this.#cargaHorariaCurso = value
  }

  get docenteCurso() {
    return this.#docenteCurso
  }

  set docenteCurso(value) {
    this.#docenteCurso = value
  }

  get localCurso() {
    return this.#localCurso
  }

  set localCurso(value) {
    this.#localCurso = value
  }

}

export default Curso
