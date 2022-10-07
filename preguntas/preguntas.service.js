const db = require("../_helpers/db");
const Pregunta = db.Pregunta;
const Categoria = db.Categorias;

module.exports = {
  getAll,
  create,
  getPreguntasByCategory,
  remove
};

async function getAll() {
  return await Pregunta.find();
}

async function remove(body) {
  return await Pregunta.findByIdAndDelete(body.id);
}


async function create(body) {
  const pregunta = new Pregunta(body);
  return await pregunta.save();
}

async function getPreguntasByCategory (body) {
  const categoria = await Categoria.findById( body.id )
  return await Pregunta.find({ categoria }).limit(5)
}
