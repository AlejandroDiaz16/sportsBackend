const request = require('request')
const xmlConverter = require('xml-js')
const mongoose = require('mongoose')

const url = "mongodb+srv://admin:Junior-16@cluster0.dmbvp.mongodb.net/fzSports?retryWrites=true&w=majority"

// connect to mongodb
mongoose.connect(url, {})
  .then(() => {console.log('conectado')})
  .catch((e) => {console.log(e)})

//create schema 
const plantelEquipoSchema = mongoose.Schema({
  deporte: Object,
  categoria: Object,
  campeonato: Object,
  campeonatoNombreAlternativo: Object,
  fechaActual: Object,
  equipo: Array
}, {versionKey: false})

//create model 
const PlantelEquipoModel = mongoose.model('plantelEquipo', plantelEquipoSchema)

//def to create 
const crear = async (json) => {
  const nuevoPlantel = new PlantelEquipoModel({
    deporte: json.deporte,
    categoria: json.categoria,
    campeonato: json.campeonato,
    campeonatoNombreAlternativo: json.campeonatoNombreAlternativo,
    fechaActual: json.fechaActual,
    equipo: json.equipo
  })
  const resultado = await nuevoPlantel.save()
  console.log('upload finished')
  closeConnection()
}

// function to return data in json
function getData(callback) {
  var options = {
    'method': 'GET',
    'url': 'https://fx-nunchee-assets.s3.amazonaws.com/data/sports.xml'
  }
  request.get(options, function (error, response) {
    if (error) callback(null)
    let xml2json = JSON.parse(xmlConverter.xml2json(response.body, {compact: true, spaces: 4}))
    callback(xml2json)
  })
}


function closeConnection () {
  mongoose.disconnect()
}

getData( res => {
  if (res) {
    crear(res.plantelEquipo)
  } else {
    console.log('no data to save in db')
  }
})