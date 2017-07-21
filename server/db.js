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
  .insert({
    owner_id: id,
    signee_id: contractDetails.signee_id,
    contract_header: contractDetails.contract_header,
    contract_desc:contractDetails.contract_desc
  })
}

function newUser(newUserDetails){
  return knex('users')
  .insert({
    fName: newUserDetails.fName,
    lName: newUserDetails.lName,
    organisation: newUserDetails.organisation,
    phone:newUserDetails.phone,
    email: newUserDetails.email,
    street_address: newUserDetails.street_address,
    suburb: newUserDetails.suburb,
    user_image_url: newUserDetails.user_image_url
  })
}


module.exports = { getUserById, getUserContracts, signContract, newContract, newUser }
