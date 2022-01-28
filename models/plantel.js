const mongoose = require('mongoose')


const plantelEquipoSchema = new mongoose.Schema({
  deporte: Object,
  categoria: Object,
  campeonato: Object,
  campeonatoNombreAlternativo: Object,
  fechaActual: Object,
  equipo: Array
})

let plantelEquipo = mongoose.model('plantelEquipo', plantelEquipoSchema)

module.exports = plantelEquipo
