import { combineReducers } from 'redux'

import words from './words'
import user from './user'

export default combineReducers({
  words,
  user
})
