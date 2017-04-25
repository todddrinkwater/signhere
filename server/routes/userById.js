var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/:id', function (req, res) {
  var id = req.params.id
  db.getUserById(id).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})


module.exports = router
