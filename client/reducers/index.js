import { combineReducers } from 'redux'

import user from './user'
import contracts from './contracts'
import contract from './contract'
import incorrectPassword from './incorrectPassword'
import logout from './logout'

// export default combineReducers({
//   user,
//   contracts,
//   contract,
//   incorrectPassword,
//   logout
// })

const appReducer = combineReducers({
  user,
  contracts,
  contract,
  incorrectPassword
})

const rootReducer = (state, action) => {
  if(action.type === 'LOG_OUT'){
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
