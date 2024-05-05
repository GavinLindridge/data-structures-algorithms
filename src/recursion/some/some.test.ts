import { expect, it } from 'vitest'
import { some } from './some'

it('some', () => {
  const isEven = (num: number) => num % 2 === 0
  const isOdd = (num: number) => num % 2 === 1
  const strContains = (contain: string) => (val: string) =>
    val.includes(contain)

  expect(some([], isOdd)).toBeFalsy()
  expect(some([], isEven)).toBeFalsy()
  expect(some([1, 2, 3, 4], isOdd)).toBeTruthy()
  expect(some([2, 4, 6], isOdd)).toBeFalsy()
  expect(some([2, 4, 6], isEven)).toBeTruthy()
  expect(some([2, 4, 6], (val) => val > 10)).toBeFalsy()
  expect(some([2, 4, 6], (val) => val < 10)).toBeTruthy()
  expect(some(['hell', 'trick'], strContains('z'))).toBeFalsy()
  expect(some(['hell', 'trick'], strContains('k'))).toBeTruthy()
})
