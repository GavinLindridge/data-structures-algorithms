import { expect, it } from 'vitest'
import { sameSquared } from './sameSquared'

it('sameSquared', () => {
  expect(sameSquared([1, 2, 3], [])).toBeFalsy()
  expect(sameSquared([1, 2, 3], [4, 9, 1])).toBeTruthy()
  expect(sameSquared([1, 2, 3], [1, 1, 1])).toBeFalsy()
  expect(sameSquared([1, 2, 3, 3], [1, 4, 9, 1])).toBeFalsy()
})
