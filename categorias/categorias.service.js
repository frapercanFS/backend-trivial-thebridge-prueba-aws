const db = require("../_helpers/db");
const Categorias = db.Categorias;

module.exports = {
  getAll,
  create,
};

async function getAll() {
  return await Categorias.find();
}

async function create(body) {
  let categorias = new Categorias(body);
  return await categorias.save();
}


async function listaCategoria() {
    const verCategorias = await Categorias.find()
   
 
    return verCategorias
    
    }
    listaCategoria().then(categorias => {
        console.log("Categoria", categorias); 
    });