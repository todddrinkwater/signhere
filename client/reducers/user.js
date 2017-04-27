const user = (state = [], action) => {
  console.log(action.type);
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
