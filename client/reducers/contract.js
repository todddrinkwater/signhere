const contract = (state = [], action) => {
  switch (action.type) {
    case 'GET_SINGLE_CONTRACT':
      const newState = [
        {
          singleContractDetails: action.singleContractDetails,
        }
      ]
      return newState

    default:
      return state
  }
}

export default contract
