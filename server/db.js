var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)


function getUserById(id){
  return knex('users')
    .where('id', Number(id))
    .first()

}

function getUserContracts(id){
  return knex('contracts')
  .where('user_id', id)
}

module.exports = { getUserById, getUserContracts }
