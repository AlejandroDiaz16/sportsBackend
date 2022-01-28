const mongoose = require('mongoose')
const url = "mongodb+srv://admin:Junior-16@cluster0.dmbvp.mongodb.net/fzSports?retryWrites=true&w=majority"

function dbConnect() {
  mongoose.connect(url, {})
  return mongoose.connection
}

function dbClose() {
  return mongoose.disconnect()
}

module.exports = {
  dbConnect,
  dbClose
}