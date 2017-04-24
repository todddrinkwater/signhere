import React from 'react'
import { connect } from 'react-redux'

import Word from '../components/Word'

function Words (props) {
  const wordsList = props.words

  return (
    <div>
      {wordsList.map(wordObject =>
        <Word key={wordObject.id} word={wordObject.word} />)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

const provideCorrectProps = connect(mapStateToProps)
const connectedWords = provideCorrectProps(Words)

export default connectedWords

