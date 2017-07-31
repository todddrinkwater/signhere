var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt');
const saltRounds = 10;

var db = require('../db')

router.post('/newUser', function (req, res) {
  var newUserDetails = req.body
  var password = req.body.password
  bcrypt.hash(password, saltRounds, function(err, hash) {
    db.newUser(newUserDetails, hash).then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
  })
})


module.exports = router
