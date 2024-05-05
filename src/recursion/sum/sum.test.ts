import { expect, it } from 'vitest'
import { sum } from './sum'

it('sum', () => {
  expect(sum([])).toEqual(0)
  expect(sum([1])).toEqual(1)
  expect(sum([1, 2, 3, 4])).toEqual(10)
  expect(sum([13, 122, 14, -6])).toEqual(13 + 122 + 14 + -6)
})
