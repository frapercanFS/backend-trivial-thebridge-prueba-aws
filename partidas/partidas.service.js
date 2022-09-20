const db = require("../_helpers/db");
const Partidas = db.Partidas;
const Categoria = db.Categorias;

module.exports = {
  getAll,
  create,
  getPartidasByCategory,
};

async function getAll() {
  return await Partidas.find().sort({puntuacion:-1})
}

async function create(body) {
  let partidas = new Partidas(body);
  return await partidas.save();
}

/* async function getPartidasByCategory(body) {
  const categoria = await Categoria.findOne({ nombre: body.categoria });
  console.log("partida",categoria)
  return await Partidas.find({ categoria }).limit(5).sort({puntuacion:-1})
}  */


async function getPartidasByCategory(body) {
  const categoria = await Categoria.findOne({ nombre: body.categoria });
  console.log("categoria-partida",categoria)
  return await Partidas.find({categoria}).populate('categoria').limit(5)
    
} 