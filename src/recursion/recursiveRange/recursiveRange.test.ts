import { expect, it } from 'vitest'
import { recursiveRange } from './recursiveRange'

it('recursiveRange', () => {
  expect(recursiveRange(6)).toEqual(21)
  expect(recursiveRange(10)).toEqual(55)
})
