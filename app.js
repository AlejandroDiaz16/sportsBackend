const bodyParser = require('body-parser')
var express = require('express')
const app = express()
const methodOverride = require("method-override")

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())

const mongooseConnect = require('./db/dbConnection')

mongooseConnect.dbConnect()
  .on('error', (err) => console.log("connection to db failed"))


//model and controller
const models = require('./models/plantel')
const plantelService = require('./services/plantelService')
//router
var router = express.Router()


router.get("/teams", plantelService.findAllTeams)

router.get("/teams/:idTeam/players", plantelService.findPlayersByTeam)

router.get("/teams/players/:position", plantelService.findPlayersByPosition)

// no route match handler
router.get('*', function(req, res) {
  res.status(404).jsonp({"message": "this route doesn't exist or is not available"})
})

app.use(router)

app.listen(3000, () => {
  console.log('server running')
})

module.exports = app