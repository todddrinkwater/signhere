const user = (state = [], action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      const newState = [
        ...state,
        {
          loggedInUserDetails: action.loggedInUserDetails,
        }
      ]
      return newState

    default:
      return state
  }
}

export default user
