import { WIN, LOSE } from '../constants/actionTypes'

const initialState = {
  outcome: null,
}

const outcomeReducer = (state = initialState, action) => {
  if (action.type === WIN) {
    return { ...initialState, outcome: 'WIN' }
  }
  if (action.type === LOSE) {
    return { ...initialState, outcome: 'LOSE' }
  }
  return state
}

export default outcomeReducer
