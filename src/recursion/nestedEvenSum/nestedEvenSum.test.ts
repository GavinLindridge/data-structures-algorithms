import { expect, it } from 'vitest'
import { nestedEvenSum } from './nestedEvenSum'

it('nestedEvenSum', () => {
  expect(
    nestedEvenSum({
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 2 }, ee: 'car' },
    }),
  ).toEqual(10)
  expect(
    nestedEvenSum({
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: 'yup',
        },
      },
    }),
  ).toEqual(6)
})
