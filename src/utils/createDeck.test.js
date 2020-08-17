import createDeck from './createDeck'

describe('createDeck', () => {
  test('Array of length 52', () => {
    const arrayLength = createDeck().length
    expect(arrayLength).toBe(52)
  })
})
