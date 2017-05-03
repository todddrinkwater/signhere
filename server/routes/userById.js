var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/profile/:id', function (req, res) {
  var id = req.params.id
  db.getUserById(id).then((result) => {
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


module.exports = router
