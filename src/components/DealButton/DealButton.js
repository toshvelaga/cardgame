import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { winningOutcome, losingOutcome } from '../../store/actions/actions'

const Button = styled.button`
  background-color: #efcf4a;
  color: black;
  font-size: 2.5rem;
  font-family: 'Alfa Slab One', cursive;
  letter-spacing: 5px;
  text-transform: uppercase;
  padding: 1rem 5rem;
  margin-top: 4rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  &:hover {
    background-color: #f0d35c;
  }
`
const LAST_TWO_CARDS = 2
const INCREMENT = 5
const ACE = 'A'

const DealButton = props => {
  const { numCardsLeft, deck, win, lose, history, dealCards, removeCards, updateDeck } = props
  const getOutcome = () => {
    if (numCardsLeft === LAST_TWO_CARDS) {
      if (deck[0][0] === ACE || deck[1][0] === ACE) {
        win()
      } else {
        lose()
      }
      history.push('/win-or-lose')
    }
  }

  const deal = () => {
    let num = INCREMENT
    if (numCardsLeft === LAST_TWO_CARDS) {
      num = LAST_TWO_CARDS
    }
    const deckCopy = Array.from(deck)
    const removedCards = deckCopy.splice(0, num)

    dealCards(removedCards)
    removeCards(numCardsLeft - num)
    updateDeck(deckCopy)

    getOutcome()
  }

  return <Button onClick={() => deal()}>Deal</Button>
}

DealButton.propTypes = {
  deck: PropTypes.instanceOf(Array).isRequired,
  win: PropTypes.func.isRequired,
  lose: PropTypes.func.isRequired,
  dealCards: PropTypes.func.isRequired,
  removeCards: PropTypes.func.isRequired,
  updateDeck: PropTypes.func.isRequired,
  numCardsLeft: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = state => {
  return {
    deck: state.deckReducer.deck,
    numCardsLeft: state.numcardsReducer.numCards,
    outcome: state.outcomeReducer.outcome,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dealCards: data => dispatch({ type: 'PLAY_CURRENT_HAND', currenthand: data }),
    removeCards: data => dispatch({ type: 'TAKE_OUT_CARDS', numCards: data }),
    updateDeck: data => dispatch({ type: 'UPDATE_DECK', currentdeck: data }),
    win: () => dispatch(winningOutcome()),
    lose: () => dispatch(losingOutcome()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DealButton))
