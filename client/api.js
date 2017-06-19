const request = require('superagent')

const updateUserContract = (callback, id, contractData) => {
  request
    .put('http://localhost:3000/user/contracts/' + id)
    .set('Content-Type', 'application/json')
    .send(contractData)
    .end((err, res) => {
      if (err) {
        console.error('updateUserContract ' + err.message)
        return
       }
    })
}

module.exports = { updateUserContract }
