const request = require('supertest');
var test = require('tape')
var app = require('../server/server')

// var environment = process.env.NODE_ENV || 'development'
// var config = require('../knexfile')[environment]
// var knex = require('knex')(config)
test('test basic get request', t => {
  request(app)
    .get('/')
    .end((err, res) => {
      t.pass()
      t.end()
    })
})

test('test that we can get the correct response object from the /profile route', t => {
  let expected = {'id': null, 'email': null, 'fname': null, 'lname': null, 'hash': null, 'organisation': null, 'contract_id': null}

  request(app)
  .get('/user/profile/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err
    console.log(res.body)

    t.equal(Object.keys(res.body).length, Object.keys(expected).length, 'res.body has the correct keys within the object')
    t.end()
  })

})
