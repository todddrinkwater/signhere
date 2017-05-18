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
router.put('/contracts/:id', function (req, res) {
  var id = req.params.id
  var signatureUrl = req.body.signature_url
  db.signContract(id, signatureUrl).then((result) => {
    res.sendStatus(status)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})


module.exports = router
