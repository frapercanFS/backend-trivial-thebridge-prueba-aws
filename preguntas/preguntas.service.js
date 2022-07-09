const db = require('../_helpers/db')
const Pregunta = db.Pregunta
const Categoria = db.Categoria

module.exports = {
  getAll,
  create,
  getPreguntasByCategory
}

async function getAll () {
  return await Pregunta.find()
}

async function create (body) {
  const pregunta = new Pregunta(body)
  return await pregunta.save()
};

async function getPreguntasByCategory (body) {
  const categoria = new Categoria(body.categoria)
  return await Pregunta.find({ "categoria" : categoria })
}
