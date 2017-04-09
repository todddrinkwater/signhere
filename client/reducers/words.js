const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      const newState = [
        ...state,
        {
          id: action.id,
          word: action.word
        }
      ]
      return newState

    default:
      return state
  }
}

export default words
