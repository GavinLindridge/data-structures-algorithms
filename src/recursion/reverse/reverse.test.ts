import { expect, it } from 'vitest'
import { reverse } from './reverse'

it('reverse', () => {
  expect(reverse('')).toEqual('')
  expect(reverse('h')).toEqual('h')
  expect(reverse('he')).toEqual('eh')
  expect(reverse('hello world')).toEqual('dlrow olleh')
})
