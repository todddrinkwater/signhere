const user = (state = null, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return action.loggedInUserDetails

    default:
      return state
  }
}

export default user
