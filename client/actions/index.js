var request = require('superagent')
var bcrypt = require('bcryptjs');


export const getUserDetails = loggedInUserDetails => {
  return {
    type: 'LOGGED_IN_USER',
    loggedInUserDetails
  }
}

export const passwordFail = incorrectPasswordMessage => {
  return {
    type: 'INCORRECT_PASSWORD',
    incorrectPasswordMessage
  }
}

export const logOutUser = () => {
  return {
    type: 'LOG_OUT'
  }
}


export const loggedInUser = (user, dispatch) => {
  request
  .get('/user/profile/' + user.email)
  .end((err, res) => {
    var userInfo = res.body

    if (err) {
      console.error('loggedInUser ' + err.message)
      return
    }

    bcrypt.compare(user.password, userInfo.password, function(err, res) {
        if (res === false ) {
          dispatch(passwordFail({ passwordFailure: false}))
        }
        else {
          dispatch(getUserDetails(userInfo))
          getUserContracts(userInfo.id, dispatch)
          dispatch(passwordFail({ passwordFailure: true}))
          }
        })
  })
}

export const getContract = singleContractDetails => {
  return {
    type: 'GET_SINGLE_CONTRACT',
    singleContractDetails
  }
}

export const getContracts = contractDetails => {
  return {
    type: 'GET_USER_CONTRACTS',
    contractDetails
  }
}

export const getUserContracts = (userId, dispatch) => {
  request
  .get('/user/contracts/' + userId)
  .end((err, res) => {
    var userInfo = JSON.parse(res.text)
    if (err) {
      console.error('getUserContracts ' + err.message)
      return
    }
    dispatch(getContracts(userInfo))
    })
}


export const updateContract = contractData => {
  return {
    type: 'UPDATE_USER_CONTRACTS',
    contractData
  }
}

export const updateUserContract = (callback, id, contractData, dispatch) => {
  request
    .put('/user/contracts/' + id)
    .set('Content-Type', 'application/json')
    .send(contractData)
    .end((err, res) => {
      if (err) {
        console.error('updateUserContract ' + err.message)
        return
       }
      getUserContracts(contractData.id, dispatch)
    })
}



export const writeNewContract = (contractData, dispatch, id, callback) => {
  request
    .post('/user/contracts/new/' + id)
    .send(contractData)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, "Status: 200")
      }
      getUserContracts(contractData.id, dispatch)
    })
  }

  export const addNewUser = (userRegistrationForm, callback) => {
    request
      .post('/register/newUser')
      .send(userRegistrationForm)
      .end(function (err, res) {
        if (err) {
          callback(err)
        } else {
          callback(null, "Status: 200")
        }
      })
  }
