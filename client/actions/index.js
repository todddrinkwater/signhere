var request = require('superagent')

export const getUserDetails = loggedInUserDetails => {
  return {
    type: 'LOGGED_IN_USER',
    loggedInUserDetails
  }
}

export const loggedInUser = (user, dispatch) => {
  request
  .get('/user/profile/' + user.id)
  .end((err, res) => {
    var userInfo = JSON.parse(res.text)
    if (err) {
      console.error('loggedInUser ' + err.message)
      return
    }
    dispatch(getUserDetails(userInfo))
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

export const getUserContracts = (user, dispatch) => {
  request
  .get('/user/contracts/' + user.id)
  .end((err, res) => {
    var userInfo = JSON.parse(res.text)
    if (err) {
      console.error('loggedInUser ' + err.message)
      return
    }
    dispatch(getContracts(userInfo))
    })
}
