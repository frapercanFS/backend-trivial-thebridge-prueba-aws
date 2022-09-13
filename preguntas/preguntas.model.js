const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  pregunta: { es: String, en: String },
  opciones: { es: [String], en: [String] },
  categoria: { type: Schema.ObjectId, ref: 'Categoria' },
  solucion: String
})

module.exports = mongoose.model('Pregunta', schema)
