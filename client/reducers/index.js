import { combineReducers } from 'redux'

import user from './user'
import contracts from './contracts'
import contract from './contract'

export default combineReducers({
  user,
  contracts,
  contract
})
