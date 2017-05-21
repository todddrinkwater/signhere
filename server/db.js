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

// function newContract (id, contractDetails) {
//   knex('users')
//   .join('contracts', 'users.id', '=', 'contracts.user_id')
//   .select('users.id', 'users.fName', 'users.lName', 'users.email', 'contracts.contract_header', 'contracts.contract_desc')
//   .where('email', email)
//   .insert({
//     fName: ,
//     lName: ,
//     email: ,
//     contract_header: ,
//     contract_desc:
//   }).into('contracts')
// }

// knex('users')
// .join('contracts', 'users.id', '=', 'contracts.user_id')
// .select('users.id', 'users.fName', 'users.lName', 'users.email', 'contracts.contract_header', 'contracts.contract_desc')


module.exports = { getUserById, getUserContracts, signContract/*, newContract*/ }
