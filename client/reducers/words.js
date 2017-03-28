const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      const newState = state
      newState.push({
        id: action.id,
        word: action.word
      })

      return newState 

    default:
      return state
  }
}

export default words
