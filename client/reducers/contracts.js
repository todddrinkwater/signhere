const contracts = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_CONTRACTS':
      const newState = [
        ...state,
        {
          contractDetails: action.contractDetails,
        }
      ]
      return newState

    default:
      return state
  }
}

export default contracts
