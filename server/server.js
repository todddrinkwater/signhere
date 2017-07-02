var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var cors = require('cors')

var userById = require('./routes/userById')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors())
server.use('/user/', userById)

module.exports = server
