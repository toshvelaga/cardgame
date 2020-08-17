const suits = ['Clover', 'Diamond', 'Heart', 'Spade']
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
let i
let x
let card

const createDeck = () => {
  const deck = []
  for (i = 0; i < suits.length; i += 1) {
    for (x = 0; x < values.length; x += 1) {
      card = [values[x], suits[i]]
      deck.push(card)
    }
  }
  return deck
}

export default createDeck
