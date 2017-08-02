const incorrectPassword = (state = [], action) => {
  switch (action.type) {
    case 'INCORRECT_PASSWORD':
        return action.incorrectPasswordMessage
        break;
    case 'CORRECT_PASSWORD':
        return action.incorrectPasswordMessage
        break;

    default:
      return state
  }
}

export default incorrectPassword
