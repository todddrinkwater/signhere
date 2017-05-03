import { combineReducers } from 'redux'

import words from './words'
import user from './user'
import contracts from './contracts'
import contract from './contract'

export default combineReducers({
  words,
  user,
  contracts,
  contract
})
