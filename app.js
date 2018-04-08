require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const morgan = require('morgan')

// Connect MongoDB
require('./app/databases/mongodb')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

const port = process.env.API_PORT

const server = http.createServer(app)

require('./routes')(app)

server.listen(port)

module.exports = app
