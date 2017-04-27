// let nextWordId = 0
//
// export const addWord = (word) => {
//   return {
//     type: 'ADD_WORD',
//     id: nextWordId++,
//     word
//   }
// }

var request = require('superagent')

export const loggedInUser = userId => {
  console.log(userId.id, "userId")
  request
  .get('/user/' + userId.id)
  .end((err, res) => {
    console.log(err, res, "err, res")
    if (err) {
      console.error('loggedInUser ' + err.message)
      return
    }
    dispatch(loggedInUser(res.body[0]))
    console.log("return");
})

  return dispatch => {

      // ????

  }
}
