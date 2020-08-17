import shuffleDeck from './shuffleDeck'

const unshuffled = [
  ['A', 'Clover'],
  [2, 'Clover'],
  [3, 'Clover'],
  [4, 'Clover'],
  [5, 'Clover'],
  [6, 'Clover'],
]

describe('shuffleDeck', () => {
  const shuffled = shuffleDeck(unshuffled)

  test('Array of length 6', () => {
    expect(shuffled).toHaveLength(6)
  })

  test('shuffled not equal to unshuffled', () => {
    expect(shuffled).not.toEqual([
      ['A', 'Clover'],
      [2, 'Clover'],
      [3, 'Clover'],
      [4, 'Clover'],
      [5, 'Clover'],
      [6, 'Clover'],
    ])
  })
})
