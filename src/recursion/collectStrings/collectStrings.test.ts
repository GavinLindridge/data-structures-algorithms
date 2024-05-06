import { expect, it } from 'vitest'
import { collectStrings } from './collectStrings'

it('collectStrings', () => {
  // Arrange
  const input = {
    stuff: 'foo',
    arrStr: ['bing'],
    arrObj: [{ super: 'bong' }, 'beng'],
    data: {
      val: {
        thing: {
          info: 'bar',
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: 'baz',
            },
          },
        },
      },
    },
  }

  const expectedOutput = ['foo', 'bing', 'bong', 'beng', 'bar', 'baz']

  // Act
  const actualOutput = collectStrings(input)

  // Assert
  expect(actualOutput).toEqual(expectedOutput)
})
