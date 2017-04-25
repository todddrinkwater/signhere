var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

module.exports = { getUserById }

function getUserById(id){
  return knex('users').where('id', id)
}
