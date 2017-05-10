const request = require('supertest');
var test = require('tape')

var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

var app = require('../server/server')

test('/user', function (t) {
  // post down to server
  // check item is in table using local knex connection
  // reseed table
  app.get('knex').seed.run().then(function () {
    t.end()
  })
})

  request(app)
    .get('/user/profile/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) throw err;
    })
  }
