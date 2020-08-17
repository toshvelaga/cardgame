import createDeck from '../../utils/createDeck'
import shuffleDeck from '../../utils/shuffleDeck'
import { RESET, UPDATE_DECK } from '../constants/actionTypes'

const shuffledDeck = shuffleDeck(createDeck())

const initialState = {
  deck: shuffledDeck,
}

const deckReducer = (state = initialState, action) => {
  if (action.type === RESET) {
    return { ...initialState, deck: action.reshuffle }
  }
  if (action.type === UPDATE_DECK) {
    return { ...initialState, deck: action.currentdeck }
  }
  return state
}

export default deckReducer
