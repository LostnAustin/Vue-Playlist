//load installed packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//morgan is a console logging framework for route requests
//body-parser... parse data from ajax
//cors: allows cross domain communication
const { sequelize } = require('./models')

const app  = express()
const port = 3000

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.post('register', ( req, res ) => {
    req.send({
        message: 'Success'
    })
})

//app listens for sequelize below and syncs with database
sequelize.sync()
    .then(() => {
        app.listen(port, () => console.log( ${port})
    })

//at command line we can type "node src/app.js" to confirm app listening. Navigate to "localhost:xxxx (eg. 3000) in browser"
//at command line, after express install: add cors management (cross origin resource sharing) npm install --save body-parser cors morgan
