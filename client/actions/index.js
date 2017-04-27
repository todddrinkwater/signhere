var request = require('superagent')

export const loggedInUser = (user, dispatch) => {
  console.log(dispatch)
  request
  .get('/user/' + user.id)
  .end((err, res) => {
    var userInfo = JSON.parse(res.text)
    console.log(userInfo[0], "+ res")
    if (err) {
      console.error('loggedInUser ' + err.message)
      return
    }
    dispatch(loggedInUser(userInfo[0]))
    console.log("return");
    })

}
