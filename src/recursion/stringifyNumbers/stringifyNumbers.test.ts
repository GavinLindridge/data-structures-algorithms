import { expect, it } from 'vitest'
import { stringifyNumbers } from './stringifyNumbers'

it('stringifyNumbers', () => {
  // Arrange
  const input = {
    num: 1,
    test: [
      {
        nestedArrNum: 2,
      },
    ],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66,
      },
    },
  }

  const expectedOutput = {
    num: '1',
    test: [
      {
        nestedArrNum: '2',
      },
    ],
    data: {
      val: '4',
      info: {
        isRight: true,
        random: '66',
      },
    },
  }

  // Act
  const actualOutput = stringifyNumbers(input)

  // Assert
  expect(actualOutput).toEqual(expectedOutput)
})
