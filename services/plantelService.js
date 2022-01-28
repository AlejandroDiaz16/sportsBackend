const mongoose = require('mongoose')
const plantelEquipo = mongoose.model('plantelEquipo')

//get all teams inside plantel
exports.findAllTeams = function (req, res) {
  let respuesta = {
    equipos: null
  }
  plantelEquipo.find({}).select({ equipo: 1 }).exec((err, equipos) => {
    if (err) res.sendStatus(500)
    if (equipos) {
      respuesta.equipos = equipos && equipos[0] ? equipos[0].equipo : []
      res.status(200).jsonp(respuesta)
    } else {
      res.status(404).jsonp(respuesta)
    }
  })
}

// get players for an specific team 
exports.findPlayersByTeam = function (req, res) {
  let respuesta = {
    equipo: null
  }
  if (!req.params.idTeam) res.status(400).jsonp({"message": "missing parameters"})
  plantelEquipo.aggregate([
    { $unwind: "$equipo"},
    { $match: { "equipo._attributes.id": req.params.idTeam } },
    { $project: {_id: 0, "equipo._attributes": 1, "equipo.jugadores": 1}}
  ]).exec((err, jugadores) => {
    if (err) res.sendStatus(500)
    if (jugadores) {
      respuesta = jugadores && jugadores[0] ? jugadores[0] : []
      res.status(200).jsonp(respuesta)
    } else {
      res.status(404).jsonp(respuesta)
    }
  })
}

// get all players in every team that has an specific position
exports.findPlayersByPosition = function (req, res) {
  if (!req.params.position) res.status(400).jsonp({"message": "missing parameters"})
  plantelEquipo.aggregate([

    { $unwind: "$equipo"},
    { $match: { 'equipo.jugadores.jugador.rol._attributes.idRol': req.params.position}},
    { $project: {
      _id: 0,
      'equipo._attributes':1,
      'equipo.jugadores': { $filter: {
        input: "$equipo.jugadores.jugador",
        as: "el",
        cond: {
          $eq: ["$$el.rol._attributes.idRol", req.params.position]
        }
      }}
    }}
  ]).exec((err, jugadores) => {
    res.status(200).jsonp(jugadores)
  })
}
