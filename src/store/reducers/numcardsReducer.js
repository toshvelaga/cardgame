import { TAKE_OUT_CARDS, RESET } from '../constants/actionTypes'

const initialState = {
  numCards: 52,
}

const numcardsReducer = (state = initialState, action) => {
  if (action.type === TAKE_OUT_CARDS) {
    return { ...initialState, numCards: action.numCards }
  }
  if (action.type === RESET) {
    return { ...initialState, numCards: 52 }
  }
  return state
}

export default numcardsReducer
