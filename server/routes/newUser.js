var express = require('express')
var router = express.Router()

var db = require('../db')

router.post('/newUser', function (req, res) {
  var newUserDetails = req.body
  db.newUser(newUserDetails).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
})

module.exports = router
