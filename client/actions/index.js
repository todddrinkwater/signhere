var request = require('superagent')

export const getUserDetails = loggedInUserDetails => {
  return {
    type: 'LOGGED_IN_USER',
    loggedInUserDetails
  }
}

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
    dispatch(getUserDetails(userInfo[0]))
    console.log("return")
    })

}
