import React from 'react'

import AddWord from '../containers/AddWord'
import WordsContainer from '../containers/WordsContainer'

function App (props) {
  return (
    <div className='app-container'>
      <WordsContainer />
      <AddWord />
    </div>
  )
}

export default App
