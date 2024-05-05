import { expect, it } from 'vitest'
import { productOfArray } from './productOfArray'

it('productOfArray', () => {
  expect(productOfArray([1, 2, 3])).toEqual(6)
  expect(productOfArray([1, 2, 3, 10])).toEqual(60)
})
