import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import createDeck from 'utils/createDeck'
import shuffleDeck from 'utils/shuffleDeck'

const Button = styled.button`
  color: #efcf4a;
  border-radius: 0.75rem;
  border: 1px solid #efcf4a;
  font-size: 1.5rem;
  font-family: 'Rockwell';
  background-color: transparent;
  padding: 0.7rem 2rem 0.1rem 2rem;
  outline: none;
  &:hover {
    color: #f0d35c;
    border: 1px solid #f0d35c;
  }
`
// use this button for reset and play again

const ResetButton = props => {
  const { reset, history, title } = props

  const resetHandler = () => {
    const newDeck = shuffleDeck(createDeck())
    reset(newDeck)
    history.push('/')
  }

  return <Button onClick={() => resetHandler()}>{title}</Button>
}

ResetButton.propTypes = {
  title: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    reset: payload => dispatch({ type: 'RESET', reshuffle: payload }),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ResetButton))
