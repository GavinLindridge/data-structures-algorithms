import { expect, it } from 'vitest'
import { isPalindrome } from './isPalindrome'

it('isPalindrome', () => {
  expect(isPalindrome('')).toEqual(true)
  expect(isPalindrome('ab')).toEqual(false)
  expect(isPalindrome('a')).toEqual(true)
  expect(isPalindrome('awesome')).toEqual(false)
  expect(isPalindrome('foobar')).toEqual(false)
  expect(isPalindrome('tacocat')).toEqual(true)
  expect(isPalindrome('amanaplanacanalpanama')).toEqual(true)
  expect(isPalindrome('amanaplanacanalpandemonium')).toEqual(false)
})
