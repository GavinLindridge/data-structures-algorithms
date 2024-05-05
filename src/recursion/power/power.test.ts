import { expect, it } from 'vitest'
import { power } from './power'

it('count occurrences', () => {
  expect(power(2, 0)).toEqual(1)
  expect(power(2, 2)).toEqual(4)
  expect(power(2, 4)).toEqual(16)
})
