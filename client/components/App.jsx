import React from 'react'

import AddWord from '../containers/AddWord'
import Words from '../containers/Words'

function App (props) {
  return (
    <div className='app-container'>
      <Words />
      <AddWord />
    </div>
  )
}

export default App
