const db = require("../_helpers/db");
const Partidas = db.Partidas;
const Categoria = db.Categorias;

module.exports = {
  getAll,
  create,
  getPartidasByCategory
};

async function getAll() {
  return await Partidas.find()
}

async function create(body) {
  let partidas = new Partidas(body);
  console.log(partidas)
  return await partidas.save();
  }

/*   async function getPartidasByCategory (body) {
    const categoria = await Categoria.findOne({ nombre: body.categoria })
    return await Partidas.find({ categoria }).limit(5)
  }
 */

  async function getPartidasByCategory(body) {
    const categoria = await Categoria.findOne({ nombre: body.categoria });
    console.log("categoria",categoria)
    return await Partidas.find({categoria}).populate('categoria').limit(5)
      
  } 