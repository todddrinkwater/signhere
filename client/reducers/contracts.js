const contracts = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_CONTRACTS':
        return action.contractDetails

    default:
      return state
  }
}

export default contracts
