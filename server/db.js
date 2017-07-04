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
  .where('signee_id', id)
}

function signContract (id, signatureUrl) {
  return knex('contracts').where('id', id)
  .update({ signature_url: signatureUrl })
}

function newContract (id, contractDetails) {
  return knex('contracts')
  .select('owner_id', 'signee_id', 'contract_header', 'contract_desc')
  .insert({
    owner_id: id,
    signee_id: contractDetails.signee_id,
    contract_header: contractDetails.contract_header,
    contract_desc:contractDetails.contract_desc
  })
}


module.exports = { getUserById, getUserContracts, signContract, newContract }
