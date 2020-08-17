import { combineReducers } from 'redux'

import currenthandReducer from './currenthandReducer'
import deckReducer from './deckReducer'
import numcardsReducer from './numcardsReducer'
import outcomeReducer from './outcomeReducer'

const rootReducer = combineReducers({
  currenthandReducer,
  numcardsReducer,
  deckReducer,
  outcomeReducer,
})

export default rootReducer
