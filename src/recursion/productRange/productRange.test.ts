import { expect, it } from 'vitest'
import { productRange } from './productRange'

it('productRange', () => {
  expect(productRange(6)).toEqual(21)
  expect(productRange(10)).toEqual(55)
})
