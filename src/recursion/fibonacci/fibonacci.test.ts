import { expect, it } from 'vitest'
import { fibonacci } from './fibonacci'

it('fibonacci', () => {
  expect(fibonacci(4)).toEqual(3)
  expect(fibonacci(10)).toEqual(55)
  expect(fibonacci(28)).toEqual(317811)
  expect(fibonacci(35)).toEqual(9227465)
})
