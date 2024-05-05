import { expect, it } from 'vitest'
import { capitalizeFirst } from './capitalizeFirst'

it('capitalizeFirst', () => {
  expect(capitalizeFirst([])).toEqual([])
  expect(capitalizeFirst(['hello'])).toEqual(['Hello'])
})
