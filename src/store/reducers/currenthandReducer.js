import { PLAY_CURRENT_HAND } from '../constants/actionTypes'

const initialState = {
  currenthand: [],
}

const currenthandReducer = (state = initialState, action) => {
  if (action.type === PLAY_CURRENT_HAND) {
    return { ...initialState, currenthand: action.currenthand }
  }
  return state
}

export default currenthandReducer
