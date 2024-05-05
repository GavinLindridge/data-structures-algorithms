import { expect, it } from 'vitest'
import { factorial } from './factorial'

it('factorial', () => {
  expect(factorial(1)).toEqual(1)
  expect(factorial(2)).toEqual(2)
  expect(factorial(4)).toEqual(24)
  expect(factorial(7)).toEqual(5040)
})
