let k
let m
let temp

/* eslint-disable no-param-reassign */

const shuffleDeck = deck => {
  for (k = deck.length - 1; k > 0; k -= 1) {
    m = Math.floor(Math.random() * (k + 1))
    temp = deck[k]
    deck[k] = deck[m]
    deck[m] = temp
  }
  return deck
}

export default shuffleDeck
