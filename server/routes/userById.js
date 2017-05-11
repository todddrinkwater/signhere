var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  res.send({key: 'hello'})
})

router.get('/profile/:id', function (req, res) {
  var id = req.params.id
  console.log(typeof id);
  console.log({id});
  db.getUserById(id)
  .then((result) => {
    console.log({result});
    res.send(result)
  })
  .catch((err) => {
    // res.send({key: 'hello'})
    res.status(500).send(err)
  })
  // res.send(`hello ${id}`)
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
