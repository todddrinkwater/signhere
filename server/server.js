var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

var userById = require('./routes/userById')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/user', userById)

module.exports = server
