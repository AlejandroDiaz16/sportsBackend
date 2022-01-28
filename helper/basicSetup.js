const mongooseConnect = require('../db/dbConnection')

let basicSetup = () => {
  before((done) => {
    mongooseConnect.dbConnect()
      .once('open', () => done())
      .on('error', (error) => done(error))
  })
  after((done) => {
    mongooseConnect.dbClose()
      .then(() => done())
      .catch((err) => done(err))
  })
}

module.exports = basicSetup