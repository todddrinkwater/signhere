const request = require('supertest');
var test = require('tape')
var app = require('../server/server')

test('test basic get request', t => {
  request(app)
    .get('/')
    .end((err, res) => {
      t.pass()
      t.end()
    })
})

test('test that we can get the correct response object from the /profile route', t => {
  let expected = {id: 1, fName: 'Todd', lName: 'Drinkwater', organisation: 'TDD', email: 'todddrinkwaternz@gmail.com', street_address: '2 Raroa Rd', suburb: 'Kelburn', phone: 027111222333}

  request(app)
  .get('/user/profile/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err
    t.equal(Object.keys(res.body).length, Object.keys(expected).length, 'res.body has the correct keys within the object')
    t.end()
  })

})

test('test that we post data to the database to create a new contract', t => {
  let contractData = {
    id: 1,
    signee_id: 2,
    contract_header: "SuperTest header",
    contract_desc: "SuperTest description"
  }

  request(app)
    .post('/user/contracts/new/1')
    .send(contractData)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) throw err
      t.equal(res.status, 200, 'server responds with 200')
      t.end()
    })
})
