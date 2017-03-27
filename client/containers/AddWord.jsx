import React from 'react'
import { connect } from 'react-redux'
import { addWord } from '../actions'

function AddWord (props) {
  const dispatch = props.dispatch

  return (
    <input
      placeholder="Enter a word or phrase"
      onKeyUp={e => { submitWord(e, dispatch) }}
    />
  )
}

function submitWord (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addWord(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const provideDispatch = connect()
const connectedAddWord = provideDispatch(AddWord)

export default connectedAddWord

