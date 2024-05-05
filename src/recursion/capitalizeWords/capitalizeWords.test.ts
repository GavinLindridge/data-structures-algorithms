import { expect, it } from 'vitest'
import { capitalizeWords } from './capitalizeWords'

it('capitalizeWords', () => {
  expect(capitalizeWords([])).toEqual([])
  expect(capitalizeWords(['hello'])).toEqual(['HELLO'])
  expect(capitalizeWords(['hello', 'wOrLd'])).toEqual(['HELLO', 'WORLD'])
})
