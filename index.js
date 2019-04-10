const Sequelize = require('sequelize')
const config = require(__dirname + '/../config/config.json/')[env]
// links to issue with config calling - https://github.com/sequelize/cli/pull/648/commits/b9f0e81e0ebd01d8825955d75de9438955909936
//go to terminal, from directory, start server with 'node src/app.js' to check if sequelize is listening
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

//we declare variables and then new instance of Sequelize

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    })
    .catch(err => {
        console.log('Unable to connect to database: ', err)
    })

    //import user login info from src/index.js

    db['User'] = sequelize.import('./user.js')
    db.sequelize = sequelize
    db.sequelize = Sequelize
    module.exports = db