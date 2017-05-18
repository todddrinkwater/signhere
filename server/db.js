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

function signContract (id, signatureUrl) {
  return knex('contracts').where('id', id)
  .update({signature_url: signatureUrl}).into('contracts')
}

module.exports = { getUserById, getUserContracts, signContract }
