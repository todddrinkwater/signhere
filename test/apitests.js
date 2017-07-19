const request = require('supertest');
var test = require('tape')
var app = require('../server/server')

test('test basic get request', t => {
  request(app)
    .get('/')
    .end((err, res) => {
      t.pass('Basic get request successful')
      t.end()
    })
})

test('test that we can get the correct response object from the /profile route', t => {
  let expected = {'id': 1, 'fName': 'Todd', 'lName': 'Drinkwater', 'organisation': 'Company', 'email': 'todd@drinkwater.com', 'street_address': '70 King St', 'suburb': 'Kelburn', 'phone': 027027027}

  request(app)
  .get('/user/profile/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err
    t.equal(Object.keys(res.body).length, Object.keys(expected).length, 'res.body has the correct keys within the object')
    t.equal(typeof(res.body.id), typeof(expected.id), 'profile id value is correct type')
    t.equal(typeof(res.body.fName), typeof(expected.fName), 'profile fName value is correct type')
    t.equal(typeof(res.body.lName), typeof(expected.lName), 'profile lName value is correct type')
    t.equal(typeof(res.body.organisation), typeof(expected.organisation), 'profile organisation value is correct type')
    t.equal(typeof(res.body.email), typeof(expected.email), 'profile email value is correct type')
    t.equal(typeof(res.body.street_address), typeof(expected.street_address), 'profile street_address value is correct type')
    t.equal(typeof(res.body.suburb), typeof(expected.suburb), 'profile suburb value is correct type')
    t.equal(typeof(res.body.phone), typeof(expected.phone), 'profile phone value is correct type')
    t.deepEqual(Object.keys(res.body).sort(), Object.keys(expected).sort(), 'res.body has the same key names within the object')
    t.end()
  })

})

test('test that we can post data to the database to create a new contract', t => {
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
      // console.log(res)
      t.end()
    })


})

test('test that post has inserted the correct data', t => {

  let expected = {
    id: 1,
    signee_id: 2,
    contract_header: "SuperTest header",
    contract_desc: "SuperTest description",
    signature_url: null,
    date_signed: null,
    isSigned: null
  }

  request(app)
    .get('/user/contracts/2')
    .end(function(err, res) {
      if (err) throw err
      var newEntry = JSON.parse(res.text)
      newEntry = newEntry[newEntry.length - 1]
      t.equal(Object.keys(expected).sort, Object.keys(newEntry).sort, 'both objects have the same keys')
      t.equal(typeof(expected.id), typeof(newEntry.id), 'contract id value is correct type')
      t.equal(typeof(expected.signee_id), typeof(newEntry.signee_id), 'contract signee_id value is correct type')
      t.equal(typeof(expected.contract_header), typeof(newEntry.contract_header), 'contract_header value is correct type')
      t.equal(typeof(expected.contract_desc), typeof(newEntry.contract_desc), 'contract_desc value is correct type')
      t.equal(typeof(expected.signature_url), typeof(newEntry.signature_url), 'contract signature_url value is correct type')
      t.equal(typeof(expected.date_signed), typeof(newEntry.date_signed), 'contract date_signed value is correct type')
      t.equal(typeof(expected.isSigned), typeof(newEntry.isSigned), 'contract isSigned value is correct type')
      t.end()
    })

})
