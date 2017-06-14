const request = require('superagent')

const updateUserContract = (callback, id, contractData) => {
  request
    .put('http://localhost:3000/user/contracts/' + id)
    .set('Content-Type', 'application/json')
    .send(contractData)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, "Status: 200")
      }
    })
}

module.exports = { updateUserContract }
