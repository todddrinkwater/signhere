const contracts = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_CONTRACTS':
        return action.contractDetails

    case 'ADD_NEW_CONTRACT':
      console.log(action)
      return [
        ...state,
         Object.assign({}, action.newContractDetails)
      ]

    default:
      return state
  }
}

export default contracts
