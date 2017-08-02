import { combineReducers } from 'redux'

import user from './user'
import contracts from './contracts'
import contract from './contract'
import incorrectPassword from './incorrectPassword'

export default combineReducers({
  user,
  contracts,
  contract,
  incorrectPassword
})
