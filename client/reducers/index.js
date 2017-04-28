import { combineReducers } from 'redux'

import words from './words'
import user from './user'
import contracts from './contracts'

export default combineReducers({
  words,
  user,
  contracts
})
