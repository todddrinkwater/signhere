const contracts = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_CONTRACTS':
        return action.contractDetails

    case 'ADD_NEW_CONTRACT':
      return [
        ...state,
         Object.assign({}, action.newContractDetails)
      ]

    case 'UPDATE_USER_CONTRACTS':
      return action.contractData


    default:
      return state
  }
}

export default contracts
