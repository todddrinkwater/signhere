var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  res.send({key: 'hello'})
})

router.get('/profile/:id', function (req, res) {
  var id = req.params.id
  db.getUserById(id)
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.get('/contracts/:id', function (req, res) {
  var id = req.params.id
  db.getUserContracts(id).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

//To update contract with signature URI once signed.
//Get this route to update database signatureURL field
// Connect button with API to connect client and server.
//Afterwards, build 'signed contracts' section users can access.
// router.put('/contracts/:id', function (req, res) {
//   var id = req.params.id
//   var signatureUrl = req.body.signature_url
//   db.signContract(id, signatureUrl).then((result) => {
//     res.sendStatus(status)
//   })
//   .catch((err) => {
//     res.status(500).send(err)
//   })
// })

//POST route to create new contract
//New contract will need to be dispatched to both the database and the store by calling API on an action
//

//Re-migrate database to show relationship between users on a contract e.g. writer_user_id and signee_user_id fields
router.post('/contracts/new/:contractId', function (req, res) {
  var contractId = req.params.contractId
  var contractDetails = req.body
  db.newContract(contractId, contractDetails).then((result) => {
    res.sendStatus(status)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
