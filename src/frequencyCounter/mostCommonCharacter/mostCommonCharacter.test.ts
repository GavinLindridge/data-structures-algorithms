import { expect, it } from 'vitest'
import { mostCommonCharacter } from './mostCommonCharacter'

it('mostCommonCharacter', () => {
  expect(mostCommonCharacter('')).toEqual({ char: '', count: 0 })
  expect(mostCommonCharacter('a')).toEqual({ char: 'a', count: 1 })
  expect(mostCommonCharacter('hello')).toEqual({ char: 'l', count: 2 })
  expect(mostCommonCharacter('heello')).toEqual({ char: 'e', count: 2 })
})
