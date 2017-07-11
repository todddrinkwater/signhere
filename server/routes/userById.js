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
    res.json(result)
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

router.put('/contracts/:id', function (req, res) {
  var id = req.params.id
  var signatureUrl = req.body.signature_url
  db.signContract(id, signatureUrl).then((result) => {
    res.send("OK")
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.post('/contracts/new/:ownerId', function (req, res) {
  var ownerId = req.params.ownerId
  var contractDetails = req.body
  db.newContract(ownerId, contractDetails).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
})

module.exports = router
